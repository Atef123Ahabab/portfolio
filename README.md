# Atef Ahabab — Portfolio

A personal portfolio website for **Atef Ahabab**, an Oracle Cloud Infrastructure 2025 Certified DevOps Professional. This single-page application (SPA) showcases projects across Cloud, AI/ML, QA Automation, and Full-Stack Engineering.

**Live Site:** [https://atef123ahabab.github.io/portfolio/](https://atef123ahabab.github.io/portfolio/)

## 🚀 Tech Stack

*   **Framework:** React 18 + TypeScript + Vite
*   **Styling:** Tailwind CSS (Custom dark theme with a "Shelley-style" warm red accent)
*   **Animations:** Framer Motion (Scroll-triggered reveals, typing effects, carousels)
*   **Icons:** Lucide React
*   **Fonts:** Fontsource (Inter, Space Grotesk, JetBrains Mono)
*   **Linting:** Oxlint
*   **Deployment:** GitHub Pages (via GitHub Actions)

## 📂 Project Structure

portfolio/
├── public/
│   ├── certs/                  # PDF files for Oracle and Ostad certifications
│   └── projects/               # Project screenshot assets
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, About, Skills, Projects, Certifications, OtherCertifications, Education, Contact
│   │   └── ui/                 # ProjectCard, SectionHeader
│   ├── data/                   # Data files (profile, projects, certifications, otherCertifications, skills, education)
│   ├── App.tsx                 # Main layout and routing
│   ├── index.css               # Tailwind config and custom CSS variables
│   └── main.tsx                # React entry point
├── tailwind.config.js          # Custom colors, fonts, and animations
└── vite.config.ts              # Vite configuration (base path for GitHub Pages)


## ✨ Features Implemented

1.  **Responsive Navigation:** Sticky navbar with scroll-spy highlighting the active section and a mobile hamburger menu.
2.  **Hero Section:** Dynamic typing animation cycling through roles (DevOps Engineer, Cloud Architect, AI/ML Engineer, etc.), social links, and a profile image.
3.  **About Section:** Narrative bio alongside quick stats (8 Oracle Certifications, 4 Major Projects, 2026 Graduation).
4.  **Skills Matrix:** Categorized skill groups (Testing & QA, API Testing, Automation, Programming, Cloud/DevOps, etc.) rendered as clean chips.
5.  **Project Showcase:**
    *   Alternating layout for featured projects.
    *   **Custom Image Carousel:** Supports multiple screenshots per project with next/prev arrows and dot indicators.
    *   Links to GitHub repositories and live demos.
6.  **Oracle Certifications:** A grid of 8 OCI certification cards, each linking to the official PDF.
7.  **Professional Training:** A dedicated section for additional industry certifications (e.g., Ostad SQA).
8.  **Education Timeline:** Clean, minimal timeline of academic background.
9.  **Contact Section:** Direct mailto link, social icons, and location.
10. **Dark Mode Aesthetic:** Deep `#0a0a0a` backgrounds, custom typography, and subtle grain/gradient textures.

## 🏆 Certifications & Projects Listed

### Certifications
*   **Oracle Cloud Infrastructure 2025:**
    *   DevOps Professional
    *   Generative AI Professional
    *   Multicloud Architect Professional
    *   Data Science Professional
    *   AI Foundations Associate
    *   Foundations Associate
*   **Data & Databases:**
    *   MySQL HeatWave Implementation Certified Associate
    *   Oracle Data Platform 2025 Foundations Associate
*   **Professional Training:**
    *   SQA: Manual & Automation Testing (Ostad)

### Key Projects
*   **AI-Powered Resume Screener:** Semi-automated recruitment tool using Qwen 27B (Groq) to score and rank resumes. (Python, Streamlit, pytest).
*   **Resume & Job Portal Control Center:** Full-stack platform with 22 REST endpoints and comprehensive Playwright/Newman testing suites. (React, Node.js, MongoDB).
*   **Any Car Solution:** Production-ready MERN car rental platform with real-time chat, AI assistant, and end-to-end QA automation. (React 19, Express 5, Socket.io).
*   **Unsupervised Neural Network for Music Generation:** Deep learning models (LSTM, VAE, Transformer) generating symbolic music from the MAESTRO dataset. (PyTorch).

## 🛠️ Local Development

1.  **Clone the repository:**
    git clone https://github.com/Atef123Ahabab/portfolio.git
    cd portfolio
2.  **Install dependencies:**
    npm install
3.  **Run the development server:**
    npm run dev
    Open http://localhost:5173 to view the site.
4.  **Build for production:**
    npm run build

## 🚀 Deployment

This project is configured for **GitHub Pages**. Pushing to the `main` branch triggers a GitHub Actions workflow that builds the Vite app and deploys the `dist` folder to the `gh-pages` environment.

*Note: Ensure `vite.config.ts` has the correct `base` path set to `"/portfolio/"` for GitHub Pages to load assets correctly.*

## 📄 License & Credits

*   Designed and built by **Atef Ahabab**.
*   Icons by [Lucide](https://lucide.dev/).
*   Fonts by [Fontsource](https://fontsource.org/).
*   Animations by [Framer Motion](https://www.framer.com/motion/).
