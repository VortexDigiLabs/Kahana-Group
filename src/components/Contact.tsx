import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute top-[3vw] left-[3vw] w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg className="absolute top-[3vw] right-[3vw] w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg className="absolute bottom-[3vw] left-[3vw] w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg className="absolute bottom-[3vw] right-[3vw] w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let's Build <br/>
              <span className="text-blue-500">The Future</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-md mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exceeding expectations, setting new standards. Partner with Kahana Group today.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-start">
                <MapPin className="text-blue-500 mr-6 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Address</h4>
                  <p className="text-xl">18, 7th Street, Delarey, Johannesburg</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-blue-500 mr-6 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Email</h4>
                  <a href="mailto:info@kahanagroup.co.za" className="text-xl hover:text-blue-400 transition-colors">info@kahanagroup.co.za</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-blue-500 mr-6 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</h4>
                  <a href="tel:0114770940" className="text-xl hover:text-blue-400 transition-colors">011 477 0940</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Kahana Group. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">@kahana group</a>
          </div>
        </div>
      </div>
    </section>
  );
}
