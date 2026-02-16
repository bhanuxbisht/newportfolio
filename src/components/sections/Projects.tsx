"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <section id="projects" className="py-10">
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
                    Projects #
                </h2>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-neutral-800 rounded-lg p-5 md:p-6 hover:border-neutral-600 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-5">
                                {/* Thumbnail */}
                                {project.thumbnail && (
                                    <div className="w-full md:w-48 h-32 md:h-28 rounded-md overflow-hidden flex-shrink-0 bg-neutral-900">
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            width={192}
                                            height={112}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                )}

                                <div className="flex-1">
                                    {/* Title Row */}
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-lg md:text-xl text-white font-medium group-hover:text-yellow-200 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <span
                                                className="text-xs text-neutral-500"
                                                style={{ fontFamily: "var(--font-geist)" }}
                                            >
                                                {project.date}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="text-sm text-neutral-500 leading-relaxed mb-3 line-clamp-2"
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.techStack.slice(0, 6).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-0.5 text-neutral-500 border border-neutral-800 rounded"
                                                style={{ fontFamily: "var(--font-geist)" }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 6 && (
                                            <span
                                                className="text-xs px-2 py-0.5 text-neutral-600"
                                                style={{ fontFamily: "var(--font-geist)" }}
                                            >
                                                +{project.techStack.length - 6} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                                                style={{ fontFamily: "var(--font-geist)" }}
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Source
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                                                style={{ fontFamily: "var(--font-geist)" }}
                                            >
                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                                Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
