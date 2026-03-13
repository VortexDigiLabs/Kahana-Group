import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Hero%20Image.png" 
          alt="Kahana Group Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 pb-12 md:pb-24">
            <motion.p 
              className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a multi-disciplinary team offering a broad spectrum of specialist engineering and IT services, setting new benchmarks in project lifecycle efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider text-sm hover:bg-blue-500 transition-colors rounded-sm"
              >
                Partner With Us
              </a>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 pt-12 md:pt-24">
            <motion.h1 
              className="text-[12vw] md:text-[7vw] leading-[0.9] font-bold uppercase tracking-tighter text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Building <br/>
              <span className="text-blue-500">Excellence</span> <br/>
              Through <br/>
              Innovation.
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
