import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Declare haloFormConfig on the global Window interface for TypeScript
declare global {
  interface Window {
    haloFormConfig?: {
      haloApiUrl: string;
      ticketTypeId: number;
      ticketTypeKey: string;
    };
  }
}

const Contact = () => {
    useEffect(() => {
        // 1. Assign the configuration object to the global window
        window.haloFormConfig = {
            haloApiUrl: "https://phoenixlimited.halopsa.com/api",
            ticketTypeId: 1,
            ticketTypeKey: "cd07be32-d9ce-44fe-a77c-eb301335e445",
        };

        // 2. Inject HaloPSA CSS stylesheet if not already present
        const cssId = 'halo-form-css';
        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.href = 'https://phoenixlimited.halopsa.com/embed/newticket.css';
            document.head.appendChild(link);
        }

        // 3. Inject HaloPSA embed script if not already present
        const scriptId = 'halo-form-js';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://phoenixlimited.halopsa.com/embed/newticket.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section id="contact" className="py-24 bg-brand-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Upgrade Your IT?</h2>
                            <p className="text-slate-300 text-lg mb-12 max-w-lg">
                                Whether you need full managed services, a custom software build, or just strategic advice, we're here to help your business thrive.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="text-brand-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Us</h4>
                                        <a href="mailto:contact@phoenixlimited.net" className="text-lg hover:text-brand-secondary transition-colors">contact@phoenixlimited.net</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="text-brand-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Call Us</h4>
                                        <p className="text-lg">+1 (765) 246-7845</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="text-brand-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                                        <p className="text-lg">Plainfield, Indiana<br/>Serving the Greater Indy Area</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-100"
                    >
                        {/* HaloPSA Embedded Form Container */}
                        <div id="halo-form" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;