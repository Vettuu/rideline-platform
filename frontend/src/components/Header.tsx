"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MagnetizeButton } from "@/components/ui/magnetize-button"
import Navbar from "@/components/Navbar";
import Link from "next/link";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [currentImage, setCurrentImage] = useState(0);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Chi Siamo", href: "#chi-siamo" },
        { name: "Viaggi", href: "#viaggi" },
    ];

    const images = [
        "/images/mare.JPEG",
        "/images/teide_nuvole.JPEG",
        "/images/tramonto_mare.JPEG",
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // attiva dopo 20px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="relative w-full h-screen overflow-hidden">
            {/* Carosello immagini */}
            <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-[#204558]/70 z-10" />
            </div>

            {/* NAVBAR */}
            {/* Includi Navbar qui */}
            <Navbar />

            {/* Hero Text */}
            {/* Hero Text strutturata in 3 fasce verticali */}
            <div className="relative z-10 h-full w-full flex flex-col text-center text-white">
                {/* Fascia 1 - Titolo allineato in basso */}
                <div className="flex-1 flex items-end justify-center pb-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Organizza il tuo viaggio su misura
                        </h1>
                        <p className="mt-2 text-base sm:text-lg md:text-xl text-[#f3f3ed]">
                            Esperienze uniche. Totale libertà. Scopri il mondo con RideLine.
                        </p>
                    </div>
                </div>

                {/* Fascia 2 - Bottone */}
                <div className="flex-1 flex items-center justify-center">
                    <MagnetizeButton
                        particleCount={13}
                        attractRadius={50}
                        onClick={() => document.getElementById("viaggi")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        SCOPRI LA TUA PROSSIMA AVVENTURA
                    </MagnetizeButton>

                </div>


                {/* Fascia 3 - Vuota */}
                <div className="flex-1" />
            </div>

        </header>
    );
};

export default Header;
