import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-primary text-white">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-secondary text-xs font-bold mb-6"
                    >
                        <Cpu size={14} />
                        <span>Based in Plainfield, Indiana</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
                    >
                        Custom IT Solutions for <span className="text-brand-secondary">Modern Business</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-slate-400 mb-10"
                    >
                        Phoenix Limited provides expert software development, proactive management, and tailored technology strategies to help your business scale and secure its future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a href="#contact" className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all group">
                            Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="flex items-center justify-center px-8 py-4 rounded-lg font-bold border border-slate-700 hover:bg-slate-800 transition-all">
                            Our Services
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;