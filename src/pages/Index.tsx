import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Galeria from "@/components/Galeria";
import Diferenciais from "@/components/Diferenciais";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <Diferenciais />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
