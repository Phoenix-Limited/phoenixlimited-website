import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        
        // Capture the form element before the async fetch call
        const formElement = event.target as HTMLFormElement;
        const formData = new FormData(formElement);
        formData.append("access_key", "d795821a-50d8-4c93-ad90-2955c903af1c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                formElement.reset(); // Safe to call now
            } else {
                setResult(data.message || "Error");
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred while submitting the form");
        }
    };

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
                                        <a href="mailto:contact@phoenixlimited.net" className="text-lg hover:text-brand-secondary transition-colors">contact@phoenixlimited.com</a>
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
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input type="text" name="name" id="name" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input type="email" name="email" id="email" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">How can we help?</label>
                                <textarea name="message" id="message" rows={4} required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all resize-none" placeholder="Tell us about your project or IT needs..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <div className="text-center text-sm text-slate-400">{result}</div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;