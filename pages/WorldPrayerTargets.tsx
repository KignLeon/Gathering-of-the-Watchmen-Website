import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CURRENT_PRAYER_TARGET } from '../constants';
import { Target } from 'lucide-react';

const WorldPrayerTargets: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <SectionHeader title="Global Watch" subtitle="Prayer Targets" />

      {/* Hero Region */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="World Map" 
          className="w-full h-[400px] object-cover grayscale opacity-50" 
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-16 max-w-2xl">
           <div className="inline-flex items-center gap-2 text-gold-500 uppercase tracking-widest font-bold text-sm mb-4">
             <Target size={16} />
             Current Focus: {CURRENT_PRAYER_TARGET.month}
           </div>
           <h2 className="font-serif text-5xl md:text-6xl text-ivory-100 mb-6">{CURRENT_PRAYER_TARGET.region}</h2>
           <p className="text-xl text-ivory-200/80 font-light leading-relaxed">
             {CURRENT_PRAYER_TARGET.description}
           </p>
        </div>
      </div>

      {/* Prayer Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-3xl text-ivory-100 mb-8 border-b border-white/5 pb-4">Prayer Points</h3>
          <ul className="space-y-6">
            {CURRENT_PRAYER_TARGET.points.map((point, idx) => (
              <li key={idx} className="flex gap-4 items-start group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-500 text-sm font-serif italic group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors">
                  {idx + 1}
                </span>
                <p className="text-lg text-ivory-200/70 pt-1">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-charcoal-800/20 border border-white/5 p-8 h-fit">
          <h4 className="font-display text-gold-500 uppercase tracking-widest mb-6 text-sm">Previous Targets</h4>
          <ul className="space-y-4">
            {['October 2024: Middle East', 'September 2024: European Youth', 'August 2024: Government Leaders'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="block text-ivory-200/50 hover:text-gold-500 transition-colors border-b border-white/5 pb-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorldPrayerTargets;