import { Users, PoundSterling, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Stats = () => {
    const { t } = useLanguage();

    const stats = [
        {
            icon: <Users size={40} />,
            value: "2,500+",
            label: t('stats.peopleHelped')
        },
        {
            icon: <PoundSterling size={40} />,
            value: "£50M+",
            label: t('stats.benefitsCollected')
        },
        {
            icon: <Award size={40} />,
            value: "11+",
            label: t('stats.yearsExperience')
        },
        {
            icon: <Briefcase size={40} />,
            value: "30+",
            label: t('stats.teamMembers')
        }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
