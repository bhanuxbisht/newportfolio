"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, Linkedin, Code2, Download, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Hero() {
    const { personal, socials } = PORTFOLIO_DATA;
    const easeCurve = [0.25, 0.4, 0.25, 1] as const;
    const primaryRole = personal.role.split("•")[0]?.trim() || personal.role;
    const roleHighlights = useMemo(
        () => (personal.highlightRoles?.length ? personal.highlightRoles : [personal.role]),
        [personal.highlightRoles, personal.role],
    );
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);

    useEffect(() => {
        if (roleHighlights.length <= 1) return;

        const intervalId = window.setInterval(() => {
            setActiveRoleIndex((prev) => (prev + 1) % roleHighlights.length);
        }, 2200);

        return () => window.clearInterval(intervalId);
    }, [roleHighlights]);

    const getIcon = (platform: string) => {
        switch (platform) {
            case "GitHub": return <Github className="w-4.5 h-4.5" />;
            case "LinkedIn": return <Linkedin className="w-4.5 h-4.5" />;
            case "LeetCode": return <Code2 className="w-4.5 h-4.5" />;
            default: return null;
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.12, ease: easeCurve },
        }),
    };

    return (
        <section className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 md:px-8">
            {/* Profile Image + Name Row */}
            <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-5 mb-2"
            >
                {/* Rounded profile image */}
                <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0"
                    style={{ border: "2px solid var(--border)" }}
                >
                    <Image
                        src={personal.photo}
                        alt={personal.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div>
                    {/* Name + Verified */}
                    <div className="flex items-center gap-2">
                        <h1
                            className="text-3xl md:text-5xl font-normal tracking-tight leading-tight"
                            style={{ fontFamily: "var(--font-instrument)", color: "var(--fg)" }}
                        >
                            {personal.name}
                        </h1>
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span
                            className="text-sm ml-1 hidden md:inline"
                            style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                        >
                            | {personal.age}, {personal.location}
                        </span>
                    </div>

                    {/* Role */}
                    <p
                        className="text-sm md:text-base mt-1"
                        style={{ fontFamily: "var(--font-geist)", color: "var(--fg-secondary)" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleHighlights[activeRoleIndex]}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="inline-block px-1.5 py-0.5 rounded-sm"
                                style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                            >
                                {roleHighlights[activeRoleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </p>
                </div>
            </motion.div>

            {/* Bio */}
            <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-base md:text-[17px] leading-relaxed mt-8 mb-8 max-w-2xl"
                style={{ fontFamily: "var(--font-geist)", color: "var(--fg-secondary)" }}
            >
                A{" "}
                <span
                    className="font-medium underline underline-offset-4"
                    style={{ color: "var(--accent)", textDecorationColor: "var(--accent-soft)" }}
                >
                    {primaryRole}
                </span>{" "}
                {personal.tagline}
            </motion.p>

            {/* Social Icons Row */}
            <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-4"
            >
                {personal.resume && (
                    <a
                        href={personal.resume}
                        download
                        className="transition-all duration-200 hover:scale-110"
                        style={{ color: "var(--fg-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                        aria-label="Download Resume"
                    >
                        <Download className="w-4.5 h-4.5" />
                    </a>
                )}

                {socials.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        style={{ color: "var(--fg-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                        aria-label={social.platform}
                    >
                        {getIcon(social.platform)}
                    </a>
                ))}

                <a
                    href={`mailto:${personal.email}`}
                    className="transition-all duration-200 hover:scale-110"
                    style={{ color: "var(--fg-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                    aria-label="Email"
                >
                    <Mail className="w-4.5 h-4.5" />
                </a>
            </motion.div>
        </section>
    );
}
