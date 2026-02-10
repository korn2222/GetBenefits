import { useLanguage } from '../i18n/LanguageContext';

const HowItWorks = () => {
    const { t } = useLanguage();

    const steps = [
        {
            number: "1",
            title: t('howItWorks.step1.title'),
            description: t('howItWorks.step1.desc')
        },
        {
            number: "2",
            title: t('howItWorks.step2.title'),
            description: t('howItWorks.step2.desc')
        },
        {
            number: "3",
            title: t('howItWorks.step3.title'),
            description: t('howItWorks.step3.desc')
        }
    ];

    return (
        <section id="how-it-works" className="section how-it-works-section bg-surface">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">{t('howItWorks.title')}</h2>
                    <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
                </div>

                <div className="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
