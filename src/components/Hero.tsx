import heroBg from "@/assets/hero-bg.jpg";
import logoVal from "@/assets/logo-val.png";

const WHATSAPP_URL = "https://wa.me/5521971553909?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20mudança.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Caminhão de mudança profissional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16">
        <div className="mb-8 animate-fade-up">
          <img src={logoVal} alt="Val Fretes & Mudanças" className="mx-auto w-64 md:w-80 lg:w-96" />
        </div>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-up bach" style={{ animationDelay: "0.2s" }}>
          Transporte profissional para residências e empresas com segurança e confiança
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/25"
          >
            Solicitar Orçamento
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 hover:scale-105 transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
