import { mockData } from '../../data/mock';
import { MapPin, Phone, Mail, Car, Bus, Clock } from 'lucide-react';
import './PracticalInfo.css';

const PracticalInfo = () => {
    const { siteInfo } = mockData;

    return (
        <section id="infos" className="practical-section">
            <div className="container">
                <div className="section-header">
                    <h2>
                        Infos <span className="gradient-text">Pratiques</span>
                    </h2>
                    <p className="section-subtitle">
                        Toutes les informations utiles pour organiser votre visite
                    </p>
                </div>

                <div className="grid-2cols gap-large max-width">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="card gradient-bg contact-card">
                            <h3 className="card-title">
                                <span className="circle-icon green-blue"></span> Contact
                            </h3>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="icon-bg green-light">
                                        <MapPin size={24} className="icon-green" />
                                    </div>
                                    <div>
                                        <h4>Adresse</h4>
                                        <p>
                                            {siteInfo.address.street}<br />
                                            {siteInfo.address.city}<br />
                                            {siteInfo.address.country}
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-bg blue-light">
                                        <Phone size={24} className="icon-blue" />
                                    </div>
                                    <div>
                                        <h4>Téléphone</h4>
                                        <a href={`tel:${siteInfo.phone}`} className="link-blue">
                                            {siteInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-bg green-light">
                                        <Mail size={24} className="icon-green" />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <a href={`mailto:${siteInfo.email}`} className="link-green">
                                            {siteInfo.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid-2cols gap-small quick-info-cards">
                            <div className="card white-border">
                                <Clock size={32} className="icon-green mb-1" />
                                <h4>Durée moyenne</h4>
                                <p>45 minutes à 1h30</p>
                            </div>
                            <div className="card white-border">
                                <div className="emoji-green mb-1">🎯</div>
                                <h4>Niveau</h4>
                                <p>Tous niveaux</p>
                            </div>
                        </div>
                    </div>

                    {/* Access Information */}
                    <div className="access-info">
                        <div className="card gradient-bg access-card">
                            <h3 className="card-title">
                                <span className="circle-icon blue-green"></span> Comment venir ?
                            </h3>

                            <div className="access-details">
                                <div className="contact-item">
                                    <div className="icon-bg blue-light">
                                        <Car size={24} className="icon-blue" />
                                    </div>
                                    <div>
                                        <h4>En voiture</h4>
                                        <p>Parking gratuit sur place (50 places)</p>
                                        <p className="small-text">Sortie 12 de l'A1, puis suivre "Centre Loisirs"</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-bg green-light">
                                        <Bus size={24} className="icon-green" />
                                    </div>
                                    <div>
                                        <h4>En transport</h4>
                                        <p>Ligne 14 - Arrêt "Loisirs Park"</p>
                                        <p className="small-text">À 2 minutes à pied de l'arrêt</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="card map-placeholder">
                            <div className="map-content">
                                <MapPin size={48} className="icon-gray" />
                                <h4>Plan d'accès</h4>
                                <p>
                                    Centre commercial Loisirs Park<br />
                                    Métro Ligne 14 - Station "Loisirs Park"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="call-to-action">
                    <div className="cta-card">
                        <h3>Prêt pour l'aventure ?</h3>
                        <p>
                            N'attendez plus ! Venez découvrir notre parcours unique et passer un moment inoubliable en famille ou entre amis.
                        </p>
                        <a href={`tel:${siteInfo.phone}`} className="btn-primary">
                            <Phone size={20} className="btn-icon" />
                            Appeler maintenant
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticalInfo;
