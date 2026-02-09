import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, PoundSterling } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div className="badge">Trusted UK Benefits Assistance</div>
                    <h1 className="hero-title">
                        Maximize Your <span className="text-primary">Universal Credit</span> Claim Today
                    </h1>
                    <p className="hero-subtitle">
                        We simplify the process. Our experts help people living in the UK apply for and receive the government benefits they are entitled to.
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
                                <h3 className="stats-title">Average Monthly Benefit</h3>
                                <p className="stats-amount">£1,200+</p>
                            </div>
                        </div>

                        <div className="stats-divider"></div>

                        <div className="stats-items">
                            <div className="stats-item">
                                <div className="stats-item-icon green">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">Success Rate</p>
                                    <p className="stats-item-value">94%</p>
                                </div>
                            </div>
                            <div className="stats-item">
                                <div className="stats-item-icon blue">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">Avg. Processing</p>
                                    <p className="stats-item-value">2 Weeks</p>
                                </div>
                            </div>
                            <div className="stats-item">
                                <div className="stats-item-icon purple">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <p className="stats-item-label">Claims Helped</p>
                                    <p className="stats-item-value">12,450+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTAs under the stats card */}
                    <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
                        <a href="#contact" className="btn btn-primary btn-lg">
                            Start Your Claim <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#how-it-works" className="btn btn-outline btn-lg">
                            How it Works
                        </a>
                    </div>

                    {/* Validation under CTAs */}
                    <div className="hero-validation" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                        <div className="validation-item">
                            <CheckCircle size={16} className="text-cta" />
                            <span>No Win, No Fee</span>
                        </div>
                        <div className="validation-item">
                            <TrendingUp size={16} className="text-primary" />
                            <span>Expert Guidance</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
