import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, PoundSterling } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero-section">
            <div className="container hero-container">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div className="badge">{t('hero.badge')}</div>
                    <h1 className="hero-title">
                        {t('hero.title.start')}<span className="text-primary">{t('hero.title.highlight')}</span>{t('hero.title.end')}
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-visual"
                >
                    {/* Stats Card */}
                    <div className="stats-card">
                        <div className="stats-header">
                            <div className="stats-icon-wrapper">
                                <PoundSterling size={32} />
                            </div>
                            <div>
                                <h3 className="stats-title">{t('hero.stats.title')}</h3>
                                <p className="stats-amount">{t('hero.stats.amount')}</p>
                            </div>
                        </div>

                        <div className="stats-divider"></div>

                        <div className="stats-items">
                            <div className="stats-item">
                                <div className="stats-item-icon green">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">{t('hero.stats.successRate')}</p>
                                    <p className="stats-item-value">94%</p>
                                </div>
                            </div>
                            <div className="stats-item">
                                <div className="stats-item-icon blue">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">{t('hero.stats.processing')}</p>
                                    <p className="stats-item-value">{t('hero.stats.processingValue')}</p>
                                </div>
                            </div>
                            <div className="stats-item">
                                <div className="stats-item-icon purple">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">{t('hero.stats.claimsHelped')}</p>
                                    <p className="stats-item-value">12,450+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTAs under the stats card */}
                    <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
                        <a href="#contact" className="btn btn-primary btn-lg">
                            {t('hero.cta.startClaim')} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#how-it-works" className="btn btn-outline btn-lg">
                            {t('hero.cta.howItWorks')}
                        </a>
                    </div>

                    {/* Validation under CTAs */}
                    <div className="hero-validation" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                        <div className="validation-item">
                            <CheckCircle size={16} className="text-cta" />
                            <span>{t('hero.validation.noWinNoFee')}</span>
                        </div>
                        <div className="validation-item">
                            <TrendingUp size={16} className="text-primary" />
                            <span>{t('hero.validation.expertGuidance')}</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
