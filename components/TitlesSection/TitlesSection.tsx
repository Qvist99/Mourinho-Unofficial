import Quote from "./Quote"
import TrophyDisplay from "./TrophyDisplay"
import Section from "../Section"
import { Parallax } from "react-scroll-parallax"

import { useState, useEffect } from "react"

export default function TitlesSection() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        }

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return (
        <Section
            id="titles"
            className="
            min-h-[700px] 
            bg-[#2A2A2A] 
            flex
            flex-col
            sm:flex-row
            justify-between 
            items-center
            gap-12
            "
        >

            <Quote />


            <Parallax speed={-10} disabled={isSmallScreen}>
                <TrophyDisplay />
            </Parallax>

        </Section>
    )
}
