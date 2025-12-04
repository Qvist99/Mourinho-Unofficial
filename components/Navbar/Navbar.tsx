"use client"
import Link from "next/link"
import LanguageSelector from "./LanguageSelector"

import { useState, useEffect } from "react"
import Section from "../Section"

export default function Navbar() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <Section variant="shell" className={`
                flex justify-between items-center bg-linear-to-b from-[rgba(0,0,0,0.23)] to-[rgba(0,0,0,0)] w-full z-50
                transition-all duration-300
                ${isSticky ? "fixed top-0" : "absolute top-0"}
            `}
        >
            <div>
                <Link href="#hero">
                    <img src="/JoseMourinhoSignature.svg" alt="José Mourinho Signature" className="h-30" />
                </Link>

            </div>
            <div>
                <LanguageSelector />
            </div>
        </Section>
    )
}
