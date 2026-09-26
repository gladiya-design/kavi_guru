import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, X, Heart, Sparkles } from "lucide-react";

export default function MemoryWallSection({ onNext }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const items = scrapbookConfig.memoryWallItems;

  const handleCardClick = (item) => {
    setSelectedCard(item);
    audioManager.playPaperSound();
  };

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a85c32] border-b border-[#a85c32]/40 pb-1">
          Interactive Scrapbook Wall
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black mt-2 tracking-tight text-[#221a14]">
          Things I Miss
        </h2>
        <p className="font-hand text-2xl text-[#786450] font-bold mt-2">
          Tap any memory card to open our thoughts 💌
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* Interactive Scrapbook Pinboard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => handleCardClick(item)}
              className="bg-white p-5 rounded-sm border border-[#decbb4] shadow-md hover:shadow-xl cursor-pointer flex flex-col items-center text-center relative group transition-all"
              style={{
                transform: `rotate(${item.rotation}deg)`,
              }}
            >
              {/* Pushpin at top */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#c24134] shadow-inner mb-3 border border-white" />

              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#261e18]">
                {item.title}
              </h3>
              <p className="font-hand text-lg text-[#856e58] font-semibold mt-1">
                {item.shortDesc}
              </p>
              <span className="text-[10px] font-mono text-[#a89582] mt-3 uppercase tracking-wider opacity-60 group-hover:opacity-100">
                Click to read →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Memory Card Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#faf5ea] rounded-sm p-8 shadow-2xl border border-[#d9c7af]"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 p-2 text-[#7d6855] hover:text-[#261f18] transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="washi-tape top-[-14px] left-[50%] -translate-x-1/2 w-28" />

              <div className="text-center space-y-4">
                <span className="text-5xl inline-block mt-2">{selectedCard.icon}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241c16]">
                  {selectedCard.title}
                </h3>
                <div className="h-0.5 w-16 bg-[#c28f5a] mx-auto opacity-50" />
                <p className="font-serif text-lg text-[#4a3d31] leading-relaxed italic">
                  &ldquo;{selectedCard.detail}&rdquo;
                </p>
                <div className="pt-4 font-hand text-2xl text-[#b45309] font-bold">
                  Forever etched in our heart ❤️
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>Test your knowledge →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
