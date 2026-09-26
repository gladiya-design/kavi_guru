import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalInteraction({ onNext }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const choices = [
    { id: "trip", text: "Another trip 🚗" },
    { id: "icecream", text: "Another ice cream 🍦" },
    { id: "nonsense", text: "More nonsense 😂" },
    { id: "all", text: "All of the above ❤️" },
  ];

  const handleSelectChoice = (c) => {
    setSelectedChoice(c);
    audioManager.playChimeSound();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.65 },
    });
  };

  return (
    <div className="min-h-screen bg-[#141211] text-[#ede4d7] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-500/70 border-b border-amber-500/20 pb-1">
          One Last Thought
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#fff]">
          &ldquo;Before You Leave...&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-8 text-center">
        <p className="font-hand text-3xl sm:text-4xl text-amber-300 font-bold">
          One last question.
        </p>
        
        <p className="font-serif text-2xl sm:text-3xl text-white font-semibold">
          What do you think our next memory will be?
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
          {choices.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelectChoice(c)}
              className={`p-4 rounded-xl border font-hand text-2xl font-bold transition-all cursor-pointer ${
                selectedChoice?.id === c.id
                  ? "bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-xl"
                  : "bg-[#241f1c] border-[#473b30] text-[#ded1bf] hover:border-amber-400/50 hover:bg-[#2b2420]"
              }`}
            >
              {c.text}
            </button>
          ))}
        </div>

        {/* Universal Response */}
        <AnimatePresence>
          {selectedChoice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="pt-6 space-y-4"
            >
              <p className="font-serif text-3xl sm:text-4xl font-black text-amber-300">
                &ldquo;Hopefully all of them.&rdquo;
              </p>
              <p className="font-hand text-2xl sm:text-3xl text-[#b8a794]">
                Until the next memory...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Turn to Final Screen */}
      {selectedChoice && (
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={() => {
              audioManager.playPaperSound();
              onNext();
            }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-white transition-colors group cursor-pointer"
          >
            <span>The scrapbook closing →</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
