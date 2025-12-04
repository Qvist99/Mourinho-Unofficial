import PressTextContent from "./PressTextContent"
import PressList from "./PressList"
export default function PressSection() {
    return (
        <section id="press" className="px-80 py-20 text-black min-h-[450px]">
            <PressTextContent />
            <PressList />
        </section>
    )
}
