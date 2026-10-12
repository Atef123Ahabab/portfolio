export type Certification = {
  name: string;
  shortName: string;
  track: "DevOps" | "AI/ML" | "Cloud" | "Data";
  year: number;
  date: string;
  pdf: string;
};

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    shortName: "OCI DevOps Professional",
    track: "DevOps",
    year: 2025,
    date: "Oct 24, 2025",
    pdf: "/certs/oci-devops-pro.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    shortName: "OCI Generative AI Professional",
    track: "AI/ML",
    year: 2025,
    date: "Oct 25, 2025",
    pdf: "/certs/oci-generative-ai-pro.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    shortName: "OCI Multicloud Architect Professional",
    track: "Cloud",
    year: 2025,
    date: "Oct 26, 2025",
    pdf: "/certs/oci-multicloud-architect-pro.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    shortName: "OCI Data Science Professional",
    track: "AI/ML",
    year: 2025,
    date: "Nov 10, 2025",
    pdf: "/certs/oci-data-science-pro.pdf",
  },
  {
    name: "MySQL HeatWave Implementation Certified Associate Rel 1",
    shortName: "MySQL HeatWave Associate",
    track: "Data",
    year: 2025,
    date: "Oct 22, 2025",
    pdf: "/certs/mysql-heatwave.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    shortName: "OCI AI Foundations",
    track: "AI/ML",
    year: 2025,
    date: "Oct 24, 2025",
    pdf: "/certs/oci-ai-foundations.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    shortName: "OCI Foundations",
    track: "Cloud",
    year: 2025,
    date: "Oct 26, 2025",
    pdf: "/certs/oci-foundations.pdf",
  },
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    shortName: "Data Platform Foundations",
    track: "Data",
    year: 2025,
    date: "Oct 30, 2025",
    pdf: "/certs/data-platform-foundations.pdf",
  },
];
