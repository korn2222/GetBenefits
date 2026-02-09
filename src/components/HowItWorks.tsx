const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Consultation",
            description: "We discuss your situation to understand your eligibility."
        },
        {
            number: "2",
            title: "Application",
            description: "Our experts guide you through the application forms."
        },
        {
            number: "3",
            title: "Approval",
            description: "Receive your decision and start getting your benefits."
        }
    ];

    return (
        <section id="how-it-works" className="section how-it-works-section bg-surface">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Simple 3-Step Process</h2>
                    <p className="section-subtitle">Getting your benefits shouldn't be complicated.</p>
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
