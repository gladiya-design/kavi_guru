import React, { useState } from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, BellRing, Smartphone, HeartHandshake } from "lucide-react";

export default function Chapter3_TheNews({ onNext, onSelectPhoto }) {
  const [revealedNews, setRevealedNews] = useState(false);
  const photo = scrapbookConfig.photos.wedding;

  const handleRevealNews = () => {
    setRevealedNews(true);
    audioManager.playPaperSound();
  };

  return (
    <div className="min-h-screen bg-[#1c1917] text-[#ebe4d8] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-500/80 border-b border-amber-500/30 pb-1">
          Chapter 03
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#f5eedc]">
          &ldquo;The News&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Phone Notification Dramatic Animation */}
        {!revealedNews ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#292420] border border-[#524436] rounded-2xl p-5 shadow-2xl text-center space-y-4 cursor-pointer hover:border-amber-500/50 transition-colors"
            onClick={handleRevealNews}
          >
            <div className="w-12 h-12 rounded-full bg-amber-900/40 text-amber-400 mx-auto flex items-center justify-center animate-bounce">
              <BellRing size={24} />
            </div>
            <div>
              <p className="font-serif text-xl text-[#f3ede1]">
                &ldquo;One day, my father told us...&rdquo;
              </p>
              <p className="text-xs text-[#9c8a77] mt-1 font-mono">
                Tap to hear what happened next
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center space-y-8"
          >
            <div className="text-center space-y-4">
              <p className="font-serif text-2xl sm:text-3xl text-amber-200/90 italic font-semibold">
                &ldquo;My akka had left home and married him.&rdquo;
              </p>
              <p className="text-sm font-mono text-[#91816f] tracking-wide">
                [The room went completely silent.]
              </p>
              <p className="font-hand text-3xl text-[#dfcca9] font-bold">
                They were together.
              </p>
            </div>

            {/* Wedding Polaroid */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="w-64 sm:w-80 my-4"
            >
              <Polaroid
                src={photo.src}
                caption={photo.caption}
                tilt={2}
                tapeColor="rose"
                badge="WEDDING DAY"
                onClick={() => onSelectPhoto && onSelectPhoto("wedding")}
              />
            </motion.div>

            {/* Emotional Waiting Narrative */}
            <div className="text-center space-y-3 font-serif text-lg sm:text-xl max-w-lg leading-relaxed text-[#d4c6b2]">
              <p>I was happy that they were together.</p>
              <p className="text-amber-400/90 font-medium">But I was also waiting.</p>
              <p className="italic text-[#a89782]">Waiting for a message.</p>
              <p className="italic text-[#a89782]">Waiting to know how they were.</p>
            </div>

            {/* Animated Phone Screen: NO NEW MESSAGE */}
            <div className="w-full max-w-xs bg-[#12100e] border border-[#3e342a] rounded-xl p-4 shadow-xl font-mono text-center space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#6e5d4e] border-b border-[#2b241c] pb-2">
                <span>09:41 PM</span>
                <Smartphone size={14} />
              </div>
              <div className="space-y-2 py-2">
                <div className="text-xs text-[#a63428] bg-[#22100d] py-1.5 px-3 rounded animate-pulse">
                  • NO NEW MESSAGE
                </div>
                <div className="text-xs text-[#a63428] bg-[#22100d] py-1.5 px-3 rounded animate-pulse [animation-delay:400ms]">
                  • NO NEW MESSAGE
                </div>
                <div className="text-xs text-[#a63428] bg-[#22100d] py-1.5 px-3 rounded animate-pulse [animation-delay:800ms]">
                  • NO NEW MESSAGE
                </div>
              </div>
              <p className="text-[10px] text-[#716151] italic">
                The silence was heavy.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Turn Page prompt */}
      {revealedNews && (
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={() => {
              audioManager.playPaperSound();
              onNext();
            }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7967] hover:text-amber-200 transition-colors group cursor-pointer"
          >
            <span>Turn the page →</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
