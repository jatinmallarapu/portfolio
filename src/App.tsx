import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Accomplishments from './components/Accomplishments';
import Connect from './components/Connect';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Accomplishments />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
