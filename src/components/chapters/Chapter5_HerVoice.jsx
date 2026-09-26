import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Volume2, Sparkles } from "lucide-react";

export default function Chapter5_HerVoice({ onNext, onSelectPhoto }) {
  const [stage, setStage] = useState(0);
  const photo = scrapbookConfig.photos.akka;

  useEffect(() => {
    // 2-second progression for this deep emotional moment
    const t1 = setTimeout(() => setStage(1), 1500); // "Then one day..."
    const t2 = setTimeout(() => setStage(2), 3500); // "I heard my akka's voice."
    const t3 = setTimeout(() => {
      setStage(3); // Tears rolling & reveal
      audioManager.playChimeSound();
      audioManager.setChapterVolumeMultiplier(0.9); // Music swells back
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0c0b] text-[#f7eee1] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative transition-colors duration-1000">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8825c] border-b border-[#a8825c]/30 pb-1">
          Chapter 05
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#fff]">
          &ldquo;Her Voice&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Stage 1 & 2: Black screen whisper */}
        <div className="min-h-[120px] flex flex-col items-center justify-center space-y-4">
          <AnimatePresence>
            {stage >= 1 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="font-serif italic text-xl sm:text-2xl text-[#a89580]"
              >
                Then one day...
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="flex items-center gap-3 font-serif text-2xl sm:text-4xl text-[#f5ebd9] font-bold"
              >
                <Volume2 size={28} className="text-amber-400 animate-pulse" />
                <span>&ldquo;I heard my akka&apos;s voice.&rdquo;</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stage 3: Emotional tears and Akka Photo Reveal */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="w-full flex flex-col items-center space-y-8"
            >
              <div className="space-y-3 font-serif text-lg sm:text-2xl text-[#d9c7b4]">
                <p className="font-hand text-3xl sm:text-4xl text-[#e68377] font-bold">
                  And my tears just started rolling.
                </p>
                <p className="italic text-[#baa48d]">
                  I didn&apos;t know how to explain how much I needed her.
                </p>
              </div>

              {/* Akka Polaroid */}
              <div className="w-64 sm:w-76 my-4">
                <Polaroid
                  src={photo.src}
                  caption={photo.caption}
                  tilt={-2}
                  tapeColor="rose"
                  badge="MY AKKA"
                  onClick={() => onSelectPhoto && onSelectPhoto("akka")}
                />
              </div>

              <div className="text-center space-y-2">
                <p className="font-hand text-2xl text-amber-300">After that...</p>
                <p className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  We started talking again.
                </p>
              </div>

              {/* Two separated Polaroids slowly moving together */}
              <div className="pt-6 w-full max-w-md">
                <div className="relative h-24 flex items-center justify-center">
                  <motion.div
                    initial={{ x: -100, rotate: -12 }}
                    animate={{ x: -24, rotate: -4 }}
                    transition={{ duration: 2.2, ease: "easeOut" }}
                    className="absolute bg-[#faf6ee] text-[#2b241e] px-4 py-2 rounded shadow-lg font-hand text-lg border border-[#d9ccb6]"
                  >
                    Akka 🌸
                  </motion.div>

                  <motion.div
                    initial={{ x: 100, rotate: 12 }}
                    animate={{ x: 24, rotate: 4 }}
                    transition={{ duration: 2.2, ease: "easeOut" }}
                    className="absolute bg-[#faf6ee] text-[#2b241e] px-4 py-2 rounded shadow-lg font-hand text-lg border border-[#d9ccb6]"
                  >
                    Me 💫
                  </motion.div>
                </div>

                <p className="font-hand text-2xl text-amber-200/90 font-bold tracking-wide mt-2">
                  &ldquo;Some bonds survive distance.&rdquo;
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Turn Page prompt */}
      {stage >= 3 && (
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={() => {
              audioManager.playPaperSound();
              onNext();
            }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#a38e78] hover:text-white transition-colors group cursor-pointer"
          >
            <span>Turn the page →</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
