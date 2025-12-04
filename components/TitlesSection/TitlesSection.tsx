import Quote from "./Quote"
import TrophyDisplay from "./TrophyDisplay"
export default function TitlesSection() {
    return (
        <section
            id="titles"
            className="min-h-[700px] bg-[#2A2A2A] px-80 flex justify-between py-20 items-center "
        >
            <Quote />
            <TrophyDisplay />
        </section>
    )
}
