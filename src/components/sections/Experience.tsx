"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
    const { experience } = PORTFOLIO_DATA;

    return (
        <section id="experience" className="py-12 md:py-16 px-6 md:px-8">
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
                    Experience #
                </h2>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                                <div>
                                    <h3
                                        className="text-base font-normal"
                                        style={{ fontFamily: "var(--font-geist)", color: "var(--fg)" }}
                                    >
                                        {exp.role}
                                    </h3>
                                    <p
                                        className="text-sm mt-0.5"
                                        style={{ fontFamily: "var(--font-roboto)", color: "var(--fg-muted)" }}
                                    >
                                        {exp.company}
                                        {exp.location && ` · ${exp.location}`}
                                    </p>
                                </div>
                                <span
                                    className="text-xs flex-shrink-0"
                                    style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                                >
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="space-y-1 ml-0">
                                {exp.description.map((desc, i) => (
                                    <li
                                        key={i}
                                        className="text-sm leading-relaxed"
                                        style={{ fontFamily: "var(--font-roboto)", color: "var(--fg-secondary)" }}
                                    >
                                        — {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
