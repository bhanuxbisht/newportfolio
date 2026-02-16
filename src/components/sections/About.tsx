"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
    const { personal } = PORTFOLIO_DATA;

    return (
        <section id="about" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2
                    className="text-3xl md:text-4xl text-white mb-6"
                    style={{ fontFamily: "var(--font-instrument)" }}
                >
                    About #
                </h2>

                <p
                    className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-3xl"
                    style={{ fontFamily: "var(--font-roboto)" }}
                >
                    I am{" "}
                    <strong className="text-white font-medium">{personal.name}</strong>,{" "}
                    {personal.about}
                </p>

                {/* Stats */}
                <div className="flex gap-8 mt-8">
                    {personal.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="flex flex-col"
                        >
                            <span
                                className="text-3xl md:text-4xl text-white font-bold"
                                style={{ fontFamily: "var(--font-instrument)" }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-xs text-neutral-500 uppercase tracking-wider mt-1"
                                style={{ fontFamily: "var(--font-geist)" }}
                            >
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
