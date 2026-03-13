import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-slate-900 break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The Kahana <br/><span className="text-blue-600">Advantage</span>
            </motion.h2>
            
            <motion.div 
              className="prose prose-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-medium text-xl text-slate-800 mb-6">
                Over 30 years of combined professional experience among our principals and members.
              </p>
              <p className="mb-4">
                We believe in a hands-on approach. A Director always maintains control of key functions on every project, ensuring accountability and direct communication at all levels.
              </p>
              <p>
                Backed by up-to-date Professional Indemnity Insurance and equipped with modern tools, we provide superior professional service across retail, corporate, and industrial sectors.
              </p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">Level 4</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider">B-BBEE Status</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Procurement Recognition</p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-slate-900">Leadership</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-bold text-slate-800">Anna Labuschagne</p>
                    <p className="text-sm text-slate-500">Managing Director</p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800">Jacobus Elliott</p>
                    <p className="text-sm text-slate-500">Senior Technical Operation Manager</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-blue-600 p-8 rounded-sm shadow-sm text-white sm:mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Empowerment</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Active role in the recruitment and training of previously disadvantaged individuals.
                </p>
                <p className="text-sm text-blue-100">
                  Addressing social and financial imbalances through capacity building and training initiatives.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
