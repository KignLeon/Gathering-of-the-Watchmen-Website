import React from 'react';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <SectionHeader title="Our Mandate" subtitle="About Us" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="prose prose-invert prose-lg text-ivory-200/70">
          <p className="lead text-xl text-ivory-100 font-serif mb-6">
            We are a collective of intercessors, leaders, and believers united by a single purpose: to see Heaven's agenda established on Earth through strategic prayer.
          </p>
          <p className="mb-6">
            Founded in 2024, Gathering of the Watchmen emerged from a deep burden to see the Body of Christ awakened to the urgency of the hour. We believe that prayer is not just a passive activity, but a governing authority given to the church.
          </p>
          <p>
            Our mission is to train, mobilize, and deploy watchmen who can accurately discern the times and seasons, standing in the gap for their families, cities, and nations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/600/800?grayscale" alt="Prayer" className="w-full h-full object-cover rounded-sm translate-y-8" />
          <img src="https://picsum.photos/601/801?grayscale" alt="Worship" className="w-full h-full object-cover rounded-sm" />
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-white/5">
        <SectionHeader title="Core Values" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
          {[
            { title: 'Authority', desc: 'Walking in the delegated power of Christ to shift atmospheres.' },
            { title: 'Intimacy', desc: 'Ministry that flows from a place of deep communion with the Father.' },
            { title: 'Unity', desc: 'Breaking down denominational walls to stand as one body.' }
          ].map((val, idx) => (
            <div key={idx} className="p-6 bg-charcoal-800/30 border border-white/5">
              <h3 className="font-serif text-xl text-gold-500 mb-4">{val.title}</h3>
              <p className="text-ivory-200/60">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;