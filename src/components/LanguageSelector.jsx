import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageSelector({ currentLang, onSelectLang }) {
  const options = [
    { code: "tamil", label: "தமிழ்" },
    { code: "tanglish", label: "Tanglish" },
    { code: "english", label: "English" },
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 bg-[#1F113D]/80 backdrop-blur-md rounded-full border border-[#7C3AED]/30 shadow-lg">
      <div className="pl-2 pr-1 text-[#A78BFA]">
        <Globe size={14} className="opacity-80" />
      </div>
      {options.map((opt) => {
        const isActive = currentLang === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => onSelectLang(opt.code)}
            className={`relative px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
              isActive
                ? "text-white font-semibold"
                : "text-[#DDD6FE]/70 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLangIndicator"
                className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] rounded-full shadow-md -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
