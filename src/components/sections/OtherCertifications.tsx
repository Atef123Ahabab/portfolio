import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { otherCertifications } from "../../data/otherCertifications";
import SectionHeader from "../ui/SectionHeader";

export default function OtherCertifications() {
  return (
    <section id="other-certifications" className="section">
      <SectionHeader
        eyebrow="Additional Credentials"
        title="Professional Training"
        subtitle="Industry-recognized certifications outside of the Oracle ecosystem."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {otherCertifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={`${import.meta.env.BASE_URL}certs/${c.pdf.split("/").pop()}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group block p-6 bg-bg-base border border-white/10 rounded-lg cursor-pointer hover:bg-bg-card hover:border-accent/40 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {c.issuer}
              </p>
              <ExternalLink
                size={14}
                className="text-ink-500 group-hover:text-accent transition-colors"
              />
            </div>
            <h3 className="font-display text-sm font-semibold text-white leading-snug mb-3">
              {c.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-xs text-ink-500 font-mono">{c.date}</p>
              <Award size={14} className="text-ink-600 group-hover:text-accent transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}