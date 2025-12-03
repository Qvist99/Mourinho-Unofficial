import Link from "next/link"
import LanguageSelector from "./LanguageSelector"
export default function Navbar() {
    return (
        <nav className="px-10 bg-transparent absolute py-4 flex justify-between items-center w-full z-50">
            <div>
                <Link href="/">
                    <img src="/JoseMourinhoSignature.svg" alt="José Mourinho Signature" className="h-30" />
                </Link>

            </div>
            <div>
                <LanguageSelector />
            </div>
        </nav>
    )
}
