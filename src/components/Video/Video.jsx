import './Video.css';

const Video = () => {
    return (
        <section id="video" className="video-section">
            <div className="video-container">
                <div className="video-header">
                    <h2 className="video-title">
                        Notre <span className="gradient-text">Vidéo</span>
                    </h2>
                    <p className="video-subtitle">
                        Plongez dans l'ambiance de notre parcours en vidéo
                    </p>
                </div>

                <div className="video-player-wrapper">
                    <video
                        className="video-player"
                        src="/videos/mini-golf-presentation.mp4"
                        controls
                        playsInline
                        preload="metadata"
                    >
                        Votre navigateur ne prend pas en charge la lecture de vidéos.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Video;
