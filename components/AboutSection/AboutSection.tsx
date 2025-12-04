import AboutTextContent from "./AboutTextContent"
import Timeline from "./Timeline"
export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col gap-20 bg-[#efedea] text-black px-80 py-20 min-h-[1000px]">
            <AboutTextContent />
            <Timeline />
        </section>
    )
}
