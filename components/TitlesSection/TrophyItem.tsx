
export default function TrophyItem({ children, text }: { children: React.ReactNode, text: string }) {
    return (
        <div className="flex gap-4 items-center justify-end">
            <div className="w-6">
                {children}
            </div>
            <p>{text}</p>
        </div>
    )
}
