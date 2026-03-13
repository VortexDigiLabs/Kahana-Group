import React from 'react';
import { Timeline } from './ui/timeline';

const projects = [
  {
    title: 'Nandos Horizon View',
    category: 'Retail & Corporate',
    description: 'R6 Million full interior fit-out project delivered on schedule, showcasing Kahana Group\'s retail construction excellence. Scope included structural partitioning, electrical installations, and bespoke finishes across the entire restaurant floor plan.',
    image: 'https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Main%20Nandos.webp'
  },
  {
    title: 'Regal Security',
    category: 'Retail & Corporate',
    description: 'R2.4 Million dual-site project covering the Greenstone Head Office and Linbro Park Office installations. Kahana Group integrated advanced IT and security systems, including access control, CCTV, and full electrical infrastructure across both facilities.',
    image: 'https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Main%20Regal.webp'
  },
  {
    title: 'Centurion Mall',
    category: 'Maintenance & Revamps',
    description: 'Ongoing R150,000 monthly maintenance contract complemented by a R1.3 Million dry wall and painting revamp. Work was executed in phased shifts to ensure zero disruption to trading tenants throughout the bustling retail environment.',
    image: 'https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/Centurion.webp'
  },
  {
    title: 'Fish Eagle Business Park',
    category: 'Maintenance & Revamps',
    description: 'R1.3 Million comprehensive revamp of a multi-storey office block, covering structural partitioning, mechanical systems, and full interior refurbishment. Kahana Group completed all phases within budget while tenants remained operational throughout the project.',
    image: 'https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Kahana%20Group/FishEagle.png'
  }
];

export default function TrackRecord() {
  const data = projects.map((project) => ({
    title: project.title,
    content: (
      <div>
        <p className="text-slate-300 text-sm md:text-base font-normal mb-4">
          {project.description}
        </p>
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full whitespace-nowrap">
            {project.category}
          </span>
        </div>
        <div className="w-full">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  }));

  return (
    <section id="work" className="bg-slate-900">
      <Timeline data={data} />
    </section>
  );
}
