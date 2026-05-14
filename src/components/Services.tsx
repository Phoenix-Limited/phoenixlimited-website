import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Settings, Zap } from 'lucide-react';

const services = [
    {
        title: "Custom Solutions",
        description: "We don't believe in one-size-fits-all. We analyze your bottlenecks and build tailored technology roadmaps to solve them.",
        icon: <Settings className="text-brand-secondary" />,
        features: ["Process Automation", "Custom Integrations", "Strategy Consulting"]
    },
    {
        title: "Software Development",
        description: "From internal tools to customer-facing apps, we build scalable, secure software using modern TypeScript and React stacks.",
        icon: <Code2 className="text-brand-secondary" />,
        features: ["Web Applications", "API Development", "Legacy Modernization"]
    },
    {
        title: "Managed IT",
        description: "Stop worrying about downtime. We provide proactive monitoring and management so your infrastructure stays invisible and reliable.",
        icon: <ShieldCheck className="text-brand-secondary" />,
        features: ["24/7 Monitoring", "Cybersecurity", "Backup & Recovery"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Our Expertise</h2>
                    <div className="h-1 w-20 bg-brand-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                        <Zap size={14} className="text-brand-secondary" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;