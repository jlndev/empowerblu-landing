import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Industries />
      <Contact />
    </Layout>
  );
}
