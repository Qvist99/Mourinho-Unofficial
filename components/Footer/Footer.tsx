import FooterTextContent from "./FooterTextContent"
import FooterLinks from "./FooterLinks"
import SocialsWidget from "../SocialsWidget"
import Section from "../Section"
export default function Footer() {
    return (
        <Section id="footer" variant="shell" className="min-h-[250px] bg-[#392323] flex justify-between items-center">
            <div className="flex flex-col gap-5 w-[60%] ms:w-full">
                <FooterTextContent />
                <FooterLinks />
            </div>
            <div>
                <SocialsWidget />
            </div>
        </Section>
    )
}
