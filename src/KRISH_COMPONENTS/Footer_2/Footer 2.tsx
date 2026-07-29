"use client";

import "./Footer 2.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container">

                <div className="footer__top">

                    <div className="footer__brand">

                        <div className="footer__logo">
                            DF
                        </div>

                        <h2>
                            Dotflex
                        </h2>

                        <p>
                            AI-powered branding platform helping founders,
                            creators, agencies, and businesses launch
                            professional brands in minutes.
                        </p>

                        <div className="footer__socials">

                            <a href="#">
                                X
                            </a>

                            <a href="#">
                                LinkedIn
                            </a>

                            <a href="#">
                                GitHub
                            </a>

                        </div>

                    </div>

                    <div className="footer__links">

                        <div>

                            <h3>Platform</h3>

                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Templates</a>
                            <a href="#">Roadmap</a>

                        </div>

                        <div>

                            <h3>Resources</h3>

                            <a href="#">Blog</a>
                            <a href="#">Documentation</a>
                            <a href="#">Case Studies</a>
                            <a href="#">Help Center</a>

                        </div>

                        <div>

                            <h3>Company</h3>

                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <a href="#">Privacy</a>

                        </div>

                    </div>

                    <div className="footer__newsletter">

                        <h3>
                            Stay Updated
                        </h3>

                        <p>
                            Get product updates and AI branding tips delivered
                            directly to your inbox.
                        </p>

                        <form className="footer__form">

                            <input
                                type="email"
                                placeholder="Email address"
                            />

                            <button type="submit">
                                Subscribe
                            </button>

                        </form>

                    </div>

                </div>

                <div className="footer__bottom">

                    <p>
                        © 2026 Dotflex. All rights reserved.
                    </p>

                    <div className="footer__bottom-links">

                        <a href="#">
                            Terms
                        </a>

                        <a href="#">
                            Privacy
                        </a>

                        <a href="#">
                            Cookies
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;