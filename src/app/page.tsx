import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import LocationFacts from "@/components/sections/LocationFacts";
import UnitLayouts from "@/components/sections/UnitLayouts";
import Facilities from "@/components/sections/Facilities";
import Corporate from "@/components/sections/Corporate";
import Developer from "@/components/sections/Developer";
import Contact from "@/components/sections/Contact";
import VideoSection from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg relative">
      <Navbar />
      <Hero />
      <VideoSection />
      <LocationFacts />
      <Facilities />
      <UnitLayouts />
      <Corporate />
      <Developer />
      <Contact />
    </main>
  );
}
