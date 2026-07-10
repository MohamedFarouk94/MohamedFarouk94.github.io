/* ============================================================
   MAIN.JS — interactions only. No content lives here.
   ============================================================ */

(function theme() {
  const body = document.body;
  const btnTheme = document.getElementById("btn-theme");
  const icon = btnTheme.querySelector("i");

  const saved = localStorage.getItem("portfolio-theme") || "dark";
  body.classList.remove("light", "dark");
  body.classList.add(saved);
  icon.className = saved === "dark" ? "fas fa-sun" : "fas fa-moon";

  btnTheme.addEventListener("click", () => {
    const next = body.classList.contains("dark") ? "light" : "dark";
    body.classList.remove("light", "dark");
    body.classList.add(next);
    icon.className = next === "dark" ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("portfolio-theme", next);
  });
})();

(function nav() {
  const hamburger = document.getElementById("btn-hamburger");
  const list = document.getElementById("nav-list");

  hamburger.addEventListener("click", () => {
    const isOpen = list.classList.toggle("is-open");
    const icon = hamburger.querySelector("i");
    icon.className = isOpen ? "fas fa-times" : "fas fa-bars";
  });

  list.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      list.classList.remove("is-open");
      hamburger.querySelector("i").className = "fas fa-bars";
    });
  });
})();

(function scrollTop() {
  const btn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 500 ? "flex" : "none";
  });
})();

/* hero terminal */
(function terminalTyping() {
  const body = document.getElementById("terminal-typed")?.parentElement;
  const target = document.getElementById("terminal-typed");
  if (!target || typeof TERMINAL_SESSION === "undefined") return;

  let userScrolled = false;
  body.addEventListener("scroll", () => {
    const atBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 20;
    userScrolled = !atBottom;
  });

  function autoScroll() {
    if (!userScrolled) body.scrollTop = body.scrollHeight;
  }

  let cmdIndex = 0;

  function typeCommand() {
    if (cmdIndex >= TERMINAL_SESSION.length) return;
    const { prompt, output } = TERMINAL_SESSION[cmdIndex];
    const lineId = `tline-${cmdIndex}`;

    target.insertAdjacentHTML(
      "beforeend",
      `<div class="terminal__line"><span class="terminal__prompt">$</span><span class="terminal__output" id="${lineId}"></span></div>`
    );
    const span = document.getElementById(lineId);
    let i = 0;
    (function typePrompt() {
      span.textContent = prompt.slice(0, i + 1);
      autoScroll();
      i++;
      if (i < prompt.length) return setTimeout(typePrompt, 28);
      setTimeout(printOutput, 200);
    })();

    function printOutput() {
      target.insertAdjacentHTML(
        "beforeend",
        `<div class="terminal__line"><span class="terminal__output k">${output.replace(/\n/g, "<br>")}</span></div>`
      );
      autoScroll();
      cmdIndex++;
      setTimeout(typeCommand, 500);
    }
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    target.innerHTML = TERMINAL_SESSION.map(
      (c) => `<div class="terminal__line"><span class="terminal__prompt">$</span> ${c.prompt}</div><div class="terminal__line"><span class="terminal__output k">${c.output.replace(/\n/g, "<br>")}</span></div>`
    ).join("");
  } else {
    typeCommand();
  }
})();


(function feedbackForm() {
  const API_URL = "https://mohfarouk94.pythonanywhere.com/api/messages"; // <- update this

  const form = document.getElementById("feedback-form");
  const textarea = document.getElementById("feedback-text");
  const count = document.getElementById("feedback-count");
  const status = document.getElementById("feedback-status");
  const submitBtn = document.getElementById("feedback-submit");
  if (!form) return;

  textarea.addEventListener("input", () => {
    count.textContent = `${textarea.value.length} / 2000`;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (!text) return;

    submitBtn.disabled = true;
    status.textContent = "Sending...";
    status.className = "feedback-form__status";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      status.textContent = "Thanks — got it!";
      status.classList.add("is-success");
      form.reset();
      count.textContent = "0 / 2000";
    } catch (err) {
      status.textContent = err.message || "Failed to send. Try again later.";
      status.classList.add("is-error");
    } finally {
      submitBtn.disabled = false;
    }
  });
})();