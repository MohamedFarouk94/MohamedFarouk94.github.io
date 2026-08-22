/* ============================================================
   CONTENT.JS — A file that sould be edited to update the site
   Nothing here touches layout or styling
   ============================================================ */

const TERMINAL_SESSION = [
  { prompt: "whoami", output: "mohamedfarouk" }, 
  { prompt: "pwd", output: "mohamedfarouk94.github.io"},
  { prompt: "git remote -v", output: 'origin <a href="https://github.com/MohamedFarouk94/MohamedFarouk94.github.io" target="_blank" rel="noopener">github.com/my-portfolio-repo</a>'},
  { prompt: "cat about.txt", output: "AI/ML Engineer · NLP Specialist\nPython Developer . Backend Engineer\nCS Researcher . Kaggle Participant\nFormer ACM-ICPC Contestant . Math Enthusiast" },
];

/* ---- "Currently" — what I'm doing right now.
   status: "active" | "ongoing" | "paused"     */
const CURRENTLY = [
   {
    status: "active",
    title: "Building ERPChat",
    detail: [
      "I'm working on an agentic system that can be integrated with Odoo systems. A chat bot with access to a toolset in the ERP system.",
      "I'm building this for an Odoo development startup, and I'm excited because it's my first time to interact with ERP systems and Odoo development."
      "This project is almost done. I've delivered the agentic part. In the next days I'll be working on integrating it with actual ERP systems, and testing its life cycle."
    ]
  },
   
  {
    status: "active",
    title: "Stanford's Self-Improving AI Agents Curriculum",
    detail: [
      "I've recently finished the Stanford CME295 course of Transformers & LLMs, which was a decent way to revisit the mathematical core of LLM and NLP; a  something that can be easily forgotten if your work heavily depends on high-level design.",
      "Now I'm following it with the Stanford CS329A course of Self-Improving AI Agents. I'm also working on an educational notebook I'll publish soon where I apply the concepts I learnt and/or revisited."
    ]
  },
   
  /*{
    status: "paused",
    title: "Building ChatWithData",
    detail: [
      "I'm working on an agentic system that holds an insightful conversation about a given dataset, reasoning over it, running code against it, and explaining what it finds.",
      "I paused this project multiple times because of my Master's degree study and other urgent works. I hope I can finish it soon!"
    ]
  },*/
   
  {
    status: "ongoing",
    title: "MSc, Mathematics & Computer Science",
    detail: [
      "I am pursuing a Master’s degree in Mathematics and Computer Science at Alexandria University (Faculty of Science, Department of Mathematics and Computer Science).",
      "I'm currently finishing my qualifying year and preparing for the preparatory year, which is intended to be the final stage before commencing the research phase."
    ]
  },
];

/* ---- Experience — client/freelance work you can't link to (no
   public repo, NDA, etc.). Structured like Projects, just without
   a links row. timeframe is optional — omit the key to leave it out. */
const EXPERIENCE = [
  {
    role: "AI Backend Engineer",
    context: "Building RAG System for AI-Powered hiring process",
    timeframe: "2025",
    description:
      "Built a RAG system for an AI-driven hiring company, replacing their reliance on the OpenAI API with a locally hosted Phi-4 model.<br><br>The system generates job descriptions, interview questions, and personality tests, grounded in a curated set of previously generated OpenAI content used as reference.<br><br>The switch eliminated roughly $5/day in recurring API costs while matching, and in some cases improving, response latency compared to the original OpenAI-based pipeline.",
    stack: ["LLM", "RAG", "Django", "Ollama"],
  },
  
  {
    role: "Freelance ML and Automation Engineer",
    context: "Designing ML and Automation Solutions",
    timeframe: "2024",
    description:
      "Designed and deployed 5+ ML solutions for clients spanning predictive analytics, Monte Carlo simulations, web scraping pipelines, chat bots, and recommender systems.<br><br>Architected multi-tenant session management in FastAPI, isolating state and preventing cross-client data leakage while serving concurrent workloads across multiple freelance Data Science engagements.",
    stack: ["Machine Learning", "LangChain", "Django", "FastAPI", "Monte Carlo Simulations", "Web Scraping"],
  },
];

/* ---- Projects — anything with a GitHub link.*/
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
      { type: "sdk", href: "https://github.com/MohamedFarouk94/jury/tree/master/sdk"}
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
      "Translates plain-English questions into SQL and runs them against a real local database — Local model, trained and optimized.",
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

/* ---- Education — type must be "bachelor", "master", or "scholarship".
   note is optional (e.g. "in progress"). */
const EDUCATION = [
  {
    type: "bachelor",
    institution: "Pharos University of Alexandria",
    detail: "Faculty of Engineering — Department of Computer Engineering",
    year: "2020",
  },
  {
    type: "scholarship",
    institution: "Egyptian Ministry of Communications and Information Technology",
    detail: "FWD Scholarship — Machine Learning Program",
    year: "2022",
  },
  {
    type: "scholarship",
    institution: "Egyptian Ministry of Communication and Information Technology",
    detail: "DEPI Scholarship — AWS Machine Learning Engineering Program",
    year: "2024",
  },
  {
    type: "master",
    institution: "Alexandria University",
    detail: "Faculty of Science — Department of Mathematics and Computer Science",
    note: "in progress",
    year: "expected 2028",
  },
];

/* ---- Skills — grouped by category. Add/remove freely. */
const SKILLS = [
  {
    group: "Machine Learning",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "CatBoost", "LightGBM"],
  },
  {
    group: "LLM & NLP",
    items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Ollama", "FAISS", "ChromaDB"],
  },
  {
    group: "Model Optimization",
    items: ["Fine-tuning", "LoRA/QLoRA", "Transfer Learning", "Quantization", "Bitsandbytes", "Pruning", "ONNX"],
  },
  { group: "Data & Scientific Computing", items: ["Pandas", "NumPy", "SciPy"] },
   
  { group: "Languages", items: ["Python", "C/C++", "SQL", "JavaScript", "Java/Kotlin", "MATLAB/Octave"] },
  {
    group: "Backend",
    items: ["Django", "DRF", "Django Channels", "Flask", "FastAPI"],
  },
  {
    group: "Automation & Scraping",
    items: ["Requests", "httpx", "Selenium", "BeautifulSoup", "Scrapling", "Automation"],
  },
  {
    group: "Deployment",
    items: ["Docker", "REST APIs", "Cloud Computing", "Hugging Face Spaces", "Vercel", "AWS"],
  },
  {
    group: "Foundations",
    items: ["Advanced OOP", "Monte Carlo Simulation", "Algorithms"],
  },
];
/* ---- Contact / related links — all rendered in one row. */
const CONTACT_LINKS = [
  { type: "resume", href: "https://drive.google.com/file/d/15UtTzZOFZgllUXe3Ia06lhF5_cwfmMdm/view" },
  { type: "github", href: "https://github.com/MohamedFarouk94/" },
  { type: "linkedin", href: "https://www.linkedin.com/in/mohfarouk94/" },
  { type: "kaggle", href: "https://www.kaggle.com/mohamedfarouk94" },
  { type: "credly", href: "https://www.credly.com/users/mohamed-farouk.87e6e0b3/badges#credly" },
  { type: "upwork", href: "https://www.upwork.com/freelancers/~010a4765fdccc37961" },
  { type: "whatsapp", href: "https://wa.me/201281259262" },
  { type: "mail", href: "mailto:mohamedfarouk1994@gmail.com" },
  { type: "twitter", href: "https://twitter.com/mohfarouk94" },
  { type: "instagram", href: "https://instagram.com/mohfarouk94" },
];
