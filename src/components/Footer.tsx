import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="footer-brand">
                        <div className="font-bold text-xl text-primary mb-4">GetBenefit</div>
                        <p className="text-muted text-sm">{t('footer.tagline')}</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{t('footer.services')}</h4>
                        <ul className="footer-links">
                            <li><a href="#">{t('footer.universalCredit')}</a></li>
                            <li><a href="#">{t('footer.eligibilityCheck')}</a></li>
                            <li><a href="#">{t('footer.appeals')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{t('footer.company')}</h4>
                        <ul className="footer-links">
                            <li><a href="#about">{t('footer.aboutUs')}</a></li>
                            <li><a href="#contact">{t('footer.contact')}</a></li>
                            <li><a href="#">{t('footer.privacyPolicy')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{t('footer.contactTitle')}</h4>
                        <ul className="footer-links">
                            <li>Email: contact@getbenefit.uk</li>
                            <li>Phone: +44 7902 225168</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
