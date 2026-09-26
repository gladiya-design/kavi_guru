import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";
import { audioManager } from "../../utils/audioManager";
import confetti from "canvas-confetti";

export default function FinalSurpriseSection({ currentLang }) {
  const content = birthdayData.finalSurprise[currentLang];
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    audioManager.playChimeSound();

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#7C3AED", "#A78BFA", "#F43F5E", "#FBBF24", "#FFFFFF"],
    });
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 relative bg-[#160B2E] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Teaser */}
        <p className="font-serif italic text-2xl sm:text-3xl text-[#DDD6FE] mb-6">
          {content.wait}
        </p>

        {/* Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleReveal}
          className="btn-primary-purple px-9 py-4 rounded-full text-lg sm:text-xl font-bold inline-flex items-center gap-3 shadow-2xl purple-glow cursor-pointer"
        >
          <Heart size={20} className="text-[#F43F5E] animate-pulse" />
          <span>{content.button}</span>
        </motion.button>

        {/* Full-Screen Purple Glow Modal */}
        <AnimatePresence>
          {isRevealed && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E061F]/90 backdrop-blur-2xl">
              {/* Radial Purple Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25)_0%,transparent_70%)] pointer-events-none" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl glass-card-dark rounded-3xl p-8 sm:p-14 border border-[#A78BFA]/40 shadow-[0_0_80px_rgba(124,58,237,0.4)] text-left space-y-6 max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setIsRevealed(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] text-white flex items-center justify-center shadow-lg mb-4">
                  <Sparkles size={24} />
                </div>

                <div className="space-y-4 font-sans text-lg sm:text-xl text-[#DDD6FE] leading-relaxed font-light whitespace-pre-line">
                  {content.message}
                </div>

                <div className="pt-6 border-t border-[#7C3AED]/30 flex items-center justify-between">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-white">
                    {content.closing}
                  </span>
                  <Heart size={26} className="text-[#F43F5E] animate-bounce" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
