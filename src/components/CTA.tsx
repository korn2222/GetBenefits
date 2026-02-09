
const CTA = () => {
    return (
        <section id="contact" className="section cta-section">
            <div className="container relative z-10">
                <h2 className="cta-title">Ready to Get What You're Owed?</h2>
                <p className="cta-subtitle">
                    Thousands of people in the UK are missing out on benefits they are entitled to. Don't be one of them.
                </p>
                <div className="cta-actions">
                    <button className="btn btn-cta">
                        Start Your Free Assessment
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
