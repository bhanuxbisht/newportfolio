"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <section id="projects" className="py-12 md:py-16 px-6 md:px-8">
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
                    Projects #
                </h2>

                <div className="space-y-1">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.liveUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="group flex items-center justify-between py-4 px-2 -mx-2 rounded-md transition-all duration-200 cursor-pointer"
                            style={{ color: "var(--fg)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--card-hover)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <ChevronRight
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    style={{ color: "var(--fg-muted)" }}
                                />
                                <span
                                    className="text-base font-normal"
                                    style={{ fontFamily: "var(--font-geist)" }}
                                >
                                    {project.title}
                                </span>
                            </div>
                            <ArrowUpRight
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                style={{ color: "var(--fg-muted)" }}
                            />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
