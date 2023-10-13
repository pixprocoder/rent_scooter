import About from "../components/about/About";
import Book from "../components/book/Book";
import Contact from "../components/contact/Contact";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/howItWorks/HowItWorks";
import PopularCar from "../components/popular/PopularCar";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <section className="container mx-auto p-2 ">
      <Hero />
      {/* <Book /> */}
      <HowItWorks />
      <PopularCar />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
    </section>
  );
}
