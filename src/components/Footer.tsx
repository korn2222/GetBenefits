const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="footer-brand">
                        <div className="font-bold text-xl text-primary mb-4">GetBenefits</div>
                        <p className="text-muted text-sm">Helping you access the support you deserve.</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Universal Credit</a></li>
                            <li><a href="#">Eligibility Check</a></li>
                            <li><a href="#">Appeals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="footer-links">
                            <li>Email: info@getbenefits.uk</li>
                            <li>Phone: 0800 123 4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted">
                    &copy; {new Date().getFullYear()} GetBenefits. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
