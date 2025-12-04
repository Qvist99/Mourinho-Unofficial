import PressTextContent from "./PressTextContent"
import PressList from "./PressList"
import Section from "../Section"
export default function PressSection() {
    return (
        <Section id="press" className="text-black min-h-[450px]">
            <PressTextContent />
            <PressList />
        </Section>
    )
}
