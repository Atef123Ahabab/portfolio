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