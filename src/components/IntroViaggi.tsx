"use client";

import Image from "next/image";
import React from "react";

export default function IntroViaggi() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[50vh] overflow-hidden">
      {/* Immagine di sfondo */}
      <Image
        src="/images/intro_montagna.JPEG" // Puoi sostituire con un'immagine panoramica suggestiva
        alt="Panorama di viaggio"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#f3f3ed]/50 to-[#f3f3ed]" />

      

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-[#204558]/20 flex items-center justify-center">
        <div className="text-center px-4 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            VIAGGI IN CUI TI ACCOMPAGNEREMO
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            Parti per un’avventura su misura. Scopri le esperienze uniche che possiamo creare per te, ovunque tu voglia andare.
          </p>
        </div>
      </div>
    </section>
  );
}
