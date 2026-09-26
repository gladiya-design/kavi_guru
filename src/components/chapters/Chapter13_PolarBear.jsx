import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, IceCream2, Sparkles } from "lucide-react";

export default function Chapter13_PolarBear({ onNext, onSelectPhoto }) {
  const [skipAnswer, setSkipAnswer] = useState(null); // 'yes' or 'no'
  const photo = scrapbookConfig.photos.polarBear;

  const handleSkipQuestion = (ans) => {
    setSkipAnswer(ans);
    if (ans === "no") {
      audioManager.playChimeSound();
    } else {
      audioManager.playPaperSound();
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#2c221a] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Melting Ice Cream Top Drips Decorative SVGs */}
      <div className="absolute top-0 inset-x-0 h-10 pointer-events-none opacity-40">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#f1dfca]">
          <path d="M0,0 L1200,0 L1200,40 Q1150,90 1100,40 Q1050,110 1000,40 Q950,70 900,40 Q850,120 800,40 Q750,80 700,40 Q650,110 600,40 Q550,70 500,40 Q450,120 400,40 Q350,80 300,40 Q250,110 200,40 Q150,70 100,40 Q50,110 0,40 Z" />
        </svg>
      </div>

      {/* Chapter header */}
      <div className="text-center mb-10 z-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a85c32] border-b border-[#a85c32]/40 pb-1">
          Chapter 13
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black mt-2 tracking-tight uppercase">
          Polar Bear
        </h2>
        <div className="flex items-center justify-center gap-2 text-sm font-mono text-[#8a735e] mt-2">
          <IceCream2 size={18} className="text-[#a85c32]" />
          <span>The Sacred Sundae Ritual</span>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-10 z-10">
        <div className="text-center space-y-3 font-serif text-lg sm:text-2xl max-w-xl">
          <p className="text-[#614e3e]">
            Then came one of the most important decisions of the week.
          </p>
          <p className="font-serif text-4xl sm:text-5xl font-black text-[#a8501c] tracking-wider">
            ICE CREAM.
          </p>
        </div>

        {/* Polar Bear Polaroid */}
        <div className="w-64 sm:w-80">
          <Polaroid
            src={photo.src}
            caption={photo.caption}
            tilt={-3}
            tapeColor="rose"
            badge="POLAR BEAR"
            onClick={() => onSelectPhoto && onSelectPhoto("polarBear")}
          />
        </div>

        <p className="font-hand text-3xl sm:text-4xl text-center text-[#2e2319] font-bold max-w-md">
          &ldquo;Because apparently every good memory needs ice cream.&rdquo;
        </p>

        {/* Interactive Question: Would we skip ice cream? */}
        <div className="w-full max-w-md bg-white border border-[#dfd2be] rounded-2xl p-6 shadow-md text-center space-y-4">
          <p className="font-serif text-xl font-bold text-[#2a221b]">
            Would we skip ice cream?
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleSkipQuestion("yes")}
              className={`px-6 py-2.5 rounded-full font-hand text-2xl font-bold border transition-all ${
                skipAnswer === "yes"
                  ? "bg-red-100 border-red-400 text-red-800 scale-95"
                  : "bg-[#f8f3e8] border-[#cbb89e] hover:border-[#826a50]"
              }`}
            >
              YES
            </button>

            <button
              onClick={() => handleSkipQuestion("no")}
              className={`px-6 py-2.5 rounded-full font-hand text-2xl font-bold border transition-all ${
                skipAnswer === "no"
                  ? "bg-emerald-100 border-emerald-400 text-emerald-800 scale-105 shadow-md"
                  : "bg-[#f8f3e8] border-[#cbb89e] hover:border-[#826a50]"
              }`}
            >
              NO
            </button>
          </div>

          <AnimatePresence>
            {skipAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-lg font-bold pt-2"
              >
                {skipAnswer === "yes" ? (
                  <span className="text-[#c24134]">
                    &ldquo;Absolutely not. Are you out of your mind?! 🍦&rdquo;
                  </span>
                ) : (
                  <span className="text-emerald-700 flex items-center justify-center gap-1.5">
                    <Sparkles size={18} />
                    <span>&ldquo;Correct. Never in a million years.&rdquo;</span>
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center z-10">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-[#2c221a] transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
