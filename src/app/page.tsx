import About from "./ui/About";
import Contact from "./ui/Contact";
import Hero from "./ui/Hero";
import Methodology from "./ui/Methodology";
import OurValues from "./ui/OurValues";
import ServicesSection from "./ui/ServicesSection";


export default function Home() {
  return (
      <main className=" bg-[#1F2937]">
        <Hero/>
        <About/>
        <ServicesSection/>
        <Methodology/>
        <OurValues/>
        <Contact/>
      </main>
  );
}
