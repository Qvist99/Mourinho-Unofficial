import Instagram from "./SocialSvgs/Instagram";
import Twitter from "./SocialSvgs/Twitter";
import Facebook from "./SocialSvgs/Facebook";
export default function SocialsWidget() {
    const instagramUrl = "https://www.instagram.com/josemourinho/";
    const twitterUrl = "/";
    const facebookUrl = "/";
    return (
        <div className="flex gap-4 h-6">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-6 hover:opacity-70">
                <Instagram />
            </a>
            <a href={twitterUrl} target="" rel="noopener noreferrer" className="w-6 hover:opacity-70">
                <Twitter />
            </a>
            <a href={facebookUrl} target="" rel="noopener noreferrer" className="w-6 hover:opacity-70">
                <Facebook />
            </a>
        </div>
    )
}
