import { Star, MessageSquare } from "lucide-react";
import { reviews } from "../data";

export default function ReviewsSection() {
  return (
    <section className="py-20 border-b border-brand-dark/5 bg-brand-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
            Ulasan Kepuasan
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
            Apa Kata Mereka Tentang Hasil Fitting Fisik Kami?
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-muted">
            Kepuasan jahit tidak bisa diwakili oleh angka digital saja, melainkan kenyamanan saat disandangkan di badan. Berikut adalah ulasan asli dari pelanggan tetap studio kami.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="reviews-container">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="border border-brand-dark/10 bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-brand-dark/30 transition-all duration-200"
              id={`review-card-${idx}`}
            >
              <div>
                {/* Micro Stars Section */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Testimonial body text */}
                <p className="font-sans text-sm text-brand-dark leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Client Info Footer Card */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-dark/5">
                <div className="w-9 h-9 rounded-full bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <span className="font-display text-xs font-bold uppercase">
                    {rev.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-dark leading-none">
                    {rev.name}
                  </h4>
                  <span className="font-sans text-[10px] text-brand-muted block mt-1">
                    {rev.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Static visual trust seal banner */}
        <div className="mt-12 bg-brand-dark text-brand-bg rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-dark">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-bg/85 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-sm font-bold block mb-0.5">
                Ingin Memberikan Ulasan / Saran Setelah Fitting?
              </span>
              <span className="font-sans text-xs text-brand-bg/65 block">
                Kami sangat menghargai setiap masukan Anda demi meningkatkan kualitas jalinan obras dan kerapihan pelipit benang jahit kami.
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider bg-white/15 px-3 py-1 rounded text-brand-bg/90">
            Fokus Layanan offline
          </span>
        </div>

      </div>
    </section>
  );
}
