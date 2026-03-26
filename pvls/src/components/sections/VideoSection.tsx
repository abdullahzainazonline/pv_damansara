"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set max duration to 2:20 (140 seconds)
    const MAX_DURATION = 140;

    // Intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible — play video
          video.play().catch((err) => console.log("Auto-play blocked:", err));
        } else {
          // Section is not visible — pause video
          video.pause();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    // Enforce max duration limit
    const handleTimeUpdate = () => {
      if (video.currentTime > MAX_DURATION) {
        video.currentTime = MAX_DURATION;
        video.pause();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      if (section) observer.unobserve(section);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100dvh] sm:h-screen bg-[#060914] overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video element with autoplay, muted, and playsinline */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dva6qcuyj/video/upload/v1773378863/Pavilion_Square_Luxury_Residences_Urban_Luxe_1080p_ikha6n.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Soft dark vignette gradients to blend with edge sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/90 via-transparent to-[#060914]/90 opacity-80 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      </div>

      {/* Decorative Gold Elements styling */}
      <div className="absolute top-6 left-6 z-20 hidden sm:block pointer-events-none opacity-50">
        <div className="w-8 h-8 border-l border-t border-[#c9a84c]/40" />
      </div>
      <div className="absolute bottom-6 right-6 z-20 hidden sm:block pointer-events-none opacity-50">
        <div className="w-8 h-8 border-r border-b border-[#c9a84c]/40" />
      </div>
    </section>
  );
}

