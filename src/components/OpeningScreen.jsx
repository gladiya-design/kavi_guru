import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Volume2, ArrowRight, BookOpen } from "lucide-react";
import { audioManager } from "../utils/audioManager";

export default function OpeningScreen({ onOpenScrapbook }) {
  const [step, setStep] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Staged sequence for the handwritten opening
    const timers = [
      setTimeout(() => setStep(1), 1200), // Sentence 1: "Some bonds are never planned."
      setTimeout(() => setStep(2), 3400), // Sentence 2: "They just happen."
      setTimeout(() => setStep(3), 5600), // Sentence 3: "And before you realize it..." + heart
      setTimeout(() => setStep(4), 7800), // Sentence 4: "they become home."
      setTimeout(() => setStep(5), 9600), // Names: "Me • Akka • Machan"
      setTimeout(() => setStep(6), 11000), // Button: "Open our scrapbook →"
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStartMusicAndOpen = async () => {
    setIsOpening(true);
    audioManager.playPaperSound();
    await audioManager.startMusic();
    setMusicStarted(true);

    // Realistic paper opening unfold delay
    setTimeout(() => {
      onOpenScrapbook();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0e0d] flex flex-col items-center justify-center p-4 sm:p-8 select-none overflow-hidden">
      {/* Background dark grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Floating music prompt at top */}
      {!musicStarted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-6 flex items-center gap-2 text-[#c4b59f] text-sm font-hand text-lg tracking-wide bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          <span>🎵 Tap below to begin our story with music</span>
        </motion.div>
      )}

      {/* Paper unfolding wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{
          opacity: 1,
          scale: isOpening ? 1.08 : 1,
          y: isOpening ? -40 : 0,
          rotateX: isOpening ? 18 : 0,
        }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full max-w-lg bg-[#faf6ee] rounded-sm p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-[#e4d8c2] text-center transition-all ${
          isOpening ? "blur-[1px] opacity-0" : ""
        }`}
        style={{
          boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
          transformOrigin: "center bottom",
        }}
      >
        {/* Vintage paper corner tape */}
        <div className="washi-tape top-[-12px] left-[50%] translate-x-[-50%] w-24" />

        {/* Paper texture lines watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,#000,#000_1px,transparent_1px,transparent_24px)]" />

        <div className="min-h-[290px] flex flex-col items-center justify-center space-y-6">
          {/* Handwritten Line 1 */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="font-serif text-2xl sm:text-3xl text-[#2a241f] italic font-normal tracking-wide"
              >
                &ldquo;Some bonds are never planned.&rdquo;
              </motion.p>
            )}
          </AnimatePresence>

          {/* Handwritten Line 2 */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="font-hand text-3xl sm:text-4xl text-[#7a6452] font-semibold"
              >
                They just happen.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Handwritten Line 3 & Heart */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="flex items-center justify-center gap-3"
              >
                <span className="font-hand text-2xl sm:text-3xl text-[#4a3e35]">
                  And before you realize it...
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.3, 1] }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-[#c24134] text-2xl inline-block"
                >
                  ❤️
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Handwritten Line 4 */}
          <AnimatePresence>
            {step >= 4 && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif text-3xl sm:text-4xl text-[#1f1a16] font-bold tracking-tight"
              >
                they become home.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Names */}
          <AnimatePresence>
            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="pt-4 border-t border-[#dfd2be] w-3/4 mx-auto"
              >
                <p className="font-hand text-2xl sm:text-3xl text-[#825e3f] font-bold tracking-wider">
                  Me • Akka • Machan
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Open Scrapbook Button */}
        <AnimatePresence>
          {step >= 6 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 pt-4 flex flex-col items-center gap-3"
            >
              <button
                onClick={handleStartMusicAndOpen}
                disabled={isOpening}
                className="stamp-btn text-base sm:text-lg group shadow-xl hover:shadow-2xl"
              >
                <BookOpen size={20} className="text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Open our scrapbook →</span>
              </button>
              
              <span className="text-xs font-hand text-base text-[#806f5e]">
                Turn up your volume for the full experience 🎧
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
