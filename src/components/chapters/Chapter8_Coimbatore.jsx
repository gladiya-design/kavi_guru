import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, Navigation, Check } from "lucide-react";
import { audioManager } from "../../utils/audioManager";

export default function Chapter8_Coimbatore({ onNext }) {
  // Calendar days to cross out
  const calendarDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#261f18] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8744f] border-b border-[#a8744f]/40 pb-1">
          Chapter 08
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          &ldquo;Coimbatore&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-10">
        {/* Animated Journey Map / Trail */}
        <div className="w-full bg-[#f3ebd9] border border-[#ddcfb9] p-6 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-[#8a7560] border-b border-[#ddcfb9] pb-2">
            <span>ROUTE MAP</span>
            <span>INTERNSHIP CHAPTER</span>
          </div>

          <div className="py-6 flex items-center justify-around relative">
            {/* Dotted path */}
            <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#a8825c]/50" />

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#2a221b] text-white flex items-center justify-center shadow">
                <Briefcase size={18} />
              </div>
              <span className="font-hand text-lg font-bold text-[#5c4a3b] mt-1">Internship</span>
            </div>

            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="z-10 bg-[#b45309] text-white p-2 rounded-full shadow-md"
            >
              <Navigation size={18} className="rotate-45" />
            </motion.div>

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#c24134] text-white flex items-center justify-center shadow">
                <MapPin size={20} />
              </div>
              <span className="font-hand text-lg font-bold text-[#5c4a3b] mt-1">Akka&apos;s Home</span>
            </div>
          </div>

          <div className="text-center font-serif text-lg text-[#524133]">
            One year later... I came to Coimbatore for my internship.
          </div>
        </div>

        {/* Narrative */}
        <div className="text-center space-y-2">
          <p className="font-hand text-2xl text-[#966b44]">And suddenly...</p>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1f1712]">
            I couldn&apos;t wait to go to akka&apos;s house.
          </p>
        </div>

        {/* Calendar with days being crossed out */}
        <div className="bg-white border border-[#dfd2be] p-6 rounded-lg shadow-md max-w-sm w-full">
          <div className="flex items-center justify-between border-b border-[#eee3d1] pb-2 mb-4">
            <span className="font-serif font-bold text-[#2d241c]">Days Until Weekend</span>
            <span className="text-xs font-mono text-[#a85c32]">COUNTDOWN</span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm font-mono">
            {calendarDays.map((day) => (
              <div
                key={day}
                className="relative py-2 rounded bg-[#f7f2e8] text-[#4d4034] font-medium"
              >
                <span>{day}</span>
                {/* Red cross out line */}
                <div className="absolute inset-0 flex items-center justify-center text-[#c24134] font-bold text-lg pointer-events-none">
                  ✕
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#eee3d1] text-center font-hand text-xl text-[#c24134] font-bold">
            Counting down every single hour ⏰
          </div>
        </div>

        {/* Turning Point Revelation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 font-serif text-xl sm:text-2xl max-w-lg leading-relaxed text-[#2c221a]"
        >
          <p className="italic text-[#705e4d]">This time...</p>
          <p className="text-[#594738]">I wasn&apos;t just excited to see my akka.</p>
          <p className="font-serif text-3xl font-bold text-[#b45309]">
            I was excited to see both of them.
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
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7765] hover:text-[#261f18] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
