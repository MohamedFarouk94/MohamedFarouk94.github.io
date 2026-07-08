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

/* hero terminal — types out a short "whoami" sequence once on load */
(function terminalTyping() {
  const target = document.getElementById("terminal-typed");
  if (!target) return;

  const lines = [
    { text: "Mohamed Farouk", cls: "k" },
    { text: "ML Engineer · NLP Specialist · Python Developer" },
  ];

  let lineIndex = 0;
  let charIndex = 0;
  target.innerHTML = "";

  function typeNext() {
    if (lineIndex >= lines.length) {
      target.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');
      return;
    }
    const line = lines[lineIndex];
    if (charIndex === 0) {
      target.insertAdjacentHTML(
        "beforeend",
        `<div class="terminal__line"><span class="terminal__output ${line.cls || ""}" id="tline-${lineIndex}"></span></div>`
      );
    }
    const span = document.getElementById(`tline-${lineIndex}`);
    span.textContent = line.text.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex < line.text.length) {
      setTimeout(typeNext, 28);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNext, 220);
    }
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    target.innerHTML = lines
      .map((l, i) => `<div class="terminal__line"><span class="terminal__output ${l.cls || ""}">${l.text}</span></div>`)
      .join("");
  } else {
    typeNext();
  }
})();
