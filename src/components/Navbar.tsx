import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="GetBenefits Logo" />
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="#features" className="nav-link">Benefits</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="btn btn-primary">Apply Now</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="container mobile-menu-content">
                            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                            <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
