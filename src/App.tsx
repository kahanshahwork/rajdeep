import { useEffect } from 'react';
import { useReveal, useParallax } from './hooks/useScroll';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Craft from './sections/Craft';
import Collections from './sections/Collections';
import Visit from './sections/Visit';
import Footer from './sections/Footer';

function App() {
  useReveal();
  useParallax();

  useEffect(() => {
    document.title = 'Rajdeep Jewellers — Stories You Can Wear';
  }, []);

  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Craft />
        <Collections />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
