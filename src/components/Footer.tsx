import React from 'react';
import { Monitor } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Monitor className="text-brand-secondary" size={24} />
                            <span className="font-bold text-xl tracking-tight text-white">PHOENIX <span className="text-brand-secondary">LIMITED</span></span>
                        </div>
                        <p className="max-w-xs text-sm">
                            Providing enterprise-grade IT management, software development, and strategic consulting for businesses in Plainfield, Indiana and beyond.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-brand-secondary transition-colors">Services</a></li>
                            <li><a href="#about" className="hover:text-brand-secondary transition-colors">About Us</a></li>
                            <li><a href="#support" className="hover:text-brand-secondary transition-colors">Support</a></li>
                            <li><a href="#contact" className="hover:text-brand-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/legal.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">General Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {currentYear} Phoenix Limited. All rights reserved.</p>
                    <p>Designed and built in Indiana.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;