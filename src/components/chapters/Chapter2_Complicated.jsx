import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageSquareHeart } from "lucide-react";
import { audioManager } from "../../utils/audioManager";

export default function Chapter2_Complicated({ onNext }) {
  return (
    <div className="min-h-screen bg-[#f3ecdd] text-[#2c231c] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative torn-edge-top torn-edge-bottom">
      {/* Torn paper texture overlay */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8744f] border-b border-[#a8744f]/40 pb-1">
          Chapter 02
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#241c17]">
          &ldquo;Then Everything Became Complicated&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-8 font-serif text-lg sm:text-xl leading-relaxed text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-2xl font-serif italic text-[#845d3e]">
            Then came the marriage talks.
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-[#3b2d24]">
            And that&apos;s when everything became difficult.
          </p>
        </motion.div>

        {/* Journal entry paper card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-[#faf5ea] p-8 sm:p-10 rounded-sm border border-[#e2d5c0] shadow-md text-left space-y-4 relative"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 31px, #e8dfcf 31px, #e8dfcf 32px)",
            lineHeight: "32px",
          }}
        >
          <div className="washi-tape top-[-12px] right-6 w-20" />
          
          <p className="text-[#3b322a]">
            My akka and he loved each other deeply.
          </p>
          <p className="text-[#524438]">
            But the situation at home became difficult.
          </p>
          <p className="text-[#69584a] italic">
            There were restrictions. There were arguments. There were days when we couldn&apos;t talk freely.
          </p>
        </motion.div>

        {/* Subtle Turning Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="pt-6 space-y-3"
        >
          <p className="font-hand text-3xl sm:text-4xl text-[#78593a] font-bold">
            And somehow...
          </p>
          <p className="font-serif text-xl sm:text-2xl text-[#2a2018]">
            during those difficult days...
          </p>
          
          <div className="inline-flex items-center gap-3 bg-[#e8deca] px-6 py-3 rounded-full border border-[#cbbca3] shadow-sm mt-2">
            <MessageSquareHeart size={20} className="text-[#b45309]" />
            <span className="font-serif font-bold text-lg sm:text-xl text-[#2d2218]">
              he and I started talking.
            </span>
          </div>

          <p className="text-xs font-mono text-[#8a7663] pt-2">
            A small thread of understanding in the middle of chaos.
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
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#806f5f] hover:text-[#2d2218] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
