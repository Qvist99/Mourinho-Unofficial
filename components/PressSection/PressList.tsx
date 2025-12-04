import PressItem from "./PressItem";
export default function PressList() {

    const pressItems = [
        {
            publication: "The Guardian",
            title: "José Mourinho confirmed as Benfica manager and faces swift Chelsea return",
            publicationSvgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/The_Guardian_2018.svg",
            date: "2025-09-18"
        },
        {
            publication: "Vanguard",
            title: "José Mourinho returns to Portugal as Benfica manager",
            publicationSvgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/81/Vanguard.svg",
            date: "2025-09-18"
        },
        {
            publication: "ESPN",
            title: "José Mourinho named Benfica coach three weeks after Fenerbahçe exit",
            publicationSvgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg",
            date: "2025-09-18"
        }
    ];



    return (
        <div className="mt-12">
            {pressItems.map((item, index) => (
                <PressItem
                    key={index}
                    item={item}
                />
            ))}

            <div className="
                flex
                justify-between
                sm:justify-start
                sm:gap-2 
                mt-6
            ">
                <button className="bg-[#efedea] py-2 px-4 font-bold rounded-md cursor-pointer hover:bg-[#ed1c24] hover:text-white transition-all duration-300">Load More</button>
                <button className="bg-[#efedea] py-2 px-4 font-bold rounded-md cursor-pointer hover:bg-[#ed1c24] hover:text-white transition-all duration-300">View All</button>
            </div>

        </div>
    )
}
