const TrustPilot = () => {
    return (
        <section className="trustpilot-section">
            <div className="container">
                <div className="trustpilot-container">
                    {/* Trustpilot Widget */}
                    <div className="review-widget">
                        <img
                            src="/trustpilot-widget.png"
                            alt="Trustpilot Reviews"
                            className="trustpilot-image"
                        />
                    </div>

                    {/* Google Reviews Widget */}
                    <div className="review-widget">
                        <img
                            src="/google-reviews.png"
                            alt="Google Reviews"
                            className="trustpilot-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustPilot;
