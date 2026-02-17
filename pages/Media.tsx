import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { MEDIA_ITEMS } from '../constants';
import { Play } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <SectionHeader title="Resources" subtitle="Media Library" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEDIA_ITEMS.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-video bg-charcoal-800 mb-4 overflow-hidden rounded-sm">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center text-gold-500 border border-gold-500/50 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-charcoal-900/80 px-2 py-1 text-[10px] text-ivory-100 font-medium">
                {item.duration}
              </span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 border border-gold-500/20 px-2 rounded-full">
                {item.type}
              </span>
            </div>
            <h3 className="font-serif text-xl text-ivory-100 group-hover:text-gold-500 transition-colors">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;