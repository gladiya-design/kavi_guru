import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, CheckCircle2, Play, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

export default function Chapter12_OneWeek({ onNext }) {
  const [levelCheckStarted, setLevelCheckStarted] = useState(false);
  const [levelCheckFinished, setLevelCheckFinished] = useState(false);
  const cards = scrapbookConfig.weekCards;

  const handleStartLevelCheck = () => {
    setLevelCheckStarted(true);
    audioManager.playPaperSound();

    setTimeout(() => {
      setLevelCheckFinished(true);
      audioManager.playChimeSound();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#b45309] border-b border-[#b45309]/40 pb-1">
          Chapter 12
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black mt-2 tracking-tight uppercase">
          One Week
        </h2>
        <p className="font-hand text-2xl sm:text-3xl text-[#6e5844] font-bold mt-2">
          &ldquo;I stayed at akka&apos;s home for a week.&rdquo;
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-12">
        {/* Funny Daily Schedule Cards Collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
          {cards.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.04, rotate: (idx % 2 === 0 ? 1 : -1) * 2 }}
              className="p-5 rounded-xl border border-[#d6c5ad] shadow-md flex flex-col justify-between min-h-[130px] relative transition-transform"
              style={{ backgroundColor: card.color }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#69533f]">
                  CARD {card.number}
                </span>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <p className="font-hand text-2xl sm:text-3xl font-bold text-[#2e2319] leading-tight">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Week Completed Stamp */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#2d2218] text-[#fbf6ec] px-6 py-3 rounded-full font-mono text-sm sm:text-base font-bold shadow-xl tracking-wider"
        >
          <CheckCircle2 size={20} className="text-emerald-400" />
          <span>WEEK COMPLETED ✅</span>
        </motion.div>

        {/* MINI GAME: LEVEL CHECK */}
        <div className="w-full max-w-lg bg-[#ffffff] border-2 border-dashed border-[#bfa98e] rounded-2xl p-6 sm:p-8 shadow-xl text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold">
              Mini Game
            </span>
            <h3 className="font-serif text-3xl font-black text-[#261f18] pt-2">
              LEVEL CHECK
            </h3>
            <p className="font-hand text-2xl text-[#7a6450] font-bold">
              Who is the bigger troublemaker?
            </p>
          </div>

          {!levelCheckStarted ? (
            <button
              onClick={handleStartLevelCheck}
              className="stamp-btn text-base mx-auto"
            >
              <Play size={18} />
              <span>Run Troublemaker Scan 🔍</span>
            </button>
          ) : (
            <div className="space-y-4 text-left font-mono text-xs sm:text-sm">
              {/* Me Bar */}
              <div>
                <div className="flex justify-between font-bold mb-1 text-[#423428]">
                  <span>Me</span>
                  <span>80%</span>
                </div>
                <div className="h-3 w-full bg-[#eee5d3] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Machan Bar */}
              <div>
                <div className="flex justify-between font-bold mb-1 text-[#423428]">
                  <span>Machan</span>
                  <span>90%</span>
                </div>
                <div className="h-3 w-full bg-[#eee5d3] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.8 }}
                    className="h-full bg-orange-600 rounded-full"
                  />
                </div>
              </div>

              {/* Akka Bar (100% Joke!) */}
              <div>
                <div className="flex justify-between font-bold mb-1 text-[#c24134]">
                  <span>Akka (Victim / Boss)</span>
                  <span>100% 🔥</span>
                </div>
                <div className="h-3 w-full bg-[#eee5d3] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5 }}
                    className="h-full bg-[#c24134] rounded-full"
                  />
                </div>
              </div>

              {/* Joke Verdict */}
              {levelCheckFinished && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#fef2f2] border border-[#fecaca] p-4 rounded-xl text-center space-y-1 mt-4"
                >
                  <div className="flex items-center justify-center gap-2 text-[#b91c1c] font-black text-2xl font-serif">
                    <Trophy size={24} />
                    <span>Akka wins. 😂</span>
                  </div>
                  <p className="font-hand text-xl text-[#7f1d1d] font-bold">
                    Just kidding! Machan and I drove her completely crazy all week.
                  </p>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7765] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
