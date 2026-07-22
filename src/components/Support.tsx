import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, ExternalLink, Mail } from 'lucide-react';

const Support = () => {
    return (
        <section id="support" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <LifeBuoy className="mx-auto text-brand-secondary mb-4" size={48} />
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Existing Client Support</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Need help? Our support team is ready to assist you. Submit a ticket or visit our support dashboard to track your requests.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="mailto:support@phoenixlimited.net"
                        className="flex items-center justify-center gap-3 bg-brand-primary hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto group"
                    >
                        <Mail className="text-brand-secondary group-hover:scale-110 transition-transform" />
                        Email Support
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="https://support.phoenixlimited.net/portal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-brand-secondary text-brand-primary px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto group shadow-sm hover:shadow-md"
                    >
                        Visit Support Dashboard
                        <ExternalLink size={18} className="text-slate-400 group-hover:text-brand-secondary transition-colors" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Support;