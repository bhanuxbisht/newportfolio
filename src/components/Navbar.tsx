"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const navItems = [
    { name: "home", href: "#" },
    { name: "projects", href: "#projects" },
    { name: "about", href: "#about" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 py-5"
            style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        >
            <div className="max-w-3xl mx-auto px-6 md:px-4 flex items-center justify-between">
                {/* Left: Nav Links */}
                <div className="flex items-center gap-6" style={{ fontFamily: "var(--font-geist)" }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm transition-colors duration-200 hover:opacity-100"
                            style={{ color: "var(--fg-secondary)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Theme Toggle */}
                <div className="flex items-center gap-3" style={{ color: "var(--fg-muted)" }}>
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded-md transition-all duration-200 hover:scale-110"
                        style={{ color: "var(--fg-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
