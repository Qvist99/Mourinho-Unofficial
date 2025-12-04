import ChampionsLeague from "../TrophySvgs/ChampionsLeague"
import EuropaLeague from "../TrophySvgs/EuropaLeague"
import ConfrenceLeague from "../TrophySvgs/ConfrenceLeague"
import Placeholder from "../TrophySvgs/Placeholder"
import TrophyItem from "./TrophyItem"
export default function TrophyDisplay() {

    /* WE USE PLACEHOLDER FOR MAJORITY BECAUSE NO GOOD FREE SVGS OUR THERE FOR MOST LEAGUES :)))))))))))))))) */
    const trophies = [
        {
            text: "2X CHAMPIONS LEAGUE WINNER",
            icon: <ChampionsLeague />
        },
        {
            text: "1x EUROPA LEAGUE WINNER",
            icon: <EuropaLeague />
        },
        {
            text: "1x CONFERENCE LEAGUE WINNER",
            icon: <ConfrenceLeague />
        },
        {
            text: "3x ENGLISH CHAMPION",
            icon: <Placeholder />
        },
        {
            text: "1x SPANISH CHAMPION",
            icon: <Placeholder />
        },
        {
            text: "2x ITALIAN CHAMPION",
            icon: <Placeholder />
        },

    ]



    return (
        <div className="
        flex 
        flex-col 
        items-start 
        gap-5 
        sm:w-1/3
        "
        >

            {trophies.map((trophy, index) => (
                <TrophyItem key={index} text={trophy.text}>
                    {trophy.icon}
                </TrophyItem>
            ))}

        </div>
    )
}
