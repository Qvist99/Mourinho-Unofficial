"use client"

import { useState, useEffect } from "react"

export function useWindowWidth() {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setWidth(window.innerWidth);
        handleResize(); // initialize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}