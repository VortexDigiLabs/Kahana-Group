import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Layers, Zap, ShieldCheck, Settings } from 'lucide-react';
import { DottedSurface } from './ui/dotted-surface';
import { MorphingCardStack, type CardData } from './ui/morphing-card-stack';

const kahanaCards: CardData[] = [
  {
    id: "1",
    title: "Strategic Consulting",
    description: "Aligning technology and engineering with your core business objectives. We build roadmaps that deliver measurable outcomes.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Multi-Disciplinary Expertise",
    description: "Combining IT, electrical, and mechanical engineering under one roof for holistic, integrated solutions that reduce complexity.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technology to solve complex operational challenges across retail, corporate, and industrial sectors.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "Secure & Reliable Systems",
    description: "Building robust infrastructure that ensures continuous, secure operations — backed by professional indemnity insurance.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: "5",
    title: "Project Lifecycle Efficiency",
    description: "Optimising every phase of your project, from initial concept through to final deployment, maintenance, and beyond.",
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function FeaturesBento() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      <DottedSurface className="opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Heading & Description */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter mb-6 leading-[1.1] text-white break-words">
              THE Kahana Group<br />
              <span className="text-blue-500">ADVANTAGE</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0">
              Our proven methodology ensures excellence across every dimension of your project. With 30+ years of combined expertise, we deliver where others don't.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider text-sm hover:bg-blue-500 transition-colors rounded-sm"
              >
                Partner With Us
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-4 border border-slate-600 text-slate-300 font-bold uppercase tracking-wider text-sm hover:border-blue-500 hover:text-white transition-colors rounded-sm"
              >
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Right: Morphing Card Stack */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MorphingCardStack
              cards={kahanaCards}
              defaultLayout="stack"
              className="w-full max-w-xs"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
