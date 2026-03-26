"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  "/pdh/(feb_2026)_pdh_rc_ro_p1_img3.jpeg",
  "/pdh/ct10_e-broucher__p3_img1.jpeg",
  "/pdh/pdh_overview_(luxury_p3_img1.jpeg",
];

<<<<<<< HEAD
const WA_LINK =
  "https://api.whatsapp.com/send?phone=60122705608&text=Hi%2C+I+am+interested+in+Pavilion+Damansara+Heights";

/* ── WhatsApp SVG Icon ────────────────────────────────── */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

=======
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
/* ── Pre-computed particle data (deterministic — no Math.random) ── */
const PARTICLES = [
  { id: 0, left: "8%", bottom: "5%", size: 2.5, delay: 0, duration: 10, opacity: 0.5 },
  { id: 1, left: "18%", bottom: "12%", size: 3, delay: 1.5, duration: 12, opacity: 0.4 },
  { id: 2, left: "30%", bottom: "8%", size: 2, delay: 3, duration: 9, opacity: 0.6 },
  { id: 3, left: "42%", bottom: "18%", size: 3.5, delay: 0.8, duration: 11, opacity: 0.35 },
  { id: 4, left: "55%", bottom: "3%", size: 2.5, delay: 4, duration: 13, opacity: 0.45 },
  { id: 5, left: "65%", bottom: "15%", size: 2, delay: 2, duration: 10, opacity: 0.55 },
  { id: 6, left: "75%", bottom: "10%", size: 3, delay: 5, duration: 12, opacity: 0.4 },
  { id: 7, left: "85%", bottom: "6%", size: 2.5, delay: 1, duration: 9, opacity: 0.5 },
  { id: 8, left: "92%", bottom: "20%", size: 3.5, delay: 3.5, duration: 11, opacity: 0.35 },
  { id: 9, left: "50%", bottom: "22%", size: 2, delay: 6, duration: 14, opacity: 0.45 },
];

/* ── Floating Gold Particles (client-only to avoid hydration mismatch) ── */
function GoldParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(232,198,106,${p.opacity}) 0%, rgba(196,154,56,0) 70%)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(196,154,56,${p.opacity * 0.8})`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Marquee Text Strip ───────────────────────────────── */
function MarqueeStrip() {
  const items = [
    "FREEHOLD", "15.92 ACRES", "3 RESIDENTIAL TOWERS", "1M SQFT MALL",
    "DAMANSARA HEIGHTS", "MRT CONNECTED", "SEMI-FURNISHED", "PHASE 1 READY",
    "9 CORPORATE TOWERS", "BEVERLY HILLS OF KL",
  ];
  return (
    <div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden pointer-events-none">
      {/* Gold line above marquee */}
      <div
        className="w-full h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(196,154,56,0.4), rgba(196,154,56,0.6), rgba(196,154,56,0.4), transparent)",
        }}
      />
      <div
        className="py-3 sm:py-4"
        style={{
          background: "linear-gradient(180deg, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.95) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="marquee-track flex whitespace-nowrap gap-8 sm:gap-12" style={{ willChange: "transform" }}>
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/80 font-sans font-semibold flex items-center gap-6 sm:gap-10">
              {item} <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A38] inline-block shadow-[0_0_6px_rgba(196,154,56,0.8)]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Scroll Down Indicator ────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5, duration: 1 }}
      className="absolute bottom-[60px] sm:bottom-[70px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
    >
      <div className="hero-scroll-indicator w-[1px] h-6 sm:h-8 bg-gradient-to-b from-[#C49A38]/80 to-transparent" />
    </motion.div>
  );
}

/* ── Main Hero Component ──────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[100dvh] bg-[#2A1F10] flex items-center justify-center overflow-hidden">
      {/* Cinematic Frame Container */}
      <motion.div
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        {/* ▸ Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {/* Static fallback */}
          <div className="absolute inset-0 z-0">
            <Image src={HERO_IMAGES[0]} alt="Background Fallback" fill priority sizes="100vw" className="object-cover opacity-60" />
          </div>
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={HERO_IMAGES[currentImageIndex]}
                alt="Pavilion Damansara Heights"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ filter: "brightness(0.65) saturate(1.1)" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Light overlays — enough for text readability without killing the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1208]/40 via-[#1A1208]/10 to-[#1A1208]/55 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/20 via-transparent to-[#1A1208]/15 z-20 pointer-events-none" />
        </div>

        {/* ▸ Gold Particles */}
        <GoldParticles />

        {/* ▸ Ambient glow behind title area */}
        <div
          className="hero-glow-ring absolute top-1/2 left-1/2 z-25 pointer-events-none w-[400px] h-[300px] sm:w-[600px] sm:h-[400px] lg:w-[800px] lg:h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(196,154,56,0.05) 0%, rgba(196,154,56,0.02) 50%, transparent 80%)",
          }}
        />

        {/* ▸ Main Content Overlay */}
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            style={{ y: textY, opacity: heroOpacity }}
            className="w-full max-w-7xl px-4 relative z-50 mx-auto text-center"
          >
            {/* Top tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 sm:gap-5 mb-5 sm:mb-8"
            >
              <div className="w-8 sm:w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C49A38]" />
              <span
                className="font-sans text-[8px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.35em] sm:tracking-[0.5em] font-bold"
                style={{
                  color: "#E8C66A",
                  textShadow: "0 0 15px rgba(196,154,56,0.6), 0 2px 6px rgba(0,0,0,0.7)",
                }}
              >
                The Beverly Hills of KL
              </span>
              <div className="w-8 sm:w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C49A38]" />
            </motion.div>

            {/* ═══ THE HEADLINE STACK ═══ */}
            <div className="flex flex-col items-center">

              {/* PAVILION — Cormorant Garamond, semi-bold white with gold glow */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="text-[11vw] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.85] uppercase"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    color: "#FFFFFF",
                    textShadow: `
                      0 0 60px rgba(196,154,56,0.4),
                      0 0 30px rgba(196,154,56,0.25),
                      0 4px 20px rgba(0,0,0,0.85),
                      0 2px 6px rgba(0,0,0,0.7)
                    `,
                  }}
                >
                  Pavilion
                </h1>
              </motion.div>

              {/* DAMANSARA — Montserrat Black, bright metallic gold shimmer */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative -mt-0 sm:-mt-2"
              >
                {/* Main DAMANSARA text */}
                <span
                  className="hero-title-damansara block text-[11vw] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.85]"
                >
                  Damansara
                </span>

                {/* Animated gold underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto w-40 sm:w-64 md:w-80 lg:w-96 h-[1.5px] sm:h-[2px] mt-2 sm:mt-4 origin-center"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #8B6914 15%, #C49A38 30%, #E8C66A 50%, #C49A38 70%, #8B6914 85%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(196,154,56,0.6), 0 0 40px rgba(196,154,56,0.2)",
                  }}
                />
              </motion.div>

              {/* HEIGHTS — solid gold with glow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6"
              >
                <div className="w-6 sm:w-10 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C49A38]/60" />
                <span
                  className="font-sans text-[10px] sm:text-[18px] md:text-[20px] lg:text-[22px] uppercase tracking-[0.5em] sm:tracking-[0.8em] md:tracking-[1em] font-bold"
                  style={{
                    color: "#D4AF5C",
                    textShadow: "0 0 20px rgba(196,154,56,0.5), 0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  Heights
                </span>
                <div className="w-6 sm:w-10 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C49A38]/60" />
              </motion.div>
            </div>
<<<<<<< HEAD

            {/* ── Book Appointment CTA Button ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
              className="mt-10 sm:mt-14 flex justify-center pointer-events-auto"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 sm:gap-4 bg-[#0a0c10]/80 hover:bg-[#25D366]/10 backdrop-blur-md border border-[#25D366]/50 px-7 py-3.5 sm:px-10 sm:py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:-translate-y-1"
              >
                {/* Outer animated ping ring */}
                <div className="absolute inset-0 rounded-full border border-[#25D366]/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/10 to-[#25D366]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 overflow-hidden" />
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] relative z-10 shrink-0" />
                <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase relative z-10">
                  Book Appointment
                </span>
              </a>
            </motion.div>
=======
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Marquee Inside Frame */}
        <MarqueeStrip />

        {/* Slide indicator dots */}
        <div className="absolute bottom-[52px] sm:bottom-[58px] right-8 z-30 hidden sm:flex gap-2 items-center">
          {HERO_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${i === currentImageIndex ? "w-6 h-1.5 bg-[#C49A38] shadow-[0_0_8px_rgba(196,154,56,0.6)]" : "w-1.5 h-1.5 bg-white/30"}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
