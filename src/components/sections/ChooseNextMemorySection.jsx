import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, Compass } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";
import { audioManager } from "../../utils/audioManager";
import confetti from "canvas-confetti";

export default function ChooseNextMemorySection({ currentLang }) {
  const content = birthdayData.nextMemory[currentLang];
  const options = birthdayData.nextMemory.options;
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    audioManager.playChimeSound();

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#7C3AED", "#A78BFA", "#10B981", "#F59E0B"],
    });
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 relative bg-gradient-to-b from-[#160B2E] via-[#1E0F3D] to-[#160B2E] text-white overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA]/30 text-[#DDD6FE] text-xs font-mono uppercase tracking-widest mb-3">
            <Compass size={14} className="text-[#A78BFA]" />
            <span>Looking Ahead</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white purple-glow-text mb-3">
            {content.heading}
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#DDD6FE]/80 max-w-xl mx-auto font-light">
            {content.subheading}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-8">
          {options.map((opt) => {
            const isSelected = selectedId === opt.id;
            return (
              <motion.button
                key={opt.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(opt.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] border-white text-white shadow-2xl purple-glow scale-102"
                    : "glass-card-dark border-[#7C3AED]/25 text-[#DDD6FE] hover:border-[#A78BFA]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-xl sm:text-2xl font-bold">
                    {opt.label}
                  </span>
                  {isSelected && <CheckCircle2 size={20} className="text-emerald-300 shrink-0" />}
                </div>
                <p className="text-xs text-[#DDD6FE]/70 font-sans">
                  {opt.desc}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Approval Card */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="glass-card-dark rounded-2xl p-6 border border-emerald-400/40 text-center space-y-2 max-w-md w-full shadow-2xl"
            >
              <span className="font-serif text-2xl font-black text-emerald-300 tracking-wide block">
                &ldquo;{content.approved}&rdquo;
              </span>
              <p className="font-sans text-base sm:text-lg text-white font-medium">
                {content.followup}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
