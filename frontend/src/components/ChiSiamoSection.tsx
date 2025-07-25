"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "chi-siamo",
    title: "CHI SIAMO?",
    text: "RideLine è un gruppo di viaggiatori appassionati che crede nel viaggio su misura come strumento di libertà, scoperta e connessione autentica.",
    image: "/images/chi_siamo.JPEG",
    imageLeft: true,
  },
  {
    id: "cosa-facciamo",
    title: "COSA FACCIAMO?",
    text: "Organizziamo viaggi completamente personalizzati. Nessun pacchetto preconfezionato, solo esperienze pensate su misura per te.",
    image: "/images/cosa_facciamo.JPEG",
    imageLeft: false,
  },
  {
    id: "come",
    title: "COME?",
    text: "Ascoltiamo, progettiamo insieme, ti accompagniamo. Dalla tua prima idea fino all’ultimo giorno del viaggio, siamo al tuo fianco.",
    image: "/images/come_facciamo.JPEG",
    imageLeft: true,
  },
];

export default function ChiSiamoSection() {
  return (
    <section className="text-[#204558] w-full py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {sections.map((section) => {
          const isLeft = section.imageLeft;
          const directionX = isLeft ? -60 : 60;
          const translateX = section.id === "chi-siamo" || section.id === "come" ? "md:-translate-x-64" : "md:translate-x-64";

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: directionX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`bg-[#d6dce2]/70 flex flex-col md:flex-row ${!isLeft ? "md:flex-row-reverse" : ""}
                rounded-3xl shadow-lg overflow-hidden min-h-[450px] transition-all duration-300 ${translateX}`}
            >
              {/* Immagine */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Testo */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-base sm:text-lg text-[#204558]/90 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
