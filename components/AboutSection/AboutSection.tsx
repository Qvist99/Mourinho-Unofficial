import AboutTextContent from "./AboutTextContent"
import Timeline from "./Timeline"
import Section from "../Section"
export default function AboutSection() {
    return (
        <Section id="about" className="flex flex-col gap-20 bg-[#efedea] text-black min-h-[1000px]">
            <AboutTextContent />
            <Timeline />
        </Section>
    )
}
