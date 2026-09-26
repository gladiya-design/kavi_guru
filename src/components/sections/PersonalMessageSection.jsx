import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function PersonalMessageSection({ currentLang }) {
  const content = birthdayData.personalMessage[currentLang];

  return (
    <section className="w-full h-full py-10 px-4 sm:px-8 relative bg-[#160B2E] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle Purple Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#A78BFA] text-xs font-mono uppercase tracking-widest mb-3">
            <Heart size={12} className="text-[#A78BFA]" />
            <span>{content.subheading}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white purple-glow-text">
            {content.heading}
          </h2>
        </div>

        {/* Premium Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="w-full glass-card-dark rounded-3xl p-8 sm:p-14 border border-[#7C3AED]/25 shadow-2xl relative"
        >
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-tr-3xl pointer-events-none" />

          {/* Letter / Message Body */}
          <div className="space-y-5 font-sans text-lg sm:text-xl text-[#DDD6FE]/90 leading-relaxed font-light">
            {content.lines.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className={
                  idx === content.lines.length - 1
                    ? "font-serif text-xl sm:text-2xl text-white font-semibold pt-4 border-t border-[#7C3AED]/20"
                    : ""
                }
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
