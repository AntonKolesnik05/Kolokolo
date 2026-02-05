import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import Home from './pages/Home/Home.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Story from './pages/Story/Story.jsx'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/story" element={<Story />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App