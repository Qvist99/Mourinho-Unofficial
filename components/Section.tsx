type SectionVariant = "default" | "hero" | "shell"


interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    variant?: SectionVariant;
    style?: React.CSSProperties;
}




export default function Section({ children, id, className = "", variant = "default", style }: SectionProps) {
    const paddingMap: Record<SectionVariant, string> = {
        default: "px-section py-section",
        hero: "px-hero py-hero",
        shell: "px-shell py-shell",
    };

    return (
        <section
            id={id}
            className={`
                ${paddingMap[variant]}
                ${className} 
                `}
            style={style}
        >
            {children}

        </section>
    )
}
