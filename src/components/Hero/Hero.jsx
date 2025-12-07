import { mockData } from '../../data/mock';
import './Hero.css';
import heroImage from '../../assets/golfe_du_morbihan-converti-depuis-jpg.webp';

const Hero = () => {
    const { siteInfo } = mockData;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            {/* Background Image with Overlay */}
            <div className="hero-bg-container">
                <img
                    src={heroImage}
                    alt="Parcours de mini-golf coloré vue aérienne"
                    className="hero-bg-image"
                />
                <div className="hero-bg-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-gradient-text">Le Mini Golf</span>
                    <span className="hero-white-text">Du Golfe Du Morbihan</span>
                </h1>

                <p className="hero-slogan">{siteInfo.slogan}</p>

                <p className="hero-description">{siteInfo.description}</p>

                {/* Call-to-Action Buttons */}
                <div className="hero-buttons">
                    <button onClick={() => scrollToSection('galerie')} className="btn-secondary">
                        Découvrir le Parcours
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
