import { mockData } from '../../data/mock';
import { Clock, Calendar, AlertCircle } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
    const { schedule } = mockData;

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

                <div className="schedule-periods">
                    {schedule.periods.map((period, index) => (
                        <div key={index} className="schedule-period-card">
                            <div className="schedule-period-header">
                                <div className="icon-circle calendar-icon">
                                    <Calendar size={24} className="icon-white" />
                                </div>
                                <h3 className="schedule-period-title">{period.title}</h3>
                            </div>

                            <div className="schedule-hours-list">
                                {period.hours.map((item, idx) => (
                                    <div key={idx} className="schedule-hour-item">
                                        <div className="schedule-hour-day">
                                            <Clock size={20} className="icon-green" />
                                            <span className="day-text">{item.day}</span>
                                        </div>
                                        <span className="hour-text">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="schedule-important-notes">
                    <div className="important-notes-header">
                        <AlertCircle size={24} className="icon-yellow" />
                        <h3>Informations importantes</h3>
                    </div>
                    <div className="important-notes-list">
                        {schedule.notes.map((note, index) => (
                            <div key={index} className="important-note-item">
                                <div className="yellow-dot"></div>
                                <span>{note}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="schedule-weather-notice">
                    <p>
                        <strong>🌦️ Météo :</strong> En cas de forte pluie, notre parcours couvert reste ouvert !
                        Contactez-nous en cas de doute au <strong className="phone-number">+33 1 23 45 67 89</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
