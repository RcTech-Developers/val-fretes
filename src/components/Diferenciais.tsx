import { MessageCircle, Users, BadgeDollarSign, ShieldCheck } from "lucide-react";

const items = [
  { icon: MessageCircle, title: "Atendimento rápido via WhatsApp", desc: "Resposta imediata para suas solicitações." },
  { icon: Users, title: "Equipe experiente", desc: "Profissionais treinados e dedicados." },
  { icon: BadgeDollarSign, title: "Preço justo", desc: "O melhor custo-benefício do mercado." },
  { icon: ShieldCheck, title: "Serviço ágil e seguro", desc: "Rapidez sem abrir mão da segurança." },
];

const Diferenciais = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={30} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
