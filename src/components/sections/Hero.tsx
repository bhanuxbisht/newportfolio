"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, Linkedin, Code2, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { personal, socials } = PORTFOLIO_DATA;

    const getIcon = (platform: string) => {
        switch (platform) {
            case "GitHub":
                return <Github className="w-5 h-5" />;
            case "LinkedIn":
                return <Linkedin className="w-5 h-5" />;
            case "LeetCode":
                return <Code2 className="w-5 h-5" />;
            default:
                return null;
        }
    };

    return (
        <section className="py-12 md:py-24">
            {/* Name + Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neutral-700 flex-shrink-0">
                    <Image
                        src={personal.photo}
                        alt={personal.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1
                        className="text-4xl md:text-6xl tracking-tight text-white"
                        style={{ fontFamily: "var(--font-instrument)" }}
                    >
                        {personal.name}
                    </h1>
                </div>
            </motion.div>

            {/* Role + Location */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6"
                style={{ fontFamily: "var(--font-geist)" }}
            >
                <span className="text-sm md:text-base text-yellow-300 font-semibold underline underline-offset-4 decoration-yellow-400/60 decoration-2">
                    {personal.role}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-sm md:text-base text-neutral-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {personal.age}, {personal.location}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-sm md:text-base text-emerald-400/80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {personal.availability}
                </span>
            </motion.div>

            {/* Bio */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-roboto)" }}
            >
                {personal.tagline}
            </motion.p>

            {/* Social Row */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-3 flex-wrap"
            >
                {socials.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-dashed border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-400 transition-all duration-300 hover:scale-105 rounded-md text-sm"
                        style={{ fontFamily: "var(--font-geist)" }}
                    >
                        {getIcon(social.platform)}
                        <span>{social.platform}</span>
                    </a>
                ))}

                <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-2 px-4 py-2 border border-dashed border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-400 transition-all duration-300 hover:scale-105 rounded-md text-sm"
                    style={{ fontFamily: "var(--font-geist)" }}
                >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                </a>

                {personal.resume && (
                    <a
                        href={personal.resume}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-neutral-200 transition-all duration-300 hover:scale-105 rounded-md text-sm font-medium"
                        style={{ fontFamily: "var(--font-geist)" }}
                    >
                        <Download className="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                )}
            </motion.div>
        </section>
    );
}
