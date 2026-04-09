import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";
import galeria5 from "@/assets/galeria-5.jpg";
import galeria6 from "@/assets/galeria-6.jpg";

const photos = [
  { src: galeria1, alt: "Mudança residencial realizada com sucesso" },
  { src: galeria2, alt: "Caminhão da empresa pronto para o transporte" },
  { src: galeria3, alt: "Carregamento de móveis com cuidado" },
  { src: galeria4, alt: "Equipe organizada durante o trabalho" },
  { src: galeria5, alt: "Transporte seguro de pertences" },
  { src: galeria6, alt: "Entrega finalizada com satisfação do cliente" },
];

const Galeria = () => {
  return (
    <section id="galeria" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Nossos <span className="text-gradient">Veiculos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confira nossos veiculos legalizados e profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
