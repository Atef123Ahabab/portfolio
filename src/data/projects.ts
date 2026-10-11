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
    id: "jobsphere",
    title: "JobSphere — AI-Powered Job Portal",
    description:
      "Full-stack AI-powered job portal connecting job seekers and employers with smart recommendations and automation.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Grok API", "Gemini API"],
    highlights: [
      "NLP resume parsing from PDF/DOC to extract skills and experience",
      "Fraud and spam detection with audit logging for admins",
      "AI skill recommendations via Grok API and auto cover letters via Gemini API",
      "Deployed on Vercel with MongoDB for data persistence",
    ],
    images: ["/projects/jobsphere-1.png"],
    github: "https://github.com/Atef123Ahabab/471-2-features",
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
    images: ["/projects/musicgen-1.png"],
    github: "https://github.com/Atef123Ahabab/cse425-project",
    featured: true,
    year: 2025,
  },
];
