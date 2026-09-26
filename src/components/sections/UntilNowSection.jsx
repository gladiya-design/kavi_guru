import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function UntilNowSection({ currentLang, customPhotos }) {
  const content = birthdayData.untilNow[currentLang];
  const items = birthdayData.memories.items.slice(0, 6);

  return (
    <section className="w-full h-full py-6 px-4 sm:px-8 relative bg-[#140929] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Massive Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 purple-glow-text"
        >
          {content.title}
        </motion.h2>

        <p className="font-sans text-base sm:text-lg text-[#DDD6FE]/80 font-light mb-6">{content.subtitle}</p>

        {/* Compact 3x2 photo montage grid */}
        <div className="grid grid-cols-3 gap-2 w-full mb-6">
          {items.map((item, idx) => {
            const photoSrc = customPhotos[item.id] || item.src;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="aspect-square rounded-xl overflow-hidden glass-card-dark border-[#7C3AED]/20 relative shadow-lg group"
              >
                <img
                  src={photoSrc}
                  alt={item.date}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-white/90">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cinematic Pause & Turnaround */}
        <div className="space-y-4 pt-4 border-t border-[#7C3AED]/20 w-full max-w-lg">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#A78BFA]">
            {content.but}
          </p>
          <p className="font-sans text-xl sm:text-2xl text-[#DDD6FE] font-light">
            {content.notEnd}
          </p>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDD6FE] to-[#A78BFA] tracking-tight pt-2"
          >
            {content.notClose}
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
