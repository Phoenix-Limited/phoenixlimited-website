import React from 'react';
import { Monitor } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-primary/90 backdrop-blur-md text-white border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <Monitor className="text-brand-secondary" />
                        <span className="font-bold text-xl tracking-tight">PHOENIX <span className="text-brand-secondary">LIMITED</span></span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        <a href="#services" className="hover:text-brand-secondary transition-colors">Services</a>
                        <a href="#about" className="hover:text-brand-secondary transition-colors">About</a>
                        <a href="#contact" className="hover:text-brand-secondary transition-colors">Contact</a>
                    </div>
                    <a href="#contact" className="bg-brand-secondary hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold transition-all">
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;