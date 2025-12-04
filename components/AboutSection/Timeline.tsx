"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { timelineItems } from "@/lib/timelineItems"
import { useWindowWidth } from "@/lib/useWindowWidth"
import { motion } from "motion/react"

export default function Timeline() {
    const width = useWindowWidth();

    const itemsPerView = width && width < 640 ? 1 : width && width < 768 ? 2 : width && width < 1024 ? 3 : 4;

    const slideWidth = 100 / itemsPerView;

    // Maximum timeline items shown at once
    const maxIndex = timelineItems.length - itemsPerView;

    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrev() {
        console.log("prev clicked");
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    }

    function handleNext() {
        if (currentIndex >= maxIndex) return;
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "backOut" }}

            className="overflow-x-hidden relative w-full">
            {/* Control buttons */}
            <div className="absolute flex gap-2 z-50 top-8">
                <button
                    className="h-9 w-9 bg-[#B1B0AF] hover:bg-[#9B9893] rounded-md flex items-center justify-center cursor-pointer ease-in-out duration-300 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-[#B1B0AF]"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    className="h-9 w-9 bg-[#B1B0AF] hover:bg-[#9B9893] rounded-md flex items-center justify-center cursor-pointer ease-in-out duration-300 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-[#B1B0AF]"
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            <div className="flex overflow-y-visible transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}>
                {timelineItems.map((item, index) => (

                    <div key={index} className={`group flex flex-col items-center`} style={{ flex: `0 0 calc(100% / ${itemsPerView})`, maxWidth: `calc(100% / ${itemsPerView})` }}
                    >

                        {/* Time frame text */}
                        <span className="mb-6 text-center font-semibold text-sm">
                            <p>

                                {item.timeFrame}
                            </p>
                        </span>

                        {/* Timeline container */}
                        <div className="relative w-full flex justify-center items-center mb-6">

                            {/* line */}
                            <div
                                className="absolute left-0 right-0 h-1.5 bg-[#ED1C24]"
                                style={{
                                    left: index === 0 ? '50%' : 0,
                                    right: index === timelineItems.length - 1 ? "50%" : 0
                                }}
                            >

                            </div>

                            {/* Dot */}
                            <div className="relative z-10 w-3 h-3 rounded-full bg-[#ED1C24]"></div>

                        </div>

                        {/* The card content */}
                        <div className="relative group-hover:bg-[#F2F2F2] rounded-md px-[15px] py-1 w-full">
                            {/* upwards indicator */}
                            <div className="absolute bg-[#F2F2F2] w-4.5 h-4.5 transform -translate-1/2 rotate-45 left-1/2 opacity-0 group-hover:opacity-100"></div>

                            <div>
                                <img src={item.teamSvgUrl} alt={item.teamName} className="w-20 h-20 object-contain" />
                                <h3 className="text-xl font-bold mt-4 mb-2">{item.teamName}</h3>
                                <div className="flex flex-col gap-2 mb-4">
                                    {item.infotexts.map((text, idx) => (
                                        <div key={idx} className="text-sm text-[#54595F] ">
                                            <p>

                                                {text.split('(')[0]}
                                            </p>
                                            {text.includes('(') && (
                                                <p className="font-mono">({text.split('(')[1]}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </motion.div>

    )
}
