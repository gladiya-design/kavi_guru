import React, { useState } from "react";
import { Camera, Image as ImageIcon, ZoomIn } from "lucide-react";

/**
 * Polaroid Component
 * Displays a realistic scrapbook polaroid photo with washi tape, tilt, and handwritten caption.
 * If the image fails to load or hasn't been placed in /photos/ yet,
 * it renders a beautiful vintage placeholder prompt.
 */
export default function Polaroid({
  src,
  caption,
  alt = "Scrapbook Photo",
  tilt = 0,
  tapeAngle = 0,
  tapePosition = "top",
  tapeColor = "default",
  badge = null,
  onClick = null,
  className = "",
  aspectRatio = "1/1",
  onReplaceImage = null,
}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Washi tape color variants
  const getTapeClass = () => {
    if (tapeColor === "dark") return "washi-tape dark";
    if (tapeColor === "rose") return "washi-tape rose";
    if (tapeColor === "olive") return "washi-tape olive";
    return "washi-tape";
  };

  return (
    <div
      className={`polaroid-frame group cursor-pointer transition-all duration-300 ${className}`}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
      onClick={onClick}
    >
      {/* Washi Tape Accent */}
      {tapePosition !== "none" && (
        <div
          className={getTapeClass()}
          style={{
            top: tapePosition === "bottom" ? "auto" : "-14px",
            bottom: tapePosition === "bottom" ? "-14px" : "auto",
            left: "50%",
            transform: `translateX(-50%) rotate(${tapeAngle}deg)`,
            width: "84px",
          }}
        />
      )}

      {/* Optional Top Badge / Stamp */}
      {badge && (
        <div className="absolute top-2 right-2 z-10 bg-[#2b2520]/80 text-[#faf6ee] text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-mono">
          {badge}
        </div>
      )}

      {/* Photo Surface */}
      <div
        className="polaroid-image-container relative rounded-sm shadow-inner group"
        style={{ aspectRatio }}
      >
        {src && !imgError ? (
          <>
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Subtle vintage photo grain filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-amber-900/5 pointer-events-none" />
            <div className="absolute top-2 right-2 bg-black/40 text-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={14} />
            </div>
          </>
        ) : (
          /* Elegant Scrapbook Placeholder */
          <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-[#f4ece0] border-2 border-dashed border-[#c2b29c] rounded-sm">
            <div className="w-12 h-12 rounded-full bg-[#e8ded0] flex items-center justify-center text-[#706253] mb-2 shadow-inner">
              <Camera size={22} />
            </div>
            <span className="font-hand text-lg text-[#594d40] font-bold leading-tight">
              [ADD PHOTO HERE]
            </span>
            <span className="text-[11px] text-[#8c7b69] mt-1 font-mono tracking-tight max-w-[180px] truncate">
              {src ? src.split("/").pop() : "photo.jpg"}
            </span>
            <span className="text-[10px] text-[#a69684] mt-2 italic">
              Tap to preview / upload
            </span>
          </div>
        )}
      </div>

      {/* Handwritten Caption */}
      {caption && (
        <div className="polaroid-caption px-1">
          {caption}
        </div>
      )}
    </div>
  );
}
