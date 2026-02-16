"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
    const { personal } = PORTFOLIO_DATA;

    return (
        <section id="about" className="py-12 md:py-16">
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
                    About #
                </h2>

                <p
                    className="text-base md:text-[17px] leading-relaxed max-w-3xl"
                    style={{ fontFamily: "var(--font-roboto)", color: "var(--fg-secondary)" }}
                >
                    I am{" "}
                    <strong className="font-medium" style={{ color: "var(--fg)" }}>
                        {personal.name}
                    </strong>
                    , {personal.about}
                </p>

                {/* Stats */}
                <div className="flex gap-12 mt-10">
                    {personal.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                            className="flex flex-col"
                        >
                            <span
                                className="text-3xl md:text-4xl font-normal mb-1"
                                style={{ fontFamily: "var(--font-instrument)", color: "var(--fg)" }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-xs uppercase tracking-widest"
                                style={{ fontFamily: "var(--font-geist)", color: "var(--fg-muted)" }}
                            >
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
