import HeroTextContent from "./HeroTextContent"
import HeroFooter from "./HeroFooter"
import Section from "../Section"
export default function HeroSection() {
    return (
        <Section
            variant="hero"
            id="hero"
            className="
            flex 
            justify-center 
            items-center 
            min-h-screen 
            bg-position-[10%_60%] 
            bg-no-repeat bg-cover
            "
            style={{ backgroundImage: 'url(/JoseHero.jpg)' }}
        >
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
                <HeroTextContent />
                <HeroFooter />
            </div>

        </Section>
    )
}

