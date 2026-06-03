import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import StatStrip from "@/app/components/StatStrip";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";
import Screenshots from "@/app/components/Screenshots";
import Quote from "@/app/components/Quote";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div
      className="bg-bg-dark text-text-main overflow-x-hidden"
      style={{ fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <Nav />
      <Hero />
      <StatStrip />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Quote />
      <Cta />
      <Footer />
    </div>
  );
}
