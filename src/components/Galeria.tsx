import galeria1 from "@/assets/bongo-1.jpeg";
import galeria2 from "@/assets/bongo-2.jpeg";
import galeria3 from "@/assets/bongo-3.jpeg";
import galeria4 from "@/assets/sprinter-1.jpeg";
import galeria5 from "@/assets/sprinter-2.jpeg";
import galeria6 from "@/assets/sprinter-3.jpeg";

const photos = [
  { src: galeria1, alt: "Mudança residencial realizada com sucesso", nome: "HR Bongo" },
  { src: galeria2, alt: "Caminhão da empresa pronto para o transporte", nome: "HR Bongo" },
  { src: galeria3, alt: "Carregamento de móveis com cuidado", nome: "HR Bongo" },
  { src: galeria4, alt: "Equipe organizada durante o trabalho", nome: "Sprinter 313" },
  { src: galeria5, alt: "Transporte seguro de pertences", nome: "Sprinter 313" },
  { src: galeria6, alt: "Entrega finalizada com satisfação do cliente", nome: "Sprinter 313" },
];

const Galeria = () => {
  return (
    <section id="galeria" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Nossos <span className="text-gradient">Veículos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confira nossos veículos legalizados e profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>

              {/* NOME ABAIXO DA IMAGEM */}
              <p className="mt-2 text-center font-medium text-sm text-foreground">
                {photo.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;