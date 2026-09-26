import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function HeartfeltWishSection({ currentLang }) {
  const content = birthdayData.heartfeltWish[currentLang];

  return (
    <section className="w-full h-full py-10 px-4 sm:px-8 relative bg-gradient-to-b from-[#0F0721] via-[#160B2E] to-[#140929] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Luxury Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full glass-card-dark rounded-3xl p-8 sm:p-14 border border-[#A78BFA]/30 shadow-2xl relative"
        >
          {/* Top Decorative Sparkle */}
          <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] flex items-center justify-center mb-6">
            <Sparkles size={22} />
          </div>

          {/* Salutation */}
          <h3 className="font-serif text-3xl sm:text-4xl font-black text-white tracking-wide mb-6">
            {content.salutation}
          </h3>

          {/* Paragraphs */}
          <div className="space-y-5 font-sans text-lg sm:text-xl text-[#DDD6FE] font-light leading-relaxed">
            {content.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Closing */}
          <div className="pt-8 mt-8 border-t border-[#7C3AED]/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-serif text-2xl font-bold">
              <span>{content.closing}</span>
            </div>
            <Heart size={24} className="text-[#F43F5E] animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
