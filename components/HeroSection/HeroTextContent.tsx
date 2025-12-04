
export default function HeroTextContent() {
    return (
        <div className="
            flex 
            flex-col 
            leading-none sm:leading-13 md:leading-17 lg:leading-19 xl:leading-20
        "
        >
            <span className="
            text-[#FFD400] 
            text-[2rem] md:text-[2.5rem]
            xl:text-[2.5rem]
            "
            >
                JOSÉ
            </span>
            <span className="
                outlined-text 
                font-bold 
                -ml-0.5 sm:-ml-1 xl:-ml-1.75
                text-shadow-[0_0_100px_rgba(0,0,0,0.4)]
                text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.2rem]
            "
            >
                MOURINHO
            </span>

            <div className="text-right mr-2 ">
                <span className="
                    text-white
                    font-bold sm:font-normal
                    text-[1rem]
                    sm:text-[1.25rem]
                "
                >
                    THE SPECIAL ONE
                </span>
            </div>
        </div>
    )
}
