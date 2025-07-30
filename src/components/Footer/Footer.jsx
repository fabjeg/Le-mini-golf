import { mockData } from '../../data/mock';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const { siteInfo, socialLinks } = mockData;
    const currentYear = new Date().getFullYear();

    const getSocialIcon = (iconName) => {
        switch (iconName) {
            case 'facebook':
                return <Facebook size={24} />;
            case 'instagram':
                return <Instagram size={24} />;
            case 'twitter':
                return <Twitter size={24} />;
            default:
                return null;
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Logo and Description */}
                    <div className="footer-logo-desc">
                        <div className="logo-wrapper">
                            <div className="logo-circle">
                                <span className="logo-text">MG</span>
                            </div>
                            <div>
                                <h3 className="site-name">{siteInfo.name}</h3>
                                <p className="site-slogan">{siteInfo.slogan}</p>
                            </div>
                        </div>
                        <p className="site-description">{siteInfo.description}</p>
                        <div className="social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    {getSocialIcon(social.icon)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-title">Contact</h4>
                        <div className="contact-details">
                            <div>
                                <p className="contact-label">Adresse</p>
                                <p>
                                    {siteInfo.address.street}<br />
                                    {siteInfo.address.city}
                                </p>
                            </div>
                            <div>
                                <p className="contact-label">Téléphone</p>
                                <a href={`tel:${siteInfo.phone}`} className="contact-link">
                                    {siteInfo.phone}
                                </a>
                            </div>
                            <div>
                                <p className="contact-label">Email</p>
                                <a href={`mailto:${siteInfo.email}`} className="contact-link">
                                    {siteInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-nav">
                        <h4 className="footer-title">Navigation</h4>
                        <div className="nav-links">
                            {[
                                { label: 'Présentation', id: 'presentation' },
                                { label: 'Tarifs', id: 'tarifs' },
                                { label: 'Horaires', id: 'horaires' },
                                { label: 'Galerie', id: 'galerie' },
                                { label: 'Infos Pratiques', id: 'infos' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="nav-button"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <div className="bottom-left">
                        <p>© {currentYear} {siteInfo.name}. Tous droits réservés.</p>
                        <div className="bottom-links">
                            <button className="bottom-link">Mentions légales</button>
                            <button className="bottom-link">Politique de confidentialité</button>
                            <button className="bottom-link">CGV</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
