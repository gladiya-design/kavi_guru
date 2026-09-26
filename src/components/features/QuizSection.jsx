import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, CheckCircle2, XCircle, Trophy, RefreshCcw, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function QuizSection({ onNext }) {
  const questions = scrapbookConfig.quizQuestions;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIdx];

  const handleSelectOption = (opt) => {
    if (selectedOption) return; // prevent multiple clicks
    setSelectedOption(opt);

    if (opt.isCorrect) {
      setScore((prev) => prev + 1);
      audioManager.playChimeSound();
    } else {
      audioManager.playPaperSound();
    }
  };

  const handleNextQuestion = () => {
    audioManager.playPaperSound();
    setSelectedOption(null);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Quiz header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a85c32] border-b border-[#a85c32]/40 pb-1">
          Family Nonsense Test
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-black mt-2 tracking-tight text-[#221a14]">
          &ldquo;How Well Do You Know Us?&rdquo;
        </h2>
        <p className="text-xs font-mono uppercase tracking-wider text-[#8a7562] mt-2">
          5 Questions • High Stakes • Pure Sibling Chaos
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        {!isFinished ? (
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white border border-[#dfd2be] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative"
          >
            {/* Question Counter */}
            <div className="flex items-center justify-between border-b border-[#eee3d1] pb-3 text-xs font-mono text-[#8a7663]">
              <span>QUESTION {currentIdx + 1} OF {questions.length}</span>
              <span className="font-bold text-[#b45309]">Score: {score}</span>
            </div>

            {/* Question Text */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292019] leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const showCorrection = selectedOption !== null;

                let btnStyle = "bg-[#faf6ee] border-[#dfd2be] text-[#332820] hover:border-[#826a50]";
                if (showCorrection) {
                  if (opt.isCorrect) {
                    btnStyle = "bg-[#ecfdf5] border-emerald-500 text-emerald-900 font-bold";
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = "bg-[#fef2f2] border-red-500 text-red-900";
                  } else {
                    btnStyle = "bg-[#faf6ee]/50 border-transparent text-[#99897b] opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-xl border text-left font-serif text-base sm:text-lg transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt.text}</span>
                    {showCorrection && opt.isCorrect && (
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0 ml-2" />
                    )}
                    {showCorrection && isSelected && !opt.isCorrect && (
                      <XCircle size={18} className="text-red-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Button */}
            <AnimatePresence>
              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2 border-t border-[#eee3d1] space-y-4"
                >
                  <p className="font-hand text-2xl text-[#a8501c] font-bold">
                    {selectedOption.response}
                  </p>
                  
                  <button
                    onClick={handleNextQuestion}
                    className="stamp-btn w-full justify-center text-base"
                  >
                    <span>
                      {currentIdx + 1 === questions.length ? "See Final Results →" : "Next Question →"}
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Finished Quiz Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-dashed border-[#bda68a] rounded-2xl p-8 sm:p-10 shadow-2xl text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#b45309] flex items-center justify-center mx-auto shadow-inner">
              <Trophy size={32} />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#261f18]">
                Congratulations! 🎉
              </h3>
              <p className="font-hand text-3xl text-[#b45309] font-bold">
                &ldquo;You survived our family nonsense.&rdquo;
              </p>
              <p className="text-sm font-mono text-[#806c58] pt-1">
                Final Score: {score} / {questions.length} • Certified Trio Insider
              </p>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="paper-btn text-base flex items-center gap-2"
              >
                <RefreshCcw size={16} />
                <span>Play Again</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>What I never said properly →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
