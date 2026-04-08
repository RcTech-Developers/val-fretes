import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Contato from "@/components/Contato";
import Orcamento from "@/components/Orcamento";
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
      <Diferenciais />
      <Contato />
      <Orcamento />
      <Footer />
    </div>
  );
};

export default Index;
