export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  images: string[];
  github?: string;
  live?: string;
  featured: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: "demo-web-shop-api",
    title: "Demo Web Shop + API Testing",
    description:
      "A comprehensive SQA project featuring UI automation with Playwright (Page Object Model) and API testing with Postman + Newman. Includes GitHub Actions workflow, Allure reporting, and end-to-end checkout validation.",
    tech: ["Playwright", "Postman", "Newman", "Allure", "Node.js", "GitHub Actions"],
    highlights: [
      "UI automation covering invalid login, cart, and full checkout flow (3/3 tests passing)",
      "API automation for GET /users and PUT /users/{id} (10/10 assertions passing)",
      "Page Object Model architecture for maintainable test code",
      "Allure and Playwright HTML reports with screenshots attached",
    ],
    images: [
      `${import.meta.env.BASE_URL}projects/demo-web-shop/01-invalid-login.png`,
      `${import.meta.env.BASE_URL}projects/demo-web-shop/02-cart.png`,
      `${import.meta.env.BASE_URL}projects/demo-web-shop/03-order-confirmation.png`,
      `${import.meta.env.BASE_URL}projects/demo-web-shop/04-allure-report.png`,
      `${import.meta.env.BASE_URL}projects/demo-web-shop/05-newman-report.png`,
      `${import.meta.env.BASE_URL}projects/demo-web-shop/06-workflow.png`,
    ],
    github: "https://github.com/Atef123Ahabab/ostad-project-2",
    featured: true,
    year: 2025,
  },
  {
    id: "ostad-sqa-assessment",
    title: "sqa-testing-arsenal",
    description:
      "A comprehensive QA portfolio covering Web UI testing, API test design, database testing, and exploratory defect reporting for AI applications. Features a custom-built interactive dashboard to present QA artifacts.",
    tech: ["Postman", "MySQL", "Python", "HTML/CSS/JS", "Playwright", "Node.js"],
    highlights: [
      "60-min exploratory testing on Claude.ai identifying 4 major/minor bugs",
      "17 API test cases covering auth, validation, schema, and rate limiting",
      "MySQL database testing (6 tables) with Foreign Keys, CASCADE, and Rollbacks",
      "Custom interactive web dashboard presenting 27+ database execution screenshots",
    ],
    images: [
      `${import.meta.env.BASE_URL}projects/ostad-sqa/1_home.png`,
      `${import.meta.env.BASE_URL}projects/ostad-sqa/2_web_testing.png`,
      `${import.meta.env.BASE_URL}projects/ostad-sqa/3_api_testing.png`,
      `${import.meta.env.BASE_URL}projects/ostad-sqa/4_db_gallery.png`,
      `${import.meta.env.BASE_URL}projects/ostad-sqa/5_db_analysis.png`,
      `${import.meta.env.BASE_URL}projects/ostad-sqa/bug-report.png`,
    ],
    github: "https://github.com/Atef123Ahabab/sqa-testing-arsenal",
    featured: true,
    year: 2025,
  },
  {
    id: "ai-resume-screener",
    title: "AI-Powered Resume Screener",
    description:
      "A semi-automated recruitment tool using Qwen 27B (via Groq) to score resumes against multiple Job Descriptions and rank candidates. Built with a 70% automation rate, bypassing CAPTCHA limitations via manual upload.",
    tech: ["Python", "Streamlit", "Groq API", "OpenAI SDK", "pypdf", "pytest"],
    highlights: [
      "AI scoring engine achieving 85/100 accuracy on test CVs",
      "Batch processing for multiple JDs and CVs with rate-limit handling",
      "Comprehensive QA suite using pytest and Playwright (4/4 tests passing)",
      "Secure API key management using .env and python-dotenv",
    ],
    images: [
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/01-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/02-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/03-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/04-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/05-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/06-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/07-screenshot.png`,
      `${import.meta.env.BASE_URL}projects/ai-resume-screener/08-screenshot.png`,
    ],
    github: "https://github.com/Atef123Ahabab/AI-Resume-Screener",
    featured: true,
    year: 2025,
  },
  {
    id: "resume-job-portal",
    title: "Resume & Job Portal Control Center",
    description:
      "A comprehensive full-stack platform for job posting, resume parsing, and application management, featuring automated testing suites.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Playwright", "Postman", "Newman"],
    highlights: [
      "Built 22 REST endpoints for resume upload/parsing and job management",
      "Automated E2E UI testing with Playwright using the Page Object Model",
      "API testing with Postman and Newman (3/3 requests, 5/5 assertions passing)",
      "Discovered a real security gap (401 auth error) via automated E2E testing",
    ],
    images: [
      `${import.meta.env.BASE_URL}projects/resume-portal/01-invalid-login.png`,
      `${import.meta.env.BASE_URL}projects/resume-portal/02-dashboard-after-register.png`,
      `${import.meta.env.BASE_URL}projects/resume-portal/03-job-created.png`,
      `${import.meta.env.BASE_URL}projects/resume-portal/04-application-submitted.png`,
      `${import.meta.env.BASE_URL}projects/resume-portal/05-newman-report.png`,
    ],
    github: "https://github.com/Atef123Ahabab/Career-portal-",
    featured: true,
    year: 2025,
  },
  {
    id: "musicgen",
    title: "Unsupervised Neural Network for Multi-Genre Music Generation",
    description:
      "Three deep learning models generating symbolic multi-genre music from the MAESTRO MIDI dataset.",
    tech: ["PyTorch", "LSTM", "VAE", "Transformer", "MIDI"],
    highlights: [
      "Reconstruction loss 4.9362 (Task 1) and 4.7944 (Task 2)",
      "Rhythm diversity 0.548 · Transformer perplexity 170.11",
      "Generated 23 valid MIDI compositions (50+ notes, 5+ seconds each)",
      "Implemented KL annealing for VAE and causal masking for Transformer",
    ],
    images: [`${import.meta.env.BASE_URL}projects/musicgen-1.png`],
    github: "https://github.com/Atef123Ahabab/cse425-project",
    featured: true,
    year: 2025,
  },
  {
    id: "any-car-solution",
    title: "Any Car Solution — Full-Stack Car Rental Platform",
    description:
      "Production-ready MERN car rental & servicing platform with real-time chat, AI assistant, role-based dashboards, and a complete end-to-end QA automation suite.",
    tech: [
      "React 19",
      "Vite",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Playwright",
      "Newman",
      "GitHub Actions",
    ],
    highlights: [
      "Full MERN stack with JWT auth, role-based access control, and Socket.io real-time chat",
      "AI assistant (OpenAI API) for recommendations plus Multer image uploads",
      "Playwright UI tests (Page Object Model) + 12 Newman API assertions with variable chaining",
      "CI/CD via GitHub Actions with 22 auto-captured screenshot artifacts",
    ],
    images: [
      `${import.meta.env.BASE_URL}projects/anycar/01-home-full-page.png`,
      `${import.meta.env.BASE_URL}projects/anycar/02-home-hero.png`,
      `${import.meta.env.BASE_URL}projects/anycar/03-cars-page.png`,
      `${import.meta.env.BASE_URL}projects/anycar/04-cars-full-page.png`,
      `${import.meta.env.BASE_URL}projects/anycar/05-login-modal.png`,
      `${import.meta.env.BASE_URL}projects/anycar/06-signup-form.png`,
      `${import.meta.env.BASE_URL}projects/anycar/07-logged-in-view.png`,
      `${import.meta.env.BASE_URL}projects/anycar/08-dark-mode.png`,
    ],
    github: "https://github.com/Atef123Ahabab/any-car-solution",
    featured: true,
    year: 2025,
  },
];
