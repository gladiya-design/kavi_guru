import React from "react";
import { motion } from "framer-motion";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Heart } from "lucide-react";

export default function FinalLetterSection({ onNext }) {
  const { finalLetter } = scrapbookConfig;

  return (
    <div className="min-h-screen bg-[#1c1a18] text-[#2c221a] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-500/70 border-b border-amber-500/20 pb-1">
          A Handwritten Letter
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#faf5ea]">
          Our Story in Ink
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Realistic Handwritten Parchment Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full bg-[#fbf7ee] rounded-sm p-8 sm:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-[#e5d9c3] space-y-6"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 33px, #e8dfd0 33px, #e8dfd0 34px)",
            lineHeight: "34px",
          }}
        >
          {/* Top washi tape */}
          <div className="washi-tape top-[-14px] left-[50%] -translate-x-1/2 w-32" />

          {/* Salutation */}
          <div className="font-hand text-3xl sm:text-4xl text-[#241c16] font-black">
            {finalLetter.salutation}
          </div>

          {/* Letter Body paragraphs */}
          <div className="space-y-4 font-hand text-2xl sm:text-3xl text-[#3b2e24] font-semibold leading-relaxed">
            {finalLetter.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Closing & Signature */}
          <div className="pt-6 text-right space-y-1">
            <p className="font-hand text-2xl sm:text-3xl text-[#6b5847] italic">
              {finalLetter.closing}
            </p>
            <p className="font-hand text-3xl sm:text-4xl text-[#c24134] font-black flex items-center justify-end gap-2">
              <span>{finalLetter.signature}</span>
            </p>
          </div>

          {/* Red Wax Seal Stamp Badge */}
          <div className="absolute -bottom-6 -left-4 sm:left-8 w-16 h-16 rounded-full bg-[#9e2a1e] border-2 border-[#d9534f] shadow-xl flex items-center justify-center text-white/90 text-[10px] font-mono font-bold tracking-widest uppercase rotate-[-8deg] pointer-events-none">
            <div className="text-center leading-tight">
              <span>FAMILY</span>
              <br />
              <span>FOREVER</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-white transition-colors group cursor-pointer"
        >
          <span>Before you leave... →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
