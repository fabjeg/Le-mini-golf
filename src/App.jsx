
import './App.css'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PracticalInfo from './components/PracticalInfo/PracticalInfo'
import Presentation from './components/Presentation/Presentation'
import Pricing from './components/Pricing/Pricing'
import Schedule from './components/Schedule/Schedule'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Presentation />
      <Pricing />
      <Schedule />
      <Gallery />
      <PracticalInfo />
      <Footer />
    </>
  )
}

export default App
