import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-brand-primary rounded-2xl overflow-hidden relative">
                            {/* Placeholder for a professional image or abstract graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-slate-800 flex items-center justify-center">
                                <div className="text-brand-secondary opacity-20 text-[15rem] font-bold select-none">PX</div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                <p className="text-white font-medium italic">"We don't just manage IT; we empower your business to grow through technology."</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-wider text-sm">
                            <MapPin size={16} /> Plainfield, Indiana
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary">Local Expertise, Global Standards</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Phoenix Limited was founded on the principle that businesses in the Plainfield and Indianapolis area deserve enterprise-grade IT solutions without the corporate bureaucracy.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Whether you are a small office needing reliable management or a growing enterprise requiring custom software architecture, we bring a personalized approach to every project. We act as your strategic technology partner, ensuring your systems are an asset, not a liability.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;