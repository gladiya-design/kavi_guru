import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, PhoneCall, Send, Lock } from "lucide-react";
import { audioManager } from "../../utils/audioManager";

export default function Chapter4_WhereAreYou({ onNext }) {
  const [replyRevealed, setReplyRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-[#181615] text-[#e8dfd3] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-600/70 border-b border-amber-600/30 pb-1">
          Chapter 04
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#f5ebd8]">
          &ldquo;Where Are You?&rdquo;
        </h2>
        <p className="text-sm font-hand text-xl text-[#9c8976] mt-2">
          One month later...
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-8">
        {/* Chat Interface */}
        <div className="w-full bg-[#241f1c] border border-[#45382e] rounded-2xl p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#3b2f26] pb-3 text-xs text-[#8c7a68]">
            <span className="font-serif text-sm text-[#decbb7] font-semibold">Direct Message</span>
            <span className="font-mono">11:14 PM</span>
          </div>

          {/* My Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-end"
          >
            <div className="bg-[#48372b] text-[#f7f1e6] px-5 py-3 rounded-2xl rounded-tr-xs shadow text-base sm:text-lg font-serif max-w-[85%]">
              &ldquo;Where are you? How is my akka?&rdquo;
            </div>
            <span className="text-[10px] text-[#786655] mt-1 font-mono">Delivered • Read</span>
          </motion.div>

          {/* His Reply (Blurred / Faded area as requested) */}
          <div className="flex flex-col items-start pt-2">
            <div className="text-xs font-mono text-[#a3907c] mb-1 flex items-center gap-1.5">
              <span>His reply...</span>
            </div>

            <div
              onClick={() => {
                setReplyRevealed(true);
                audioManager.playPaperSound();
              }}
              className="relative bg-[#322a24] text-[#8e7e6e] px-5 py-4 rounded-2xl rounded-tl-xs shadow border border-[#4d3e33] max-w-[85%] cursor-pointer group"
            >
              {/* Blurred content representation */}
              <div className="filter blur-sm select-none text-sm font-mono text-[#b3a18d]">
                Words whispered through distance and care, holding a bond that words cannot easily explain.
              </div>

              {/* Faded overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#322a24]/60 to-[#322a24] rounded-2xl flex items-center justify-center">
                <span className="text-xs font-hand text-base text-amber-200/80 bg-black/40 px-3 py-1 rounded-full border border-amber-500/20">
                  {replyRevealed ? "Private words, forever understood" : "Tap to feel this moment"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Aftermath */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 font-serif text-lg sm:text-xl leading-relaxed text-[#c7b9a6] max-w-lg"
        >
          <p>At that moment, I didn&apos;t know what to do.</p>
          <p className="font-hand text-3xl sm:text-4xl text-[#df796b] font-bold">
            I cried.
          </p>
          <div className="inline-flex items-center gap-2 text-[#e3ceba] bg-[#2d241d] px-5 py-2.5 rounded-full border border-[#4d3d30]">
            <PhoneCall size={18} className="text-[#c24134]" />
            <span>I called him.</span>
          </div>
          
          <div className="pt-6 space-y-2">
            <p className="font-hand text-2xl text-[#c49a6c]">For many months...</p>
            <p className="font-serif text-xl sm:text-2xl text-[#f3ece0] font-semibold">
              My machan became the person I could talk to.
            </p>
            <p className="text-xs font-mono text-[#8a7663] italic pt-1">
              A quiet, steady lifeline when everything else felt uncertain.
            </p>
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
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7867] hover:text-[#f3ece0] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
