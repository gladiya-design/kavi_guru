import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X, ImageOff } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

/**
 * MemoryCard — clean display-only card, no upload controls.
 * Click opens the lightbox.
 */
function MemoryCard({ item, currentLang, onSelect }) {
  const [imgFailed, setImgFailed] = useState(false);
  const captionText = item.caption[currentLang] || item.caption.english;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onClick={() => !imgFailed && onSelect({ src: item.src, caption: captionText, date: item.date })}
      className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#DDD6FE]/50 hover:border-[#A78BFA]/60 transition-all duration-300 ${!imgFailed ? "cursor-pointer" : ""}`}
    >
      {/* Photo */}
      <div className="relative w-full aspect-square bg-[#EDE9FE]">
        {!imgFailed ? (
          <>
            <img
              src={item.src}
              alt={captionText}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgFailed(true)}
            />

            {/* Bottom gradient with date label */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#160B2E]/70 to-transparent p-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-[10px] font-mono truncate">{item.date}</span>
              <span className="text-white text-[10px] font-mono flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full">
                <ZoomIn size={10} /> View
              </span>
            </div>
          </>
        ) : (
          /* Placeholder if image missing */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#EDE9FE] to-[#F5F3FF] p-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-white shadow text-[#7C3AED] flex items-center justify-center mb-2">
              <ImageOff size={20} />
            </div>
            <p className="font-serif text-[11px] font-bold text-[#5B21B6] leading-tight line-clamp-2">{captionText}</p>
            <span className="text-[9px] text-[#7C3AED]/50 font-mono mt-1 uppercase tracking-wider">{item.date}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function MemoryExperienceSection({ currentLang }) {
  const content = birthdayData.memories[currentLang];
  const items = birthdayData.memories.items;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="w-full h-full py-5 px-4 sm:px-8 bg-[#F5F3FF] text-[#160B2E] flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-full">

        {/* Header */}
        <div className="text-center mb-4 pt-3 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#5B21B6] text-xs font-mono uppercase tracking-widest mb-1">
            <Camera size={12} />
            <span>Curated Moments</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#160B2E]">
            {content.heading}
          </h2>
          <p className="text-xs text-[#5B21B6]/60 font-sans mt-0.5">{content.subheading}</p>
        </div>

        {/* 4-col photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {items.map((item) => (
            <MemoryCard
              key={item.id}
              item={item}
              currentLang={currentLang}
              onSelect={setSelectedPhoto}
            />
          ))}
        </div>

        {/* Tap hint */}
        <p className="mt-2 text-[10px] text-[#7C3AED]/50 font-mono text-center shrink-0">
          Tap any photo to view it
        </p>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[60] bg-[#160B2E]/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-10"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center max-w-3xl w-full"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-h-[72vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="text-center mt-4 space-y-1">
                <span className="text-[11px] font-mono text-[#A78BFA] uppercase tracking-wider block">
                  {selectedPhoto.date}
                </span>
                <p className="font-serif text-lg sm:text-2xl text-white font-medium">
                  &ldquo;{selectedPhoto.caption}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
