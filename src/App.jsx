import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";
import "./components/DarkModeToggle";
import About from "./views/About";
import Projects from "./views/Projects";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";

import MobileButton from "./components/MobileButton";

function App() {
  return (
    <BrowserRouter>
      <MobileButton />
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
