/* ============================================================
   CONTENT.JS — edit this file to update the site.
   Nothing here touches layout or styling — just data.
   Add/remove/reorder items freely; the page re-renders itself.
   ============================================================ */

/* ---- "Currently" — what you're doing right now.
   Edit this often. status: "active" | "ongoing" | "paused"     */
const CURRENTLY = [
  {
    status: "active",
    title: "Fine-tuning Qwen2.5 for Reddit comment moderation",
    detail:
      "Kaggle competition — building a LoRA fine-tuning pipeline adapted from a prior Text-to-SQL project, pushing past a 0.566 ROC-AUC baseline.",
  },
  {
    status: "active",
    title: "Chat with Data",
    detail:
      "Agentic conversational data-analysis system: LangChain + Groq driving a two-stage prompt loop over a sandboxed exec() environment.",
  },
  {
    status: "active",
    title: "Shipping live demos",
    detail:
      "Deploying Hugging Face Spaces / Streamlit demos for existing projects so recruiters can try things, not just read about them.",
  },
  {
    status: "ongoing",
    title: "MSc, Mathematics & Computer Science",
    detail: "Alexandria University — qualifying year.",
  },
];

/* ---- Projects — anything with real code behind it.
   A Kaggle link is fine to include alongside github/live —
   it only becomes a "notebook" (below) when Kaggle is the ONLY link. */
const PROJECTS = [
  {
    name: "Jury",
    tagline: "AI-Powered Content Moderation",
    description:
      "Define moderation policies, add custom rules, submit content, and get back a clear verdict — an AI-powered moderation layer you can drop into any pipeline.",
    stack: ["LLM", "LangChain", "FastAPI", "JavaScript"],
    links: [
      { type: "live", href: "https://jury-livid.vercel.app/" },
      { type: "github", href: "https://github.com/MohamedFarouk94/jury" },
    ],
  },
  {
    name: "AI Customer Support",
    tagline: "Natural-language support assistant",
    description:
      "An AI-driven support assistant that resolves customer queries in natural language, grounded entirely in a custom-built local knowledge base.",
    stack: ["LLM", "RAG", "LangChain"],
    links: [
      {
        type: "github",
        href: "https://github.com/MohamedFarouk94/AI-customer-support",
      },
    ],
  },
  {
    name: "Natural-Language Database Query System",
    tagline: "Ask your database a question",
    description:
      "Translates plain-English questions into SQL and runs them against a real local database — no query syntax required.",
    stack: ["Transfer Learning", "Model Optimization", "LLM", "LangChain", "SQL"],
    links: [
      {
        type: "github",
        href: "https://github.com/MohamedFarouk94/Natural-Language-Database-Queries",
      },
      {
        type: "kaggle",
        href: "https://www.kaggle.com/code/mohamedfarouk94/ai-powered-postgresql",
      },
    ],
  },
  {
    name: "Phext",
    tagline: "Search your gallery with text",
    description:
      "An embedding-based search engine that finds photos in your gallery from a plain text description — optimized with pruning, quantization, and ONNX for fast, lightweight inference.",
    stack: ["Embeddings", "Similarity Search", "Model Optimization", "ONNX"],
    links: [
      { type: "github", href: "https://github.com/MohamedFarouk94/phext" },
      {
        type: "kaggle",
        href: "https://www.kaggle.com/code/mohamedfarouk94/phext-search-photos-with-text",
      },
    ],
  },
  {
    name: "MultiAgent",
    tagline: "Multi-persona AI chat platform",
    description:
      "A chat platform supporting text and audio messages, where users can spin up multiple agents, each with its own instructions and persona.",
    stack: ["LLM", "LangChain", "FastAPI", "JavaScript", "Docker"],
    links: [
      { type: "github", href: "https://github.com/MohamedFarouk94/multiagent" },
    ],
  },
  {
    name: "ChatWithData",
    tagline: "Conversational analysis over your dataset",
    description:
      "An agentic system that holds an insightful conversation about a given dataset — reasoning over it, running code against it, and explaining what it finds. (In progress.)",
    stack: ["LLM", "RAG", "LangChain", "Machine Learning", "Sandboxed Execution"],
    links: [
      {
        type: "github",
        href: "https://github.com/MohamedFarouk94/chatwithdata",
      },
      {
        type: "kaggle",
        href: "https://www.kaggle.com/code/mohamedfarouk94/chat-with-data",
      },
    ],
  },
  {
    name: "PyChot",
    tagline: "Real-time chat server & client",
    description:
      "A lightweight chat server/client with real-time messaging, authentication, and a simple GUI — built on Django Channels.",
    stack: ["WebSockets", "REST API", "Django", "Django Channels", "Tkinter"],
    links: [
      { type: "github", href: "https://github.com/MohamedFarouk94/Pychot" },
    ],
  },
  {
    name: "Amazon Ally",
    tagline: "Amazon product search & scrape",
    description:
      "Searches, scrapes, and collects Amazon product data through a simple desktop GUI. Personal and research use only.",
    stack: ["Web Scraping", "Selenium", "Tkinter"],
    links: [
      {
        type: "github",
        href: "https://github.com/MohamedFarouk94/amazon-scraper",
      },
    ],
  },
];

/* ---- Notebooks — Kaggle-only work: exploration, competitions, simulations.
   These get their own lighter-weight card style, separate from Projects. */
const NOTEBOOKS = [
  {
    name: "2026 FIFA World Cup Simulation",
    description:
      "Monte Carlo simulation projecting the outcome of the 2026 FIFA World Cup.",
    stack: ["Monte Carlo", "Data Preprocessing", "Machine Learning", "Statistical Models"],
    href: "https://www.kaggle.com/code/mohamedfarouk94/wave-your-flag-predicting-fifa-world-cup-2026",
  },
  {
    name: "Movie Recommender System",
    description:
      "A hybrid recommender blending content-based, rating-based, and collaborative filtering, on top of heavy data cleaning.",
    stack: ["Recommender Systems", "Data Preprocessing", "Machine Learning"],
    href: "https://www.kaggle.com/code/mohamedfarouk94/the-movie-recommender-system",
  },
  {
    name: "Contexto Solver",
    description:
      "Several algorithms — including a directional GloVe-embedding search — for solving the daily word game Contexto.",
    stack: ["Information Theory", "Word Embeddings", "NLP"],
    href: "https://www.kaggle.com/code/mohamedfarouk94/let-s-make-a-guess-contexto-solver",
  },
];

/* ---- Skills — grouped by category. Add/remove freely. */
const SKILLS = [
  { group: "Languages", items: ["Python", "C/C++", "SQL", "JavaScript", "MATLAB/Octave"] },
  { group: "Data", items: ["Pandas", "NumPy", "SciPy"] },
  {
    group: "Machine Learning",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "CatBoost", "LightGBM"],
  },
  { group: "LLM Tooling", items: ["LangChain", "LangGraph", "Ollama"] },
  {
    group: "Model Optimization",
    items: ["Fine-tuning", "Transfer Learning", "Quantization", "Pruning"],
  },
  {
    group: "Backend",
    items: ["Django", "DRF", "Django Channels", "Flask", "FastAPI"],
  },
  {
    group: "Web Scraping",
    items: ["Requests", "Selenium", "BeautifulSoup", "Scrapling"],
  },
  {
    group: "Foundations",
    items: ["Advanced OOP", "Monte Carlo Simulation", "Algorithms", "Automation"],
  },
  { group: "Deployment", items: ["Docker", "REST APIs", "Cloud Computing"] },
];

/* ---- Contact / related links — all rendered in one row.
   type controls icon + color; add more by copying a line and
   changing type/href. Supported types: mail, whatsapp, github,
   linkedin, upwork, kaggle, credly, resume, twitter, instagram */
const CONTACT_LINKS = [
  { type: "resume", href: "https://drive.google.com/file/d/15UtTzZOFZgllUXe3Ia06lhF5_cwfmMdm/view" },
  { type: "github", href: "https://github.com/MohamedFarouk94/" },
  { type: "linkedin", href: "https://www.linkedin.com/in/mohfarouk94/" },
  { type: "kaggle", href: "https://www.kaggle.com/mohamedfarouk94" },
  { type: "credly", href: "https://www.credly.com/users/mohamed-farouk.87e6e0b3/badges#credly" },
  { type: "upwork", href: "https://www.upwork.com/freelancers/~010a4765fdccc37961" },
  { type: "whatsapp", href: "https://wa.me/201281259262" },
  { type: "mail", href: "mailto:mohamedfarouk1994@gmail.com" },
  // { type: "twitter", href: "https://twitter.com/yourhandle" },
  // { type: "instagram", href: "https://instagram.com/yourhandle" },
];
