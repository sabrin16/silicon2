import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/styles.css'
import './components/DarkModeToggle'
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Features from './components/Features'

import MobileButton from './components/MobileButton'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter> 
      <MobileButton />
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
