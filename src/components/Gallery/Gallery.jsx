import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './Gallery.css';

// Import des images
import img1 from '../../assets/img_1-converti-depuis-jpg.webp';
import img2 from '../../assets/img_2-converti-depuis-jpg.webp';
import img3 from '../../assets/img_3-converti-depuis-jpg.webp';
import img4 from '../../assets/img_4-converti-depuis-jpg.webp';
import img5 from '../../assets/img_5-converti-depuis-jpg.webp';
import img6 from '../../assets/img_6-converti-depuis-jpg.webp';
import img7 from '../../assets/img_7-converti-depuis-jpg.webp';
import img8 from '../../assets/img_8-converti-depuis-jpg.webp';
import img9 from '../../assets/img_9-converti-depuis-jpg.webp';
import img10 from '../../assets/img_10-converti-depuis-jpg.webp';
import img11 from '../../assets/img_11-converti-depuis-jpg.webp';
import img12 from '../../assets/img_12-converti-depuis-jpg.webp';

// Tableau des images
const gallery = [
    { id: 1, url: img1, alt: "Parcours de mini-golf coloré avec obstacles créatifs" },
    { id: 2, url: img2, alt: "Trou de mini-golf thématique au parcours du Golfe du Morbihan" },
    { id: 3, url: img3, alt: "Famille jouant au mini-golf à Saint Armel" },
    { id: 4, url: img4, alt: "Obstacle original sur le parcours de mini-golf" },
    { id: 5, url: img5, alt: "Vue d'ensemble du parcours de mini-golf 18 trous" },
    { id: 6, url: img6, alt: "Trou de mini-golf avec décoration maritime" },
    { id: 7, url: img7, alt: "Activité mini-golf en famille dans le Morbihan" },
    { id: 8, url: img8, alt: "Parcours de mini-golf adapté aux enfants" },
    { id: 9, url: img9, alt: "Zone de jeu du mini-golf du Golfe du Morbihan" },
    { id: 10, url: img10, alt: "Mini-golf Saint Armel - loisir pour tous les âges" },
    { id: 11, url: img11, alt: "Trou créatif du parcours de mini-golf breton" },
    { id: 12, url: img12, alt: "Obstacle ludique sur le parcours de 18 trous" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openLightbox = (image) => setSelectedImage(image);
    const closeLightbox = () => setSelectedImage(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navReady, setNavReady] = useState(false);

    useEffect(() => {
        setNavReady(true);
    }, []);

    return (
        <section id="galerie" className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h2 className="gallery-title">
                        Notre <span className="gradient-text">Galerie</span>
                    </h2>
                    <p className="gallery-subtitle">
                        Découvrez en images notre parcours unique et l'ambiance conviviale qui vous attend
                    </p>
                </div>

                <div className="gallery-swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={navReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
                        effect="coverflow"
                        coverflowEffect={{ rotate: 20, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2.2 },
                        }}
                        onBeforeInit={(swiper) => {
                            if (navReady) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        className="gallery-swiper"
                    >
                        {gallery.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="gallery-slide" onClick={() => openLightbox(image)}>
                                    <img src={image.url} alt={image.alt} className="gallery-image" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="gallery-overlay-text">
                                            <h3>{image.title}</h3>
                                            <p>Cliquez pour agrandir</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button ref={prevRef} className="gallery-nav-button prev-button" aria-label="Précédent">
                        <ChevronLeft size={24} />
                    </button>
                    <button ref={nextRef} className="gallery-nav-button next-button" aria-label="Suivant">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {selectedImage && (
                    <div className="lightbox-backdrop" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeLightbox} className="lightbox-close" aria-label="Fermer">
                                <X size={24} />
                            </button>
                            <img src={selectedImage.url} alt={selectedImage.alt} className="lightbox-image" />
                            <div className="lightbox-caption">
                                <h3>{selectedImage.title}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
