"use client";

import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { useState } from "react";
import Image from "next/image";
import {
  Maximize2, ChevronLeft, ChevronRight, Building2,
  Sparkles, LayoutGrid, Sofa, Sunset, Car, Info
} from "lucide-react";

/* ── Feature icon map ─────────────────────────────── */
const FEATURE_CONFIG: Record<string, { icon: React.ElementType }> = {
  "Semi-Furnished": { icon: Sofa },
  "1–2 Car Parks": { icon: Car },
  "2–3 Car Parks": { icon: Car },
  "City Views": { icon: Building2 },
  "Panoramic Views": { icon: Sunset },
  "RM0.92psf Maintenance": { icon: Info },
  "RM0.87psf Maintenance": { icon: Info },
  "Premium Layouts": { icon: LayoutGrid },
  "1 Car Park": { icon: Car },
  "2 Car Parks": { icon: Car },
  "3 Car Parks": { icon: Car },
  "Garden Facilities": { icon: Sparkles },
  "Relaxation Zone": { icon: Sparkles },
  "Sky Facilities": { icon: Sparkles },
};
=======
import { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, Building2, MessageSquare, X, ArrowUpRight, Send } from "lucide-react";
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e

/* WhatsApp SVG Icon */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

<<<<<<< HEAD
/* ── Unit types ── */
const ALL_UNITS = [
  // WINDSOR SUITES
  {
    type: "Type D1",
    category: "Windsor",
    label: "1 Bedroom",
    sqft: "614",
    floors: "Windsor Suites",
    image: "/pdh/pdh_r1_&_r2_1br_e-br_p4_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "City Views", "57.03 sq.m."],
    highlight: true,
  },
  {
    type: "Type D2",
    category: "Windsor",
    label: "1 Bedroom",
    sqft: "691",
    floors: "Windsor Suites",
    image: "/pdh/pdh_r1_&_r2_1br_e-br_p10_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Premium Layouts", "64.21 sq.m."],
    highlight: false,
  },
  {
    type: "Type D3 (02)",
    category: "Windsor",
    label: "1 Bedroom",
    sqft: "775",
    floors: "Windsor Suites",
    image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Spacious Layout", "71.98 sq.m."],
    highlight: false,
  },
  {
    type: "Type D3 (03)",
    category: "Windsor",
    label: "1 Bedroom",
    sqft: "775",
    floors: "Windsor Suites",
    image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Spacious Layout", "71.98 sq.m."],
    highlight: false,
  },
  {
    type: "Type D4",
    category: "Windsor",
    label: "1 + 1 Study",
    sqft: "808",
    floors: "Windsor Suites",
    image: "/pdh/pdh_overview_(luxury_p11_img6.png",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Study Room Included", "75.05 sq.m."],
    highlight: false,
  },
  {
    type: "Type D5",
    category: "Windsor",
    label: "1 + 1 Study",
    sqft: "826",
    floors: "Windsor Suites",
    image: "/pdh/pdh_overview_(luxury_p5_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Study Room Included", "76.74 sq.m."],
    highlight: true,
  },

  // REGENT SUITES
  {
    type: "Type A1",
    category: "Regent",
    label: "1 Bedroom",
    sqft: "605",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "City Views", "56.25 sq.m."],
    highlight: false,
  },
  {
    type: "Type A2",
    category: "Regent",
    label: "1 Bedroom",
    sqft: "695",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Premium Layouts", "64.53 sq.m."],
    highlight: false,
  },
  {
    type: "Type A3",
    category: "Regent",
    label: "1 Bedroom",
    sqft: "702",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "High Floor Layouts", "65.20 sq.m."],
    highlight: false,
  },
  {
    type: "Type A4",
    category: "Regent",
    label: "1 + 1 Study",
    sqft: "808",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p8_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Study Room Included", "75.06 sq.m."],
    highlight: true,
  },
  {
    type: "Type A5",
    category: "Regent",
    label: "1 + 1 Study",
    sqft: "816",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p8_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Study Room Included", "75.85 sq.m."],
    highlight: false,
  },
  {
    type: "Type A6",
    category: "Regent",
    label: "1 + 1 Study",
    sqft: "826",
    floors: "Regent Suites",
    image: "/pdh/pdh_overview_(luxury_p8_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Study Room Included", "76.74 sq.m."],
    highlight: true,
  },

  // IMPERIAL
  {
    type: "Type H2A",
    category: "Imperial",
    label: "4 Ensuites + Lanai",
    sqft: "4,090",
    floors: "Imperial Residences",
    image: "/pdh/imperial_resi_e-broc_p9_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Lanai Included", "4 Ensuites", "380 sq.m."],
    highlight: true,
  },
  {
    type: "Type H1A",
    category: "Imperial",
    label: "3 Ensuites + Studio + Lanai",
    sqft: "3,380",
    floors: "Imperial Residences",
    image: "/pdh/imperial_resi_e-broc_p8_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    features: ["Semi-Furnished", "Lanai Included", "Studio Attached", "314 sq.m."],
    highlight: false,
  },
];

type Unit = typeof ALL_UNITS[0];

/* ── Section BG ── */
function UnitBg({ unit }: { unit: Unit }) {
  const bgSrc = unit.bgImage;

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
        <Image src={bgSrc} alt={unit.label || unit.type} fill sizes="100vw" priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/98 via-[#1A1208]/88 to-[#1A1208]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/98 via-[#1A1208]/40 to-[#1A1208]/70" />
    </div>
=======
const residentialUnits = [
  {
    type: "Windsor",
    label: "Luxury Suites",
    sqft: "614 – 1,831",
    beds: 0,
    baths: 1,
    floors: "Tower 1",
    image: "/pdh/pdh_r1_&_r2_1br_e-br_p4_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    price: "Enquire Now",
    features: ["Semi-Furnished", "1–2 Car Parks", "City Views", "RM0.92psf Maintenance"],
    highlight: true,
  },
  {
    type: "Regent",
    label: "Premium Residences",
    sqft: "605 – 1,878",
    beds: 2,
    baths: 0,
    floors: "Tower 2",
    image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    price: "Enquire Now",
    features: ["Semi-Furnished", "1–2 Car Parks", "Premium Layouts", "RM0.92psf Maintenance"],
    highlight: false,
  },
  {
    type: "Crown",
    label: "Sky Residences",
    sqft: "2,303 – 2,803",
    beds: 3,
    baths: 0,
    floors: "Tower 3",
    image: "/pdh/pdh_overview_(luxury_p7_img1.jpeg",
    bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
    price: "Enquire Now",
    features: ["Semi-Furnished", "2–3 Car Parks", "Panoramic Views", "RM0.87psf Maintenance"],
    highlight: true,
  },
];

type Unit = typeof residentialUnits[0];

/* ── Immersive Modal — Large Image + Buttons Below ─────────── */
function UnitModal({ unit, onClose }: { unit: Unit; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
      <motion.div
        initial={{ scale: 0.92, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 40 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-w-5xl w-full flex flex-col max-h-[92vh]"
      >
        {/* Large image — clean, no heavy overlays */}
        <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-t-3xl overflow-hidden">
          <Image src={unit.image} alt={unit.label} fill sizes="100vw" className="object-cover" priority />

          {/* Very subtle bottom gradient only */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 border border-white/25 text-white/90 hover:text-white hover:bg-white/25 transition-all z-30 backdrop-blur-md">
            <X className="w-4 h-4" />
          </button>

          {/* Bottom-left: unit info overlay — minimal */}
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#E8C66A] font-bold font-sans mb-1" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>{unit.floors} · {unit.type}</div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-white leading-none" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>{unit.label}</div>
          </div>

          {/* Bottom-right: sqft */}
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 text-right">
            <div className="text-2xl sm:text-3xl font-heading font-medium text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{unit.sqft}</div>
            <div className="text-[8px] font-sans text-white/70 uppercase tracking-widest mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>sq.ft.</div>
          </div>
        </div>

        {/* Buttons below image — clean white strip */}
        <div className="rounded-b-3xl bg-white px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Features */}
          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
            {unit.features.map((f) => (
              <span key={f} className="px-3 py-1 rounded-full border border-[#C49A38]/25 bg-[#FDFBF7] text-[8px] sm:text-[9px] text-[#B8860B] font-sans font-bold uppercase tracking-[0.1em]">{f}</span>
            ))}
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C49A38]/30 bg-white text-[#B8860B] font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.18em] hover:bg-[#FDFBF7] hover:border-[#C49A38]/60 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </a>
            <a
              href={`https://wa.me/60112880808?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(unit.type)}%20at%20Pavilion%20Damansara%20Heights`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white hover:shadow-[0_0_25px_rgba(196,154,56,0.5)] hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-[shine-sweep_1.5s_ease-in-out_infinite]" />
              <WhatsAppIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Register Now</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
  );
}

export default function UnitLayouts() {
<<<<<<< HEAD
  const [activeCategory, setActiveCategory] = useState<"Windsor" | "Regent" | "Imperial">("Windsor");
  const filteredUnits = ALL_UNITS.filter((u) => u.category === activeCategory);

  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const activeUnit = filteredUnits[activeIdx];
  const activeFeatures = activeUnit.features;

  const navigate = (delta: number) => {
    setDir(delta);
    setActiveIdx((i) => (i + delta + filteredUnits.length) % filteredUnits.length);
  };

  const select = (i: number) => {
    if (i === activeIdx) return;
    setDir(i > activeIdx ? 1 : -1);
    setActiveIdx(i);
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section id="units" className="relative overflow-hidden bg-[#1A1208] flex flex-col justify-center py-6 sm:py-20 lg:py-28">

      {/* Dynamic BG */}
      <AnimatePresence>
        <UnitBg key={`unit-bg-${activeUnit.type}`} unit={activeUnit} />
      </AnimatePresence>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C49A38 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* ── Global Desktop Arrow Navigation ── */}
      <div className="hidden lg:flex absolute inset-y-0 left-4 xl:left-8 items-center z-30 pointer-events-none">
        <button onClick={() => navigate(-1)} aria-label="Previous Unit" className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/40 bg-[#1A1208]/60 backdrop-blur-xl flex items-center justify-center text-[#C49A38] hover:bg-[#C49A38] hover:text-[#1A1208] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.15)] group">
          <ChevronLeft size={24} className="transition-colors duration-300" />
        </button>
      </div>
      <div className="hidden lg:flex absolute inset-y-0 right-4 xl:right-8 items-center z-30 pointer-events-none">
        <button onClick={() => navigate(1)} aria-label="Next Unit" className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/40 bg-[#1A1208]/60 backdrop-blur-xl flex items-center justify-center text-[#C49A38] hover:bg-[#C49A38] hover:text-[#1A1208] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.15)] group">
          <ChevronRight size={24} className="transition-colors duration-300" />
        </button>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-3 sm:gap-5 lg:gap-8 min-h-[auto] lg:min-h-[720px]">

        {/* ── Header ── */}
        <div className="text-center lg:text-left flex flex-col lg:flex-row justify-between lg:items-end gap-6">
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
                Floor Plan Layouts
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-[#C49A38] to-transparent lg:hidden" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-normal text-white leading-[1.05] tracking-tight drop-shadow-2xl"
            >
              Luxury
              <em className="font-light italic text-[#C49A38] ml-2 lg:ml-3">Residences</em>
            </motion.h2>
          </div>

          {/* Category Toggle */}
          <div className="flex items-center justify-center gap-1 bg-white/5 p-1 rounded-full w-full max-w-md lg:max-w-sm backdrop-blur-md border border-[#C49A38]/30 mx-auto lg:mx-0 shadow-[0_4px_20px_rgba(196,154,56,0.15)] relative z-20">
            {(["Windsor", "Regent", "Imperial"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (activeCategory !== cat) {
                    setActiveCategory(cat);
                    setActiveIdx(0);
                  }
                }}
                className={`flex-1 px-1 sm:px-4 py-1.5 sm:py-2.5 rounded-full text-[9px] sm:text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat ? "bg-gradient-to-r from-[#C49A38] to-[#B8860B] text-white shadow-md scale-100" : "text-[#C49A38]/60 hover:text-[#C49A38] hover:bg-[#C49A38]/10 scale-95"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Unit pill tabs (now grid) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pb-2 mt-4 lg:mt-0">
          {filteredUnits.map((u, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={u.type}
                onClick={() => select(i)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden px-2 sm:px-5 py-2 sm:py-4 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-all duration-300 ${isActive ? "border-[#C49A38] bg-[#C49A38]/10 shadow-[0_0_20px_rgba(196,154,56,0.15)]" : "border-white/10 bg-[#1A1208]/50 hover:bg-[#1A1208]/80 hover:border-[#C49A38]/30 backdrop-blur-sm"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pill-active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#C49A38]/20 to-[#B8860B]/5 rounded-2xl"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative text-[11px] sm:text-[14px] font-heading font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] drop-shadow-md text-center leading-tight transition-colors duration-300 ${isActive ? "text-[#C49A38]" : "text-[#C49A38]/60 group-hover:text-[#C49A38]/80"}`}>{u.type}</span>
                <span className={`relative text-[8px] sm:text-[11px] font-sans font-medium uppercase tracking-wider drop-shadow-sm text-center leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`}>
                  {u.label}
                </span>
                
                {u.highlight && (
                  <div className={`absolute top-2 right-3 w-1.5 h-1.5 rounded-full ${isActive ? "bg-white shadow-[0_0_6px_#fff]" : "bg-[#C49A38]/50"} transition-colors`} />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* ── Active Layout Display ── */}
        <div className="mt-1 sm:mt-6 flex flex-col justify-between flex-1 relative">
          <div className="relative w-full h-full flex-1">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`layout-${activeIdx}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    navigate(1);
                  } else if (swipe > 50) {
                    navigate(-1);
                  }
                }}
                className="flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-14 items-center w-full cursor-grab active:cursor-grabbing"
              >

                {/* Left: Interactive Image Viewer */}
                <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] bg-[#FDFBF7] rounded-[2rem] sm:rounded-[3rem] border border-[#C49A38]/20 flex items-center justify-center p-4 sm:p-8 lg:p-10 group overflow-hidden pointer-events-none sm:pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  
                  {/* Subtle inner aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#C49A38]/5 to-[#C49A38]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <Image
                      src={activeUnit.image}
                      alt={activeUnit.type}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      priority
                    />
                  </div>

                  {/* Swipe hint overlay for mobile */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex lg:hidden items-center gap-2 bg-[#1A1208]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C49A38]/20 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                    <ChevronLeft className="w-3.5 h-3.5 text-[#C49A38]" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C49A38]">Swipe</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C49A38]" />
                  </div>
                </div>

                {/* Right: Info Panel */}
                <div className="order-1 lg:order-last col-span-1 lg:col-span-5 flex flex-col justify-center h-full gap-4 sm:gap-8 relative z-10 w-full">

                  {/* Header */}
                  <div className="flex flex-col gap-2 relative z-10 w-fit mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-normal text-white leading-[1.05] drop-shadow-2xl">
                      {activeUnit.type}
                      <span className="block text-xl sm:text-2xl text-[#C49A38] font-light mt-2 tracking-wide drop-shadow-lg">
                        {activeUnit.label}
                      </span>
                    </h3>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 p-5 sm:p-7 bg-[#1A1208]/60 border border-[#C49A38]/20 rounded-[1.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl w-full relative z-10">

                    {/* Size */}
                    <div className="flex flex-col gap-1.5 p-1">
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C49A38] drop-shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49A38]" />
                        <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C49A38]">Size Build-Up</span>
                      </div>
                      <div className="text-xl sm:text-[22px] font-heading font-normal text-white tracking-tight leading-none drop-shadow-lg mt-1 text-center lg:text-left">{activeUnit.sqft} <span className="text-[11px] sm:text-[13px] font-sans font-light text-white/50 tracking-wider">sq.ft.</span></div>
                    </div>

                    {/* Tower */}
                    <div className="flex flex-col gap-1.5 p-1 border-l border-[#C49A38]/20 pl-4 sm:pl-5">
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C49A38] drop-shadow-sm">
                        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49A38]" />
                        <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C49A38]">Tower</span>
                      </div>
                      <div className="text-[18px] sm:text-[22px] font-heading font-normal text-white tracking-tight leading-snug pr-2 mt-1 drop-shadow-md text-center lg:text-left">{activeUnit.floors}</div>
                    </div>

                  </div>


                  
                  {/* Actions (Desktop only) */}
                  <div className="hidden lg:flex justify-center flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full mx-auto lg:max-w-none lg:mx-0 relative z-10">
                    <a
                      href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Damansara%20Heights`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-4 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#C49A38] to-[#B8860B] text-white font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.25)] hover:shadow-[0_8px_35px_rgba(196,154,56,0.45)]"
                    >
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] relative z-10 shrink-0">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      <span className="relative z-10 drop-shadow-md">E-Brochure</span>
                    </a>

                    <a
                      href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Damansara%20Heights`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-4 sm:py-3.5 rounded-xl border border-[#25D366]/40 bg-white/5 backdrop-blur-md text-[#25D366] font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.1)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.3)]"
                    >
                      <WhatsAppIcon className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] relative z-10 shrink-0 text-[#25D366] group-hover:text-white transition-colors duration-300" />
                      <span className="relative z-10 whitespace-nowrap drop-shadow-md">WhatsApp</span>
                    </a>
                  </div>

                </div>

                {/* Actions (Mobile only, rendered after Image) */}
                <div className="flex lg:hidden order-3 justify-center flex-col sm:flex-row gap-2.5 sm:gap-4 mt-2 w-full mx-auto relative z-10">
                  <a
                    href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Damansara%20Heights`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#C49A38] to-[#B8860B] text-white font-sans font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(196,154,56,0.25)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] relative z-10 shrink-0">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span className="relative z-10 drop-shadow-md">E-Brochure</span>
                  </a>

                  <a
                    href={`https://wa.me/60122705608?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(activeUnit.type)}%20(${activeUnit.sqft}%20sq.ft.)%20at%20Pavilion%20Damansara%20Heights`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden flex justify-center items-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl border border-[#25D366]/40 bg-white/5 backdrop-blur-md text-[#25D366] font-sans font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(37,211,102,0.1)]"
                  >
                    <WhatsAppIcon className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] relative z-10 shrink-0 text-[#25D366]" />
                    <span className="relative z-10 whitespace-nowrap drop-shadow-md">WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

=======
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalUnit, setModalUnit] = useState<Unit | null>(null);
  const [paused, setPaused] = useState(false);
  const activeUnit = residentialUnits[activeIdx];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % residentialUnits.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const select = (i: number) => {
    setActiveIdx(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  return (
    <section id="units" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F9F1E0 0%, #F5EBCE 30%, #EDE1C4 60%, #F5EBCE 100%)" }}>

      {/* Layered warm glow effects */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(196,154,56,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #B8860B 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Decorative gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 sm:py-28">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-10 h-[1px] bg-gradient-to-r from-[#C49A38] to-transparent" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.4em] font-bold text-[#C49A38]">
              Luxury Residences · Pavilion Damansara Heights
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[1.05] tracking-tight text-[#222]"
          >
            Unit <em className="italic font-light text-[#C49A38]">Layouts</em>
          </motion.h2>
        </div>

        {/* Main layout — side by side */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* LEFT: Unit Selector Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {residentialUnits.map((u, i) => {
              const isActive = i === activeIdx;
              return (
                <motion.button
                  key={u.type}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  onClick={() => select(i)}
                  className={`group relative text-left rounded-2xl transition-all duration-500 overflow-hidden
                    ${isActive
                      ? "bg-white shadow-[0_8px_40px_rgba(196,154,56,0.25),_0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-[#C49A38]/50"
                      : "bg-white/60 hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(196,154,56,0.15)] border border-[#C49A38]/15 hover:border-[#C49A38]/35 backdrop-blur-sm"
                    }`}
                >
                  {/* Active indicator — gold left bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-500 ${isActive ? "bg-gradient-to-b from-[#C49A38] via-[#D4AF5C] to-[#C49A38]" : "bg-transparent"}`} />

                  <div className="relative px-6 py-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[9px] font-sans uppercase tracking-[0.35em] font-bold transition-colors duration-300 ${isActive ? "text-[#C49A38]" : "text-[#B8860B]/60"}`}>
                        0{i + 1} · {u.type}
                      </span>
                      {u.highlight && (
                        <span className="text-[7px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#C49A38]/10 border border-[#C49A38]/30 text-[#C49A38] font-bold">
                          Hot
                        </span>
                      )}
                    </div>
                    <div className={`text-xl sm:text-2xl font-heading font-normal tracking-wide transition-colors duration-300 ${isActive ? "text-[#222]" : "text-[#555] group-hover:text-[#333]"}`}>
                      {u.label}
                    </div>
                    <div className={`text-[11px] font-sans mt-1.5 font-medium transition-colors duration-300 ${isActive ? "text-[#888]" : "text-[#aaa] group-hover:text-[#888]"}`}>
                      {u.sqft} <span className="text-[9px]">sq.ft.</span>
                    </div>

                    {/* Active arrow indicator */}
                    <div className={`absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
                      <ArrowUpRight className="w-4 h-4 text-[#C49A38]" />
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* Pagination dots */}
            <div className="flex gap-2 mt-3 pl-1">
              {residentialUnits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => select(i)}
                  className={`rounded-full transition-all duration-500
                    ${i === activeIdx
                      ? "bg-[#C49A38] w-8 h-2 shadow-[0_0_12px_rgba(196,154,56,0.5)]"
                      : "bg-[#C49A38]/20 hover:bg-[#C49A38]/40 w-2 h-2"}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`showcase-${activeIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 flex flex-col gap-4"
            >
              {/* Main image card — all info integrated */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setModalUnit(activeUnit)}
                style={{
                  boxShadow: "0 16px 60px rgba(196,154,56,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src={activeUnit.image}
                  alt={activeUnit.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                />

                {/* Gradient overlays — stronger for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                {/* Top-left badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C49A38]/20 backdrop-blur-md shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38] shadow-[0_0_6px_rgba(196,154,56,0.8)]" />
                    <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-bold text-[#333]">{activeUnit.type} Collection</span>
                  </div>
                </div>

                {/* Top-right compact stats pills — gold/bronze color */}
                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2">
                  {[
                    { icon: Maximize2, val: `${activeUnit.sqft} sf` },
                    { icon: Building2, val: activeUnit.floors },
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C49A38]/90 border border-[#E8C66A]/40 backdrop-blur-md shadow-lg">
                      <s.icon className="w-3 h-3 text-white" strokeWidth={1.5} />
                      <span className="text-[9px] font-sans font-bold text-white uppercase tracking-wider">{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom overlay — title + features */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7">
                  {/* Title row */}
                  <div className="flex items-end justify-between gap-4 mb-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.35em] text-[#E8C66A] font-bold font-sans mb-1.5" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>{activeUnit.floors}</div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-light text-white leading-none" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>{activeUnit.label}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-white" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.7)" }}>{activeUnit.sqft}</div>
                      <div className="text-[8px] font-sans text-white/70 uppercase tracking-widest mt-0.5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>sq.ft.</div>
                    </div>
                  </div>

                  {/* Features row — gold/bronze pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/20">
                    {activeUnit.features.map((f) => (
                      <span key={f} className="px-2.5 py-1 rounded-full bg-[#C49A38]/20 border border-[#C49A38]/40 text-[8px] sm:text-[9px] text-[#E8C66A] font-sans font-bold uppercase tracking-[0.08em] backdrop-blur-sm" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{f}</span>
                    ))}
                  </div>
                </div>

                {/* Hover — expand prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 bg-black/10">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 border border-[#C49A38]/30 text-[#333] font-sans font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-[#C49A38]" /> View Full
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38]/40 to-transparent" />

      <AnimatePresence>
        {modalUnit && <UnitModal unit={modalUnit} onClose={() => setModalUnit(null)} />}
      </AnimatePresence>
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    </section>
  );
}
