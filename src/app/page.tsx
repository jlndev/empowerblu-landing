import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Services";
import Industries from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
