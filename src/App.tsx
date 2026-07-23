import { useEffect, useState } from 'react';
import { useReveal, useParallax } from './hooks/useScroll';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Craft from './sections/Craft';
import Collections from './sections/Collections';
import Visit from './sections/Visit';
import Footer from './sections/Footer';
import OfferPopup from './components/OfferPopup';
import AdminPortal from './components/AdminPortal';

function App() {
  useReveal();
  useParallax();
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    document.title = 'Rajdeep Jewellers — Stories You Can Wear';
    // open admin via #admin in the URL too
    if (window.location.hash === '#admin') setAdminOpen(true);
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
      <Footer onAdmin={() => setAdminOpen(true)} />
      <OfferPopup />
      {adminOpen && <AdminPortal onClose={() => setAdminOpen(false)} />}
    </div>
  );
}

export default App;
