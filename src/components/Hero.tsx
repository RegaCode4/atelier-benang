import { ArrowRight, Star, HeartHandshake, Scissors } from "lucide-react";
import heroIllustration from "../assets/images/tailor_atelier_hero_1780141261358.png";

interface HeroProps {
  onScrollTo: (selector: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-24 border-b border-brand-dark/5 bg-gradient-to-b from-brand-bg to-brand-cream/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Badge */}
            <div className="inline-flex items-center gap-2 border border-brand-accent/20 bg-brand-accent/5 text-brand-accent px-4 py-1.5 rounded-full w-max text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              <Scissors className="w-3.5 h-3.5" />
              Atelier Jahit Offline Terpercaya
            </div>

            {/* Typography Heading like monolith Monotree design */}
            <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
              Seni Jahit <br className="hidden sm:inline" />
              dengan Presisi & Hati.
            </h1>

            {/* Paragraph Subhead */}
            <p className="font-sans text-base md:text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
              Mulai dari jahit kebaya adat, setelan jas formal eksklusif, hingga renovasi jeans lama yang bernilai historis. Semua dikerjakan oleh jemari ahli di workshop fisik kami untuk memastikan kesesuaian potongan sempurna dengan gestur tubuh Anda.
            </p>

            {/* Interactive smooth-scroll trigger buttons & disclaimer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onScrollTo("#calculator")}
                className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-accent text-brand-bg font-sans text-sm font-bold tracking-normal py-4 px-8 rounded-full transition-all hover:scale-[1.01] hover:shadow-lg cursor-pointer focus:outline-none"
                id="hero-cta-primary"
              >
                Cek Kebutuhan Bahan Kain
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onScrollTo("#services")}
                className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 bg-white/50 backdrop-blur hover:bg-brand-cream/80 text-brand-dark font-sans text-sm font-semibold py-4 px-8 rounded-full transition-all cursor-pointer focus:outline-none"
                id="hero-cta-secondary"
              >
                Eksplor Layanan Jahit
              </button>
            </div>

            {/* Statistics Row mimicking Monotree template */}
            <div className="border-t border-brand-dark/10 pt-8 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mb-6">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-brand-dark leading-none">
                  15+
                </span>
                <span className="block font-sans text-xs text-brand-muted mt-1.5 leading-tight">
                  Tahun Pengalaman
                </span>
              </div>
              <div className="border-l border-brand-dark/10 pl-4 md:pl-8">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-brand-dark leading-none animate-pulse">
                  2.5k+
                </span>
                <span className="block font-sans text-xs text-brand-muted mt-1.5 leading-tight">
                  Pakaian Sempurna
                </span>
              </div>
              <div className="border-l border-brand-dark/10 pl-4 md:pl-8">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-brand-dark leading-none">
                  4.9
                </span>
                <span className="block font-sans text-xs text-brand-muted mt-1.5 leading-tight">
                  Rating Pelanggan
                </span>
              </div>
            </div>

            {/* Stars Row */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-sans text-xs font-semibold text-brand-dark">
                4.9 / 5.0 Bintang Melalui Ratusan Fitting Fisik
              </span>
            </div>
          </div>

          {/* Hero Right Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Soft decorative background box frame */}
              <div className="absolute inset-0 border border-brand-dark/5 bg-brand-cream/80 translate-x-3 translate-y-3 rounded-2xl z-0"></div>
              
              {/* Real Illustration Container */}
              <div className="relative border border-brand-dark/10 bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 z-10 overflow-hidden">
                <img
                  src={heroIllustration}
                  alt="Ilustrasi Workshop Atelier Benang"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl"
                  id="hero-illustration-img"
                />
                
                {/* Micro floating annotation badge */}
                <div className="absolute bottom-10 left-10 border border-brand-dark bg-white/95 backdrop-blur shadow-lg px-4 py-3 rounded-xl flex items-center gap-3 max-w-[200px]">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <HeartHandshake className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold block leading-none">Hasil Bergaransi</span>
                    <span className="font-sans text-[10px] text-brand-muted block mt-0.5 whitespace-nowrap">Bebas revisi ukuran & pola</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
