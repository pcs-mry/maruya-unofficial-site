import './App.css'
import HeaderMenu from './component/HeaderMenu'
import HeroSection from './landing-section/HeroSection'
import EventSection from './landing-section/EventSection'
import FooterSection from './landing-section/FooterSection'
import SponsorsSection from './landing-section/SponsorsSection'
import CoprightSection from './landing-section/CopyrightSection'

function App() {

  return (
    <>
      <HeaderMenu />
      <HeroSection />
      <EventSection />
      <SponsorsSection />
      <FooterSection />
      <CoprightSection />
    </>
  )
}

export default App
