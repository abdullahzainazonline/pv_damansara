"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Waves, Dumbbell, TreePine, Gamepad2, Star, ChevronLeft, ChevronRight,
  Bell, Train, ShoppingBag, Building, Plane
} from "lucide-react";

/* ── Levels data ─────────────────────────────────────── */
const levels = [
  {
    id: "AQUA",
    label: "Aquatic Oasis",
    headline: "Resort-Style Pools",
    tagline: "4 Aquatic Zones for Ultimate Relaxation",
    description: "Immerse yourself in our cascading lap pools, heated jacuzzi, and children's water play areas. Surrounded by sun deck cabanas and lush landscaping, the aquatic oasis brings resort-style living to your doorstep.",
    image: "/pdh/ct10_e-broucher__p4_img1.jpeg",
    bgPC: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgMobile: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    accent: "#C49A38",
    icon: Waves,
  },
  {
    id: "WELL",
    label: "Fitness & Wellness",
    headline: "Holistic Health",
    tagline: "5+ Elite Wellness Spaces",
    description: "A sanctuary dedicated to your mind and body. Featuring a fully equipped gymnasium, serene yoga room, relaxing sauna suites, and outdoor wellness trails designed for complete rejuvenation.",
    image: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    accent: "#C49A38",
    icon: Dumbbell,
  },
  {
    id: "REC",
    label: "Recreation Hub",
    headline: "Curated Entertainment",
    tagline: "Exclusive Masterclass Social Lounges",
    description: "Host gatherings in immaculate function rooms or unwind in the library gallery. Complete with a games room and private lounges, providing the perfect sophisticated setting for curated entertainment.",
    image: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    accent: "#C49A38",
    icon: Gamepad2,
  },
  {
    id: "EXT",
    label: "Outdoor & Living",
    headline: "Elevated Living",
    tagline: "Endless Experiences Await",
    description: "Step out onto expansive sky terraces and beautifully manicured garden lawns. Grill your favorite meals at the BBQ kitchen, while children enjoy dedicated daycare centers within a truly elevated community.",
    image: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    accent: "#C49A38",
    icon: TreePine,
  },
  {
    id: "CONC",
    label: "Service Elements",
    headline: "Dedicated Concierge",
    tagline: "Peace of Mind & Convenience",
    description: "The dedicated Pavilion concierge team offers peace of mind and convenience, further enhancing your experience of living in Pavilion Damansara Heights.",
    image: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p16_img1.jpeg",
    accent: "#C49A38",
    icon: Bell,
  },
  {
    id: "MRT",
    label: "Seamless Connection",
    headline: "MRT Station Access",
    tagline: "Limitless City Connectivity",
    description: "Seamless connection to Pavilion Damansara Heights MRT Station provides limitless connectivity to the city centre and KL Sentral, the transportation hub of Kuala Lumpur.",
    image: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p17_img1.jpeg",
    accent: "#C49A38",
    icon: Train,
  },
  {
    id: "MALL",
    label: "Retail Integration",
    headline: "Direct Mall Access",
    tagline: "Phase 2 Opening June 2025",
    description: "Residents have direct access to Pavilion Damansara Heights Mall Phase 2, opening in June 2025, which includes a variety of shopping and dining outlets right at your doorstep.",
    image: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgPC: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgMobile: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    accent: "#C49A38",
    icon: ShoppingBag,
  },
  {
    id: "TOD",
    label: "Integrated Masterplan",
    headline: "Freehold TOD",
    tagline: "16-Acre Mature Township",
    description: "Spanning 16 acres, Pavilion Damansara Heights is a freehold integrated development with direct connections to retail, MRT, and office components, located within a mature township.",
    image: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgPC: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    bgMobile: "/pdh/pdh_overview_(luxury_p18_img1.jpeg",
    accent: "#C49A38",
    icon: Building,
  },
  {
    id: "HUB",
    label: "Transportation",
    headline: "Global & CBD Access",
    tagline: "Gateway to KLIA & TRX",
    description: "The gateway to Kuala Lumpur International Airport (KLIA & KLIA2) via the KLIA Ekspres Line from KL Sentral. Enjoy a direct line to the Central Business District (CBD) and the upcoming Tun Razak Exchange (TRX).",
    image: "/pdh/ct10_e-broucher__p4_img1.jpeg",
    bgPC: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    bgMobile: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    accent: "#C49A38",
    icon: Plane,
  },
];

export default function Facilities() {
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
            src={isMobile ? (l.bgMobile || l.bgPC) : l.bgPC} 
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
          >
            <Star className="w-3.5 h-3.5" />
            World-Class Lifestyle Amenities
          </motion.div>
          <motion.h2
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

        {/* Level tabs - Adaptive wrapping layout */}
        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-2.5 mb-8 sm:mb-12 px-0 w-full justify-start items-center">
          {levels.map((l, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={l.id}
                onClick={() => selectLevel(i)}
                className={`relative flex items-center justify-center px-4 py-2.5 sm:py-3 rounded-full text-[10px] min-[390px]:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] font-sans font-bold transition-all duration-500 overflow-hidden flex-shrink-0 border ${
                  isActive
                    ? "bg-[#C49A38] border-[#C49A38] text-[#100D0A] shadow-[0_6px_24px_rgba(196,154,56,0.45)] w-full lg:w-auto lg:flex-shrink-0"
                    : "bg-white/5 text-white/50 border-white/10 hover:border-[#C49A38]/40 hover:text-[#C49A38] hover:bg-white/10 backdrop-blur-md flex-grow lg:flex-grow-0"
                }`}
              >
                {/* Icon displays always for active, but gracefully hides on smaller screens for inactive */}
                <l.icon className={`w-3.5 h-3.5 mr-2 transition-all duration-500 ${isActive ? 'opacity-100 flex-shrink-0' : 'opacity-50 hidden sm:block flex-shrink-0'}`} />
                <span className="relative z-10 whitespace-nowrap">{l.id}</span>
                
                {/* Descriptive label expands only for the active tab */}
                <span
                  className={`relative z-10 whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "max-w-[300px] opacity-100 ml-1.5" : "max-w-0 opacity-0 ml-0 inline-block border-0"
                  }`}
                >
                  — {l.label}
                </span>
              </button>
            );
          })}
        </div>

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
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -60 || velocity.x < -400) {
                    nextSlide();
                  } else if (offset.x > 60 || velocity.x > 400) {
                    prevSlide();
                  }
                }}
                className="relative w-full rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-square xl:aspect-[4/5] group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu border border-white/10 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Main image */}
                <Image
                  src={active.image}
                  alt={active.headline}
                  fill
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
    </section>
  );
}

