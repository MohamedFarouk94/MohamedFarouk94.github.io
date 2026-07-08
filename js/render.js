/* ============================================================
   RENDER.JS — turns content.js data into HTML.
   You shouldn't need to touch this to update the site content;
   edit js/content.js instead.
   ============================================================ */

const ICONS = {
  mail: "fa-solid fa-envelope",
  whatsapp: "fa-brands fa-whatsapp",
  github: "fa-brands fa-github",
  linkedin: "fa-brands fa-linkedin",
  upwork: "fa-brands fa-upwork",
  kaggle: "fa-brands fa-kaggle",
  credly: "fa-solid fa-certificate",
  resume: "fa-solid fa-file-lines",
  twitter: "fa-brands fa-x-twitter",
  instagram: "fa-brands fa-instagram",
  live: "fa-solid fa-arrow-up-right-from-square",
};

const LABELS = {
  mail: "Email",
  whatsapp: "WhatsApp",
  github: "GitHub",
  linkedin: "LinkedIn",
  upwork: "Upwork",
  kaggle: "Kaggle",
  credly: "Credly",
  resume: "Resume",
  twitter: "Twitter",
  instagram: "Instagram",
  live: "Live",
};

function renderCurrently() {
  const el = document.getElementById("currently-grid");
  el.innerHTML = CURRENTLY.map((item) => {
    const statusClass = item.status === "active" ? "" : "is-ongoing";
    const label = item.status === "active" ? "in progress" : item.status;
    return `
      <article class="now-card">
        <div class="now-card__status ${statusClass}">
          <span class="dot"></span>${label}
        </div>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>`;
  }).join("");
}

function renderProjects() {
  const el = document.getElementById("projects-grid");
  el.innerHTML = PROJECTS.map((p) => {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const wideClass = p.wide ? " project-card--wide" : "";
    const links = p.links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener"><i class="${ICONS[l.type]}" aria-hidden="true"></i>${LABELS[l.type]}</a>`
      )
      .join("");
    return `
      <article class="project-card${wideClass}">
        <div class="project-card__inner">
          <div>
            <div class="project-card__path">~/projects/<span>${slug}</span></div>
            <h3>${p.name}</h3>
            <div class="project-card__tagline">${p.tagline}</div>
          </div>
          <div>
            <p class="project-card__desc">${p.description}</p>
            <div class="project-card__stack">
              ${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
            </div>
            <div class="project-card__links">${links}</div>
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderNotebooks() {
  const el = document.getElementById("notebooks-grid");
  el.innerHTML = NOTEBOOKS.map((n) => {
    return `
      <article class="notebook-card">
        <div class="notebook-card__head">
          <h3>${n.name}</h3>
          <i class="fa-brands fa-kaggle notebook-card__icon" aria-hidden="true"></i>
        </div>
        <p>${n.description}</p>
        <div class="notebook-card__stack">
          ${n.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
        </div>
        <a class="notebook-card__link" href="${n.href}" target="_blank" rel="noopener">
          <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Open notebook
        </a>
      </article>`;
  }).join("");
}

function renderSkills() {
  const el = document.getElementById("skills-groups");
  el.innerHTML = SKILLS.map((g) => {
    return `
      <div class="skill-group">
        <h3>${g.group}</h3>
        <div class="skill-group__list">
          ${g.items.map((i) => `<span class="tag">${i}</span>`).join("")}
        </div>
      </div>`;
  }).join("");
}

function renderContact() {
  const el = document.getElementById("contact-row");
  el.innerHTML = CONTACT_LINKS.map((c) => {
    return `
      <a class="contact-link" href="${c.href}" target="_blank" rel="noopener">
        <i class="${ICONS[c.type]}" aria-hidden="true"></i>${LABELS[c.type]}
      </a>`;
  }).join("");
}

function renderAll() {
  renderCurrently();
  renderProjects();
  renderNotebooks();
  renderSkills();
  renderContact();
}

document.addEventListener("DOMContentLoaded", renderAll);
