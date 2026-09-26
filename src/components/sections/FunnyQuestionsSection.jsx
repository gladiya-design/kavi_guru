import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Laugh, CheckCircle2, ArrowRight, RotateCcw } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";
import { audioManager } from "../../utils/audioManager";
import confetti from "canvas-confetti";

export default function FunnyQuestionsSection({ currentLang }) {
  const content = birthdayData.questionsSection[currentLang];
  const questions = birthdayData.questionsSection.questions;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null);

  const q = questions[currentIdx];
  const questionText = q.question[currentLang] || q.question.english;
  const resultText = q.result[currentLang] || q.result.english;

  const handleSelect = (key) => {
    if (selectedKey) return;
    setSelectedKey(key);
    audioManager.playChimeSound();

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#7C3AED", "#A78BFA", "#F43F5E", "#FBBF24"],
    });
  };

  const handleNext = () => {
    setSelectedKey(null);
    audioManager.playPaperSound();
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(0); // loop or restart
    }
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 relative bg-gradient-to-b from-[#160B2E] via-[#241047] to-[#160B2E] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA]/30 text-[#DDD6FE] text-xs font-mono uppercase tracking-widest mb-3">
            <Laugh size={14} className="text-[#A78BFA]" />
            <span>{content.subheading}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white purple-glow-text">
            {content.heading}
          </h2>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full glass-card-dark rounded-3xl p-6 sm:p-10 border border-[#7C3AED]/30 shadow-2xl relative"
        >
          {/* Progress badge */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A78BFA] border-b border-[#7C3AED]/20 pb-3 mb-6">
            <span>QUESTION {currentIdx + 1} OF {questions.length}</span>
            <span className="uppercase tracking-wider">Unfiltered Comedy</span>
          </div>

          {/* Question Text */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
            {questionText}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {q.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isAnswered = selectedKey !== null;

              let btnClasses = "bg-[#160B2E]/60 border-[#7C3AED]/25 hover:border-[#A78BFA] text-[#DDD6FE]";
              if (isAnswered) {
                if (isSelected) {
                  btnClasses = "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] border-white text-white font-bold shadow-lg purple-glow";
                } else {
                  btnClasses = "bg-[#160B2E]/30 border-transparent text-[#A78BFA]/50 opacity-60";
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleSelect(opt.key)}
                  className={`w-full p-4 rounded-2xl border text-left font-sans text-base sm:text-lg transition-all duration-200 flex items-center justify-between cursor-pointer ${btnClasses}`}
                >
                  <span>{opt.text}</span>
                  {isSelected && <CheckCircle2 size={18} className="text-white shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Punchline Result */}
          <AnimatePresence>
            {selectedKey && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-[#7C3AED]/20 border border-[#A78BFA]/40 space-y-4 text-center"
              >
                <p className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  {resultText}
                </p>

                <button
                  onClick={handleNext}
                  className="btn-primary-purple px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentIdx + 1 === questions.length ? "Restart Questions" : "Next Question"}</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
