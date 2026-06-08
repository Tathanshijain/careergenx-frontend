import ComparisonSection from "./landingpage/comparison/ComparisonSection";
import ConversionSection from "./landingpage/conversion/ConversionSection";
import CTASection from "./landingpage/cta/CTASection";
import FeaturesSection from "./landingpage/features/FeaturesSection";
import Footer from "./landingpage/footer/Footer";
import Hero from "./landingpage/hero/Hero";
import Navbar from "./landingpage/nav/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ComparisonSection />
        <FeaturesSection />
        <ConversionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
