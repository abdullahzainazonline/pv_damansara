"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Phone, Mail, MapPin, Send,
    Facebook, Instagram, Globe, ExternalLink,
    ChevronLeft, ChevronRight, CheckCircle, Star, AlertCircle, User, AtSign, Smartphone, X,
    MessageCircle
} from "lucide-react";

import { submitContactForm } from "@/actions/contact";

/* WhatsApp SVG Icon */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

/* ── Gallery images ─────────────────────────────────── */
const gallery = [
    { src: "/pdh/ct10_e-broucher__p3_img1.jpeg", label: "Grand Arrival Lobby" },
    { src: "/pdh/ct10_e-broucher__p4_img1.jpeg", label: "Sky Pool — Level 67" },
    { src: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg", label: "Luxury Residence Interior" },
    { src: "/pdh/pdh_overview_(luxury_p16_img1.jpeg", label: "Rooftop Sky Garden" },
    { src: "/pdh/pdh_r1_&_r2_1br_e-br_p4_img1.jpeg", label: "Premium Suite Living" },
    { src: "/pdh/(feb_2026)_pdh_rc_ro_p1_img3.jpeg", label: "Facade — Damansara Heights" },
    { src: "/pdh/ct10_e-broucher__p6_img1.jpeg", label: "Dining & Entertainment" },
    { src: "/pdh/pdh_overview_(luxury_p6_img1.jpeg", label: "Master Bedroom" },
    { src: "/pdh/pdh_overview_(luxury_p17_img1.jpeg", label: "Aerial Pavilion View" },
    { src: "/pdh/pdh_overview_(luxury_p18_img1.jpeg", label: "Crown Penthouse" },
];

const contactInfo = [
    { icon: Phone, label: "Sales Line", value: "+60 12-270 5608", href: "tel:+60122705608" },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "+60 12-270 5608", href: "https://wa.me/60122705608" },
    { icon: Mail, label: "Email", value: "realtygramplt.hq@gmail.com", href: "mailto:realtygramplt.hq@gmail.com" },
    { icon: MapPin, label: "Gallery", value: "Damansara Heights, Kuala Lumpur, Malaysia", href: null },
];

const socials = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Globe, label: "Website", href: "#" },
];

const quickLinks = [
    { label: "Unit Layouts", href: "#units" },
    { label: "Facilities", href: "#facilities" },
    { label: "Corporate Services", href: "#Corporate" },
    { label: "Location", href: "#location" },
];

/* ── QR Code Modal ─────────────────────────────────── */
function QRCodeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative bg-[#0e0f1a] border border-[#c9a84c]/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#c9a84c] hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Scan WeChat QR Code</h3>
                            <p className="text-[#c9a84c]/80 text-base">Add us on WeChat for instant updates</p>
                        </div>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-80 h-80 rounded-xl overflow-hidden border-2 border-[#c9a84c]/20 shadow-lg bg-white">
                                <img
                                    src="/wechat_qr.jpeg"
                                    alt="WeChat QR Code"
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-white/70 text-base mb-6">
                                Open WeChat on your phone and scan this QR code to start chatting with us.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-[#c9a84c] text-[#060914] font-semibold rounded-lg hover:bg-[#b8953a] transition-colors text-base"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ─────────────────────────────────────────────────── */
export default function Contact() {
    /* Scroll Animation Ref */
    const registerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: registerRef,
        offset: ["start 90%", "center center"]
    });
    const formY = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);
    const formOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

    /* Gallery */
    const [galIdx, setGalIdx] = useState(0);
    const galPaused = useRef(false);
    useEffect(() => {
        const t = setInterval(() => { if (!galPaused.current) setGalIdx((i) => (i + 1) % gallery.length); }, 4500);
        return () => clearInterval(t);
    }, []);
    const goGal = (i: number) => { galPaused.current = true; setGalIdx(i); setTimeout(() => { galPaused.current = false; }, 8000); };
    const galPrev = () => goGal((galIdx - 1 + gallery.length) % gallery.length);
    const galNext = () => goGal((galIdx + 1) % gallery.length);

    /* QR Modal State */
    const [showQRModal, setShowQRModal] = useState(false);

    /* Form */
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const set = (k: string, v: string) => {
        setForm(f => ({ ...f, [k]: v }));
        if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
        if (!form.phone.trim()) e.phone = "Phone is required";
        if (!form.message.trim()) e.message = "Message required";
        return e;
    };

    const handleSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setSubmitting(true);

        const result = await submitContactForm({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
        });

        setSubmitting(false);
        if (result.success) {
            setSubmitted(true);
        } else {
            setErrors({ form: "Failed to send message: " + result.error });
        }
    };

    const inputCls = "w-full bg-[#F5EEDD] border border-[#C49A38]/20 rounded-2xl px-5 py-4 text-[14px] font-sans text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#C49A38] focus:shadow-[0_0_0_3px_rgba(196,154,56,0.1)] transition-all duration-300";

    return (
        <section id="contact" className="relative overflow-hidden bg-[#FDFBF7]">

            {/* ══════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════ */}
            <div id="gallery" className="relative h-[85vh] overflow-hidden">

                {/* Slides */}
                {gallery.map((g, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        animate={{ opacity: i === galIdx ? 1 : 0 }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                    >
                        <Image
                            src={g.src}
                            alt={g.label}
                            fill
                            sizes="100vw"
                            priority={i === 0}
                            className="object-cover"
                        />
                    </motion.div>
                ))}

                {/* Warm umber overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/85 via-[#1A1208]/30 to-[#1A1208]/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/60 via-transparent to-transparent" />
                {/* Gold accent lines */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38] to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/60 to-transparent" />

                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
                    {/* <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#C49A38]/40 bg-[#1A1208]/50 backdrop-blur-md"> */}
                    {/* <Star className="w-3.5 h-3.5 text-[#C49A38]" /> */}
                    {/* <span className="text-[10px] font-sans uppercase tracking-[0.45em] font-bold text-[#C49A38]">Explore The Gallery</span> */}
                    {/* </div> */}
                </div>

                {/* Prev / Next arrows */}
                <button
                    onClick={galPrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-white/25 bg-[#1A1208]/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[#C49A38] hover:bg-[#C49A38]/20 transition-all duration-300 group"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:text-[#C49A38] transition-colors" />
                </button>
                <button
                    onClick={galNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-white/25 bg-[#1A1208]/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[#C49A38] hover:bg-[#C49A38]/20 transition-all duration-300 group"
                >
                    <ChevronRight className="w-6 h-6 group-hover:text-[#C49A38] transition-colors" />
                </button>

                {/* Bottom HUD — label + thumbnail strip */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6">
                    {/* Active image caption */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={galIdx}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4 }}
                            className="mb-4 flex items-center gap-3"
                        >
                            <div className="w-6 h-[2px] bg-[#C49A38]" />
                            <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C49A38] font-bold">{gallery[galIdx].label}</span>
                            <span className="text-[10px] text-white/40">{galIdx + 1} / {gallery.length}</span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Thumbnail strip */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">
                        {gallery.map((g, i) => (
                            <button
                                key={i}
                                onClick={() => goGal(i)}
                                className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-400 ${i === galIdx
                                    ? "w-24 h-16 ring-2 ring-[#C49A38] shadow-[0_0_15px_rgba(196,154,56,0.5)]"
                                    : "w-16 h-12 opacity-50 hover:opacity-80 hover:ring-1 hover:ring-[#C49A38]/50"
                                    }`}
                            >
                                <Image src={g.src} alt={g.label} fill sizes="96px" className="object-cover" />
                                {i !== galIdx && <div className="absolute inset-0 bg-[#1A1208]/40" />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
          REGISTER YOUR ENQUIRY SECTION
      ══════════════════════════════════════ */}
            <div id="register" ref={registerRef} className="relative overflow-hidden">

                {/* Background — warm champagne with gold glow */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #F9F1E0 0%, #F5EBCE 40%, #F0E4BC 70%, #F5EBCE 100%)" }} />
                <div className="absolute inset-0 opacity-[0.18]"
                    style={{ backgroundImage: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(196,154,56,0.8) 0%, transparent 70%)" }}
                />
                {/* Subtle dot texture */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #B8860B 1px, transparent 0)", backgroundSize: "32px 32px" }} />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49A38] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A38]/30 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

                    {/* ── TOP: Heading area (full width) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 sm:mb-14 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C49A38]/40 bg-[#C49A38]/10 mb-7">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C49A38] animate-pulse" />
                            <span className="text-[10px] font-sans uppercase tracking-[0.4em] font-bold text-[#C49A38]">Priority Access</span>
                        </div>

                        <h2 className="text-[12vw] min-[390px]:text-[13vw] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#333333] leading-[0.9] tracking-tight mb-4 mx-auto">
                            Register Your <em style={{ fontStyle: "normal", WebkitTextFillColor: "transparent", background: "linear-gradient(135deg,#C49A38,#E8C66A)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Enquiry</em>
                        </h2>
                        <div className="w-16 h-[2px] bg-[#C49A38] mb-8 mx-auto" />

                        <p className="text-[#555555] font-sans font-light text-[15px] leading-relaxed max-w-xl mx-auto">
                            Be the first to access exclusive floor plans, pricing, and private viewing appointments at Pavilion Damansara Heights.
                        </p>
                    </motion.div>

                    {/* ── MIDDLE: Single Centered Form ── */}
                    <div className="max-w-xl mx-auto">

                        {/* Form card with Dark Golden Boundary */}
                        <motion.div
                            style={{ y: formY, opacity: formOpacity }}
                        >
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative p-10 rounded-3xl bg-[#FBF5E8] border-2 border-[#B8860B] text-center overflow-hidden shadow-[0_25px_70px_rgba(184,134,11,0.25)] flex flex-col items-center justify-center min-h-[500px]"
                                    >
                                        <div className="w-24 h-24 rounded-full border-2 border-[#B8860B]/40 bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="w-12 h-12 text-[#B8860B]" />
                                        </div>
                                        <h3 className="text-3xl font-heading font-light text-[#333333] mb-4">Registration Received</h3>
                                        <p className="text-[#555555] text-base font-sans font-light leading-relaxed mb-10 px-4">
                                            Thank you for your interest. A dedicated consultant will assist you with the priority selection process shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-[#B8860B] hover:text-[#916A08] transition-colors underline underline-offset-8"
                                        >
                                            Submit another register
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        noValidate
                                        className="relative p-8 sm:p-12 rounded-[2.5rem] bg-[#FBF5E8] border-[3px] border-[#B8860B] overflow-hidden flex flex-col gap-7 shadow-[0_30px_90px_rgba(184,134,11,0.3)]"
                                    >
                                        <div className="absolute top-0 left-0 w-16 h-16 border-t-[6px] border-l-[6px] border-[#B8860B] rounded-tl-[2.5rem]" />
                                        <div className="absolute top-0 right-0 w-16 h-16 border-t-[6px] border-r-[6px] border-[#B8860B] rounded-tr-[2.5rem]" />
                                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[6px] border-l-[6px] border-[#B8860B] rounded-bl-[2.5rem]" />
                                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[6px] border-r-[6px] border-[#B8860B] rounded-br-[2.5rem]" />

                                        <div className="text-center mb-2">
                                            <h3 className="text-3xl font-heading font-normal text-[#333333] mb-2 tracking-tight">
                                                Private <em className="text-[#C49A38] italic font-light">Experience</em>
                                            </h3>
                                            <p className="text-[#999999] text-[11px] font-sans uppercase tracking-[0.4em] font-bold">Priority Registration</p>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-sans font-bold text-[#B8860B] uppercase tracking-[0.3em] ml-1">
                                                Full Name
                                            </label>
                                            <input
                                                value={form.name}
                                                onChange={e => set("name", e.target.value)}
                                                placeholder="Enter your name"
                                                className={inputCls + " border-none shadow-sm focus:shadow-md h-16 text-base"}
                                            />
                                            {errors.name && <span className="text-red-400 text-[11px] ml-1">{errors.name}</span>}
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-sans font-bold text-[#B8860B] uppercase tracking-[0.3em] ml-1">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    value={form.email}
                                                    onChange={e => set("email", e.target.value)}
                                                    placeholder="your@email.com"
                                                    className={inputCls + " border-none shadow-sm focus:shadow-md h-16 text-base"}
                                                />
                                                {errors.email && <span className="text-red-400 text-[11px] ml-1">{errors.email}</span>}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-sans font-bold text-[#B8860B] uppercase tracking-[0.3em] ml-1">
                                                    Phone
                                                </label>
                                                <input
                                                    value={form.phone}
                                                    onChange={e => set("phone", e.target.value)}
                                                    placeholder="+60 1x-xxxxxxx"
                                                    className={inputCls + " border-none shadow-sm focus:shadow-md h-16 text-base"}
                                                />
                                                {errors.phone && <span className="text-red-400 text-[11px] ml-1">{errors.phone}</span>}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-sans font-bold text-[#B8860B] uppercase tracking-[0.3em] ml-1">
                                                Interested In
                                            </label>
                                            <textarea
                                                value={form.message}
                                                onChange={e => set("message", e.target.value)}
                                                rows={2}
                                                placeholder="Tell us about the units you are interested in..."
                                                className={inputCls + " border-none shadow-sm focus:shadow-md resize-none h-28 text-base"}
                                            />
                                            {errors.message && <span className="text-red-400 text-[11px] ml-1">{errors.message}</span>}
                                        </div>

                                        <div className="flex items-center justify-center gap-6 py-2">
                                            <button type="button" onClick={() => setShowQRModal(true)} className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-[#B8860B]/10 hover:bg-[#B8860B]/20 transition-all border border-[#B8860B]/20">
                                                <MessageCircle className="w-6 h-6 text-[#B8860B]" />
                                            </button>
                                            <a href="https://wa.me/60122705608" target="_blank" className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-[#B8860B]/10 hover:bg-[#B8860B]/20 transition-all border border-[#B8860B]/20">
                                                <WhatsAppIcon className="w-6 h-6 text-[#B8860B]" />
                                            </a>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="flex-1 h-16 rounded-2xl bg-[#B8860B] text-black font-sans font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#916A08] transition-all shadow-lg hover:shadow-[0_15px_35px_rgba(184,134,11,0.4)] disabled:opacity-50 relative overflow-hidden"
                                            >
                                                {submitting ? "Processing..." : "Register Now"}
                                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                                            </button>
                                        </div>
                                        {errors.form && <div className="text-red-400 text-[11px] text-center">{errors.form}</div>}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
            <footer className="relative overflow-hidden bg-[#1A1208]">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,56,0.8) 0%, transparent 70%)" }} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C49A38] to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                        {/* Logos */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 bg-white/5 px-8 py-6 rounded-2xl border border-white/5 shadow-[0_0_40px_rgba(196,154,56,0.03)]">
                            <Image src="/pdh_logo_1.png" alt="Pavilion Damansara Heights" width={180} height={55} className="object-contain drop-shadow-lg" />
                            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#C49A38]/50 to-transparent" />
                            <div className="block sm:hidden h-px w-32 bg-gradient-to-r from-transparent via-[#C49A38]/50 to-transparent" />
                            <Image src="/zeon_group.png" alt="Zeon Group" width={120} height={50} className="object-contain drop-shadow-md" />
                        </div>
                        {/* Quick Links */}
                        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-md lg:justify-end">
                            {quickLinks.map((l) => (
                                <a key={l.label} href={l.href} className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-[#C49A38] hover:text-white hover:drop-shadow-[0_0_8px_rgba(196,154,56,0.8)] transition-all">
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                            <a href="tel:+60122705608" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C49A38]/20 to-transparent border border-[#C49A38]/20 flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4 text-[#C49A38]" /></div>
                                <span className="text-[15px] font-sans font-semibold text-white/80 group-hover:text-white transition-colors">+60 12-270 5608</span>
                            </a>
                            <a href="https://wa.me/60122705608" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366]/20 to-transparent border border-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform"><WhatsAppIcon className="w-4 h-4 text-[#25D366]" /></div>
                                <span className="text-[15px] font-sans font-semibold text-white/80 group-hover:text-white transition-colors">WhatsApp Us</span>
                            </a>
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C49A38]/20 to-transparent border border-[#C49A38]/20 flex items-center justify-center group-hover:scale-110 transition-transform"><MapPin className="w-4 h-4 text-[#C49A38]" /></div>
                                <span className="text-[15px] font-sans font-semibold text-white/80 group-hover:text-white transition-colors">Damansara Heights, Kuala Lumpur</span>
                            </div>
                        </div>

                        <p className="text-[12px] font-sans font-light text-white/40 text-center lg:text-right max-w-lg leading-relaxed">
                            This website is independently managed by <span className="notranslate font-semibold text-white/60">Zeon Properties International Sdn. Bhd.</span> (E(3)0812), an appointed real estate agency in Malaysia. This is not the developer's official website.
                        </p>
                    </div>
                </div>
            </footer>

            {/* QR Code Modal for WeChat */}
            <QRCodeModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
        </section>
    );
}
