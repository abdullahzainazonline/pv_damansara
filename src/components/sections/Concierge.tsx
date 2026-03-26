// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//   ConciergeBell, Anchor, Building2,
//   Shield, Car, Eye, Star, Home,
// } from "lucide-react";

// /* WhatsApp SVG Icon */
// function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// const bgSlides = [
//   "/pdh/(feb_2026)_pdh_rc_ro_p3_img4.jpeg",
//   "/pdh/ct10_e-broucher__p6_img1.jpeg",
//   "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
//   "/pdh/pdh_overview_(luxury_p7_img1.jpeg",
//   "/pdh/ct10_e-broucher__p3_img1.jpeg",
// ];

// const services = [
//   { icon: ConciergeBell, title: "Housekeeping", tag: "Daily · Weekly" },
//   { icon: Anchor, title: "Limousine & Jets", tag: "On Demand" },
//   { icon: Building2, title: "Property Management", tag: "Full Service" },
//   { icon: Shield, title: "24/7 Security", tag: "Multi-Tier" },
//   { icon: Car, title: "Valet & Drop-off", tag: "Designer Portico" },
//   { icon: Eye, title: "Private Viewings", tag: "By Appointment" },
//   { icon: Star, title: "Pavilion Mall Link", tag: "1M+ sq.ft." },
//   { icon: Home, title: "Semi-Furnished Units", tag: "Premium Fittings" },
// ];

// const stats = [
//   { value: "1,314", label: "Residences" },
//   { value: "9", label: "Corp Towers" },
//   { value: "1M+", label: "sq.ft. Mall" },
//   { value: "15.9", label: "Acres Total" },
// ];

// const facts = [
//   { label: "Developer", value: "Impian Ekspresi Sdn Bhd" },
//   { label: "Tenure", value: "Freehold" },
//   { label: "Completion", value: "Phase 1: 2025" },
//   { label: "Status", value: "Integrated Hub" },
// ];

// export default function Concierge() {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);

//   /* Scroll Animation Ref */
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 95%", "center center"]
//   });

//   const col1X = useTransform(scrollYProgress, [0, 1], ["-40vw", "0vw"]);
//   const col2Y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
//   const col3X = useTransform(scrollYProgress, [0, 1], ["40vw", "0vw"]);
//   const cardOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

//   useEffect(() => {
//     if (paused) return;
//     const t = setInterval(() => setCurrent((c) => (c + 1) % bgSlides.length), 5500);
//     return () => clearInterval(t);
//   }, [paused]);

//   return (
//     <section id="concierge" className="relative overflow-hidden min-h-screen">

//       {/* ── Full-bleed background slider ── */}
//       {bgSlides.map((src, i) => (
//         <motion.div
//           key={i}
//           className="absolute inset-0"
//           animate={{ opacity: i === current ? 1 : 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         >
//           <Image src={src} alt="" fill sizes="100vw" priority={i === 0} className="object-cover" />
//         </motion.div>
//       ))}

//       {/* ── Overlays — warm umber ── */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/90 via-[#1A1208]/70 to-[#1A1208]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 via-transparent to-[#1A1208]/45" />

//       {/* Subtle gold radial glow */}
//       <div className="absolute inset-0 opacity-[0.08]"
//         style={{ backgroundImage: "radial-gradient(ellipse 60% 60% at 60% 50%, rgba(196,154,56,1) 0%, transparent 70%)" }}
//       />

//       {/* Gold accent lines */}
//       <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38] to-transparent opacity-90" />
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/50 to-transparent" />

//       {/* Slide dots bottom right */}
//       <div className="absolute bottom-8 right-6 flex gap-1.5 z-20">
//         {bgSlides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 9000); }}
//             className={`rounded-full transition-all duration-500 ${i === current ? "bg-[#C49A38] w-6 h-2 shadow-[0_0_10px_rgba(196,154,56,0.7)]" : "bg-white/25 hover:bg-[#C49A38]/60 w-2 h-2"}`}
//           />
//         ))}
//       </div>

//       {/* ── Content ── */}
//       <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 sm:py-24 min-h-screen flex flex-col justify-center">

//         {/* Header — centered, minimal */}
//         <div className="text-center mb-14">
//           <motion.div
//             initial={{ opacity: 0, y: -12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C49A38]/40 bg-[#C49A38]/10 text-[#C49A38] font-sans text-[10px] uppercase tracking-[0.45em] font-bold mb-6 backdrop-blur-sm"
//           >
//             <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38] animate-pulse" />
//             Pavilion Group · White-Glove Living
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[1.05] tracking-tight text-white drop-shadow-2xl"
//           >
//             Concierge <em className="text-[#C49A38] italic font-light">Services</em>
//           </motion.h2>
//         </div>

//         {/* ── 3-column grid ── */}
//         <div className="grid lg:grid-cols-3 gap-6">

//           {/* COL 1 — Services grid */}
//           <motion.div
//             style={{ x: col1X, opacity: cardOpacity }}
//             className="relative p-7 rounded-3xl bg-white/[0.13] border border-white/25 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.25)] overflow-hidden"
//           >
//             {/* Corner gold brackets */}
//             <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#C49A38]" />
//             <div className="absolute top-0 left-0 w-[2px] h-10 bg-[#C49A38]" />

//             <div className="text-[9px] font-sans uppercase tracking-[0.4em] text-[#C49A38] font-bold mb-6 flex items-center gap-2">
//               <ConciergeBell className="w-3.5 h-3.5" />
//               Concierge Services
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               {services.map((s, i) => (
//                 <motion.div
//                   key={s.title}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.06 }}
//                   className="group flex flex-col gap-2 p-3.5 rounded-2xl border border-white/15 bg-white/8 hover:border-[#C49A38]/60 hover:bg-[#C49A38]/15 transition-all duration-400 cursor-default"
//                 >
//                   <s.icon className="w-5 h-5 text-[#C49A38] group-hover:text-[#C49A38] transition-colors" strokeWidth={1.5} />
//                   <div>
//                     <div className="text-[12px] font-sans font-bold text-white group-hover:text-white transition-colors leading-tight">{s.title}</div>
//                     <div className="text-[10px] font-sans text-[#C49A38] group-hover:text-[#C49A38] mt-0.5 tracking-wide transition-colors font-semibold">{s.tag}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* COL 2 — Stats + facts */}
//           <motion.div
//             style={{ y: col2Y, opacity: cardOpacity }}
//             className="flex flex-col gap-5"
//           >
//             {/* Stats grid — solid gold card */}
//             <div className="relative p-7 rounded-3xl bg-[#C49A38] shadow-[0_10px_40px_rgba(196,154,56,0.4)] overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//               <div className="relative z-10">
//                 <div className="text-[9px] font-sans uppercase tracking-[0.4em] font-bold text-black/50 mb-5">Project at a Glance</div>
//                 <div className="grid grid-cols-2 gap-5">
//                   {stats.map((s) => (
//                     <div key={s.label} className="flex flex-col border-l-2 border-black/15 pl-3">
//                       <span className="text-3xl font-heading font-normal text-black leading-none mb-1">{s.value}</span>
//                       <span className="text-[8px] font-sans uppercase tracking-[0.2em] text-black/55 font-bold">{s.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Facts — glassmorphism */}
//             <div className="flex-1 relative p-7 rounded-3xl bg-white/[0.15] border border-white/30 backdrop-blur-md overflow-hidden">
//               <div className="absolute bottom-0 right-0 w-10 h-[2px] bg-[#C49A38]" />
//               <div className="absolute bottom-0 right-0 w-[2px] h-10 bg-[#C49A38]" />

//               <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-[#C49A38] font-bold mb-5 flex items-center gap-2">
//                 <Building2 className="w-3.5 h-3.5" />
//                 Project Details
//               </div>

//               <div className="flex flex-col">
//                 {facts.map((f) => (
//                   <div key={f.label} className="flex flex-col py-3.5 border-b border-white/20 last:border-0 group">
//                     <span className="text-[9px] font-sans uppercase tracking-[0.3em] font-bold text-[#C49A38]/80 mb-1.5 group-hover:text-[#C49A38] transition-colors">{f.label}</span>
//                     <span className="text-[14px] font-sans font-bold text-white leading-snug group-hover:text-[#C49A38] transition-colors">{f.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* COL 3 — CTA + highlights */}
//           <motion.div
//             style={{ x: col3X, opacity: cardOpacity }}
//             className="flex flex-col gap-5"
//           >
//             {/* Key highlights */}
//             <div className="relative flex-1 p-7 rounded-3xl bg-white/[0.13] border border-white/25 backdrop-blur-md overflow-hidden flex flex-col h-full">
//               <div className="absolute top-0 right-0 w-10 h-[2px] bg-[#C49A38]" />
//               <div className="absolute top-0 right-0 w-[2px] h-10 bg-[#C49A38]" />

//               <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-[#C49A38] font-bold mb-6">Key Highlights</div>

//               <ul className="flex flex-col justify-between flex-1 gap-0">
//                 {[
//                   "Freehold in Damansara Heights",
//                   "Direct Mall Connection",
//                   "Seamless MRT Access",
//                   "Phase 1 Ready 2025",
//                   "Semi-Furnished Units",
//                 ].map((h, i) => (
//                   <motion.li
//                     key={h}
//                     initial={{ opacity: 0, x: 15 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.05 * i }}
//                     className="flex items-center gap-3 group cursor-default py-3 border-b border-white/10 last:border-0"
//                   >
//                     <div className="w-7 h-7 rounded-full border border-[#C49A38]/60 flex items-center justify-center shrink-0 group-hover:border-[#C49A38] group-hover:bg-[#C49A38]/20 transition-all duration-400">
//                       <div className="w-2 h-2 rounded-full bg-[#C49A38]" />
//                     </div>
//                     <span className="text-[13px] font-sans font-semibold text-white group-hover:text-[#C49A38] transition-colors leading-snug">{h}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* Decorative bottom bar */}
//               <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
//                 <span className="text-[9px] font-sans uppercase tracking-[0.35em] text-[#C49A38]/70 font-bold">Pavilion Group</span>
//                 <div className="flex gap-1 items-center">
//                   <div className="w-5 h-1.5 rounded-full bg-[#C49A38]" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38]/60" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38]/40" />
//                 </div>
//               </div>
//             </div>

//             {/* CTA buttons */}
//             <div className="flex flex-col gap-3">
//               <a
//                 href="#register"
//                 className="relative group flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#C49A38] text-black font-sans font-bold text-[10px] uppercase tracking-[0.25em] hover:shadow-[0_0_30px_rgba(196,154,56,0.6)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <ConciergeBell className="w-4 h-4 relative z-10" />
//                 <span className="relative z-10">Register Enquiry</span>
//               </a>
//               <a
//                 href="https://wa.me/60122705608"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-sans font-bold text-[10px] uppercase tracking-[0.25em] hover:border-[#C49A38]/60 hover:bg-[#C49A38]/15 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
//               >
//                 <WhatsAppIcon className="w-4 h-4" />
//                 <span>WhatsApp Us</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ConciergeBell, Anchor, Building2,
  Shield, Car, Eye, Star, Home, ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";

/* ─── Services ──────────────────────────────────────────── */
const services = [
  {
    icon: ConciergeBell,
    title: "Housekeeping",
    tag: "Daily · Weekly",
    desc: "Professional housekeeping tailored to your schedule. Every corner immaculate, every visit discreet.",
    image: "/pdh/(feb_2026)_pdh_rc_ro_p3_img4.jpeg",
    accent: "#C49A38",
  },
  {
    icon: Anchor,
    title: "Limousine & Jets",
    tag: "On Demand",
    desc: "Seamless ground and air transfers at a moment's notice. Travel in absolute comfort, city to airport or beyond.",
    image: "/pdh/ct10_e-broucher__p6_img1.jpeg",
    accent: "#D4AF5C",
  },
  {
    icon: Building2,
    title: "Property Management",
    tag: "Full Service",
    desc: "End-to-end property care — maintenance, tenancy and administration handled with meticulous attention.",
    image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
    accent: "#B8860B",
  },
  {
    icon: Shield,
    title: "24 / 7 Security",
    tag: "Multi-Tier",
    desc: "Round-the-clock multi-layer security with CCTV surveillance, access control and trained personnel.",
    image: "/pdh/pdh_overview_(luxury_p7_img1.jpeg",
    accent: "#C49A38",
  },
  {
    icon: Car,
    title: "Valet & Drop-off",
    tag: "Designer Portico",
    desc: "Arrive through a grand designer porte-cochère. Our valet team manages every vehicle with care.",
    image: "/pdh/ct10_e-broucher__p3_img1.jpeg",
    accent: "#E3C275",
  },
  {
    icon: Eye,
    title: "Private Viewings",
    tag: "By Appointment",
    desc: "Exclusive one-on-one unit viewings guided by our specialists. Experience the space privately.",
    image: "/pdh/(feb_2026)_pdh_rc_ro_p1_img3.jpeg",
    accent: "#C49A38",
  },
  {
    icon: Star,
    title: "Pavilion Mall Link",
    tag: "1M+ sq.ft.",
    desc: "Directly connected to Pavilion Lifestyle Mall — over 1 million sq.ft. of luxury retail and dining.",
    image: "/pdh/(feb_2026)_pdh_rc_ro_p5_img1.jpeg",
    accent: "#D4AF5C",
  },
  {
    icon: Home,
    title: "Semi-Furnished Units",
    tag: "Premium Fittings",
    desc: "Move-in ready interiors with premium kitchen cabinets, branded sanitary fittings and appliances.",
    image: "/pdh/(feb_2026)_pdh_rc_ro_p2_img1.jpeg",
    accent: "#B8860B",
  },
];

const INTERVAL = 4000;

/* ─── WhatsApp icon ─────────────────────────────────────── */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}


/* ══════════════════════════════════════════════════════════ */
export default function Concierge() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const current = services[active];

  const goTo = useCallback((i: number, manual = false) => {
    setActive(i);
    setProgress(0);
    if (manual) {
      setPaused(true);
      setTimeout(() => setPaused(false), 10000);
    }
  }, []);

  /* ── Auto-advance ── */
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      setProgress(0);
      return;
    }

    setProgress(0);
    const tick = INTERVAL / 100;

    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, tick);

    intervalRef.current = setInterval(() => {
      setActive((c) => (c + 1) % services.length);
      setProgress(0);
    }, INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [paused, active]);

  return (
    <section
      id="concierge"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ══ DYNAMIC FULL-BLEED BACKGROUND — changes per service ══ */}
      {services.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority={i === 0}
          />
        </motion.div>
      ))}

      {/* Rich dark overlay — left heavy, softens right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A07]/97 via-[#1A1208]/85 to-[#1A1208]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07]/95 via-transparent to-[#0D0A07]/70" />

      {/* Animated gold radial glow that follows the accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `radial-gradient(ellipse 65% 55% at 68% 50%, ${current.accent} 0%, transparent 70%)`,
        }}
      />

      {/* Top + bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38] to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/50 to-transparent" />

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 min-h-screen flex flex-col">

        {/* ── Section header ── */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-normal leading-[1.05] tracking-tight text-white drop-shadow-2xl"
          >
            Concierge{" "}
            <em className="italic font-light" style={{ color: current.accent }}>
              Services
            </em>
          </motion.h2>
        </div>

        {/* ── Main split layout ── */}
        <div className="flex-1 grid lg:grid-cols-[1fr_1.7fr] gap-6 lg:gap-10 items-start">

          {/* ═══ LEFT — service list ═══ */}
          <div className="hidden lg:flex flex-col gap-2">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={s.title}
                  onClick={() => goTo(i, true)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="relative group w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${s.accent}28 0%, ${s.accent}0a 100%)`
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? `1px solid ${s.accent}99`
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                  whileHover={{ x: 3 }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
                      style={{ background: s.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${s.accent}44, ${s.accent}1a)`
                        : "rgba(255,255,255,0.06)",
                      border: isActive
                        ? `1px solid ${s.accent}bb`
                        : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <s.icon
                      className="w-4 h-4 transition-colors duration-400"
                      style={{ color: isActive ? s.accent : "rgba(255,255,255,0.4)" }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title + tag */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[13px] font-semibold font-sans leading-tight transition-colors duration-300"
                      style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.65)" }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="text-[10px] font-sans mt-0.5 font-medium tracking-wide transition-colors duration-300"
                      style={{ color: isActive ? s.accent : "rgba(255,255,255,0.3)" }}
                    >
                      {s.tag}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    className="w-3.5 h-3.5 shrink-0 transition-all duration-400"
                    style={{
                      color: isActive ? s.accent : "rgba(255,255,255,0.18)",
                      transform: isActive ? "translateX(2px)" : "translateX(0)",
                    }}
                  />

                  {/* Auto-progress bar at bottom of active card */}
                  {isActive && !paused && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${s.accent}99, ${s.accent})`,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ═══ RIGHT — image + detail panel ═══ */}
          <div className="flex flex-col gap-4">

            {/* ── Image card ── */}
            <div className="relative rounded-3xl overflow-hidden" style={{ height: "360px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active}`}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -50) goTo((active + 1) % services.length, true);
                    else if (swipe > 50) goTo((active - 1 + services.length) % services.length, true);
                  }}
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 55vw"
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07]/88 via-[#0D0A07]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A07]/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-[2px]" style={{ background: current.accent }} />
              <div className="absolute top-4 left-4 w-[2px] h-8" style={{ background: current.accent }} />
              <div className="absolute top-4 right-4 w-8 h-[2px]" style={{ background: current.accent }} />
              <div className="absolute top-4 right-4 w-[2px] h-8" style={{ background: current.accent }} />

              {/* Prev/Next arrows overlay for mobile */}
              <div className="absolute inset-y-0 left-0 right-0 z-20 flex justify-between items-center px-3 pointer-events-none lg:hidden">
                <button
                  onClick={(e) => { e.stopPropagation(); goTo((active - 1 + services.length) % services.length, true); }}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-[#1A1208]/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 active:scale-90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goTo((active + 1) % services.length, true); }}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-[#1A1208]/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 active:scale-90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Service number badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${active}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.35 }}
                    className="px-3 py-1 rounded-full backdrop-blur-md text-[10px] font-bold font-sans uppercase tracking-[0.35em]"
                    style={{
                      background: `${current.accent}22`,
                      border: `1px solid ${current.accent}66`,
                      color: current.accent,
                    }}
                  >
                    {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Title overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-${active}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className="text-[10px] font-bold font-sans uppercase tracking-[0.4em] mb-1"
                      style={{ color: current.accent }}
                    >
                      {current.tag}
                    </div>
                    <div className="text-2xl font-heading font-semibold text-white leading-tight">
                      {current.title}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Swipe hint & Slide dots */}
                <div className="flex flex-col gap-2.5 mt-3">
                  <div className="flex gap-1.5 items-center">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, true)}
                        className="rounded-full transition-all duration-500"
                        style={{
                          background: i === active ? current.accent : "rgba(255,255,255,0.25)",
                          width: i === active ? "24px" : "6px",
                          height: "6px",
                          boxShadow: i === active ? `0 0 8px ${current.accent}cc` : "none",
                        }}
                      />
                    ))}

                    {/* Swipe Area Hint Mobile */}
                    <div className="ml-2 lg:hidden text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 flex items-center">
                      Swipe Image
                    </div>
                  </div>
                </div>
              </div>

              {/* Auto-progress bar at bottom of image */}
              {!paused && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px]"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${current.accent}88, ${current.accent})`,
                    boxShadow: `0 0 10px ${current.accent}99`,
                  }}
                />
              )}
            </div>


            {/* ── CTA row ── */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
              <a
                href="#contact"
                className="relative group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 px-2 sm:px-4 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-black font-sans font-extrabold text-[9px] sm:text-[11px] text-center uppercase tracking-[0.1em] sm:tracking-[0.25em] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${current.accent}, #D4AF5C, ${current.accent})`,
                  boxShadow: `0 6px 24px ${current.accent}66`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ConciergeBell className="w-4 h-4 relative z-10 shrink-0" />
                <span className="relative z-10">Register Enquiry</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=60122705608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 px-2 sm:px-4 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-sans font-extrabold text-[9px] sm:text-[11px] text-center uppercase tracking-[0.1em] sm:tracking-[0.25em] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1.5px solid ${current.accent}77`,
                  color: current.accent,
                  boxShadow: `0 4px 16px ${current.accent}22`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${current.accent}22`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px ${current.accent}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${current.accent}22`;
                }}
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}