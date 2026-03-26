"use client";

import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Waves, Dumbbell, TreePine, Gamepad2, Star, ChevronLeft, ChevronRight
} from "lucide-react";

/* ── Levels data ─────────────────────────────────────── */
=======
import { useState, useEffect } from "react";
import Image from "next/image";
import { Waves, Dumbbell, TreePine, Gamepad2, Star } from "lucide-react";

>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
const levels = [
  {
    id: "AQUA",
    label: "Aquatic Oasis",
    headline: "Resort-Style Pools",
<<<<<<< HEAD
    tagline: "4 Aquatic Zones for Ultimate Relaxation",
    description: "Immerse yourself in our cascading lap pools, heated jacuzzi, and children's water play areas. Surrounded by sun deck cabanas and lush landscaping, the aquatic oasis brings resort-style living to your doorstep.",
    image: "/pdh/ct10_e-broucher__p4_img1.jpeg",
    bgPC: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgMobile: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    accent: "#C49A38",
=======
    stat: "4",
    statLabel: "Aquatic Zones",
    image: "/pdh/ct10_e-broucher__p4_img1.jpeg",
    bgImage: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    features: ["Lap Pool", "Children's Pool", "Heated Pool", "Jacuzzi", "Sun Deck", "Poolside Lounge"],
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    icon: Waves,
  },
  {
    id: "WELL",
    label: "Fitness & Wellness",
    headline: "Holistic Health",
<<<<<<< HEAD
    tagline: "5+ Elite Wellness Spaces",
    description: "A sanctuary dedicated to your mind and body. Featuring a fully equipped gymnasium, serene yoga room, relaxing sauna suites, and outdoor wellness trails designed for complete rejuvenation.",
    image: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    accent: "#C49A38",
=======
    stat: "5+",
    statLabel: "Wellness Spaces",
    image: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    features: ["Equipped Gym", "Yoga Room", "Sauna & Steam", "Wellness Trail", "Fitness Deck", "Meditation Zones"],
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    icon: Dumbbell,
  },
  {
    id: "REC",
    label: "Recreation Hub",
    headline: "Curated Entertainment",
<<<<<<< HEAD
    tagline: "Exclusive Masterclass Social Lounges",
    description: "Host gatherings in immaculate function rooms or unwind in the library gallery. Complete with a games room and private lounges, providing the perfect sophisticated setting for curated entertainment.",
    image: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    accent: "#C49A38",
=======
    stat: "Elite",
    statLabel: "Social Lounges",
    image: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    features: ["Function Room", "Pre-function Room", "Library Gallery", "Game Room", "Private Lounges", "Reading Nooks"],
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    icon: Gamepad2,
  },
  {
    id: "EXT",
    label: "Outdoor & Living",
    headline: "Elevated Living",
<<<<<<< HEAD
    tagline: "Endless Experiences Await",
    description: "Step out onto expansive sky terraces and beautifully manicured garden lawns. Grill your favorite meals at the BBQ kitchen, while children enjoy dedicated daycare centers within a truly elevated community.",
    image: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    accent: "#C49A38",
=======
    stat: "∞",
    statLabel: "Lifestyle",
    image: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgImage: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    features: ["Sky Terrace", "Garden Lawn & BBQ", "Grill Kitchen", "Day Care Center", "Laundrette", "Prayer Room"],
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    icon: TreePine,
  },
];

<<<<<<< HEAD

export default function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const active = levels[activeIdx];

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % levels.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + levels.length) % levels.length);
  const selectLevel = (i: number) => setActiveIdx(i);

  return (
    <section id="facilities" className="relative min-h-screen w-full bg-[#100D0A] pt-20 pb-20 overflow-hidden">

      {/* Full-bleed background per level */}
      {levels.map((l, i) => (
        <motion.div
          key={l.id}
          className="absolute inset-0"
          animate={{ opacity: i === activeIdx ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image 
            src={isMobile ? l.bgMobile : l.bgPC} 
            alt={l.headline} 
            fill 
            sizes="100vw" 
            priority={i === 0} 
            className="object-cover kb-zoom-bg" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#100D0A]/96 via-[#1A1208]/80 to-[#100D0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/90 via-transparent to-[#100D0A]/50" />
        </motion.div>
      ))}

      {/* ── Global Desktop Arrow Navigation ── */}
      <div className="hidden lg:flex absolute inset-y-0 left-4 xl:left-8 items-center z-30 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/50 bg-[#100D0A]/60 backdrop-blur-xl flex items-center justify-center text-[#E8C66A] hover:bg-[#C49A38]/40 hover:border-[#E8C66A] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.2)]">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="hidden lg:flex absolute inset-y-0 right-4 xl:right-8 items-center z-30 pointer-events-none">
        <button onClick={nextSlide} className="pointer-events-auto w-14 h-14 rounded-full border border-[#C49A38]/50 bg-[#100D0A]/60 backdrop-blur-xl flex items-center justify-center text-[#E8C66A] hover:bg-[#C49A38]/40 hover:border-[#E8C66A] hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(196,154,56,0.2)]">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 sm:py-28">

        {/* Section heading */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-5 text-[#C49A38] font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold flex items-center gap-3"
=======
export default function Facilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = levels[activeIdx];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % levels.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const selectLevel = (i: number) => {
    setActiveIdx(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  return (
    <section id="facilities" className="relative overflow-hidden min-h-screen">

      {/* ── Full-bleed background ── */}
      <AnimatePresence>
        <motion.div
          key={`fac-bg-${activeIdx}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={active.bgImage} alt="" fill sizes="100vw" priority className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays — warm umber, NOT black ── */}
      {/* Center-split: slightly darker left for text, let right show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/92 via-[#1A1208]/70 to-[#1A1208]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 via-transparent to-[#1A1208]/50" />
      {/* Gold shimmer accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38] to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/60 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 sm:py-24 min-h-screen flex flex-col justify-center">

        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C49A38] font-sans text-[10px] uppercase tracking-[0.45em] font-bold flex items-center gap-3 mb-4"
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
          >
            <Star className="w-3.5 h-3.5" />
            World-Class Lifestyle Amenities
          </motion.div>
          <motion.h2
<<<<<<< HEAD
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] min-[390px]:text-[13vw] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tight"
          >
            Sky-High <em style={{ fontStyle: "normal", WebkitTextFillColor: "transparent", background: "linear-gradient(135deg,#C49A38,#E8C66A)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Facilities</em>
            <br />Like No Other
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: "left center" }}
            className="section-divider mt-4 w-16 h-[2px] bg-gradient-to-r from-[#C49A38] to-transparent"
          />
        </div>

        {/* Level tabs - Grid layout for mobile */}
        <div className="grid grid-cols-2 sm:flex sm:justify-start gap-2 mb-8 sm:mb-12 px-0 w-full sm:w-auto">
=======
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg"
          >
            Sky-High <em className="italic font-light text-[#C49A38]">Facilities</em>
          </motion.h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#C49A38] to-transparent" />
        </div>

        {/* Tab pills */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
          {levels.map((l, i) => (
            <button
              key={l.id}
              onClick={() => selectLevel(i)}
<<<<<<< HEAD
              className={`relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-sans font-bold transition-all duration-400 overflow-hidden group ${i === activeIdx
                ? "bg-[#C49A38] text-[#100D0A] shadow-[0_6px_24px_rgba(196,154,56,0.45)]"
                : "bg-white/10 text-white/60 border border-white/10 hover:border-[#C49A38]/50 hover:text-[#C49A38] backdrop-blur-sm"
                }`}
            >
              <span className="relative z-10">{l.id}</span>
              <span className="relative z-10 hidden sm:inline">— {l.label}</span>
=======
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-400 overflow-hidden group ${i === activeIdx
                ? "bg-[#C49A38] text-black shadow-[0_6px_24px_rgba(196,154,56,0.45)]"
                : "bg-white/10 text-white/60 border border-white/15 hover:border-[#C49A38]/50 hover:text-[#C49A38] backdrop-blur-sm"
                }`}
            >
              {i === activeIdx && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              <l.icon className="w-3.5 h-3.5 relative z-10" strokeWidth={i === activeIdx ? 2 : 1.5} />
              <span className="relative z-10">{l.label}</span>
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Main content area */}
        <div className="flex-1 grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[600px] lg:min-h-[650px]">

          {/* Left — Details & Facilities List */}
          <div className="lg:col-span-3 flex flex-col justify-center h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-center"
              >
                {/* Level badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 min-[390px]:mb-6 w-fit text-[10px] min-[390px]:text-[11px] uppercase tracking-widest font-bold shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                  style={{ background: `${active.accent}18`, border: `1px solid ${active.accent}35`, color: active.accent }}>
                  <active.icon className="w-3.5 h-3.5" />
                  {active.label}
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white mb-3 min-[390px]:mb-4 leading-[1.05] tracking-tight drop-shadow-md">
                  {active.headline}
                </h3>

                <div className="hidden sm:block text-[#C49A38] text-[14px] min-[390px]:text-[16px] sm:text-xl md:text-2xl mb-6 min-[390px]:mb-8 font-medium bg-gradient-to-r from-[#C49A38]/15 to-transparent p-4 rounded-xl border-l-4 border-[#C49A38] leading-snug w-fit pr-10">
                  {active.tagline}
                </div>

                {/* Description Paragraph */}
                <p
                  className="hidden sm:block text-white/90 text-[15px] sm:text-[17px] leading-[1.7] max-w-[95%] xl:max-w-[85%] font-light tracking-wide lg:pr-8"
                  style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}
                >
                  {active.description}
                </p>

                {/* Progress Tracker (Desktop) */}
                <div className="hidden lg:flex items-center gap-3 mt-8 opacity-80">
                  <div className="text-[10px] font-mono tracking-[0.4em] text-white/50 font-bold uppercase flex items-center gap-2">
                    <span className="text-[#E8C66A] text-[12px] bg-[#C49A38]/10 px-2.5 py-1 rounded border border-[#C49A38]/20">{String(activeIdx + 1).padStart(2, '0')}</span>
                    <span className="mx-1">/</span>
                    {String(levels.length).padStart(2, '0')}
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-[#C49A38]/40 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Creative Image Container (Title Only) */}
          <div className="lg:col-span-2 flex flex-col justify-center h-full w-full py-4 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active.id}`}
                initial={{ opacity: 0, x: 40, scale: 0.95, rotateY: 5 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, x: -40, scale: 0.95, rotateY: -5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -60 || velocity.x < -400) {
                    prevSlide();
                  } else if (offset.x > 60 || velocity.x > 400) {
                    nextSlide();
                  }
                }}
                className="relative w-full rounded-3xl overflow-hidden img-card-hover aspect-[4/5] sm:aspect-[3/4] lg:aspect-square xl:aspect-[4/5] group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:-translate-y-2 lg:transition-transform lg:duration-700 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Main image */}
=======
        {/* ── EQUAL 2-column grid (6/6) ── */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT column — Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`panel-${active.id}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 h-full"
            >
              {/* Main info card — glassmorphism */}
              <div className="flex-1 relative p-7 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
                {/* Corner gold brackets */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#C49A38]" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#C49A38]" />
                <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#C49A38]/40" />
                <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#C49A38]/40" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A38]/50 bg-[#C49A38]/15 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38] animate-pulse shadow-[0_0_8px_rgba(196,154,56,0.9)]" />
                  <span className="text-[9px] uppercase tracking-[0.35em] font-sans font-bold text-[#C49A38]">{active.label}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-heading font-normal text-white mb-7 leading-tight drop-shadow-md">
                  {active.headline}
                </h3>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {active.features.map((f, i) => (
                    <motion.span
                      key={f}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#C49A38] px-3.5 py-1.5 rounded-full border border-[#C49A38]/35 bg-[#C49A38]/10 backdrop-blur-sm hover:border-[#C49A38]/70 hover:bg-[#C49A38]/20 transition-all duration-300 cursor-default"
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Stat card — solid gold */}
              <div className="relative p-6 rounded-3xl bg-[#C49A38] overflow-hidden shadow-[0_8px_30px_rgba(196,154,56,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shine-sweep_4s_ease-in-out_infinite]" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-sans uppercase tracking-[0.3em] font-bold text-black/55 mb-1">{active.statLabel}</div>
                    <div className="text-5xl font-heading font-normal text-black leading-none">{active.stat}</div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-black/15 flex items-center justify-center bg-black/10">
                    <active.icon className="w-7 h-7 text-black/70" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT column — Image card (SAME height as left) */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active.id}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.0, ease: [0.25, 1, 0.35, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/15 shadow-[0_12px_60px_rgba(0,0,0,0.35)] group"
              >
                {/* Corner brackets on hover */}
                <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-[#C49A38]/70 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-[#C49A38]/70 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
                <Image
                  src={active.image}
                  alt={active.headline}
                  fill
<<<<<<< HEAD
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                />

                {/* Animated glowing border */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none transition-colors duration-700"
                  style={{ boxShadow: `inset 0 0 0 1px ${active.accent}40` }}
                />

                {/* Mobile Animated Swipe Hint Overlay */}
                <div className="absolute top-4 left-0 right-0 flex justify-center sm:hidden z-20 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-3 bg-[#100D0A]/50 backdrop-blur-md border border-[#C49A38]/30 px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] text-[#E8C66A]"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Swipe Image to Explore</span>
                  </motion.div>
                </div>

                {/* Reactivated Slider Navigation Buttons on Mobile */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:hidden z-20 pointer-events-none">
                  <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="w-10 h-10 rounded-full bg-[#100D0A]/60 backdrop-blur-md border border-[#C49A38]/40 flex items-center justify-center text-[#E8C66A] hover:bg-[#C49A38] transition-all duration-300 pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.8)] active:scale-90">
                    <ChevronLeft size={22} className="-ml-0.5" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="w-10 h-10 rounded-full bg-[#100D0A]/60 backdrop-blur-md border border-[#C49A38]/40 flex items-center justify-center text-[#E8C66A] hover:bg-[#C49A38] transition-all duration-300 pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.8)] active:scale-90">
                    <ChevronRight size={22} className="-mr-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Tagline & Paragraph Content (Rendered Below Image) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-mob-${active.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:hidden mt-4 w-full relative z-20 bg-[#1A1612] rounded-xl overflow-hidden shadow-2xl p-5 sm:p-6 border border-white/5"
              >
                <div className="text-[#E8C66A] text-[15px] min-[390px]:text-[16px] mb-4 font-medium bg-[#2A241D] px-4 py-2.5 rounded-r-xl border-l-[3px] border-[#C49A38] drop-shadow-md inline-block w-fit">
                  {active.tagline}
                </div>
                <p
                  className="text-white/80 text-[14px] leading-[1.7] font-light px-1"
                >
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/50 to-transparent" />
=======
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                />

                {/* Gradient — warm umber, not black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 via-transparent to-transparent" />

                {/* Bottom HUD */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.35em] text-[#C49A38] font-bold font-sans mb-2">Zone · {active.id}</div>
                      <div className="text-2xl sm:text-3xl font-heading font-light text-white drop-shadow-lg">{active.headline}</div>
                    </div>
                    {/* Dot indicators */}
                    <div className="flex flex-col gap-1.5 items-end">
                      {levels.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => selectLevel(i)}
                          className={`rounded-full transition-all duration-500 ${i === activeIdx
                            ? "bg-[#C49A38] w-6 h-2 shadow-[0_0_10px_rgba(196,154,56,0.8)]"
                            : "bg-white/30 hover:bg-[#C49A38]/60 w-2 h-2"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
    </section>
  );
}
