import HeroTextContent from "./HeroTextContent"
import HeroFooter from "./HeroFooter"
import Section from "../Section"
import { Parallax } from "react-scroll-parallax"
export default function HeroSection() {
    return (
        <Section
            variant="hero"
            id="hero"
            className="
            relative
            flex 
            justify-center 
            items-center 
            min-h-screen 
            "
        >

            <img
                src="/JoseHero.jpg"
                className="
            absolute inset-0
            w-full h-full
            object-cover
            object-[10%_60%]
        "
                alt=""
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40" ></div>


            {/* Content */}
            <div className="
                flex 
                flex-col 
                justify-center 
                items-center 
                z-30 
                w-full 
                min-h-screen 
            "
            >
                <Parallax speed={-10}>
                    <HeroTextContent />
                </Parallax>
                <HeroFooter />
            </div>

        </Section>
    )
}

