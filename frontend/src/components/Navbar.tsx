import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Stato per il controllo iniziale
  const [isClient, setIsClient] = useState(false); // Stato per controllare se siamo nel client
  const [pathname, setPathname] = useState(''); // Stato per la pathname

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Chi Siamo", href: "/#chi-siamo" },
    { name: "Viaggi", href: "/#viaggi" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Effetto di scroll per cambiare il colore della navbar
  useEffect(() => {
    // Verifica se siamo nel client
    if (typeof window !== "undefined") {
      setIsClient(true); // Impostiamo lo stato su true per far sapere che siamo nel client
    }

    // Verifica immediatamente se la pagina ha uno scroll
    const checkScroll = () => {
      setHasScroll(document.documentElement.scrollHeight > window.innerHeight);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Attiva dopo 20px di scroll
    };

    // Verifica se la pagina ha uno scroll
    checkScroll();

    // Aggiungi l'event listener per lo scroll
    window.addEventListener("scroll", handleScroll);

    // Simula un "primo caricamento" per ritardare l'effetto di transizione
    if (initialLoad) {
      setTimeout(() => setInitialLoad(false), 100); // Impedisce il flash durante il primo render
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [initialLoad]);

  // Effetto per impostare la pathname solo se siamo nel client
  useEffect(() => {
    if (isClient) {
      const { pathname } = window.location; // Ottieni la pathname dal client
      setPathname(pathname);
    }
  }, [isClient]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScroll
          ? scrolled
            ? "bg-[#204558]/60 backdrop-blur-md shadow-md" // Quando scrollato
            : "bg-transparent" // Quando non c'è scroll
          : "bg-[#204558]/80" // Se non c'è scroll (sfondo fisso)
      } ${initialLoad ? "bg-transparent" : ""}`} // Non mostrare colore inizialmente
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 sm:px-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/rideline_logo.jpg"
            alt="RideLine logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-[#f3f3ed] text-xl font-bold tracking-wide">
            RideLine
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#f3f3ed] hover:text-[#6da4be] transition-colors duration-200 text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login (desktop) */}
        {pathname !== "/login" && ( // Se NON siamo nella pagina di login
          <Link href="/login">
            <button className="bg-[#f3f3ed] text-[#204558] px-5 py-2 rounded-full font-semibold hover:bg-[#d6dce2] transition duration-200">
              Login
            </button>
          </Link>
        )}

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f3f3ed] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#204558] bg-opacity-90 rounded-lg px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-[#f3f3ed] hover:text-[#c0d2db] text-base"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {pathname !== "/login" && ( // Se NON siamo nella pagina di login
            <Link href="/login">
              <button className="w-full bg-[#f3f3ed] text-[#204558] px-5 py-2 rounded-full font-semibold hover:bg-[#d6dce2] transition duration-200">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
