import { MapPin, Phone, MessageSquare, Clock, Calendar, ShieldCheck, Mail } from "lucide-react";

export default function ContactFooter() {
  const whatsappNumber = "628123456789"; 
  const formattedPhone = "0812-3456-789";
  const emailAddress = "halo@atelierbenang.com";

  const faqs = [
    {
      q: "Apakah saya harus membayar DP (Down Payment) sebelum jahit mulai?",
      a: "Ya, untuk menjaga antrian pengerjaan, kami menerapkan DP sebesar 50% saat sesi pengukuran tubuh dan penentuan model di workshop. Sisanya dilunasi saat fitting terakhir selesai dan baju siap dibawa pulang."
    },
    {
      q: "Bagaimana jika pakaian yang sudah jadi terasa kurang pas setelah dicoba di rumah?",
      a: "Kami menyediakan garansi perbaikan gratis selama 30 hari penuh sejak tanggal pengambilan pakaian. Silakan datang kembali ke studio dan tim kami akan menyempurnakannya secara gratis."
    },
    {
      q: "Apakah saya bisa membawa kain sendiri dari luar?",
      a: "Sangat bisa! Mayoritas pelanggan kami membawa kain kesukaan mereka yang dibeli dari toko tekstil langganan, lalu kami bantu mengukur dan merekomendasikan kecocokan potongan modelnya."
    },
    {
      q: "Jika kain saya ada sisa, apakah akan dikembalikan?",
      a: "Tentu saja. Semua sisa potongan kain yang masih layak pakai akan dilipat rapi dan diserahkan kembali bersama paket pakaian jadi Anda."
    }
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-brand-bg pt-20 border-t border-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Contact Cards & Coordinates (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-brand-bg/50 uppercase tracking-widest block mb-2.5">
                Hubungi Studio Offline Kami
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-bg tracking-tight mb-4">
                Atelier Benang
              </h2>
              <p className="font-sans text-sm text-brand-bg/70 leading-relaxed">
                Kami sangat menantikan kehadiran Anda di workshop fisik kami. Diskusikan bahan kain Anda, lakukan fitting terbaik, dan dapatkan pakaian yang dirancang khusus untuk mewakili kepribadian Anda.
              </p>
            </div>

            {/* Direct Information List */}
            <div className="space-y-4">
              
              {/* Phone Line / WA */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-white/10 rounded-xl hover:border-brand-bg/40 hover:bg-white/5 transition-all text-left uppercase text-brand-bg"
                id="contact-wa-link"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-brand-bg/40 tracking-widest leading-none mb-1">
                    WhatsApp Chat Support
                  </span>
                  <span className="block font-display text-sm font-bold tracking-tight">
                    {formattedPhone} (Admin WhatsApp)
                  </span>
                  <span className="block font-sans text-[11px] text-emerald-400 mt-0.5 normal-case font-medium">
                    &bull; Klik untuk chat & konsultasi cepat
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-start gap-4 p-4 border border-white/10 rounded-xl hover:border-brand-bg/40 hover:bg-white/5 transition-all text-left text-brand-bg"
                id="contact-email-link"
              >
                <div className="w-10 h-10 rounded-full bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-brand-bg/40 tracking-widest leading-none mb-1">
                    Email Resmi
                  </span>
                  <span className="block font-display text-sm font-bold tracking-tight">
                    {emailAddress}
                  </span>
                  <span className="block font-sans text-[11px] text-brand-bg/55 mt-0.5">
                    Hubungi untuk kebutuhan kerjsama institusi / seragam korporasi
                  </span>
                </div>
              </a>

              {/* Location Address Area */}
              <div className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-bg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-brand-bg/40 tracking-widest leading-none mb-1">
                    Alamat Workshop Fisik
                  </span>
                  <span className="block font-display text-sm font-bold tracking-tight text-white mb-1.5 leading-snug">
                    Jl. Benang Sutera No. 42B, Lantai 1-2
                  </span>
                  <p className="font-sans text-xs text-brand-bg/65 normal-case leading-relaxed">
                    Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta 12140 <br />
                    <span className="text-brand-bg/45">(Seberang Taman Ketapang Rindang, parkir luas tersedia)</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Timings card */}
            <div className="p-5 border border-white/10 bg-white/5 rounded-xl space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-bg/60" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                  Jam Operasional Fitting & Konsultasi:
                </span>
              </div>
              <div className="space-y-2 font-mono text-xs text-brand-bg/85">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Senin - Jumat</span>
                  <span className="font-bold text-white">09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Sabtu</span>
                  <span className="font-bold text-white">09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between text-rose-300">
                  <span>Minggu & Hari Libur</span>
                  <span className="font-bold text-rose-300">LIBUR (TUTUP)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-brand-bg/45 leading-relaxed pt-1.5">
                <Calendar className="w-4.5 h-4.5" />
                <span>Meskipun bisa walk-in langsung, sangat disarankan menghubungi admin WA terlebih dahulu demi efisiensi antrian kedatangan Anda.</span>
              </div>
            </div>

          </div>

          {/* Right Block: FAQs & Online-Order Disclaimer (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-white/10">
                <ShieldCheck className="w-5 h-5 text-brand-bg/75" />
                Tanya Jawab Seputar Layanan Jahit (FAQ)
              </h3>

              {/* Informative FAQs list style */}
              <div className="space-y-6" id="static-faqs-grid">
                {faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="space-y-2 border-b border-white/5 pb-5 last:border-b-0 last:pb-0">
                    <h4 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                      Q: {faq.q}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-bg/70 leading-relaxed pl-5 border-l border-white/20">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline-only assurance box constraint requested by user */}
            <div className="p-6 bg-brand-accent/20 border border-brand-accent/50 rounded-2xl flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-950/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mb-1">
                  PEMBERITAHUAN PELAYANAN OFFLINE
                </span>
                <p className="font-sans text-xs text-brand-bg/75 leading-relaxed">
                  Situs ini didesain sebagai <strong>katalog informasi & kalkulator bahan mandiri</strong>. Atelier Benang <strong>TIDAK MENERIMA</strong> transaksi pembayaran online, pembayaran digital langsung, maupun pemesanan jahit tanpa tatap muka di website. Kerajinan pakaian kami 100% bergantung pada sesi fitting langsung di workshop demi menjaga marwah kualitas jahit eksklusif.
                </p>
              </div>
            </div>

            {/* Hand-drawn clean minimalist Map Simulator element */}
            <div className="border border-white/10 rounded-2xl overflow-hidden p-3 bg-white/5">
              <div className="relative h-44 bg-neutral-900 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center p-4">
                {/* Visual grid decor simulating draft map */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/10"></div>
                <div className="absolute top-0 left-[60%] w-[1px] h-full bg-white/10"></div>
                
                {/* Pins and label */}
                <div className="relative z-10 space-y-2">
                  <div className="w-6 h-6 rounded-full bg-rose-500 animate-ping absolute -top-1.5 left-1/2 -ml-3"></div>
                  <MapPin className="w-7 h-7 text-rose-500 mx-auto relative z-10" />
                  <span className="block font-display text-xs font-bold text-white tracking-wide">
                    Atelier Benang (Kebayoran Baru)
                  </span>
                  <span className="block font-mono text-[9px] text-brand-bg/40 tracking-wider">
                    -6.2341257, 106.8012648 | Klik WA Untuk Panduan Navigasi Lengkap
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Small copyright disclaimer footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <span className="font-mono text-[10px] text-brand-bg/40 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ATELIER BENANG JAKARTA. ALL RIGHTS RESERVED.
          </span>
          <span className="font-sans text-[10px] text-brand-bg/30">
            Dibuat secara profesional untuk memajukan Usaha Jahit Nusantara.
          </span>
        </div>

      </div>
    </footer>
  );
}
