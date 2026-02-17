"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Education() {
    const { education } = PORTFOLIO_DATA;

    return (
        <section id="education" className="py-12 md:py-16 px-6 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
                <h2
                    className="text-2xl md:text-3xl font-normal mb-8"
                    style={{ fontFamily: "var(--font-instrument)", color: "var(--fg)" }}
                >
                    Education #
                </h2>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1"
                        >
                            <div>
                                <h3
                                    className="text-base font-normal"
                                    style={{ fontFamily: "var(--font-geist)", color: "var(--fg)" }}
                                >
                                    {edu.degree}
                                </h3>
                                <p
                                    className="text-sm mt-0.5"
                                    style={{ fontFamily: "var(--font-roboto)", color: "var(--fg-muted)" }}
                                >
                                    {edu.institution}
                                </p>
                            </div>
                            <div
                                className="flex items-center gap-3 text-xs flex-shrink-0"
                                style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                            >
                                <span>{edu.period}</span>
                                {edu.score && (
                                    <>
                                        <span>·</span>
                                        <span style={{ color: "var(--fg-secondary)" }}>{edu.score}</span>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
