"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
    const { personal, socials } = PORTFOLIO_DATA;

    const getIcon = (platform: string) => {
        switch (platform) {
            case "GitHub": return <Github className="w-4 h-4" />;
            case "LinkedIn": return <Linkedin className="w-4 h-4" />;
            case "LeetCode": return <Code2 className="w-4 h-4" />;
            default: return null;
        }
    };

    return (
        <footer className="py-10 mt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                >
                    Developed by{" "}
                    <span style={{ color: "var(--fg-secondary)" }}>{personal.name}</span>{" "}
                    · © {new Date().getFullYear()}
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                            className="transition-all duration-200 hover:scale-110"
                            style={{ color: "var(--fg-muted)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                        >
                            {getIcon(social.platform)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
