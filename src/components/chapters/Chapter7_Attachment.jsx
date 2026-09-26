import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, AlertCircle, CheckCircle2, Laugh } from "lucide-react";

export default function Chapter7_Attachment({ onNext }) {
  const [quizAnswer, setQuizAnswer] = useState(null); // 'me', 'machan', 'both'

  const handleAnswer = (choice) => {
    setQuizAnswer(choice);
    if (choice === "both") {
      audioManager.playChimeSound();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
      });
    } else {
      audioManager.playPaperSound();
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#b45309] border-b border-[#b45309]/40 pb-1">
          Chapter 07
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          &ldquo;Somewhere Along The Way...&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-12">
        {/* Warm Narrative Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-3 font-serif text-xl sm:text-2xl leading-relaxed max-w-xl text-[#3d3127]"
        >
          <p>Somewhere between the conversations...</p>
          <p className="italic text-[#876a52]">the jokes...</p>
          <p className="italic text-[#876a52]">the teasing...</p>
          <p className="italic text-[#876a52]">the random nonsense...</p>
          <p className="font-hand text-3xl sm:text-4xl text-[#b45309] font-bold pt-2">
            something changed.
          </p>
        </motion.div>

        {/* Heart of the Chapter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#faf5eb] border border-[#e5d8c3] p-8 sm:p-10 rounded-sm shadow-md text-center space-y-4 max-w-lg w-full relative"
        >
          <div className="washi-tape top-[-14px] left-[50%] -translate-x-1/2 w-28" />

          <p className="font-serif text-xl text-[#2a221b]">
            I became really attached to my machan.
          </p>
          <p className="font-serif text-lg text-[#665444] italic">
            He wasn&apos;t just my akka&apos;s husband anymore.
          </p>
          <p className="font-serif text-xl text-[#2a221b]">He became...</p>
          <p className="font-serif text-3xl sm:text-4xl text-[#a8501c] font-black tracking-wide pt-2">
            My machan.
          </p>
        </motion.div>

        {/* FUNNY INTERACTIVE INTERRUPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-lg bg-[#fcf5e5] border-2 border-dashed border-[#b89569] p-6 sm:p-8 rounded-xl shadow-xl text-center space-y-6 relative overflow-hidden"
        >
          <div className="inline-block bg-[#c24134] text-white font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
            🚨 Interruption
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-4xl sm:text-5xl font-black text-[#852a1e]">
              WAIT.
            </h3>
            <p className="font-hand text-2xl sm:text-3xl text-[#574435] font-bold">
              Important question.
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#1f1712] font-semibold pt-2">
              Who irritates akka more?
            </p>
          </div>

          {/* Interactive Choice Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => handleAnswer("me")}
              className={`p-3 rounded-lg border font-hand text-xl font-bold transition-all ${
                quizAnswer === "me"
                  ? "bg-[#fed7d7] border-[#e53e3e] text-[#9b2c2c] scale-95"
                  : "bg-white border-[#d3c2aa] hover:border-[#856b50]"
              }`}
            >
              ME 😇
            </button>

            <button
              onClick={() => handleAnswer("machan")}
              className={`p-3 rounded-lg border font-hand text-xl font-bold transition-all ${
                quizAnswer === "machan"
                  ? "bg-[#fed7d7] border-[#e53e3e] text-[#9b2c2c] scale-95"
                  : "bg-white border-[#d3c2aa] hover:border-[#856b50]"
              }`}
            >
              MACHAN 😇
            </button>

            <button
              onClick={() => handleAnswer("both")}
              className={`p-3 rounded-lg border font-hand text-xl font-bold transition-all ${
                quizAnswer === "both"
                  ? "bg-[#d1fae5] border-[#10b981] text-[#065f46] scale-105 shadow-md"
                  : "bg-white border-[#d3c2aa] hover:border-[#856b50]"
              }`}
            >
              BOTH 💀
            </button>
          </div>

          {/* Answer Feedback */}
          <AnimatePresence>
            {quizAnswer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pt-2"
              >
                {quizAnswer === "both" ? (
                  <div className="bg-[#ecfdf5] border border-[#a7f3d0] p-4 rounded-lg space-y-1 text-emerald-900">
                    <p className="font-serif font-black text-2xl text-emerald-700">
                      CORRECT! 🎯
                    </p>
                    <p className="font-hand text-2xl text-[#1f4a38] font-bold">
                      Finally, someone understands us! 😂
                    </p>
                    <p className="text-xs text-emerald-800/80 font-mono">
                      (She never stood a chance against our tag team.)
                    </p>
                  </div>
                ) : (
                  <div className="bg-[#fff5f5] border border-[#fed7d7] p-3 rounded-lg space-y-1 text-red-900 animate-shake">
                    <p className="font-serif font-bold text-xl text-red-700">
                      Wrong! 🙅‍♂️
                    </p>
                    <p className="font-hand text-lg text-red-800">
                      You underestimate our joint troublemaking skills. Try again!
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8c7966] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
