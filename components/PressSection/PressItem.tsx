
export default function PressItem({ item }: { item: { publication: string; title: string; publicationSvgUrl: string; date: string } }) {
    return (
        <div className="w-full border-t-3 border-gray-300 py-6 flex flex-row items-center gap-6 justify-between">
            <div className="flex flex-col max-w-[70%]">
                <p className="text-[#ed1c24]">{item.publication}</p>
                <h2 className="text-2xl font-semibold hover:opacity-75 cursor-pointer">{item.title}</h2>
                <span className="text-gray-500">{item.date}</span>
            </div>

            <div className="min-w-[30%] items-center flex justify-center">
                <img src={item.publicationSvgUrl} alt={item.publication} className="h-12 w-auto object-contain" />
            </div>
        </div>
    )
}
