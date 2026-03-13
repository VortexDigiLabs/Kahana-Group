import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import Services from './components/Services';
import TrackRecord from './components/TrackRecord';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <FeaturesBento />
            <Services />
            <About />
            <TrackRecord />
            <Testimonials />
          </main>
          <Contact />
        </motion.div>
      )}
    </div>
  );
}
