"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LocationFacts() {
  return (
    <section id="location" className="relative bg-[#100D0A] flex w-full overflow-hidden border-t border-[#C49A38]/30">

      {/* 
        The entire section uses the map taking full width. 
        We use a border top and inner gradient to cleanly divide from the Hero section and prevent visual overlaps.
      */}
      <div className="relative w-full">



        {/* Map Container with Horizontal Scroll for Mobile */}
        <div className="w-full overflow-x-auto overflow-y-hidden hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth cursor-grab active:cursor-grabbing relative z-0">
          <div className="relative w-[180%] sm:w-[150%] md:w-full min-w-[1000px] max-w-none">

            <img
              src="/location_map.svg"
              alt="Pavilion Damansara Heights Location Map"
              className="w-full h-auto block pointer-events-none object-cover"
            />

            {/* 
              Creative Solution: A rich, sweeping dark gradient overlay at the top of the map. 
              This smoothly fades the dense map roads into the black background, 
              guaranteeing the LOCATION title is 100% readable without breaking the full map aesthetic! 
            */}
            <div className="absolute top-0 inset-x-0 h-56 sm:h-72 bg-gradient-to-b from-[#100D0A] via-[#100D0A]/80 to-transparent pointer-events-none z-10" />

          </div>
        </div>

        {/* 
          OVERLAY TITLE: Placed neatly at the upper part of the map, 
          sitting beautifully inside the dark gradient. (Button is removed per instructions). 
        */}
        <div className="absolute top-12 sm:top-20 left-0 w-full z-20 pointer-events-none flex flex-col items-center justify-start text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-5xl md:text-6xl lg:text-[6.5rem] font-heading font-normal text-[#C49A38] uppercase tracking-[0.15em] sm:tracking-[0.2em]"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.9), 0 2px 15px rgba(196,154,56,0.3)" }}
            >
              Location
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


