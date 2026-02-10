import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state
            setIsScrolled(currentScrollY > 20);

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="GetBenefits Logo" />
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <a href="#how-it-works" className="nav-link">{t('nav.howItWorks')}</a>
                    <a href="#features" className="nav-link">{t('nav.benefits')}</a>
                    <a href="#about" className="nav-link">{t('nav.about')}</a>
                    <LanguageSelector />
                    <a href="#contact" className="btn btn-primary">{t('nav.applyNow')}</a>
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
                            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.howItWorks')}</a>
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.benefits')}</a>
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</a>
                            <LanguageSelector />
                            <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.applyNow')}</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

