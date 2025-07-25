// app/(main)/viaggi.tsx
"use client";

import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const cardItems: iCardItem[] = [
  {
    title: "TENERIFE AUTENTICA",
    description: "Tra mare e montagna, un viaggio pensato su misura per scoprire l'isola.",
    tag: "tenerife",
    src: "/images/viaggi/tenerife.JPEG",
    link: "#",
    color: "#204558",
    textColor: "white",
    extraInfo: {
        destination: "Cortina d'Ampezzo",
        durata: "3 giorni",
        highlights: ["Escursioni", "Wellness Spa", "Cucina tipica"]
      }
  },
  {
    title: "OVINDOLI IN PISTA",
    description: "Impara in gruppo ,sfreccia giu per la montagna, festeggia in pista.",
    tag: "natura",
    src: "/images/viaggi/ovindoli.JPEG",
    link: "#",
    color: "#6da4be",
    textColor: "#204558",
    extraInfo: {
        destination: "Cortina d'Ampezzo",
        durata: "3 giorni",
        highlights: ["Escursioni", "Wellness Spa", "Cucina tipica"]
      }
  },
  {
    title: "SKIATHOS NASCOSTA",
    description: "Borghi autentici, cibo vero e ritmi lenti: scopri il sud come non l’hai mai visto.",
    tag: "esperienziale",
    src: "/images/viaggi/skhiatos.jpeg",
    link: "#",
    color: "#f3f3ed",
    textColor: "#131516ff",
    extraInfo: {
        destination: "Cortina d'Ampezzo",
        durata: "3 giorni",
        highlights: ["Escursioni", "Wellness Spa", "Cucina tipica"]
      }
  },
];

export default function Viaggi() {
  return (
    <section className="w-full">
      <CardsParallax items={cardItems} />
    </section>
  );
}
