// src/app/page.tsx
import Header from "@/components/Header";
 import ChiSiamoSection from "@/components/ChiSiamoSection";
 import IntroViaggi from "@/components/IntroViaggi";
 import Viaggi from "@/components/Viaggi";
 import RichiestaViaggio from "@/components/RichiestaViaggio";
 import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full bg-white text-gray-900">
      {/* Hero/Header iniziale con navbar */}
      <Header />

      {/* Sezione "Chi siamo / cosa facciamo / come facciamo" */}
      <section
        id="chi-siamo"
        className="px-4 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto"
      >
        <ChiSiamoSection />
      </section>

      {/* Sezione "Intro viaggi" */}
      <section
        id="intro-viaggi"
        className="py-12 sm:py-16 lg:py-20"
      >
        <IntroViaggi />
      </section>

      {/* Sezione "Proposte di viaggio" */}
      <section
        id="viaggi"
        className="px-4 py-12 sm:py-16"
      >
        <Viaggi />
      </section>

      {/* Sezione "Form di richiesta viaggio iniziale" */}
      <section
        id="RichiestaViaggio"
        className="px-4 py-12 sm:py-16"
      >
        <RichiestaViaggio />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
