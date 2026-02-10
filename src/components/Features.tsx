import { ShieldCheck, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <ShieldCheck size={40} className="text-cta" />,
            title: t('features.expertKnowledge.title'),
            description: t('features.expertKnowledge.desc')
        },
        {
            icon: <TrendingUp size={40} className="text-primary" />,
            title: t('features.maximizeClaim.title'),
            description: t('features.maximizeClaim.desc')
        },
        {
            icon: <Clock size={40} className="text-cta" />,
            title: t('features.hassleFree.title'),
            description: t('features.hassleFree.desc')
        }
    ];

    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">{t('features.title.start')}<span className="text-primary">{t('features.title.highlight')}</span>{t('features.title.end')}</h2>
                    <p className="section-subtitle">{t('features.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper mb-4">{feature.icon}</div>
                            <h3 className="feature-title mb-2">{feature.title}</h3>
                            <p className="feature-description text-muted">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
