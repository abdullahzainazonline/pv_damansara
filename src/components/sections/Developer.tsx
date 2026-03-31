"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Developer() {
  return (
    <section id="developer" className="relative w-full bg-[#f4ebd0] pt-20 lg:pt-28 pb-0 overflow-hidden z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Developer Info Text */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[12vw] min-[390px]:text-[13vw] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#4A3B2C] leading-[0.9] tracking-tight mb-4 uppercase">
              Pavilion Group
            </h2>
            <h3 className="text-xl md:text-2xl text-[#C49A38] font-serif font-medium tracking-wider uppercase mb-8">
              A Globally Recognised Presence
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#594a39] text-base md:text-lg lg:text-xl font-light leading-relaxed space-y-6"
          >
            <p>
              Based in Malaysia, the Pavilion Group is a premier property 
              developer renowned for creating large-scale retail destinations 
              and visionary integrated mixed-use projects across prime locations 
              in Malaysia and China.
            </p>
            <p>
              Our management team is driven by industry experts with deep 
              specializations in investments, asset and development management, 
              innovative design and planning, as well as project leasing and marketing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Developer Skyline Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative w-full mt-4 md:mt-8 flex"
      >
        <img 
          src="/developer_details.jpg" 
          alt="Pavilion Group Developments Skyline"
          className="w-full h-auto object-cover block"
        />
      </motion.div>
    </section>
  );
}
