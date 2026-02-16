"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
    const { personal, socials } = PORTFOLIO_DATA;

    const getIcon = (platform: string) => {
        switch (platform) {
            case "GitHub":
                return <Github className="w-4 h-4" />;
            case "LinkedIn":
                return <Linkedin className="w-4 h-4" />;
            case "LeetCode":
                return <Code2 className="w-4 h-4" />;
            default:
                return null;
        }
    };

    return (
        <footer className="py-12 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p
                    className="text-xs text-neutral-600"
                    style={{ fontFamily: "var(--font-geist)" }}
                >
                    Developed by{" "}
                    <span className="text-neutral-400">{personal.name}</span> •{" "}
                    © {new Date().getFullYear()}
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                            className="text-neutral-600 hover:text-white transition-colors hover:scale-110 transform"
                        >
                            {getIcon(social.platform)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
