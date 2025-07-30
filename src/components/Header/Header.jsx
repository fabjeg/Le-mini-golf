import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'presentation', label: 'Présentation' },
        { id: 'tarifs', label: 'Tarifs' },
        { id: 'horaires', label: 'Horaires' },
        { id: 'galerie', label: 'Galerie' },
        { id: 'infos', label: 'Infos Pratiques' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="nav-inner">
                    {/* Logo */}
                    <div className="logo-section">
                        <div className="logo-circle">
                            <span className="logo-text">MG</span>
                        </div>
                        <h1 className="logo-title">Le Mini Golf Du Golfe Du Morbihan</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-desktop">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="nav-button"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="mobile-nav-button"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
