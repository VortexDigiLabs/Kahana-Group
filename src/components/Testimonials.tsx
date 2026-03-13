import React from 'react';
import { TestimonialsSection } from './ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Sarah Jenkins",
      handle: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "The Kahana Group transformed our retail space on time and under budget. Their multi-disciplinary approach meant we only had to deal with one team for everything.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "Facilities Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their maintenance and revamp services are unmatched. The R1.3 Million dry wall and painting project at Centurion Mall was executed flawlessly with zero disruption to our tenants.",
  },
  {
    author: {
      name: "Elena Rodriguez",
      handle: "Property Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "From strategic consulting to final deployment, Kahana Group's engineering expertise is top-tier. Highly recommend for complex infrastructure projects."
  },
  {
    author: {
      name: "David Nkosi",
      handle: "Corporate Client",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "We hired them for a major office installation and the security systems integration was seamless. True professionals who understand both IT and engineering."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-slate-50 py-12">
      <TestimonialsSection
        title={<>Trusted by <span className="text-blue-500">Industry Leaders</span></>}
        description="See what our clients have to say about our commitment to excellence and innovation."
        testimonials={testimonials}
        className="bg-transparent"
      />
    </div>
  );
}
