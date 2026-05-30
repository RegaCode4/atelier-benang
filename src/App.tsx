/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import ClientRequestsGuide from "./components/ClientRequestsGuide";
import InteractiveEstimator from "./components/InteractiveEstimator";
import ReviewsSection from "./components/ReviewsSection";
import ContactFooter from "./components/ContactFooter";
import { Heart, Activity } from "lucide-react";

export default function App() {
  // Smooth scroll handler targeting element IDs
  const handleScrollTo = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-brand-dark selection:text-brand-bg">
      {/* 1. Header (Navbar) */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* 2. Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Services List (What tailors can do) */}
        <ServicesList onSelectCategory={() => handleScrollTo("#calculator")} />

        {/* Client Requests & Preparation Booklet Guide */}
        <ClientRequestsGuide />

        {/* Interactive Estimator Layout */}
        <InteractiveEstimator />

        {/* Reviews Section */}
        <ReviewsSection />
      </main>

      {/* 3. Fully comprehensive Contact & FAQ footer */}
      <ContactFooter />

      {/* Small floating hint badge representing design focus */}
      <div className="fixed bottom-6 right-6 z-30 hidden md:flex items-center gap-2 border border-brand-dark bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="font-mono text-[9px] font-bold text-brand-dark">STUDIO AKTIF</span>
      </div>
    </div>
  );
}
