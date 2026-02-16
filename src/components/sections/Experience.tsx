"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const { experience } = PORTFOLIO_DATA;

    return (
        <section id="experience" className="py-10">
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
                    Experience #
                </h2>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-neutral-800 rounded-lg p-5 md:p-6 hover:border-neutral-600 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-lg text-white font-medium flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-neutral-500" />
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-neutral-500" style={{ fontFamily: "var(--font-roboto)" }}>
                                        {exp.company}
                                        {exp.location && ` · ${exp.location}`}
                                    </p>
                                </div>
                                <span
                                    className="text-xs px-2 py-0.5 border border-dashed border-neutral-700 text-neutral-500 rounded flex-shrink-0"
                                    style={{ fontFamily: "var(--font-geist)" }}
                                >
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-2 ml-6">
                                {exp.description.map((desc, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-neutral-400 relative before:content-['›'] before:absolute before:-left-4 before:text-neutral-600"
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                    >
                                        {desc}
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
