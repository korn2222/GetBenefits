import { ShieldCheck, TrendingUp, Clock } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <ShieldCheck size={40} className="text-cta" />,
            title: "Expert Knowledge",
            description: "Our team understands the ins and outs of the Universal Credit system to ensure your application is accurate."
        },
        {
            icon: <TrendingUp size={40} className="text-primary" />,
            title: "Maximize Your Claim",
            description: "We help identify all the elements you are entitled to, ensuring you receive the full amount possible."
        },
        {
            icon: <Clock size={40} className="text-cta" />,
            title: "Hassle Free",
            description: "We handle the paperwork and complexities, saving you time and reducing stress."
        }
    ];

    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Why Choose <span className="text-primary">GetBenefits</span>?</h2>
                    <p className="section-subtitle">We are dedicated to helping you navigate the benefits system with ease.</p>
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
