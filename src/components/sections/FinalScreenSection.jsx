import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function FinalScreenSection({ currentLang, customPhotos }) {
  const content = birthdayData.finalScreen[currentLang];
  const finalPhotoSrc = customPhotos?.finalPhoto || "/photos/final-photo.jpg";

  return (
    <footer className="w-full py-28 px-4 sm:px-8 relative bg-[#0B0418] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Background Deep Purple Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-10">
        {/* Minimal Hero Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-48 sm:w-56 aspect-square rounded-3xl overflow-hidden glass-card-dark border-[#A78BFA]/30 shadow-2xl purple-glow relative"
        >
          <img
            src={finalPhotoSrc}
            alt="Machan Birthday"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0418]/60 via-transparent to-transparent flex items-end justify-center p-3">
            <Heart size={18} className="text-[#F43F5E]" />
          </div>
        </motion.div>

        {/* Big Birthday Wish */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight purple-glow-text">
            {content.heading}
          </h2>
          <div className="font-sans text-lg sm:text-xl text-[#DDD6FE]/80 font-light space-y-1">
            <p>{content.line1}</p>
            <p className="text-white font-medium">{content.line2}</p>
          </div>
        </div>

        {/* TO BE CONTINUED */}
        <div className="pt-6 border-t border-[#7C3AED]/20 w-full max-w-xs space-y-2">
          <span className="font-serif text-2xl sm:text-3xl font-black text-[#A78BFA] tracking-widest block">
            {content.toBeContinued}
          </span>
          <p className="text-xs font-mono text-[#DDD6FE]/50 tracking-wider">
            {content.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
