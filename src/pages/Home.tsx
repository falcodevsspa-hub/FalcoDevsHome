import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
