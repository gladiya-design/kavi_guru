import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function MoreToComeSection({ currentLang }) {
  const content = birthdayData.moreToCome[currentLang];
  const cards = birthdayData.moreToCome.cards;

  return (
    <section className="w-full h-full py-6 px-4 sm:px-8 relative bg-gradient-to-b from-[#140929] via-[#1F113D] to-[#160B2E] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA]/30 text-[#DDD6FE] text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-[#A78BFA]" />
            <span>Future Chapters</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white purple-glow-text mb-2">
            {content.heading}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#DDD6FE]/80 font-light max-w-lg mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* Compact 3x2 future card grid */}
        <div className="grid grid-cols-3 gap-3 w-full mb-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-4 rounded-2xl glass-card-dark border-[#7C3AED]/35 hover:border-[#A78BFA] transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2 purple-glow-border group cursor-default"
            >
              {/* Glowing Icon Circle */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED]/30 to-[#5B21B6]/30 border border-[#A78BFA]/40 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>

              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-0.5">{card.title}</h4>
                <span className="text-xs font-mono text-[#A78BFA] tracking-wider uppercase">
                  {content.comingSoon}
                </span>
              </div>

              <div className="w-8 h-8 rounded-full border border-dashed border-[#A78BFA]/40 flex items-center justify-center text-[#A78BFA]/70">
                <Plus size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powerful Climax Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl p-8 rounded-3xl glass-card-dark border-[#A78BFA]/40 shadow-2xl purple-glow"
        >
          <p className="font-serif text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDD6FE] to-[#A78BFA]">
            &ldquo;{content.subheading}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
