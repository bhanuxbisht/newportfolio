"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const { education } = PORTFOLIO_DATA;

    return (
        <section id="education" className="py-10">
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
                    Education #
                </h2>

                <div className="relative ml-4 border-l border-neutral-800 pl-8 space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-black border-2 border-neutral-500" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
                                <div>
                                    <h3 className="text-base md:text-lg text-white font-medium">
                                        {edu.degree}
                                    </h3>
                                    <p
                                        className="text-sm text-neutral-500"
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                    >
                                        {edu.institution}
                                    </p>
                                </div>

                                <div
                                    className="flex items-center gap-3 text-xs text-neutral-600 flex-shrink-0"
                                    style={{ fontFamily: "var(--font-geist)" }}
                                >
                                    <span>{edu.period}</span>
                                    {edu.score && (
                                        <>
                                            <span className="text-neutral-700">•</span>
                                            <span className="text-neutral-400">{edu.score}</span>
                                        </>
                                    )}
                                    {edu.status && (
                                        <span
                                            className={`px-2 py-0.5 rounded text-xs ${edu.status === "Pursuing"
                                                    ? "text-emerald-400 border border-emerald-800/50"
                                                    : "text-neutral-500 border border-neutral-800"
                                                }`}
                                        >
                                            {edu.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
