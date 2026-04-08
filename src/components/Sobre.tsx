import { Truck, Package, Clock, Handshake } from "lucide-react";

const highlights = [
  { icon: Truck, label: "Experiência", desc: "Anos no mercado de transporte" },
  { icon: Package, label: "Cuidado", desc: "Seus bens tratados com carinho" },
  { icon: Clock, label: "Pontualidade", desc: "Sempre no horário combinado" },
  { icon: Handshake, label: "Confiança", desc: "Compromisso com você" },
];

const Sobre = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Sobre <span className="text-gradient">Nós</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A Val Fretes & Mudanças oferece serviços de transporte com responsabilidade, cuidado e pontualidade.
            Nossa missão é garantir que seus bens cheguem com segurança e tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass-card p-6 text-center hover:scale-105 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{h.label}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
