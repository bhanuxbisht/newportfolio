"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    const { personal } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="py-12 md:py-16">
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
                    Contact #
                </h2>

                <p
                    className="text-base leading-relaxed mb-8 max-w-xl"
                    style={{ fontFamily: "var(--font-roboto)", color: "var(--fg-secondary)" }}
                >
                    Have a project in mind or want to discuss an opportunity? I&apos;m always
                    open to new challenges and collaborations.
                </p>

                <div className="space-y-3">
                    <a
                        href={`mailto:${personal.email}`}
                        className="flex items-center gap-3 transition-colors duration-200 group"
                        style={{ color: "var(--fg-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                            {personal.email}
                        </span>
                    </a>

                    {personal.secondaryEmail && (
                        <a
                            href={`mailto:${personal.secondaryEmail}`}
                            className="flex items-center gap-3 transition-colors duration-200"
                            style={{ color: "var(--fg-secondary)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-secondary)")}
                        >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                                {personal.secondaryEmail}
                            </span>
                        </a>
                    )}

                    <div className="flex items-center gap-3" style={{ color: "var(--fg-muted)" }}>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                            {personal.location}
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
