import { mockData } from '../../data/mock';
import './Presentation.css';
import picture from '../../assets/img_9.jpg'

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
                                    Mini Golf Unique
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
                        </div>
                    </div>

                    {/* Image */}
                    <div className="presentation-image-wrapper">
                        <div className="presentation-image-container">
                            <img
                                src={picture}
                                alt="Joueur profitant du parcours de mini-golf"
                                className="presentation-image"
                            />
                            <div className="image-gradient-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
