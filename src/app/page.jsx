import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Presentation from '../components/Presentation/Presentation';
import Pricing from '../components/Pricing/Pricing';
import Schedule from '../components/Schedule/Schedule';
import Gallery from '../components/Gallery/Gallery';
import PracticalInfo from '../components/PracticalInfo/PracticalInfo';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Presentation />
                <Pricing />
                <Schedule />
                <Gallery />
                <PracticalInfo />
            </main>
            <Footer />
        </>
    );
}
