import { Home, Building2, Sofa } from "lucide-react";

const services = [
  { icon: Home, title: "Mudanças Residenciais", desc: "Transporte seguro de toda a sua casa com cuidado e organização." },
  { icon: Building2, title: "Mudanças Comerciais", desc: "Soluções para escritórios e estabelecimentos comerciais." },
  { icon: Sofa, title: "Transporte de Móveis", desc: "Seus móveis transportados com proteção e segurança total." },
];

const Servicos = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para cada necessidade de transporte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
