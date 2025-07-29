import React from 'react';
import { mockData } from '../../data/mock';
import './Hero.css';

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
                    src="https://images.pexels.com/photos/2048892/pexels-photo-2048892.jpeg"
                    alt="Parcours de mini-golf coloré vue aérienne"
                    className="hero-bg-image"
                />
                <div className="hero-bg-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-gradient-text">Mini-Golf</span>
                    <span className="hero-white-text">Paradise</span>
                </h1>

                <p className="hero-slogan">{siteInfo.slogan}</p>

                <p className="hero-description">{siteInfo.description}</p>

                {/* Call-to-Action Buttons */}
                <div className="hero-buttons">
                    <button onClick={() => scrollToSection('tarifs')} className="btn-primary">
                        Voir nos Tarifs
                    </button>
                    <button onClick={() => scrollToSection('galerie')} className="btn-secondary">
                        Découvrir le Parcours
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-indicator-border">
                    <div className="scroll-indicator-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
