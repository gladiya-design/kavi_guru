import React from "react";
import { motion } from "framer-motion";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Luggage, HeartCrack } from "lucide-react";

export default function Chapter15_Leaving({ onNext }) {
  const missItems = [
    "I miss the random conversations.",
    "I miss irritating akka together.",
    "I miss going around.",
    "I miss ice cream.",
    "I miss the photos.",
    "I miss their home.",
  ];

  return (
    <div className="min-h-screen bg-[#171514] text-[#ece4d8] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8825c] border-b border-[#a8825c]/30 pb-1">
          Chapter 15
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#fbf6ec]">
          &ldquo;And Then I Had To Leave&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-10">
        {/* Departure Note */}
        <div className="text-center space-y-3 font-serif text-xl sm:text-2xl leading-relaxed text-[#c7baa8]">
          <p>Then came the part I didn&apos;t like.</p>
          <p className="font-hand text-4xl sm:text-5xl text-[#e57f72] font-bold">
            I had to leave.
          </p>
        </div>

        {/* Suitcase Illustration Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative bg-[#26211e] border border-[#4d3f34] p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-xs w-full"
        >
          <div className="w-16 h-16 rounded-full bg-[#3d3229] text-[#e8cbb0] flex items-center justify-center mb-3">
            <Luggage size={32} />
          </div>
          <span className="font-mono text-xs text-[#9c8976] tracking-wider uppercase">
            Packing the memories
          </span>
          <span className="text-[11px] text-[#706050] italic mt-1">
            Leaving behind a piece of my heart
          </span>
        </motion.div>

        {/* Slow Fading Reflection */}
        <div className="text-center font-serif text-xl sm:text-2xl text-[#c7baa8]">
          <p className="italic">
            &ldquo;I didn&apos;t realize how much I would miss those days.&rdquo;
          </p>
        </div>

        {/* List of Missed Moments appearing line by line */}
        <div className="w-full max-w-lg space-y-3 font-serif text-lg sm:text-xl text-center">
          {missItems.map((item, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="text-[#d8cdbf] py-1 border-b border-[#2b241e]"
            >
              {item}
            </motion.p>
          ))}
        </div>

        {/* Climax of Missing Them */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pt-6 text-center space-y-3"
        >
          <p className="font-hand text-3xl text-amber-400 font-bold">
            And most of all...
          </p>
          <p className="font-serif text-4xl sm:text-6xl font-black text-white tracking-wide">
            I miss them.
          </p>
        </motion.div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-[#fbf6ec] transition-colors group cursor-pointer"
        >
          <span>Open the memory wall →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
