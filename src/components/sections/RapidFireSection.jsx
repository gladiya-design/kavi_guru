import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles, Check, Send } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";
import { audioManager } from "../../utils/audioManager";

export default function RapidFireSection({ currentLang }) {
  const content = birthdayData.rapidFire[currentLang];
  const pairs = birthdayData.rapidFire.pairs;
  const [answers, setAnswers] = useState({});
  const [oneWord, setOneWord] = useState("");
  const [submittedWord, setSubmittedWord] = useState(false);

  const handleChoose = (pairId, choice) => {
    setAnswers((prev) => ({ ...prev, [pairId]: choice }));
    audioManager.playPaperSound();
  };

  const handleWordSubmit = (e) => {
    e.preventDefault();
    if (oneWord.trim()) {
      setSubmittedWord(true);
      audioManager.playChimeSound();
    }
  };

  const totalAnswered = Object.keys(answers).length + (submittedWord ? 1 : 0);
  const isAllAnswered = totalAnswered >= pairs.length;

  return (
    <section className="w-full py-24 px-4 sm:px-8 relative bg-[#160B2E] text-white overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA]/30 text-[#DDD6FE] text-xs font-mono uppercase tracking-widest mb-3">
            <Zap size={14} className="text-[#FBBF24]" />
            <span>{content.subheading}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white purple-glow-text">
            {content.heading}
          </h2>
        </div>

        {/* Rapid Fire List */}
        <div className="w-full space-y-4 mb-10">
          {pairs.map((pair) => {
            if (pair.isInput) {
              return (
                <div
                  key={pair.id}
                  className="glass-card-dark rounded-2xl p-5 border border-[#7C3AED]/30 space-y-3"
                >
                  <span className="text-sm font-mono text-[#A78BFA] uppercase tracking-wider block">
                    {pair.optA}
                  </span>
                  {!submittedWord ? (
                    <form onSubmit={handleWordSubmit} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type one word..."
                        value={oneWord}
                        onChange={(e) => setOneWord(e.target.value)}
                        className="flex-1 bg-[#0E061F]/80 border border-[#7C3AED]/40 rounded-xl px-4 py-2.5 text-white placeholder-[#A78BFA]/40 focus:outline-hidden focus:border-[#A78BFA] text-base"
                      />
                      <button
                        type="submit"
                        className="btn-primary-purple px-5 py-2.5 rounded-xl font-medium inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Send size={15} />
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#7C3AED]/20 border border-[#A78BFA]/40 text-white font-serif text-lg font-bold">
                      <span>&ldquo;{oneWord}&rdquo;</span>
                      <span className="text-xs font-mono text-emerald-300 font-normal">Locked In ✓</span>
                    </div>
                  )}
                </div>
              );
            }

            const chosen = answers[pair.id];
            return (
              <div
                key={pair.id}
                className="grid grid-cols-2 gap-3"
              >
                <button
                  onClick={() => handleChoose(pair.id, pair.optA)}
                  className={`p-4 rounded-2xl border text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                    chosen === pair.optA
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] border-white text-white font-bold shadow-lg purple-glow"
                      : "glass-card-dark border-[#7C3AED]/20 text-[#DDD6FE] hover:border-[#A78BFA]/50"
                  }`}
                >
                  {pair.optA}
                </button>

                <button
                  onClick={() => handleChoose(pair.id, pair.optB)}
                  className={`p-4 rounded-2xl border text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                    chosen === pair.optB
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] border-white text-white font-bold shadow-lg purple-glow"
                      : "glass-card-dark border-[#7C3AED]/20 text-[#DDD6FE] hover:border-[#A78BFA]/50"
                  }`}
                >
                  {pair.optB}
                </button>
              </div>
            );
          })}
        </div>

        {/* Playful Outro Quote */}
        {isAllAnswered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full glass-card-dark rounded-2xl p-6 border border-[#A78BFA]/40 text-center space-y-2 purple-glow"
          >
            <p className="font-serif text-2xl font-bold text-white">
              &ldquo;{content.endQuote1}&rdquo;
            </p>
            <p className="font-sans text-lg text-[#DDD6FE]">
              {content.endQuote2}
            </p>
            <p className="font-mono text-sm text-[#F43F5E] font-bold">
              {content.endQuote3}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
