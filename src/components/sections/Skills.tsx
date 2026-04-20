"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/* ── Icon mapping: skill name → devicon slug ── */
const SKILL_ICONS: Record<string, string> = {
    // Languages
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Python": "python",
    "C++": "cplusplus",
    "C": "c",
    "Java": "java",

    // Frontend
    "React/Next.js": "react",
    "Tailwind CSS": "tailwindcss",

    // Backend
    "Node.js": "nodejs",
    "FastAPI": "fastapi",
    "PostgreSQL": "postgresql",
    "SQL": "azuresqldatabase",
    "Flask": "flask",

    // DevOps
    "Docker": "docker",
    "Git": "git",
    "GitHub": "github",
    "AWS": "amazonwebservices",
    "Vercel": "vercel",

    // AI/ML
    "Pandas": "pandas",
    "NumPy": "numpy",
    "Scikit-learn": "scikitlearn",
    "Computer Vision": "opencv",

    // CS Fundamentals (no official devicons for these, so no entry)
};

function SkillIcon({ skill }: { skill: string }) {
    const slug = SKILL_ICONS[skill];
    if (!slug) return null;

    const originalSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
    const fallbackSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-plain.svg`;

    return (
        <Image
            src={originalSrc}
            alt={`${skill} icon`}
            width={14}
            height={14}
            className="w-3.5 h-3.5 shrink-0"
            loading="lazy"
            unoptimized
            onError={(event) => {
                const target = event.currentTarget;
                if (target.dataset.fallback !== "1") {
                    target.dataset.fallback = "1";
                    target.src = fallbackSrc;
                } else {
                    target.style.display = "none";
                }
            }}
        />
    );
}

export default function Skills() {
    const { skills } = PORTFOLIO_DATA;
    const skillTimeline = useMemo(() => Object.values(skills).flat(), [skills]);
    const [activeSkillIndex, setActiveSkillIndex] = useState(0);

    useEffect(() => {
        if (!skillTimeline.length) return;

        const intervalId = window.setInterval(() => {
            setActiveSkillIndex((prev) => (prev + 1) % skillTimeline.length);
        }, 950);

        return () => window.clearInterval(intervalId);
    }, [skillTimeline]);

    return (
        <section id="skills" className="py-12 md:py-16 px-6 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
                <h2
                    className="text-2xl md:text-3xl font-normal mb-10"
                    style={{ fontFamily: "var(--font-instrument)", color: "var(--fg)" }}
                >
                    Skills #
                </h2>

                <div className="space-y-8">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.06, duration: 0.4 }}
                        >
                            {/* Category Label */}
                            <h3
                                className="text-xs uppercase tracking-widest mb-4"
                                style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                            >
                                {category}
                            </h3>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-2.5">
                                {items.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.04 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.04 + i * 0.02, duration: 0.3 }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-dashed transition-all duration-200 cursor-pointer"
                                        style={{
                                            fontFamily: "var(--font-geist)",
                                            color: skillTimeline[activeSkillIndex] === skill ? "var(--fg)" : "var(--fg-secondary)",
                                            borderColor: skillTimeline[activeSkillIndex] === skill ? "#2563eb" : "var(--tag-border)",
                                            backgroundColor: skillTimeline[activeSkillIndex] === skill ? "rgba(37, 99, 235, 0.18)" : "transparent",
                                        }}
                                    >
                                        <SkillIcon skill={skill} />
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
