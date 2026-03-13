import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Wrench, Zap, Monitor } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Project Management',
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    items: ['Expert oversight from inception to completion', 'Timeline and budget optimization', 'Risk assessment and mitigation'],
  },
  {
    title: 'Building & Maintenance',
    icon: <Wrench className="h-6 w-6 text-blue-500" />,
    items: ['Tenant installations and soft services', 'Turnkey developments', 'Commercial and retail maintenance', 'Site supervision'],
  },
  {
    title: 'Technical Expertise',
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    items: ['Electrical and Air-conditioning', 'Plumbing and Roofing', 'Waterproofing solutions', 'Aluminium shop fitting'],
  },
  {
    title: 'Information Technology',
    icon: <Monitor className="h-6 w-6 text-blue-500" />,
    items: ['Specialized IT consulting', 'Infrastructure integration', 'Digital transformation support', 'Network solutions'],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-950 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-6 break-words">
            Comprehensive <br className="sm:hidden" /><span className="text-blue-500">Solutions</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl">
            Integrating engineering, IT, and management consulting under one unified banner for seamless client solutions.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GridItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={
                <ul className="space-y-3 mt-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">▪</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none h-full">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-800 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-slate-800 bg-slate-900 p-6 shadow-sm md:p-8">
          <div className="w-fit rounded-lg border-[0.75px] border-slate-700 bg-slate-800 p-3 mb-6">
            {icon}
          </div>
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold font-sans tracking-tight md:text-2xl text-balance text-white uppercase">
              {title}
            </h3>
            <div className="font-sans text-sm md:text-base text-slate-400 flex-1">
              {description}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
