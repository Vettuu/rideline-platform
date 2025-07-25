import { FC } from "react";
import Image from "next/image";
import {
  CardHoverReveal,
  CardHoverRevealMain,
  CardHoverRevealContent,
} from "@/components/ui/reveal-on-hover";
import { MapPin, Clock, Mountain } from "lucide-react"

interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
  extraInfo?: {
    destination?: string;
    durata?: string;
    highlights?: string[];
  };
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
}

const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  i,
  src,
  extraInfo,
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
      <CardHoverReveal className="h-[400px] w-[320px] md:h-[600px] md:w-[1100px] rounded-xl shadow-lg">
        <CardHoverRevealMain>
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              className="object-cover"
              src={src}
              alt={title}
              fill
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
              style={{ color: textColor }}
            >
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-md">
                {title}
              </h2>
              <p className="text-base md:text-xl mt-3 max-w-xl drop-shadow-md">
                {description}
              </p>
              <div className="mt-6 z-50">
                <button className="bg-[#204558] text-white px-8 py-4 rounded-full text-lg hover:bg-[#163544] transition font-bold">
                  SCOPRI DI PIÙ
                </button>
              </div>
            </div>
          </div>
        </CardHoverRevealMain>


<CardHoverRevealContent className="w-[90%] max-w-md rounded-xl bg-[#f3f2ee]/40 text-[#204558] backdrop-blur-lg">
  <div className="space-y-4 text-base">
    {extraInfo?.destination && (
      <p className="flex items-start gap-3">
        <MapPin size={26} className="text-[#204558] mt-1" />
        <span className="text-[#204558] text-2xl font-bold">{extraInfo.destination}</span>
      </p>
    )}
    {extraInfo?.durata && (
      <p className="flex items-start gap-3">
        <Clock size={26} className="text-[#204558] mt-1" />
        <span className="text-[#204558] text-2xl font-bold">{extraInfo.durata}</span>
      </p>
    )}
    {extraInfo?.highlights?.length > 0 && (
      <div className="flex items-start gap-3">
        <ul className="list-disc list-inside text-[#204558] text-2xl font-bold">
          {extraInfo.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
</CardHoverRevealContent>

      </CardHoverReveal>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((project, i) => (
        <Card key={`card_${i}`} {...project} i={i} />
      ))}
    </div>
  );
};

export { CardsParallax, type iCardItem };
