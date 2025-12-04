import Quote from "./Quote"
import TrophyDisplay from "./TrophyDisplay"
import Section from "../Section"
export default function TitlesSection() {
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
            <TrophyDisplay />
        </Section>
    )
}
