import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Brand from './components/Brand';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Shiyan Sab - Digital Marketing Student & Entrepreneur';
  }, []);

  return (
    <div className="bg-gray-900">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Brand />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
