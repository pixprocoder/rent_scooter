import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";

import Hero from "@/components/home/Hero";
import HowItWorksSection from "@/components/howItWorks/HowItWorks";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <About />
      <HowItWorksSection />
      <Features />
      <Testimonials />
      <Contact />
    </section>
  );
}
