"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "home", href: "#" },
    { name: "projects", href: "#projects" },
    { name: "about", href: "#about" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Theme-aware colors
    const isDark = theme === "dark";

    const navBg = isDark
        ? isScrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.3)"
        : isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.6)";

    const textColor = isDark ? "#ffffff" : "#0a0a0a";
    const iconColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";
    const iconHoverColor = isDark ? "#ffffff" : "#000000";
    const borderColor = isDark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)";
    const underlineColor = isDark ? "#ffffff" : "#000000";
    const hoverBg = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sticky top-0 w-full z-50 transition-all duration-300"
                style={{
                    backgroundColor: navBg,
                    backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
                    WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
                    borderBottom: isScrolled ? `1px solid ${borderColor}` : "1px solid transparent",
                }}
            >
                <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between">
                    {/* Left: Nav Links */}
                    <div className="flex items-center gap-8" style={{ fontFamily: "var(--font-geist)" }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-semibold tracking-wide cursor-pointer group"
                                style={{
                                    color: textColor,
                                    textTransform: "lowercase",
                                    letterSpacing: "0.02em"
                                }}
                            >
                                {item.name}
                                {/* Animated underline */}
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                                    style={{
                                        bottom: "-6px",
                                        backgroundColor: underlineColor,
                                        boxShadow: isDark
                                            ? "0 0 10px rgba(255, 255, 255, 0.5)"
                                            : "0 0 10px rgba(0, 0, 0, 0.2)"
                                    }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Right: Theme Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md transition-all duration-200 hover:scale-110 cursor-pointer"
                            style={{
                                color: iconColor,
                                backgroundColor: "transparent"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = iconHoverColor;
                                e.currentTarget.style.backgroundColor = hoverBg;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = iconColor;
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                        </button>
                    </div>
                </div>

                {/* Gradient fade mask below navbar */}
                <div
                    className="absolute left-0 right-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        top: "100%",
                        height: "60px",
                        background: isDark
                            ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)"
                            : "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, transparent 100%)",
                        opacity: isScrolled ? 1 : 0.6,
                    }}
                />
            </motion.nav>
        </>
    );
}
