'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './Gallery.css';

import golf05 from '../../assets/gallery/golf-05.jpg';
import golf06 from '../../assets/gallery/golf-06.jpg';
import golf07 from '../../assets/gallery/golf-07.jpg';
import golf08 from '../../assets/gallery/golf-08.jpg';
import golf09 from '../../assets/gallery/golf-09.jpg';
import golf10 from '../../assets/gallery/golf-10.jpg';
import golf11 from '../../assets/gallery/golf-11.jpg';
import golf12 from '../../assets/gallery/golf-12.jpg';
import golf13 from '../../assets/gallery/golf-13.jpg';
import golf14 from '../../assets/gallery/golf-14.jpg';
import golf15 from '../../assets/gallery/golf-15.jpg';
import golf16 from '../../assets/gallery/golf-16.jpg';
import golf17 from '../../assets/gallery/golf-17.jpg';
import golf18 from '../../assets/gallery/golf-18.jpg';
import golf19 from '../../assets/gallery/golf-19.jpg';
import golf20 from '../../assets/gallery/golf-20.jpg';
import golf21 from '../../assets/gallery/golf-21.jpg';

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
import img13 from '../../assets/img_13.jpeg';
import img14 from '../../assets/img_14.jpeg';
import img15 from '../../assets/img_15.jpeg';
import img16 from '../../assets/img_16.jpeg';
import img17 from '../../assets/img_17.jpeg';
import img18 from '../../assets/img_18.jpeg';
import img19 from '../../assets/img_19.jpeg';
import img20 from '../../assets/img_20.jpeg';

const gallery = [
    { id: 'n5', url: golf05, alt: "Vue d'ensemble du parcours de mini-golf en plein air" },
    { id: 'n6', url: golf06, alt: "Trou de mini-golf thématique au parcours du Golfe du Morbihan" },
    { id: 'n7', url: golf07, alt: "Famille jouant au mini-golf à Saint Armel" },
    { id: 'n8', url: golf08, alt: "Obstacle original sur le parcours de mini-golf" },
    { id: 'n9', url: golf09, alt: "Vue d'ensemble du parcours de mini-golf 18 trous" },
    { id: 'n10', url: golf10, alt: "Trou de mini-golf avec décoration maritime" },
    { id: 'n11', url: golf11, alt: "Activité mini-golf en famille dans le Morbihan" },
    { id: 'n12', url: golf12, alt: "Parcours de mini-golf adapté aux enfants" },
    { id: 'n13', url: golf13, alt: "Zone de jeu du mini-golf du Golfe du Morbihan" },
    { id: 'n14', url: golf14, alt: "Mini-golf Saint Armel - loisir pour tous les âges" },
    { id: 'n15', url: golf15, alt: "Trou créatif du parcours de mini-golf breton" },
    { id: 'n16', url: golf16, alt: "Obstacle ludique sur le parcours de 18 trous" },
    { id: 'n17', url: golf17, alt: "Vue rapprochée d'un trou du parcours de mini-golf" },
    { id: 'n18', url: golf18, alt: "Étang et canards dans le cadre du mini-golf" },
    { id: 'n19', url: golf19, alt: "Famille avec enfants profitant du mini-golf" },
    { id: 'n20', url: golf20, alt: "Duo de joueuses sur le parcours de mini-golf" },
    { id: 'n21', url: golf21, alt: "Partie de mini-golf en famille dans le Morbihan" },
    { id: 'o13', url: img13, alt: "Vue d'ensemble du parcours de mini-golf en plein air" },
    { id: 'o14', url: img14, alt: "Joueurs au mini-golf au coucher du soleil" },
    { id: 'o15', url: img15, alt: "Groupe jouant au mini-golf en soirée" },
    { id: 'o16', url: img16, alt: "Enfant jouant au mini-golf sur le parcours bleu" },
    { id: 'o17', url: img17, alt: "Partie de mini-golf en famille dans le Morbihan" },
    { id: 'o18', url: img18, alt: "Étang et canards dans le cadre du mini-golf" },
    { id: 'o19', url: img19, alt: "Famille avec enfants profitant du mini-golf" },
    { id: 'o20', url: img20, alt: "Duo de joueuses sur le parcours de mini-golf" },
    { id: 'o1', url: img1, alt: "Parcours de mini-golf coloré avec obstacles créatifs" },
    { id: 'o2', url: img2, alt: "Trou de mini-golf thématique au parcours du Golfe du Morbihan" },
    { id: 'o3', url: img3, alt: "Famille jouant au mini-golf à Saint Armel" },
    { id: 'o4', url: img4, alt: "Obstacle original sur le parcours de mini-golf" },
    { id: 'o5', url: img5, alt: "Vue d'ensemble du parcours de mini-golf 18 trous" },
    { id: 'o6', url: img6, alt: "Trou de mini-golf avec décoration maritime" },
    { id: 'o7', url: img7, alt: "Activité mini-golf en famille dans le Morbihan" },
    { id: 'o8', url: img8, alt: "Parcours de mini-golf adapté aux enfants" },
    { id: 'o9', url: img9, alt: "Zone de jeu du mini-golf du Golfe du Morbihan" },
    { id: 'o10', url: img10, alt: "Mini-golf Saint Armel - loisir pour tous les âges" },
    { id: 'o11', url: img11, alt: "Trou créatif du parcours de mini-golf breton" },
    { id: 'o12', url: img12, alt: "Obstacle ludique sur le parcours de 18 trous" },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const showPrevImage = () => setSelectedIndex((i) => (i - 1 + gallery.length) % gallery.length);
    const showNextImage = () => setSelectedIndex((i) => (i + 1) % gallery.length);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navReady, setNavReady] = useState(false);

    useEffect(() => {
        setNavReady(true);
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    const selectedImage = selectedIndex !== null ? gallery[selectedIndex] : null;

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
                        coverflowEffect={{ rotate: 20, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
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
                        watchSlidesProgress={false}
                    >
                        {gallery.map((image, index) => (
                            <SwiperSlide key={image.id}>
                                <div className="gallery-slide" onClick={() => openLightbox(index)}>
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        className="gallery-image"
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <div className="gallery-overlay-text">
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
                            <button
                                onClick={showPrevImage}
                                className="lightbox-nav-button lightbox-prev-button"
                                aria-label="Photo précédente"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedImage.url.src}
                                alt={selectedImage.alt}
                                className="lightbox-image"
                            />
                            <button
                                onClick={showNextImage}
                                className="lightbox-nav-button lightbox-next-button"
                                aria-label="Photo suivante"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
