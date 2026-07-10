import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, request, jsonify, g
from flask_cors import CORS

# ---------------------------------------------------------------------
# CONFIG
# ---------------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "messages.db"

# ADMIN_KEY is loaded from secrets_config.py, which is NOT committed to
# git (see .gitignore). Copy secrets_config.example.py -> secrets_config.py
# and put your own long random key in there before deploying.
try:
    from secrets_config import ADMIN_KEY
except ImportError:
    ADMIN_KEY = os.environ.get("ADMIN_KEY", "change-me")

MAX_MESSAGE_LENGTH = 2000
MIN_SECONDS_BETWEEN_SUBMITS = 20  # simple per-IP anti-spam throttle

app = Flask(__name__)

# The submit endpoint (POST) is intentionally open to anyone, no auth,
# so wide-open CORS there doesn't add any real risk. The read/delete
# endpoints (GET/DELETE) are protected by the admin key regardless of
# origin, so it's simplest to just allow all origins on /api/* and let
# the key do the actual access control.
CORS(app, resources={r"/api/*": {"origins": "*"}})

# very small in-memory throttle: {ip: last_submit_datetime}
# resets if the app restarts -- that's fine, it's just an anti-spam nicety
_last_submit_by_ip = {}


# ---------------------------------------------------------------------
# DB HELPERS
# ---------------------------------------------------------------------
def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DB_PATH)
        g.db.row_factory = sqlite3.Row
    return g.db


@app.teardown_appcontext
def close_db(exception=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    db = sqlite3.connect(DB_PATH)
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            created_at TEXT NOT NULL,
            ip TEXT NOT NULL
        )
        """
    )
    db.commit()
    db.close()


def get_client_ip():
    # PythonAnywhere (and most hosts) sit behind a proxy, so the real
    # visitor IP shows up in X-Forwarded-For rather than remote_addr.
    forwarded = request.headers.get("X-Forwarded-For", "")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.remote_addr or "unknown"


def is_authorized(req):
    return ADMIN_KEY != "change-me" and req.headers.get("X-Admin-Key") == ADMIN_KEY


# ---------------------------------------------------------------------
# PUBLIC: submit a message — no auth required, by design
# ---------------------------------------------------------------------
@app.route("/api/messages", methods=["POST"])
def submit_message():
    data = request.get_json(silent=True) or {}
    text = (data.get("text") or "").strip()

    if not text:
        return jsonify({"error": "Message text is required."}), 400
    if len(text) > MAX_MESSAGE_LENGTH:
        return jsonify(
            {"error": f"Message is too long (max {MAX_MESSAGE_LENGTH} characters)."}
        ), 400

    ip = get_client_ip()
    now = datetime.now(timezone.utc)

    last = _last_submit_by_ip.get(ip)
    if last and (now - last).total_seconds() < MIN_SECONDS_BETWEEN_SUBMITS:
        return jsonify(
            {"error": "Please wait a moment before sending another message."}
        ), 429
    _last_submit_by_ip[ip] = now

    db = get_db()
    db.execute(
        "INSERT INTO messages (text, created_at, ip) VALUES (?, ?, ?)",
        (text, now.isoformat(), ip),
    )
    db.commit()

    return jsonify({"ok": True}), 201


# ---------------------------------------------------------------------
# ADMIN: list messages — requires X-Admin-Key header
# ---------------------------------------------------------------------
@app.route("/api/messages", methods=["GET"])
def list_messages():
    if not is_authorized(request):
        return jsonify({"error": "Unauthorized."}), 401

    db = get_db()
    rows = db.execute(
        "SELECT id, text, created_at, ip FROM messages ORDER BY id DESC"
    ).fetchall()
    return jsonify([dict(row) for row in rows])


# ---------------------------------------------------------------------
# ADMIN: delete a message — requires X-Admin-Key header
# ---------------------------------------------------------------------
@app.route("/api/messages/<int:message_id>", methods=["DELETE"])
def delete_message(message_id):
    if not is_authorized(request):
        return jsonify({"error": "Unauthorized."}), 401

    db = get_db()
    db.execute("DELETE FROM messages WHERE id = ?", (message_id,))
    db.commit()
    return jsonify({"ok": True})


# ---------------------------------------------------------------------
# health check — handy for confirming the deploy worked
# ---------------------------------------------------------------------
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


init_db()

if __name__ == "__main__":
    app.run(debug=True)
