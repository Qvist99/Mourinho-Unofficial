import { motion } from "motion/react"
export default function Quote() {
    return (
        <div className="
        max-w-[500px] 
        sm:w-1/2
        "
        >
            <div className="w-full block h-14 -ml-4 leading-22">
                <i className="text-[#ED1C24] text-[100px] ">"</i>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center sm:text-left">
                <p className="text-3xl leading-none">
                    You win by effort, by commitment, by ambition, by quality, by expressing yourself individually but in the team context."
                </p>
            </motion.div>

        </div>
    )
}
