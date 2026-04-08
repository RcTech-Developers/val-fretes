import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20mudança.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Caminhão de mudança profissional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up text-foreground">
          Fretes e Mudanças com{" "}
          <span className="text-gradient">Segurança, Agilidade e Confiança</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transporte profissional para residências e empresas
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
