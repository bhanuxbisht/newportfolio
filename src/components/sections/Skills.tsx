"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

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

    return (
        <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`}
            alt=""
            className="w-3.5 h-3.5 flex-shrink-0"
            loading="lazy"
            onError={(e) => {
                // Fallback: try plain variant
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                    target.dataset.fallback = "1";
                    target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-plain.svg`;
                } else {
                    target.style.display = "none";
                }
            }}
        />
    );
}

export default function Skills() {
    const { skills } = PORTFOLIO_DATA;

    return (
        <section id="skills" className="py-12 md:py-16">
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
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.04 + i * 0.02, duration: 0.3 }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-dashed transition-all duration-200 cursor-pointer hover:scale-[1.04]"
                                        style={{
                                            fontFamily: "var(--font-geist)",
                                            color: "var(--fg-secondary)",
                                            borderColor: "var(--tag-border)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "var(--fg)";
                                            e.currentTarget.style.borderColor = "var(--border-hover)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "var(--fg-secondary)";
                                            e.currentTarget.style.borderColor = "var(--tag-border)";
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
