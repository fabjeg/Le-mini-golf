import React from 'react';
import { mockData } from '../../data/mock';
import { Check, Star } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const { pricing } = mockData;

    return (
        <section id="tarifs" className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-title">
                        Nos <span className="pricing-gradient-text">Tarifs</span>
                    </h2>
                    <p className="pricing-subtitle">
                        Des prix accessibles pour profiter en famille ou entre amis de notre parcours exceptionnel
                    </p>
                </div>

                <div className="pricing-grid">
                    {pricing.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <Star size={16} fill="currentColor" />
                                    <span>Populaire</span>
                                </div>
                            )}

                            <div className="pricing-card-content">
                                <div className="pricing-card-header">
                                    <h3 className="plan-category">{plan.category}</h3>
                                    <p className="plan-description">{plan.description}</p>
                                    <div className="plan-price">{plan.price}</div>
                                    <p className="plan-subprice">par personne</p>
                                </div>

                                <div className="plan-features">
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <div className="feature-icon">
                                                <Check size={12} className="check-icon" />
                                            </div>
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`plan-button ${plan.popular ? 'btn-popular' : 'btn-default'}`}>
                                    Choisir ce tarif
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <p className="footer-note">
                        <strong>Bon à savoir :</strong> Gratuit pour les enfants de moins de 3 ans accompagnés
                    </p>
                    <p className="footer-smallprint">
                        Les tarifs incluent la location du matériel complet (club, balle) et l'accès illimité au parcours
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
