import { useState, useMemo } from "react";
import { estimationConfigs } from "../data";
import { EstimationConfig } from "../types";
import { Calculator, ShoppingBag, Clock, HelpCircle, FileText, Send, HelpCircle as TooltipIcon } from "lucide-react";

export default function InteractiveEstimator() {
  // States
  const [selectedItemType, setSelectedItemType] = useState<string>(estimationConfigs[0].itemType);
  const [sizeCategory, setSizeCategory] = useState<"standard" | "plus">("standard");
  const [needsLining, setNeedsLining] = useState<boolean>(false);
  const [extraDays, setExtraDays] = useState<boolean>(false);

  // Find configuration for the selected item
  const currentConfig = useMemo(() => {
    return (
      estimationConfigs.find((c) => c.itemType === selectedItemType) ||
      estimationConfigs[0]
    );
  }, [selectedItemType]);

  // Dynamic calculations based on user adjustments
  const calculatedFabric = useMemo(() => {
    const isPlus = sizeCategory === "plus";
    
    // Simple custom parsers to display smart adjustment recommendations
    if (selectedItemType.includes("Jas") || selectedItemType.includes("Blazer")) {
      return {
        text: isPlus
          ? "Jas/Blazer: ± 2.2 - 2.5 meter kain lebar 150cm (Butuh tambahan karena ukuran tubuh)"
          : "Jas/Blazer: ± 2.0 meter kain lebar 150cm (Ukuran standard)",
        liningText: needsLining 
          ? "Furing dalam: Sediakan ± 1.8 - 2.0 meter kain furing tambahan" 
          : "Furing dalam: Standar furing sudah otomatis dihitung/opsional"
      };
    }

    if (selectedItemType.includes("Kemeja Lengan Pendek")) {
      return {
        text: isPlus
          ? "Lebar 150cm: butuh 1.5 meter | Lebar 115cm: butuh 1.75 - 2.0 meter"
          : "Lebar 150cm: butuh 1.25 meter | Lebar 115cm: butuh 1.5 meter",
        liningText: needsLining 
          ? "Furing: Sediakan ± 1.25 - 1.5 meter kain furing katun hero jika ingin dilapisi" 
          : ""
      };
    }

    if (selectedItemType.includes("Kemeja Lengan Panjang")) {
      return {
        text: isPlus
          ? "Lebar 150cm: butuh 1.75 meter | Lebar 115cm: butuh 2.2 meter"
          : "Lebar 150cm: butuh 1.5 meter | Lebar 115cm: butuh 1.8 - 2.0 meter",
        liningText: needsLining 
          ? "Furing: Sediakan ± 1.5 meter kain furing jika kemeja ingin lapis dalam penuh" 
          : ""
      };
    }

    if (selectedItemType.includes("Celana Panjang Kasual") || selectedItemType.includes("Celana Panjang Jas")) {
      return {
        text: isPlus
          ? "Kain lebar 150cm: butuh 1.5 - 1.75 meter (Lebar 115cm tidak direkomendasikan)"
          : "Kain lebar 150cm: butuh 1.3 - 1.5 meter (Lebar 115cm tidak direkomendasikan)",
        liningText: needsLining 
          ? "Furing kantong celana standard sudah termasuk dalam jasa jahit kami." 
          : ""
      };
    }

    // Default fallback based on metadata
    return {
      text: isPlus 
        ? `${currentConfig.fabricNeeded} (Disarankan tambah 0.25 - 0.5 meter untuk ukuran tubuh XL+)`
        : currentConfig.fabricNeeded,
      liningText: needsLining 
        ? "Furing tambahan: Siapkan kain furing halus dengan panjang setara bahan baku utama." 
        : ""
    };
  }, [selectedItemType, sizeCategory, needsLining, currentConfig]);

  // Adjust turnaround time if extra work is checked
  const calculatedDuration = useMemo(() => {
    if (extraDays) {
      return `${currentConfig.baseDuration} (+ 1-2 Hari Kerja untuk detail bordir/saku/payet khusus)`;
    }
    return currentConfig.baseDuration;
  }, [extraDays, currentConfig]);

  // Build the live WA template message dynamically
  const waUrl = useMemo(() => {
    const sizeStr = sizeCategory === "standard" ? "S/M/L" : "XL ke atas";
    const liningStr = needsLining ? "Ya (pakai furing)" : "Tidak";
    const detailsStr = extraDays ? "Ya, ada penambahan variasi khusus" : "Tidak";
    
    const baseText = `Halo Atelier Benang, saya membaca panduan website jahit Anda. Saya berminat berkonsultasi langsung di studio untuk pengerjaan:\n\n` +
                     `- Tipe Busana: ${selectedItemType}\n` +
                     `- Estimasi Ukuran: ${sizeStr}\n` +
                     `- Piring/Lining tambahan: ${liningStr}\n` +
                     `- Detail kantong/variasi ekstra: ${detailsStr}\n\n` +
                     `Apakah saya bisa datang untuk berkonsultasi & diukur badan secara langsung minggu ini?`;
                     
    return `https://wa.me/628123456789?text=${encodeURIComponent(baseText)}`;
  }, [selectedItemType, sizeCategory, needsLining, extraDays]);

  return (
    <section id="calculator" className="py-20 border-b border-brand-dark/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
            Kalkulator Bahan Mandiri
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
            Hitung Kebutuhan Bahan Sebelum Membeli Kain
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-muted">
            Agar tidak sia-sia membeli bahan kain yang terlalu pendek atau terlalu panjang di toko tekstil, gunakan formulir interaktif di bawah ini untuk mendapatkan estimasi ukuran ideal Anda.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="border border-brand-dark bg-brand-cream/10 rounded-2xl p-6 sm:p-10 shadow-lg" id="estimator-tool-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Input Controls Left Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-brand-dark/10 pb-4">
                  <Calculator className="w-5 h-5 text-brand-accent" />
                  <h3 className="font-display text-lg font-bold text-brand-dark">
                    Konfigurasi Pilihan Busana
                  </h3>
                </div>

                {/* Dropdown 1: Garment Type */}
                <div className="space-y-2 mb-5">
                  <label htmlFor="garment-select" className="block text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
                    1. Pilih Jenis Pakaian yang Ingin Dibuat:
                  </label>
                  <select
                    id="garment-select"
                    className="w-full bg-white border border-brand-dark/20 focus:border-brand-dark px-4 py-3 rounded-lg text-sm text-brand-dark font-medium focus:outline-none focus:ring-1 focus:ring-brand-dark transition-all"
                    value={selectedItemType}
                    onChange={(e) => setSelectedItemType(e.target.value)}
                  >
                    {estimationConfigs.map((cfg: EstimationConfig) => (
                      <option key={cfg.itemType} value={cfg.itemType}>
                        {cfg.itemType}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Radio Buttons: Size Classes */}
                <div className="space-y-2 mb-5">
                  <span className="block text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
                    2. Estimasi Ukuran Tubuh Anda:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSizeCategory("standard")}
                      className={`px-4 py-3 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer focus:outline-none ${
                        sizeCategory === "standard"
                          ? "border-brand-dark bg-brand-dark text-brand-bg shadow-sm"
                          : "border-brand-dark/10 bg-white text-brand-dark hover:border-brand-dark/40"
                      }`}
                      id="size-std-btn"
                    >
                      S / M / L
                      <span className="block font-normal text-[10px] mt-0.5 opacity-80">Lebar Standard</span>
                    </button>
                    <button
                      onClick={() => setSizeCategory("plus")}
                      className={`px-4 py-3 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer focus:outline-none ${
                        sizeCategory === "plus"
                          ? "border-brand-dark bg-brand-dark text-brand-bg shadow-sm"
                          : "border-brand-dark/10 bg-white text-brand-dark hover:border-brand-dark/40"
                      }`}
                      id="size-plus-btn"
                    >
                      XL / XXL / 3XL+
                      <span className="block font-normal text-[10px] mt-0.5 opacity-80">Ditambah Kain 0.25 - 0.5m</span>
                    </button>
                  </div>
                </div>

                {/* Additional Adjustments */}
                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
                    3. Kustomisasi Tambahan:
                  </span>
                  
                  {/* Checkbox 1: Lining furing */}
                  <label className="flex items-start gap-3 p-3 bg-white border border-brand-dark/5 rounded-lg hover:border-brand-dark/20 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={needsLining}
                      onChange={(e) => setNeedsLining(e.target.checked)}
                      className="mt-0.5 rounded border-brand-dark/20 accent-brand-accent focus:ring-brand-accent w-4 h-4 cursor-pointer"
                      id="lining-checkbox"
                    />
                    <div>
                      <span className="block text-xs font-bold text-brand-dark">Gunakan Lapisan Furing / Saku Ganda</span>
                      <span className="block text-[10px] text-brand-muted mt-0.5">Sangat direkomendasikan untuk kemeja tipis, batik, jas formal, atau blazer malam.</span>
                    </div>
                  </label>

                  {/* Checkbox 2: Complex varian details */}
                  <label className="flex items-start gap-3 p-3 bg-white border border-brand-dark/5 rounded-lg hover:border-brand-dark/20 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={extraDays}
                      onChange={(e) => setExtraDays(e.target.checked)}
                      className="mt-0.5 rounded border-brand-dark/20 accent-brand-accent focus:ring-brand-accent w-4 h-4 cursor-pointer"
                      id="detail-checkbox"
                    />
                    <div>
                      <span className="block text-xs font-bold text-brand-dark">Request Detail Variasi Rumit</span>
                      <span className="block text-[10px] text-brand-muted mt-0.5">Penambahan bordir tangan pelipit kancing ganda, payet, saku rahasia, atau rumbai tumpuk.</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Informative advice footer inside calculator */}
              <div className="mt-6 p-4 rounded-xl border border-brand-dark/5 bg-brand-bg text-[11px] text-brand-muted flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Harap dicatat:</strong> Angka ini merupakan kalkulasi estimasi standar industri butik jahit. Setiap potongan kain bergantung pada lebar pola kancing dan motif searah (batik tumpuk). Konsultasi langsung ke studio selalu menjadi rujukan termutakhir tingkat kepresisian.
                </p>
              </div>
            </div>

            {/* Calculations Result Right Column */}
            <div className="lg:col-span-6 bg-brand-dark text-brand-bg p-6 sm:p-8 rounded-xl flex flex-col justify-between border border-brand-dark shadow-inner">
              
              {/* Output top elements */}
              <div className="space-y-6">
                <div className="border-b border-brand-bg/15 pb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-brand-bg/60 tracking-widest uppercase">
                    Hasil Perhitungan Kain
                  </span>
                  <span className="font-mono text-[10px] bg-brand-accent text-brand-bg px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold">
                    Estimasi Pas
                  </span>
                </div>

                {/* Kain Result Main Display */}
                <div>
                  <span className="block text-xs font-mono text-brand-bg/50 uppercase tracking-widest mb-1.5">
                    Kebutuhan Panjang Kain Utama:
                  </span>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <ShoppingBag className="w-7 h-7 text-brand-accent shrink-0" />
                    <p className="font-display text-sm sm:text-base font-bold text-brand-bg leading-normal">
                      {calculatedFabric.text}
                    </p>
                  </div>
                </div>

                {/* Lining Result Display if active */}
                {needsLining && calculatedFabric.liningText && (
                  <div className="animate-fadeIn">
                    <span className="block text-xs font-mono text-brand-bg/50 uppercase tracking-widest mb-1.5">
                      Kebutuhan Panjang Kain Furing:
                    </span>
                    <p className="font-sans text-xs text-brand-bg/85 bg-white/5 p-3 rounded-lg border border-white/5">
                      {calculatedFabric.liningText}
                    </p>
                  </div>
                )}

                {/* Timeline Result Display */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="block text-xs font-mono text-brand-bg/50 uppercase tracking-widest mb-1">
                      Turnaround Waktu:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-bg/80" />
                      <span className="font-display text-sm font-semibold text-brand-bg">
                        {calculatedDuration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-brand-bg/50 uppercase tracking-widest mb-1">
                      Biaya Jasa Mulai:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-brand-bg/80" />
                      <span className="font-sans text-xs font-bold text-brand-bg">
                        {currentConfig.priceEstimateInfo.split(" (")[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Small item specific tips inside calculate box */}
                <div className="border-t border-white/10 pt-4">
                  <span className="block text-[10px] font-mono text-brand-bg/40 uppercase tracking-wider mb-1">
                    Catatan Jenis Kain Rekomendasi:
                  </span>
                  <p className="font-sans text-xs text-brand-bg/75 leading-relaxed italic">
                    &ldquo;{currentConfig.notes}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Call for WhatsApp - ONLY OFFLINE DISCUSSION, NO PLANNED SECURE PAYMENTS */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-600 active:scale-95 text-brand-bg font-sans text-sm font-bold tracking-tight py-4 px-6 rounded-lg transition-all shadow-md shadow-emerald-950/20"
                  id="wa-draft-btn"
                >
                  <Send className="w-4 h-4 fill-current shrink-0" />
                  KIRIM ESTIMASI KE WA & TANYAKAN JADWAL
                </a>
                <p className="text-center text-[10px] text-brand-bg/40 mt-3 leading-snug">
                  *Klik tombol untuk mengirimkan kuesioner otomatis langsung ke WA Admin. Tidak ada sistem transaksi otomatis di situs ini.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
