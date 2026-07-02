import { Facebook, Play } from 'lucide-react';
import './Video.css';

const VIDEO_URL = 'https://www.facebook.com/reel/2068710001193482';

const Video = () => {
    return (
        <section id="video" className="video-section">
            <div className="video-container">
                <div className="video-header">
                    <h2 className="video-title">
                        Notre <span className="gradient-text">Vidéo</span>
                    </h2>
                    <p className="video-subtitle">
                        Plongez dans l'ambiance du mini-golf en vidéo
                    </p>
                </div>

                <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-card"
                >
                    <div className="video-card-play">
                        <Play size={32} color="white" fill="white" />
                    </div>
                    <div className="video-card-text">
                        <Facebook size={20} />
                        <span>Voir la vidéo sur Facebook</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Video;
