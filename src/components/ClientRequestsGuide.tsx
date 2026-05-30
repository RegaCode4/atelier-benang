import { useState } from "react";
import { clientRequests, preparationSteps } from "../data";
import { ClientRequestItem, PreparationItem } from "../types";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function ClientRequestsGuide() {
  const [activeId, setActiveId] = useState<string>("fitting");

  return (
    <section id="requests" className="py-20 border-b border-brand-dark/5 bg-brand-cream/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
            Panduan & Edukasi Klien
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
            Rahasia & Permintaan Bebas ke Penjahit Kami
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-muted">
            Banyak orang tidak tahu bahwa keunggulan utama menjahit baju secara offline di atelier adalah Anda bebas meminta berbagai detail fungsional rahasia yang tidak pernah dipikirkan oleh pabrik pakaian massal retail.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What you can request (Interactive List) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <h3 className="font-display text-lg font-bold text-brand-dark">
                Detail Rahasia yang Bebas Anda Minta:
              </h3>
            </div>

            {/* Iterative accordion with borders */}
            <div className="space-y-3.5" id="interactive-requests-accordion">
              {clientRequests.map((item: ClientRequestItem) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-brand-dark bg-white shadow-md shadow-brand-dark/5"
                        : "border-brand-dark/10 bg-white/70 hover:bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setActiveId(isOpen ? "" : item.id)}
                      className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      id={`accordion-btn-${item.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-brand-accent" : "text-brand-muted"}`} />
                        <span className="font-display text-sm sm:text-base font-bold text-brand-dark leading-tight">
                          {item.title}
                        </span>
                      </div>
                      <div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-brand-dark" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-brand-muted" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Body */}
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-brand-dark/5 pt-4 bg-brand-cream/10">
                        <p className="font-sans text-xs sm:text-sm text-brand-dark/90 leading-relaxed mb-4">
                          {item.explanation}
                        </p>

                        <div className="space-y-2 mb-4">
                          <span className="font-mono text-[9px] font-bold text-brand-dark/50 uppercase tracking-widest block">
                            Pilihan Variasi / Contoh:
                          </span>
                          {item.options.map((opt, oIdx) => (
                            <div key={oIdx} className="flex items-start gap-2 text-xs">
                              <span className="text-brand-accent mt-0.5">•</span>
                              <span className="font-sans text-brand-muted">
                                {opt}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Highlighted Advice */}
                        <div className="border-l-2 border-brand-accent bg-brand-accent/5 p-3 rounded-r-lg">
                          <span className="font-display text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-0.5">
                            Saran Penjahit:
                          </span>
                          <p className="font-sans text-xs text-brand-accent/90 italic">
                            &ldquo;{item.guidance}&rdquo;
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Steps to prepare before coming */}
          <div className="lg:col-span-5 bg-white border border-brand-dark/10 p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="font-display text-lg font-bold text-brand-dark mb-6 border-b border-brand-dark/10 pb-4">
              Panduan Sebelum Datang ke Studio
            </h3>

            {/* Stepper block list */}
            <div className="space-y-6">
              {preparationSteps.map((step: PreparationItem, sIdx) => (
                <div key={step.number} className="flex gap-4">
                  {/* Circle number */}
                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-full border border-brand-dark bg-brand-cream/80 flex items-center justify-center font-display text-xs font-bold text-brand-dark">
                      {step.number}
                    </div>
                    {sIdx < preparationSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-brand-dark/10 mx-auto my-1"></div>
                    )}
                  </div>

                  {/* Text explanations */}
                  <div className="space-y-1">
                    <h4 className="font-display text-sm sm:text-base font-bold text-brand-dark leading-tight">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 pt-0.5">
                      <span className="font-mono text-[9px] font-bold text-brand-accent/90 uppercase tracking-widest bg-brand-accent/5 px-2 py-0.5 rounded border border-brand-accent/10">
                        Tips Ahli: {step.tips}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom prompt */}
            <div className="mt-8 pt-6 border-t border-brand-dark/10 text-center">
              <span className="font-sans text-xs text-brand-muted italic">
                Kami siap membantu mengukur badan Anda dengan pita pengukur standar internasional di studio kami yang sejuk.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
