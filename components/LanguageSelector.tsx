"use client"
import { useState } from "react"
export default function LanguageSelector() {
    const languages = ["ES", "EN", "PT"]
    const [selectedLanguage, setSelectedLanguage] = useState("EN")


    function selectLanguage(lang: string) {
        console.log("Does nothing for now, selected language:", lang)
        setSelectedLanguage(lang)
    }


    return (
        <div className="flex gap-2 z-50">
            {languages.map((lang) => (
                <button key={lang}
                    className={
                        `
                        text-white 
                        p-2 
                        cursor-pointer 
                        ${selectedLanguage === lang ? "outline outline-white rounded" : ""}
                        hover:text-[#ED1C24]
                        `
                    }
                    onClick={() => selectLanguage(lang)

                    }
                >
                    {lang}
                </button>
            ))}
        </div>
    )
}
