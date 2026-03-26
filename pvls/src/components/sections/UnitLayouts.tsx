"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  BedDouble, Bath, Maximize2, ChevronLeft, ChevronRight,
  X, Building2, Star, Eye, Home, Sparkles, UtensilsCrossed,
  Sunset, LayoutGrid, Sofa,
} from "lucide-react";

/* ── Feature icon map ─────────────────────────────── */
const FEATURE_CONFIG: Record<string, { icon: React.ElementType }> = {
  "Open-plan layout": { icon: LayoutGrid },
  "Premium finishes": { icon: Sparkles },
  "City view": { icon: Building2 },
  "Fully furnished": { icon: Home },
  "Separate bedroom": { icon: BedDouble },
  "Balcony": { icon: Sunset },
  "Designer kitchen": { icon: UtensilsCrossed },
  "Flexi room": { icon: LayoutGrid },
  "Generous living area": { icon: Sofa },
  "Wraparound views": { icon: Sunset },
  "Luxury bathroom": { icon: Bath },
  "Dual master": { icon: BedDouble },
  "Full kitchen": { icon: UtensilsCrossed },
  "Entertainment area": { icon: Sofa },
  "Corner unit": { icon: LayoutGrid },
  "Panoramic views": { icon: Sunset },
  "Double vanity": { icon: Bath },
  "Premium floor level": { icon: Building2 },
  "Extended balcony": { icon: Sunset },
  "High-spec fit-out": { icon: Sparkles },
  "Dual-aspect view": { icon: Sunset },
  "Walk-in wardrobe": { icon: Star },
  "Luxury bathtub": { icon: Bath },
  "Flagship unit": { icon: Star },
  "Sky views all sides": { icon: Sunset },
  "3 en-suite baths": { icon: Bath },
};

/* ── Unit types ── */
const residentialUnits = [
  {
    type: "Type A", label: "STUDIO",
    sqft: 504, sqm: 46.8, beds: 0, baths: 1,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_a_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_a_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type B1", label: "1 BEDROOM + STUDY",
    sqft: 770, sqm: 71.5, beds: 1, baths: 1,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_b1_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_b1_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type B2", label: "1 BEDROOM + STUDY",
    sqft: 772, sqm: 71.7, beds: 1, baths: 1,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_b2_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_b2_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type C1", label: "2 BEDROOMS",
    sqft: 966, sqm: 89.7, beds: 2, baths: 2,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_c1_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_c1_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type C2", label: "2 BEDROOMS + STUDY",
    sqft: 978, sqm: 90.9, beds: 2, baths: 2,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_c2_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_c2_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type C3", label: "2 BEDROOMS + STUDY",
    sqft: 1100, sqm: 102.2, beds: 2, baths: 2,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_c3_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_c3_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type C4", label: "2 BEDROOMS + STUDY",
    sqft: 1272, sqm: 118.2, beds: 2, baths: 2,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_c4_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_c4_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  },
  {
    type: "Type D", label: "3 BEDROOMS",
    sqft: 1255, sqm: 116.6, beds: 3, baths: 3,
    floors: "Residential Tower",
    image: "/Pavillion Square Images/Units Section/Luxury Residences/type_d_card_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/type_d_card_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Luxury Residences/luxury_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    highlight: false,
  }
];

const corporateSuites = [
  {
    type: "Office 1", label: "",
    sqft: 2464, sqm: 228.9, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 1_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 1_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: ["Double volume lobby", "Grand corporate arrival"],
    highlight: true,
  },
  {
    type: "Office 2", label: "",
    sqft: 1112, sqm: 103.3, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 2_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 2_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: ["Destination control lifts", "Seamless connectivity"],
    highlight: false,
  },
  {
    type: "Office 3", label: "",
    sqft: 1481, sqm: 137.6, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 3_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 3_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: ["Seamless connectivity"],
    highlight: false,
  },
  {
    type: "Office 3A", label: "",
    sqft: 1093, sqm: 101.5, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 3A_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 3A_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: [],
    highlight: false,
  },
  {
    type: "Office 5", label: "",
    sqft: 1795, sqm: 166.8, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: [],
    highlight: false,
  },
  {
    type: "Office 5A", label: "",
    sqft: 1668, sqm: 155.0, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5A_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5A_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: [],
    highlight: false,
  },
  {
    type: "Office 5B", label: "",
    sqft: 1426, sqm: 132.5, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5B_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Office 5B_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: [],
    highlight: false,
  }
  ,
  {
    type: "Penthouse", label: "",
    sqft: 9770, sqm: 907.7, beds: 0, baths: 0,
    floors: "Corporate Tower",
    image: "/Pavillion Square Images/Units Section/Corporate Suites/Penthouse Office_pc.jpg",
    imageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/Penthouse Office_mobile.jpg",
    bgImage: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_pc_optimized_500.jpg",
    bgImageMobile: "/Pavillion Square Images/Units Section/Corporate Suites/corporate_bg_mobile_optimized_500.jpg",
    price: "Contact for Price",
    features: ["Panoramic views", "Premium finishes"],
    highlight: true,
  }
];

type Unit = (typeof residentialUnits)[number] | (typeof corporateSuites)[number];

/* ── Section BG ── */
function UnitBg({ unit }: { unit: Unit }) {
  const desktopBgSrc = unit.bgImage.replace(/ /g, "%20");
  const mobileBgSrc = (unit.bgImageMobile || unit.bgImage).replace(/ /g, "%20");

  return (
    <div className="absolute inset-0">
      <motion.div
        key={unit.type}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image src={desktopBgSrc} alt={unit.label || unit.type} fill sizes="100vw" priority className="hidden sm:block object-cover" />
        <Image src={mobileBgSrc} alt={unit.label || unit.type} fill sizes="100vw" priority className="sm:hidden object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#060914]/98 via-[#060914]/88 to-[#060914]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060914]/90 via-transparent to-[#060914]/70" />
    </div>
  );
}



export default function UnitLayouts() {
  const [activeCategory, setActiveCategory] = useState<"residences" | "suites">("residences");
  const units = activeCategory === "residences" ? residentialUnits : corporateSuites;

  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const activeUnit = units[activeIdx] as Unit;
  const desktopCardSrc = activeUnit.image.replace(/ /g, "%20");
  const mobileCardSrc = (activeUnit.imageMobile || activeUnit.image).replace(/ /g, "%20");
  const activeFeatures = (activeUnit as any).features as string[] | undefined;

  const navigate = (delta: number) => {
    setDir(delta);
    setActiveIdx((i) => (i + delta + units.length) % units.length);
  };

  const select = (i: number) => {
    setDir(i > activeIdx ? 1 : -1);
    setActiveIdx(i);
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section id="units" className="relative overflow-hidden bg-[#060914] flex flex-col justify-center py-12 lg:py-16">

      {/* Dynamic BG */}
      <AnimatePresence>
        <UnitBg key={`unit-bg-${activeIdx}`} unit={activeUnit} />
      </AnimatePresence>

      {/* ── Global Desktop Arrow Navigation ── */}
      <div className="hidden lg:flex absolute inset-y-0 left-4 xl:left-8 items-center z-30 pointer-events-none">
        <button onClick={() => navigate(-1)} aria-label="Previous Unit" className="pointer-events-auto w-14 h-14 rounded-full border border-[#c9a84c]/50 bg-[#08070c]/60 backdrop-blur-xl flex items-center justify-center text-[#ffd700] hover:bg-[#c9a84c]/40 hover:border-[#ffd700] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,162,101,0.2)]">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="hidden lg:flex absolute inset-y-0 right-4 xl:right-8 items-center z-30 pointer-events-none">
        <button onClick={() => navigate(1)} aria-label="Next Unit" className="pointer-events-auto w-14 h-14 rounded-full border border-[#c9a84c]/50 bg-[#08070c]/60 backdrop-blur-xl flex items-center justify-center text-[#ffd700] hover:bg-[#c9a84c]/40 hover:border-[#ffd700] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,162,101,0.2)]">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-5 min-h-[650px] lg:min-h-[750px]">

        {/* ── Header ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-3"
          >
            <Building2 className="w-3 h-3" />
            {activeCategory === "residences" ? "Luxury Residences" : "Corporate Suites"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tight drop-shadow-2xl mb-6"
          >
            Unit{" "}
            <em style={{
              fontStyle: "normal",
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(135deg,#c9a84c,#ffd700)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              Layouts
            </em>
          </motion.h2>

          {/* Category Toggle (moved below header) */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full w-full max-w-sm backdrop-blur-md border border-white/10 relative z-20">
            <button
              onClick={() => {
                if (activeCategory !== "residences") {
                  setActiveCategory("residences");
                  setActiveIdx(0);
                }
              }}
              className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeCategory === "residences" ? "bg-[#c9a84c] text-[#060914] shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
            >
              Luxury Residences
            </button>
            <button
              onClick={() => {
                if (activeCategory !== "suites") {
                  setActiveCategory("suites");
                  setActiveIdx(0);
                }
              }}
              className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeCategory === "suites" ? "bg-[#c9a84c] text-[#060914] shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
            >
              Corporate Suites
            </button>
          </div>

          <div className="section-divider mt-6" />
        </div>

        {/* ── Unit pill tabs (now grid) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-3 pb-3 border-b border-white/10">
          {units.map((u, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={u.type}
                onClick={() => select(i)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`tab-pill relative overflow-hidden px-2 sm:px-5 py-2 sm:py-3 rounded-[1rem] lg:rounded-full border ${isActive ? "border-[#c9a84c] bg-[#c9a84c]/10" : "border-white/10 bg-white/5"} flex flex-col lg:flex-row items-center justify-center gap-0.5 sm:gap-1 min-h-[44px] sm:min-h-[50px] transition-colors`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pill-active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/20 to-[#ffd700]/10 rounded-[1rem] lg:rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative text-[10px] min-[390px]:text-[11px] sm:text-[13px] font-black tracking-wide drop-shadow-md text-center leading-tight ${isActive ? "text-[#ffd700]" : "text-[#c9a84c]/80"}`}>{u.type}</span>
                <span className={`relative text-[8px] sm:text-[10px] drop-shadow-sm text-center leading-tight ${isActive ? "text-white" : "text-white/60"}`}>
                  <span className="hidden lg:inline mr-1">·</span>
                  {activeCategory === "suites" ? `${u.sqft} sq.ft.` : u.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ── Active Layout Display ── */}
        <div className="mt-4 sm:mt-8 flex flex-col justify-between flex-1 relative">
          <div className="relative w-full h-full flex-1">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`layout-${activeIdx}-${activeCategory}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    navigate(1);
                  } else if (swipe > 50) {
                    navigate(-1);
                  }
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full cursor-grab active:cursor-grabbing"
              >

                {/* Left: Interactive Image Viewer */}
                <div className="order-last lg:order-first col-span-1 lg:col-span-7 relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#c9a84c]/20 flex items-center justify-center p-3 sm:p-8 lg:p-10 group overflow-hidden pointer-events-none sm:pointer-events-auto">

                  <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <Image
                      src={desktopCardSrc}
                      alt={activeUnit.label || activeUnit.type}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="hidden sm:block object-contain object-center"
                      priority
                    />
                    <Image
                      src={mobileCardSrc}
                      alt={activeUnit.label || activeUnit.type}
                      fill
                      sizes="100vw"
                      className="sm:hidden object-contain object-center"
                      priority
                    />
                  </div>

                  {/* Swipe hint overlay for mobile */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex lg:hidden items-center gap-2 bg-[#08070c]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 animate-pulse">
                    <ChevronLeft className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span className="text-[10px] font-black tracking-wider uppercase text-[#c9a84c]/90">Swipe</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
                  </div>
                </div>

                {/* Right: Info Panel */}
                <div className="order-first lg:order-last col-span-1 lg:col-span-5 flex flex-col justify-center h-full gap-6 sm:gap-8 lg:pr-4">

                  {/* Header */}
                  <div className="flex flex-col gap-2 relative z-10 w-fit mx-auto lg:mx-0 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-[3px] h-8 rounded-full bg-gradient-to-b from-[#c9a84c] to-[#ffd700]" />
                      <div className="text-[#c9a84c] font-black uppercase tracking-[0.3em] text-sm sm:text-xs drop-shadow-md">
                        Floor Plan Details
                      </div>
                    </div>
                    <h3 className="text-5xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.05] drop-shadow-2xl">
                      {activeUnit.type}
                      <span className="block text-2xl sm:text-3xl text-white/70 font-normal mt-2 lg:mt-3 tracking-wide drop-shadow-lg">
                        {activeUnit.label}
                      </span>
                    </h3>
                  </div>

                  {/* Specs Grid */}
                  <div className={`grid ${activeCategory === "suites" ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4 p-5 sm:p-7 bg-[#0a0c14]/70 border border-[#c9a84c]/20 rounded-[1.5rem] shadow-2xl backdrop-blur-md w-full relative z-10`}>

                    {/* Size */}
                    <div className="flex flex-col gap-1.5 p-1">
                      <div className="flex items-center gap-2 text-[#c9a84c]/90 drop-shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-xs font-black uppercase tracking-[0.2em] opacity-90">Size</span>
                      </div>
                      <div className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-none drop-shadow-lg">{activeUnit.sqft} <span className="text-sm sm:text-[13px] font-medium text-white/60 tracking-normal">sq.ft.</span></div>
                    </div>

                    {/* Conditionally reveal beds for residences */}
                    {activeCategory === "residences" && activeUnit.beds > 0 && (
                      <div className="flex flex-col gap-1.5 p-1 border-l border-white/5 pl-4 sm:pl-5">
                        <div className="flex items-center gap-2 text-[#c9a84c]/90 drop-shadow-sm">
                          <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-xs font-black uppercase tracking-[0.2em] opacity-90">Bedrooms</span>
                        </div>
                        <div className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-none drop-shadow-lg">{activeUnit.beds}</div>
                      </div>
                    )}

                    {/* Tower */}
                    <div className={`flex flex-col gap-1.5 p-1 ${activeCategory === "suites" || activeUnit.beds === 0 ? "border-l border-white/5 pl-4 sm:pl-5" : "border-t border-l border-white/5 pt-4 sm:pt-5 pl-4 sm:pl-5"}`}>
                      <div className="flex items-center gap-2 text-[#c9a84c]/90 drop-shadow-sm">
                        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-xs font-black uppercase tracking-[0.2em] opacity-90">Tower</span>
                      </div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug truncate pr-2 mt-0.5 drop-shadow-md" title={activeUnit.floors}>{activeUnit.floors.replace(" Tower", "")}</div>
                    </div>

                  </div>

                  {/* Features Pill list */}
                  {activeFeatures && activeFeatures.length > 0 && (
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 relative z-10">
                      {activeFeatures.map((feat, idx) => {
                        const FeatIcon = FEATURE_CONFIG[feat]?.icon || Sparkles;
                        return (
                          <div key={idx} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-white/90 text-sm sm:text-[12px] font-medium backdrop-blur shadow-sm drop-shadow-md">
                            <FeatIcon className="w-3 h-3 text-[#c9a84c] shrink-0" />
                            {feat}
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 relative z-10">
            <a
              href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Square`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-4 sm:py-3.5 rounded-xl bg-[#c9a84c] text-[#060914] font-bold text-sm sm:text-[15px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_25px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_35px_rgba(201,168,76,0.55)]"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] relative z-10 shrink-0">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span className="relative z-10 drop-shadow-md">E-Brochure</span>
            </a>

            <a
              href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Square`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-4 sm:py-3.5 rounded-xl border-2 border-[#c9a84c]/60 bg-[#060914]/40 backdrop-blur-md text-[#25D366] font-bold text-sm sm:text-[15px] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] relative z-10 shrink-0 fill-[#25D366] group-hover:fill-[#20b858] transition-colors duration-300">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="relative z-10 whitespace-nowrap drop-shadow-md">WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
    </section>
  );
}
