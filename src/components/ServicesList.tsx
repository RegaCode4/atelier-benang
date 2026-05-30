import { Scissors, RotateCcw, Copy, Sparkles, Check, Clock, Shirt } from "lucide-react";
import { serviceCategories } from "../data";
import { ServiceCategory } from "../types";

interface ServicesListProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function ServicesList({ onSelectCategory }: ServicesListProps) {
  
  // Mapping string to correct Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-5 h-5 text-brand-accent animate-pulse" />;
      case "RotateCcw":
        return <RotateCcw className="w-5 h-5 text-brand-accent" />;
      case "Copy":
        return <Copy className="w-5 h-5 text-brand-accent" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-brand-accent" />;
      default:
        return <Shirt className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="services" className="py-20 border-b border-brand-dark/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
            Layanan Utama Studio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
            Apa Saja yang Bisa Dilakuakan di Atelier Kami?
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-muted">
            Kami menerima segala jenis pengerjaan tekstil. Mulai dari merancang busana wisuda mewah dari lembaran kain polos, hingga sekadar mengecilkan lingkar celana jeans kesayangan Anda agar pas di pinggang.
          </p>
        </div>

        {/* Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {serviceCategories.map((category: ServiceCategory) => (
            <div
              key={category.id}
              className="group border border-brand-dark/10 hover:border-brand-dark bg-brand-bg hover:bg-brand-cream/20 p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
              id={`service-card-${category.id}`}
            >
              <div>
                {/* Card Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-brand-dark/10 bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors duration-200">
                    {renderIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-brand-dark">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-brand-muted group-hover:text-brand-accent transition-colors mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                        Estimasi: {category.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[10px] font-bold text-brand-dark/60 tracking-wider uppercase block">
                    Keunggulan Kami:
                  </span>
                  {category.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-brand-dark/85 leading-normal">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag items & quick action */}
              <div className="border-t border-brand-dark/5 pt-6 mt-4">
                <span className="font-mono text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block mb-3">
                  Sering Dikerjakan:
                </span>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {category.exampleItems.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-white/80 border border-brand-dark/5 px-2.5 py-1 rounded text-xs text-brand-dark font-medium group-hover:bg-brand-bg duration-150"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onSelectCategory(category.title)}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-brand-accent hover:text-brand-dark group-hover:underline focus:outline-none cursor-pointer"
                    id={`btn-est-${category.id}`}
                  >
                    Cek Kebutuhan Bahan Untuk Pengerjaan Ini &rarr;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Fine border info banner beneath */}
        <div className="mt-12 p-6 sm:p-8 border border-dashed border-brand-dark/15 rounded-2xl bg-brand-cream/35 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="max-w-xl">
            <h4 className="font-display text-lg font-bold text-brand-dark mb-1">
              Punya Kebutuhan Jahit Lain yang Tidak Tercantum?
            </h4>
            <p className="font-sans text-xs text-brand-muted leading-relaxed">
              Jahit kostum cos-play berat, bantal sandaran custom, jubah wisuda dekan, gorden siluet tinggi, hingga penjahitan atribut pramuka masal. Bawa contoh visualnya ke studio, penjahit kami siap mendiskusikannya secara mendalam.
            </p>
          </div>
          <button
            onClick={() => onSelectCategory("custom-other")}
            className="whitespace-nowrap inline-flex items-center justify-center border border-brand-dark bg-white hover:bg-brand-dark hover:text-brand-bg text-brand-dark text-xs font-bold tracking-tight px-6 py-3 rounded-full cursor-pointer duration-200"
            id="btn-custom-consult"
          >
            Konsultasikan Kebutuhan Anda
          </button>
        </div>

      </div>
    </section>
  );
}
