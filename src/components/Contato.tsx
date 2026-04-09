import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", origem: "", destino: "", descricao: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um orçamento de mudança.%0A%0A📦 Tipo de serviço: ${form.descricao}%0A🏠 Endereço de origem: ${form.origem}%0A📍 Endereço de destino: ${form.destino}%0A📞 Telefone: ${form.telefone}%0A👤 Nome: ${form.nome}%0A%0AAguardo retorno, obrigado!`;
    window.open(`https://wa.me/5599999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
           Solicite seu orçamento <span className="text-gradient"> <br /> agora mesmo</span>
          </h2>
          <p className="text-muted-foreground">Preencha o formulário e entraremos em contato rapidamente.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 reveal">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <input
            type="text"
            placeholder="Endereço de origem"
            required
            value={form.origem}
            onChange={(e) => setForm({ ...form, origem: e.target.value })}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <input
            type="text"
            placeholder="Endereço de destino"
            required
            value={form.destino}
            onChange={(e) => setForm({ ...form, destino: e.target.value })}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <textarea
            placeholder="Descrição (tipo de mudança, itens, etc.)"
            rows={4}
            required
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
