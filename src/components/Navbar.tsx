import { useState } from "react";
import { Scissors, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onScrollTo: (selector: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", selector: "#home" },
    { name: "Layanan Kami", selector: "#services" },
    { name: "Panduan Request", selector: "#requests" },
    { name: "Kalkulator Bahan", selector: "#calculator" },
    { name: "Kontak & Alamat", selector: "#contact" }
  ];

  const handleLinkClick = (selector: string) => {
    setIsOpen(false);
    onScrollTo(selector);
  };

  return (
    <nav className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-dark/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick("#home")}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="nav-logo"
            aria-label="Atelier Benang Home"
          >
            <div className="w-10 h-10 rounded-full border border-brand-dark flex items-center justify-center bg-brand-dark text-brand-bg group-hover:bg-brand-accent transition-colors">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight block text-brand-dark">
                ATELIER BENANG
              </span>
              <span className="font-mono text-[10px] text-brand-muted tracking-widest block -mt-1 uppercase">
                Fine Tailoring
              </span>
            </div>
          </button>

          {/* Nav Icons for Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.selector)}
                className="font-sans text-sm font-medium text-brand-dark/70 hover:text-brand-dark hover:border-b hover:border-brand-dark transition-all py-1 focus:outline-none cursor-pointer"
                id={`lnk-${link.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("#contact")}
              className="inline-flex items-center gap-2 border border-brand-dark px-6 py-2.5 rounded-full font-sans text-xs font-semibold hover:bg-brand-dark hover:text-brand-bg hover:shadow-md cursor-pointer transition-all focus:outline-none"
              id="nav-cta-desktop"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              KONSULTASI OFFLINE
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 border border-brand-dark/20 rounded-full flex items-center justify-center text-brand-dark hover:border-brand-dark focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-brand-dark/10 bg-brand-bg transition-all duration-300">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.selector)}
                className="text-left font-display text-lg font-medium text-brand-dark py-1.5 border-b border-brand-dark/5"
                id={`mob-lnk-${link.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick("#contact")}
              className="w-full flex items-center justify-center gap-2 bg-brand-dark text-brand-bg py-3 px-5 rounded-full font-sans text-sm font-semibold hover:bg-brand-accent transition-all focus:outline-none mt-2"
              id="nav-cta-mobile"
            >
              <PhoneCall className="w-4 h-4" />
              Kontak Studio Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
