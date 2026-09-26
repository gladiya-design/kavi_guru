import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Upload, Check, FolderOpen, Image as ImageIcon } from "lucide-react";
import { scrapbookConfig } from "../data/scrapbookData";

export default function PhotoManagerModal({
  isOpen,
  onClose,
  targetPhotoId,
  customPhotos,
  onUpdateCustomPhoto,
}) {
  const photoEntries = Object.entries(scrapbookConfig.photos);

  const handleFileUpload = (photoKey, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpdateCustomPhoto(photoKey, url);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#faf5ea] rounded-sm p-6 sm:p-8 shadow-2xl border border-[#d6c5ae] max-h-[88vh] flex flex-col text-[#2c221a]"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#dfd2be] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Camera size={22} className="text-[#a8501c]" />
              <h3 className="font-serif text-2xl font-bold">Personal Photo Album</h3>
            </div>
            <p className="text-xs text-[#7d6753] mt-1 font-mono">
              Upload personal photos here for instant browser preview, or drop them into <span className="font-bold">public/photos/</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7a6452] hover:text-[#241c16] rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable list of photos */}
        <div className="overflow-y-auto flex-1 py-4 space-y-3 pr-1">
          {photoEntries.map(([key, item]) => {
            const hasCustom = Boolean(customPhotos[key]);
            const isHighlighted = targetPhotoId === key;

            return (
              <div
                key={key}
                className={`p-3 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isHighlighted
                    ? "bg-amber-100/60 border-amber-500 shadow-sm"
                    : "bg-white border-[#e0d3c0]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#f0e6d6] flex items-center justify-center overflow-hidden border border-[#d9ccb9] shrink-0">
                    {hasCustom ? (
                      <img
                        src={customPhotos[key]}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon size={20} className="text-[#8c7763]" />
                    )}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sm text-[#2a2119] flex items-center gap-2">
                      <span>{item.caption}</span>
                      {hasCustom && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono px-2 py-0.5 rounded-full font-bold">
                          Active Preview
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#8a7663]">
                      File: {item.src.split("/").pop()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <label className="cursor-pointer stamp-btn text-xs py-1.5 px-3 bg-[#42352b] hover:bg-[#2b211a]">
                    <Upload size={14} />
                    <span>{hasCustom ? "Change Photo" : "Upload Preview"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(key, e)}
                    />
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#dfd2be] text-xs font-mono text-[#7a6452] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>Tip: Photos will automatically load from public/photos/ folder!</span>
          <button
            onClick={onClose}
            className="paper-btn text-sm py-1.5 px-4 justify-center"
          >
            Done
          </button>
        </div>
      </motion.div>
    </div>
  );
}
