import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audioManager } from "../../utils/audioManager";
import { Heart, RotateCcw, ArrowRight, Sparkles } from "lucide-react";

export default function FinalScreen({ onRestart }) {
  const [clickedNext, setClickedNext] = useState(false);

  const handleNextMemoryClick = () => {
    setClickedNext(true);
    audioManager.playChimeSound();
  };

  return (
    <div className="min-h-screen bg-[#0d0c0b] text-[#ede5d8] py-24 px-4 sm:px-8 flex flex-col items-center justify-center relative select-none">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Trio Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center gap-3 font-serif text-3xl sm:text-5xl font-black text-white tracking-wide"
        >
          <span>ME</span>
          <span className="text-[#c24134] animate-pulse">❤️</span>
          <span>AKKA</span>
          <span className="text-[#c24134] animate-pulse">❤️</span>
          <span>MACHAN</span>
        </motion.div>

        {/* To be continued */}
        <div className="space-y-3">
          <p className="font-serif italic text-3xl sm:text-4xl text-amber-200/90">
            To be continued...
          </p>
          <p className="font-hand text-2xl sm:text-3xl text-[#9c8976]">
            &ldquo;Because this scrapbook isn&apos;t finished yet.&rdquo;
          </p>
        </div>

        {/* Next Memory Button */}
        <div className="pt-4 flex flex-col items-center">
          {!clickedNext ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleNextMemoryClick}
              className="stamp-btn text-lg bg-[#241e1a] border-[#6b5847] hover:border-amber-400 group"
            >
              <span>Next memory →</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-amber-300" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1f1a17] border border-[#524133] rounded-2xl p-6 sm:p-8 space-y-3 max-w-md shadow-2xl"
            >
              <div className="font-serif text-2xl font-bold text-amber-300">
                &ldquo;Not yet.&rdquo;
              </div>
              <p className="font-hand text-3xl text-white font-bold">
                That memory hasn&apos;t happened.
              </p>
              <p className="font-serif text-xl text-[#dfcca9] italic">
                Go make it first. ❤️
              </p>

              {/* Glowing Heart Micro-Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  filter: ["drop-shadow(0 0 0px #c24134)", "drop-shadow(0 0 16px #c24134)", "drop-shadow(0 0 0px #c24134)"],
                }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="text-[#c24134] text-4xl inline-block pt-2"
              >
                ❤️
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Replay Scrapbook option */}
        <div className="pt-12">
          <button
            onClick={() => {
              audioManager.playPaperSound();
              onRestart();
            }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7a6857] hover:text-[#dfcca9] transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Turn back to page one</span>
          </button>
        </div>
      </div>
    </div>
  );
}
