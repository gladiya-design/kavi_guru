import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function EmotionalTransitionSection({ currentLang }) {
  const content = birthdayData.emotionalTransition[currentLang];

  return (
    <section className="w-full h-full py-10 px-4 sm:px-8 relative bg-[#0F0721] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Calm, quiet, deep purple backdrop without noisy effects */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Heart Badge */}
        <div className="w-10 h-10 rounded-full bg-[#7C3AED]/15 text-[#A78BFA] flex items-center justify-center mb-8 border border-[#7C3AED]/20">
          <Heart size={18} />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-12 purple-glow-text"
        >
          {content.heading}
        </motion.h2>

        {/* Narrative Lines appearing slowly */}
        <div className="space-y-6 font-sans text-lg sm:text-2xl text-[#DDD6FE]/90 font-light leading-relaxed">
          {content.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={
                idx === content.lines.length - 1
                  ? "font-serif text-2xl sm:text-3xl text-white font-medium pt-4"
                  : ""
              }
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
