import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import Home from './pages/Home/Home.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Story from './pages/Story/Story.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import SliderGallery from './components/Gallery/SliderGallery.jsx'
import LocationPage from './pages/Location/LocationPage.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/story" element={<Story />} />
        <Route path="/fullgallery" element={<Gallery />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App