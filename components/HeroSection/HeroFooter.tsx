import SocialsWidget from "../SocialsWidget"


export default function HeroFooter() {
    return (
        <div className="
        absolute 
        bottom-0 
        w-full
        px-shell 
        py-shell
        flex 
        justify-between 
        items-end z-50"
        >
            <img
                src="/SL_Benfica_logo.svg"
                alt="SL Benfica Logo"
                className="h-30"
            />

            <div className="pb-2">
                <SocialsWidget />
            </div>
        </div>
    )
}
