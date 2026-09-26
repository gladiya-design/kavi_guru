import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown } from "lucide-react";

export default function Chapter1_Distance({ onNext, onSelectPhoto }) {
  const [revealedHurt, setRevealedHurt] = useState(false);
  const photo = scrapbookConfig.photos.earlyPhoto;

  const handleRevealHurt = () => {
    setRevealedHurt(true);
    audioManager.playPaperSound();
    // Music becomes quieter as specified in the prompt
    audioManager.setChapterVolumeMultiplier(0.35);
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 py-16 px-4 sm:px-8 flex flex-col items-center justify-center relative ${
      revealedHurt ? "bg-[#181615] text-[#d6ccc2]" : "bg-[#f5ecdd] text-[#2c241c]"
    }`}>
      {/* Chapter Badge */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8825c] border-b border-[#a8825c]/40 pb-1">
          Chapter 01
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          &ldquo;It Didn&apos;t Start Like This&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Intro Story Lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 font-serif text-lg sm:text-xl leading-relaxed"
        >
          <p className="italic text-[#786655]">Once upon a time...</p>
          <p>I knew him simply as my akka&apos;s person.</p>
          <p>
            When my akka started talking to him, I started talking to him too.
          </p>
          <p className="font-hand text-2xl text-[#8d623d] font-bold">
            To me, he was like a brother.
          </p>
        </motion.div>

        {/* Polaroid: disappears or fades when hurt is revealed */}
        <motion.div
          animate={{
            opacity: revealedHurt ? 0.15 : 1,
            scale: revealedHurt ? 0.9 : 1,
            filter: revealedHurt ? "grayscale(100%) blur(2px)" : "grayscale(15%)",
          }}
          transition={{ duration: 1.2 }}
          className="my-10 w-64 sm:w-72"
        >
          <Polaroid
            src={photo.src}
            caption={photo.caption}
            tilt={-3}
            tapeColor="rose"
            onClick={() => onSelectPhoto && onSelectPhoto("earlyPhoto")}
          />
        </motion.div>

        {/* Emotional Shift */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center space-y-3 font-serif text-lg sm:text-xl max-w-lg"
        >
          <p>But then they became closer.</p>
          <p>My akka told me that he was important to her.</p>
          <p className="italic text-[#9e7b5a]">And honestly...</p>
          <p className="font-serif text-2xl font-bold text-[#b44332]">I got hurt.</p>
        </motion.div>

        {/* Interactive Button: How hurt? */}
        <div className="mt-8 flex flex-col items-center">
          {!revealedHurt ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRevealHurt}
              className="paper-btn text-base sm:text-lg border-[#b44332]/50 hover:border-[#b44332]"
            >
              <span>How hurt?</span>
              <span className="text-[#b44332]">💔</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center space-y-4 mt-2"
            >
              <p className="font-hand text-3xl sm:text-4xl text-[#e67366] font-bold">
                &ldquo;Enough to stop talking.&rdquo;
              </p>
              <p className="font-serif text-lg text-[#b8a896] max-w-md mx-auto italic">
                So I stopped talking to both of them.
              </p>
              <div className="pt-2 text-xs font-mono text-[#8a7a6a]">
                [Visual silence: The pages emptied. The music fell quiet.]
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Turn Page / Keep going prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={onNext}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8f7e6f] hover:text-[#d9caa9] transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}