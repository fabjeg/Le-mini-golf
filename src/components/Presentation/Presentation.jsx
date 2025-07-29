import { mockData } from '../../data/mock';
import './Presentation.css';

const Presentation = () => {
    const { siteInfo } = mockData;

    return (
        <section id="presentation" className="presentation-section">
            <div className="presentation-container">
                <div className="presentation-grid">
                    {/* Texte */}
                    <div className="presentation-text">
                        <div>
                            <h2 className="presentation-title">
                                Découvrez notre
                                <span className="presentation-gradient-text">
                                    Mini-Golf Unique
                                </span>
                            </h2>
                            <p className="presentation-description">{siteInfo.description}</p>
                        </div>

                        <div className="presentation-features">
                            <div className="feature-item">
                                <div className="feature-icon feature-icon-green">
                                    <span>18</span>
                                </div>
                                <div>
                                    <h3 className="feature-title">18 Trous Créatifs</h3>
                                    <p className="feature-text">Chaque trou offre un défi unique avec des obstacles colorés et des thèmes variés pour une expérience inoubliable.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon feature-icon-blue">
                                    <span role="img" aria-label="famille">👨‍👩‍👧‍👦</span>
                                </div>
                                <div>
                                    <h3 className="feature-title">Parfait en Famille</h3>
                                    <p className="feature-text">Adapté à tous les âges, de 3 à 99 ans ! Matériel spécialement conçu pour les enfants disponible.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon feature-icon-gradient">
                                    <span role="img" aria-label="trophée">🏆</span>
                                </div>
                                <div>
                                    <h3 className="feature-title">Parcours Primé</h3>
                                    <p className="feature-text">Élu meilleur mini-golf de la région en 2023, reconnu pour son originalité et la qualité de ses installations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="presentation-image-wrapper">
                        <div className="presentation-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1661768227053-504d6857f5c9"
                                alt="Joueur profitant du parcours de mini-golf"
                                className="presentation-image"
                            />
                            <div className="image-gradient-overlay"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="floating-badge floating-top-right">
                            <span>Depuis<br />2015</span>
                        </div>

                        <div className="floating-badge floating-bottom-left">
                            <div className="visitors">
                                <div className="visitors-number">10k+</div>
                                <div className="visitors-label">Visiteurs/an</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
