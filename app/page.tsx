import About from "@/components/about/About";
import Book from "@/components/book/Book";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import PopularCar from "@/components/popular/PopularCar";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <section>
      <Hero />
      <Book />
      <HowItWorks />
      <PopularCar />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Contact />
    </section>
  );
}
