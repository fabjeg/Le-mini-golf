import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './Gallery.css';

// Import des images
import img1 from '../../assets/img_1.jpg';
import img2 from '../../assets/img_2.jpg';
import img3 from '../../assets/img_3.jpg';
import img4 from '../../assets/img_4.jpg';
import img5 from '../../assets/img_5.jpg';
import img6 from '../../assets/img_6.jpg';
import img7 from '../../assets/img_7.jpg';
import img8 from '../../assets/img_8.jpg';
import img9 from '../../assets/img_9.jpg';
import img10 from '../../assets/img_10.jpg';
import img11 from '../../assets/img_11.jpg';
import img12 from '../../assets/img_12.jpg';

// Tableau des images
const gallery = [
    { id: 1, url: img1, alt: "Image 1 de la galerie" },
    { id: 2, url: img2, alt: "Image 2 de la galerie" },
    { id: 3, url: img3, alt: "Image 3 de la galerie" },
    { id: 4, url: img4, alt: "Image 4 de la galerie" },
    { id: 5, url: img5, alt: "Image 5 de la galerie" },
    { id: 6, url: img6, alt: "Image 6 de la galerie" },
    { id: 7, url: img7, alt: "Image 7 de la galerie" },
    { id: 8, url: img8, alt: "Image 8 de la galerie" },
    { id: 9, url: img9, alt: "Image 9 de la galerie" },
    { id: 10, url: img10, alt: "Image 10 de la galerie" },
    { id: 11, url: img11, alt: "Image 11 de la galerie" },
    { id: 12, url: img12, alt: "Image 11 de la galerie" },
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
                                    <img src={image.url} alt={image.alt} className="gallery-image" />
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
