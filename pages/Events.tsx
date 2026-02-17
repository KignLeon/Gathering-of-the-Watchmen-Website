import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { UPCOMING_EVENTS } from '../constants';
import { MapPin, Calendar } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <SectionHeader title="Gatherings" subtitle="Upcoming Events" />

      <div className="space-y-12">
        {UPCOMING_EVENTS.map((event) => (
          <div key={event.id} className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 bg-charcoal-800/20 border border-white/5 overflow-hidden">
            {/* Date Badge Mobile */}
            <div className="md:hidden bg-gold-500 text-charcoal-900 p-4 text-center font-bold uppercase tracking-widest">
              {event.date}
            </div>

            {/* Image */}
            <div className="md:col-span-5 h-64 md:h-auto relative overflow-hidden">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-8 md:py-12 md:pr-12 flex flex-col justify-center">
              <div className="hidden md:flex items-center gap-2 text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">
                <Calendar size={16} />
                {event.date}
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl text-ivory-100 mb-4">{event.title}</h3>
              
              <div className="flex items-center gap-2 text-ivory-200/50 mb-6 text-sm">
                <MapPin size={16} />
                {event.location}
              </div>

              <p className="text-ivory-200/70 mb-8 font-light leading-relaxed">
                {event.description}
              </p>

              <div>
                <Button variant="outline">Register Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;