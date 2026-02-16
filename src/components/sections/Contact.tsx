"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
    const { personal, socials } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2
                    className="text-3xl md:text-4xl text-white mb-6"
                    style={{ fontFamily: "var(--font-instrument)" }}
                >
                    Contact #
                </h2>

                <p
                    className="text-neutral-400 text-base leading-relaxed mb-8 max-w-xl"
                    style={{ fontFamily: "var(--font-roboto)" }}
                >
                    Have a project in mind or want to discuss an opportunity? I&apos;m always open to
                    new challenges and collaborations.
                </p>

                <div className="space-y-4">
                    <a
                        href={`mailto:${personal.email}`}
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-md border border-neutral-800 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                            <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                            {personal.email}
                        </span>
                    </a>

                    {personal.secondaryEmail && (
                        <a
                            href={`mailto:${personal.secondaryEmail}`}
                            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-md border border-neutral-800 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                                {personal.secondaryEmail}
                            </span>
                        </a>
                    )}

                    <div className="flex items-center gap-3 text-neutral-500">
                        <div className="w-8 h-8 rounded-md border border-neutral-800 flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <span className="text-sm" style={{ fontFamily: "var(--font-geist)" }}>
                            {personal.location}
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
