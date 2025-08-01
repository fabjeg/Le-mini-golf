import { Calendar, Clock } from 'lucide-react';
import { mockData } from '../../data/mock';
import './Schedule.css';

const Schedule = () => {
    const { periods } = mockData.schedule;

    return (
        <section id="horaires" className="schedule-section">
            <div className="schedule-container">
                <div className="schedule-header">
                    <h2 className="schedule-title">
                        Nos <span className="gradient-text">Horaires</span>
                    </h2>
                    <p className="schedule-subtitle">
                        Nous vous accueillons toute l'année avec des horaires adaptés aux saisons
                    </p>
                </div>

                <div className="schedule-list">
                    {periods.map((period, index) => (
                        <div key={index} className="schedule-list-item">
                            <div className="schedule-list-header">
                                <Calendar size={20} className="icon-green" />
                                <h3>{period.title}</h3>

                            </div>
                            <ul>
                                {period.hours.map((item, idx) => (
                                    <li key={idx}>
                                        <Clock size={18} className="icon-green" />
                                        <span className="day">{item.day}</span> :{' '}
                                        <span className="hour">{item.hours}</span>
                                    </li>
                                ))}
                            </ul>
                            {period.showWeatherNotice && (
                                <div className="weather-alert">
                                    <span role="img" aria-label="pluie">🌧️</span>
                                    <span className="weather-text">
                                        En cas de pluie, vous pouvez nous appeler au&nbsp;
                                    </span>
                                    <a href="tel:+33647827449" className="weather-call-button">
                                        +33 6 47 82 74 49
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Schedule;
