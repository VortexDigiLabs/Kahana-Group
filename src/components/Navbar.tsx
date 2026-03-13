import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-3 text-white">
            Kahana Group
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wider transition-colors text-slate-300 hover:text-white"
              >
                {item}
              </a>
            ))}
            <img 
              src="https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Logo.png" 
              alt="Kahana Group Logo" 
              className="h-16 w-auto ml-4 bg-white p-1 rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <img 
              src="https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Logo.png" 
              alt="Kahana Group Logo" 
              className="h-12 w-auto bg-white p-1 rounded-sm"
              referrerPolicy="no-referrer"
            />
            <button 
              className="text-white"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 z-[60] bg-slate-900 text-white flex flex-col justify-center items-center ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col space-y-8 text-center">
          {['Services', 'About', 'Work', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-bold uppercase tracking-tighter hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
