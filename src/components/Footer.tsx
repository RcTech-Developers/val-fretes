import { Truck, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-heading font-semibold text-foreground">
          <Truck className="text-primary" size={22} />
          Val Fretes & Mudanças
        </div>

        <p>© {new Date().getFullYear()} Val Fretes & Mudanças. Todos os direitos reservados.</p>

        <a
          href="https://wa.me/5521971553909"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone size={16} />
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
