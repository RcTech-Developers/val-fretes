const WHATSAPP_URL = "https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20mudança.%0A%0A📦%20Tipo%20de%20serviço:%0A🏠%20Endereço%20de%20origem:%0A📍%20Endereço%20de%20destino:%0A📅%20Data%20desejada:%0A%0AAguardo%20retorno,%20obrigado!";

const Orcamento = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl reveal">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-12 md:p-16 text-center">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Solicite seu orçamento <span className="text-gradient">agora mesmo</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Rápido, fácil e sem compromisso. Fale diretamente conosco!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/30"
            >
              Pedir Orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;
