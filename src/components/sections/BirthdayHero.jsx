import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function BirthdayHero({ currentLang, onBegin }) {
  const content = birthdayData.hero[currentLang];

  return (
    <section className="w-full relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-20 overflow-hidden bg-cinematic-radial">
      {/* Background Ambient Purple Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#A78BFA]/30 text-[#DDD6FE] text-xs uppercase tracking-widest font-mono mb-8 backdrop-blur-md mx-auto"
      >
        <Sparkles size={14} className="text-[#A78BFA]" />
        <span>Special Birthday Edition</span>
      </motion.div>

      {/* Massive Luxury Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto space-y-2 mb-8 flex flex-col items-center text-center"
      >
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5F3FF] to-[#DDD6FE] tracking-tight leading-tight purple-glow-text">
          {content.title}
        </h1>
        <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#A78BFA] tracking-tight">
          {content.name}
        </div>
      </motion.div>

      {/* Heartfelt Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-xl mx-auto space-y-3 text-lg sm:text-2xl text-[#DDD6FE]/90 font-light leading-relaxed mb-12 font-sans flex flex-col items-center text-center"
      >
        <p className="font-medium text-white">{content.tagline1}</p>
        <p className="text-base sm:text-lg text-[#A78BFA]/90">{content.tagline2}</p>
      </motion.div>

      {/* Let's Begin CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex justify-center mx-auto"
      >
        <button
          onClick={onBegin}
          className="btn-primary-purple px-8 py-3.5 rounded-full text-base sm:text-lg font-medium inline-flex items-center gap-2 group cursor-pointer"
        >
          <span>{content.cta}</span>
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
