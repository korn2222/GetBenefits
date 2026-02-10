import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { languages } from '../i18n/translations';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = languages.find(l => l.code === language);

    return (
        <div className="language-selector">
            <button
                className="language-selector-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="language-flag">{currentLang?.flag}</span>
                <span className="language-label">{currentLang?.label}</span>
                <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                        >
                            <span className="language-flag">{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
