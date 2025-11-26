import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButton />
    </main>
  );
}

