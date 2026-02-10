import { useLanguage } from '../i18n/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section cta-section">
            <div className="container relative z-10">
                <h2 className="cta-title">{t('cta.title')}</h2>
                <p className="cta-subtitle">
                    {t('cta.subtitle')}
                </p>
                <div className="cta-actions">
                    <button className="btn btn-cta">
                        {t('cta.button')}
                    </button>
                </div>
            </div>

            {/* Background circles */}
            <div className="cta-bg-circle circle-1"></div>
            <div className="cta-bg-circle circle-2"></div>
        </section>
    );
};

export default CTA;
