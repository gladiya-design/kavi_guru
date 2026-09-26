import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Gift } from "lucide-react";
import { audioManager } from "../utils/audioManager";
import { birthdayData } from "../data/birthdayData";
import LanguageSelector from "./LanguageSelector";
import confetti from "canvas-confetti";

export default function OpeningGiftModal({ currentLang, onSelectLang, onOpenGift }) {
  const [isOpening, setIsOpening] = useState(false);
  const content = birthdayData.opening[currentLang];

  const handleOpen = async () => {
    setIsOpening(true);
    audioManager.playChimeSound();
    
    // Purple & gold confetti burst
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#7C3AED", "#A78BFA", "#DDD6FE", "#F59E0B", "#FFFFFF"],
    });

    // Start background music
    await audioManager.startMusic();

    setTimeout(() => {
      onOpenGift();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0E061F] flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      {/* Subtle Purple Floating Particles & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#5B21B6]/25 rounded-full blur-[100px]" />
      </div>

      {/* Top Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector currentLang={currentLang} onSelectLang={onSelectLang} />
      </div>

      {/* Center Gift Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.08 : 1,
          y: isOpening ? -20 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg glass-card-dark rounded-3xl p-8 sm:p-12 text-center border border-[#7C3AED]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] z-10"
      >
        {/* Glowing Gift Icon */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] text-white flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(124,58,237,0.5)]">
          <Gift size={38} className="animate-pulse" />
        </div>

        {/* Surprise Quotes */}
        <div className="space-y-4 mb-10">
          <motion.p
            key={`surp-${currentLang}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide"
          >
            &ldquo;{content.surprise}&rdquo;
          </motion.p>

          <motion.p
            key={`ready-${currentLang}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl text-[#DDD6FE] font-sans font-light tracking-wider"
          >
            {content.ready}
          </motion.p>
        </div>

        {/* Open Gift Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          disabled={isOpening}
          className="btn-primary-purple w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-medium inline-flex items-center justify-center gap-3 cursor-pointer"
        >
          <Sparkles size={18} className="text-[#DDD6FE]" />
          <span>{content.cta}</span>
        </motion.button>

        <p className="text-xs text-[#A78BFA]/70 mt-6 tracking-wider font-sans">
          {content.subPrompt}
        </p>
      </motion.div>
    </div>
  );
}
