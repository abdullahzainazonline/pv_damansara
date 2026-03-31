"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft, ChevronRight, Building2, Maximize2, Layers, Briefcase, Star, Info
} from "lucide-react";

/* ── Feature icon map ── */
const FEATURE_CONFIG: Record<string, { icon: React.ElementType }> = {
  "Grade A Office": { icon: Building2 },
  "MSC Status": { icon: Star },
  "Column-free": { icon: Maximize2 },
  "Executive Suite": { icon: Briefcase },
  "Sky Lounge Access": { icon: Briefcase },
  "Premium Amenities": { icon: Star },
  "Double Volume": { icon: Layers }
};

/* WhatsApp SVG Icon */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const CATEGORIES = ["CORPORATE SUITES & HOTEL", "CORPORATE TOWER 1"] as const;

const ALL_CORP_UNITS = [
  // CORPORATE SUITES & HOTEL
  {
    type: "Levels 15-23, 25-31",
    category: "CORPORATE SUITES & HOTEL",
    label: "Odd Number Floors",
    sqft: "1,000 - 2,500",
    floors: "Odd Floors",
    image: "/pdh/ct10_e-broucher__p3_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    features: ["Executive Suite", "Sky Lounge Access", "Premium Amenities"],
    highlight: true,
    soldOut: false,
  },
  {
    type: "Levels 15-23, 25-31",
    category: "CORPORATE SUITES & HOTEL",
    label: "Even Number Floors",
    sqft: "1,000 - 2,500",
    floors: "Even Floors",
    image: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    features: ["Grade A Office", "Column-free", "MSC Status"],
    highlight: false,
    soldOut: false,
  },
  {
    type: "Level 23A",
    category: "CORPORATE SUITES & HOTEL",
    label: "Double Volume Premium",
    sqft: "Approx. 3,200",
    floors: "Level 23A",
    image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    features: ["Premium Amenities", "Double Volume", "Executive Suite"],
    highlight: true,
    soldOut: false,
  },

  // CORPORATE TOWER 1 (FULLY SOLD)
  {
    type: "Whole Block",
    category: "CORPORATE TOWER 1",
    label: "Fully Sold",
    sqft: "N/A",
    floors: "Tower 1",
    image: "/pdh/pdh_overview_(luxury_p7_img1.jpeg", // Some majestic building picture
    bgImage: "/pdh/pdh_overview_(luxury_p7_img1.jpeg",
    features: ["Grade A Office", "MSC Status", "Column-free"],
    highlight: false,
    soldOut: true,
  },
];

type Unit = typeof ALL_CORP_UNITS[0];

function CorpBg({ unit }: { unit: Unit }) {
  const bgSrc = unit.bgImage;
  return (
    <div className="absolute inset-0">
      <motion.div
        key={`${unit.type}-${unit.label}`}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image src={bgSrc} alt={unit.label || unit.type} fill sizes="100vw" priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/98 via-[#1A1208]/88 to-[#1A1208]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/98 via-[#1A1208]/40 to-[#1A1208]/70" />
    </div>
  );
}

export default function Corporate() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("CORPORATE SUITES & HOTEL");
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const filteredUnits = ALL_CORP_UNITS.filter((u) => u.category === activeCategory);
  if (filteredUnits.length === 0 && ALL_CORP_UNITS.length > 0) {
      filteredUnits.push(ALL_CORP_UNITS[0]);
  }
  const activeUnit = filteredUnits[activeIdx];

  const navigate = (delta: number) => {
    setDir(delta);
    setActiveIdx((i) => (i + delta + filteredUnits.length) % filteredUnits.length);
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  };

  return (
    <section id="corporate" className="relative overflow-hidden bg-[#1A1208] flex flex-col justify-center py-12 sm:py-24 lg:py-28 min-h-[100vh]">
      
      {/* Background layer */}
      <AnimatePresence>
        <CorpBg key={`corp-bg-${activeUnit?.type}-${activeUnit?.label || activeIdx}`} unit={activeUnit} />
      </AnimatePresence>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C49A38 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Navigation Arrows (Desktop) */}
      {!activeUnit.soldOut && filteredUnits.length > 1 && (
        <>
          <div className="hidden lg:flex absolute inset-y-0 left-4 xl:left-8 items-center z-30 pointer-events-none">
            <button onClick={() => navigate(-1)} aria-label="Previous Floor Plan" className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/40 bg-[#1A1208]/60 backdrop-blur-xl flex items-center justify-center text-[#C49A38] hover:bg-[#C49A38] hover:text-[#1A1208] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.15)] group">
              <ChevronLeft size={24} className="transition-colors duration-300" />
            </button>
          </div>
          <div className="hidden lg:flex absolute inset-y-0 right-4 xl:right-8 items-center z-30 pointer-events-none">
            <button onClick={() => navigate(1)} aria-label="Next Floor Plan" className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/40 bg-[#1A1208]/60 backdrop-blur-xl flex items-center justify-center text-[#C49A38] hover:bg-[#C49A38] hover:text-[#1A1208] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.15)] group">
              <ChevronRight size={24} className="transition-colors duration-300" />
            </button>
          </div>
        </>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-5 sm:gap-8 min-h-[auto] lg:min-h-[720px]">
        
        {/* Header & Category Toggles */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 text-center lg:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-[#C49A38] to-transparent hidden lg:block" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-[#C49A38] to-transparent lg:hidden" />
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] font-bold text-[#C49A38] text-center">
                Business Suites
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-[#C49A38] to-transparent lg:hidden" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl min-[390px]:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tight drop-shadow-2xl"
            >
              Corporate
              <em style={{ fontStyle: "normal", WebkitTextFillColor: "transparent", background: "linear-gradient(135deg,#C49A38,#E8C66A)", WebkitBackgroundClip: "text", backgroundClip: "text" }} className="ml-2 lg:ml-3">Offices</em>
            </motion.h2>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto relative z-20">
            {/* Category Toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-[#1A1208]/80 p-1.5 rounded-[2rem] sm:rounded-full w-full sm:w-fit backdrop-blur-md border border-[#C49A38]/40 shadow-[0_4px_25px_rgba(196,154,56,0.2)]">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      if (!isActive) {
                        setActiveCategory(cat);
                        setActiveIdx(0);
                      }
                    }}
                    className={`relative px-4 sm:px-6 py-3 sm:py-2.5 rounded-full text-[10px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-300 w-full sm:w-auto ${isActive ? "bg-gradient-to-r from-[#C49A38] to-[#B8860B] text-white shadow-lg shadow-[#C49A38]/30 scale-100" : "text-[#C49A38]/70 hover:text-[#C49A38] hover:bg-[#C49A38]/10 scale-95"}`}
                  >
                    <span className="relative z-10 drop-shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap">
                       {cat} {cat.includes("SOLD") && <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-red-600/90 text-white text-[8px] font-bold shadow-[0_0_10px_rgba(220,38,38,0.5)]">SOLD</span>}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Child Selection Pills (Only show if multiple items and not sold out entirely) */}
        {!activeUnit.soldOut && filteredUnits.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 pb-2 mt-4 lg:mt-0">
            {filteredUnits.map((u, i) => {
              const isActive = i === activeIdx;
              return (
                <motion.button
                  key={`${u.type}-${u.label}`}
                  onClick={() => {
                    setDir(i > activeIdx ? 1 : -1);
                    setActiveIdx(i);
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative overflow-hidden px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-all duration-300 ${isActive ? "border-[#C49A38] bg-[#C49A38]/10 shadow-[0_0_20px_rgba(196,154,56,0.15)]" : "border-white/10 bg-[#1A1208]/50 hover:bg-[#1A1208]/80 hover:border-[#C49A38]/30 backdrop-blur-sm"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="corp-pill-active-bg"
                      className="absolute inset-0 bg-gradient-to-r from-[#C49A38]/20 to-[#B8860B]/5 rounded-2xl"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className={`relative text-[11px] sm:text-[14px] font-heading font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] drop-shadow-md text-center leading-tight transition-colors duration-300 ${isActive ? "text-[#C49A38]" : "text-[#C49A38]/60 group-hover:text-[#C49A38]/80"}`}>{u.type}</span>
                  <span className={`relative text-[8px] sm:text-[11px] font-sans font-medium uppercase tracking-wider drop-shadow-sm text-center leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`}>
                    {u.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Active Display Panel */}
        <div className="mt-1 sm:mt-6 flex flex-col justify-between flex-1 relative">
          <div className="relative w-full h-full flex-1">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`corp-layout-${activeUnit.type}-${activeUnit.label}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-14 items-center w-full ${!activeUnit.soldOut && filteredUnits.length > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
                drag={!activeUnit.soldOut && filteredUnits.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  if(activeUnit.soldOut || filteredUnits.length <= 1) return;
                  if (offset.x < -50) navigate(1);
                  else if (offset.x > 50) navigate(-1);
                }}
              >
                
                {/* Left Container: Layout Image or Sold Out Graphic */}
                <div className={`order-2 lg:order-1 col-span-1 lg:col-span-7 relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] rounded-[2rem] sm:rounded-[3rem] border flex items-center justify-center p-4 sm:p-8 lg:p-10 group overflow-hidden pointer-events-none sm:pointer-events-auto transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${activeUnit.soldOut ? 'bg-[#150a0a]/90 border-red-900/30' : 'bg-[#FDFBF7] border-[#C49A38]/20'}`}>
                  
                  {/* Background inner aura */}
                  {!activeUnit.soldOut && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#C49A38]/5 to-[#C49A38]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  )}

                  <div className={`relative w-full h-full ${activeUnit.soldOut ? 'grayscale opacity-30 blur-[2px]' : 'drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]'}`}>
                    <Image
                      src={activeUnit.image}
                      alt={activeUnit.type}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className={`object-contain object-center transition-transform duration-700 ${activeUnit.soldOut ? 'scale-105' : 'group-hover:scale-[1.03]'}`}
                      priority
                    />
                  </div>

                  {/* Sold Out Banner Overlay */}
                  {activeUnit.soldOut && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm pointer-events-none">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: -10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                        className="border-[3px] border-red-600/90 text-red-500 px-6 sm:px-10 py-3 sm:py-5 rounded-xl bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(220,38,38,0.4)]"
                      >
                        <h4 className="text-3xl sm:text-6xl font-heading font-black tracking-[0.2em] uppercase">FULLY SOLD</h4>
                      </motion.div>
                    </div>
                  )}

                  {/* Mobile Swipe Hint */}
                  {!activeUnit.soldOut && filteredUnits.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex lg:hidden items-center gap-2 bg-[#1A1208]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C49A38]/20 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                      <ChevronLeft className="w-3.5 h-3.5 text-[#C49A38]" />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C49A38]">Swipe</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C49A38]" />
                    </div>
                  )}
                </div>

                {/* Right Container: Details */}
                <div className="order-1 lg:order-last col-span-1 lg:col-span-5 flex flex-col justify-center h-full gap-4 sm:gap-8 relative z-10 w-full">
                  
                  {/* Titles */}
                  <div className="flex flex-col gap-2 relative z-10 w-fit mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className={`text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-normal leading-[1.05] drop-shadow-2xl ${activeUnit.soldOut ? 'text-white/50' : 'text-white'}`}>
                      {activeUnit.type}
                    </h3>
                    <span className={`block text-xl sm:text-2xl font-light tracking-wide drop-shadow-lg ${activeUnit.soldOut ? 'text-white/30' : 'text-[#C49A38]'}`}>
                      {activeUnit.label}
                    </span>
                  </div>

                  {/* Prominent Details */}
                  <div className={`flex flex-col gap-4 p-6 sm:p-8 rounded-[1.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl w-full relative z-10 ${activeUnit.soldOut ? 'bg-[#1A1208]/80 border border-white/5' : 'bg-[#1A1208]/60 border border-[#C49A38]/20'}`}>
                    
                    {/* Size */}
                    <div className="flex flex-col gap-1">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-normal tracking-tight ${activeUnit.soldOut ? 'text-white/50' : 'text-white drop-shadow-lg'}`}>
                        {activeUnit.sqft} <span className="text-lg sm:text-xl font-sans font-light opacity-50 tracking-wider">sq.ft.</span>
                      </div>
                    </div>

                    {/* Level */}
                    <div className="flex flex-col gap-1 pt-2">
                       <div className={`text-2xl sm:text-3xl font-heading font-normal tracking-tight leading-snug ${activeUnit.soldOut ? 'text-white/50' : 'text-[#C49A38]'}`}>
                        {activeUnit.floors}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}