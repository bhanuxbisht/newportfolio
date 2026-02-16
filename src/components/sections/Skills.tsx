"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Skills() {
    const { skills } = PORTFOLIO_DATA;

    return (
        <section id="skills" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2
                    className="text-3xl md:text-4xl text-white mb-8"
                    style={{ fontFamily: "var(--font-instrument)" }}
                >
                    Skills #
                </h2>

                <div className="space-y-6">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.08 }}
                        >
                            <h3
                                className="text-xs uppercase tracking-widest text-neutral-500 mb-3"
                                style={{ fontFamily: "var(--font-geist)" }}
                            >
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm text-neutral-300 border border-dashed border-neutral-700 rounded-md hover:border-neutral-400 hover:text-white transition-all duration-300 cursor-default"
                                        style={{ fontFamily: "var(--font-geist)" }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
