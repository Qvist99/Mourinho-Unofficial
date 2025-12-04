import FooterTextContent from "./FooterTextContent"
import FooterLinks from "./FooterLinks"
import SocialsWidget from "../SocialsWidget"
export default function Footer() {
    return (
        <section id="footer" className="min-h-[250px] bg-[#392323] px-10 py-20 flex justify-between items-center">
            <div className="flex flex-col gap-5">
                <FooterTextContent />
                <FooterLinks />
            </div>
            <div>
                <SocialsWidget />
            </div>
        </section>
    )
}
