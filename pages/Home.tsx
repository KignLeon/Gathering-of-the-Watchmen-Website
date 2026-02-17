import React from 'react';
import { ArrowRight, Globe, BookOpen, Users, Calendar } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { UPCOMING_EVENTS, LATEST_TRAINING, CURRENT_PRAYER_TARGET } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490126125116-39b43697e876?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Prayer meeting" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/40 to-charcoal-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-transparent to-charcoal-900" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full text-gold-500 text-xs tracking-widest uppercase mb-6 animate-fade-in">
            Est. 2024
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory-50 mb-8 leading-none tracking-tight">
            Mobilizing Prayer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 to-gold-500 italic">Across Regions</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-ivory-200/80 mb-10 font-light leading-relaxed">
            A quiet sanctuary for those seeking peace, meaning, and authentic connection. We stand as watchmen on the wall for our generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/events">Register for Event</Button>
            <Button to="/prayer-request" variant="outline">Submit Prayer Request</Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-charcoal-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Prayer Training', text: 'Equipping believers with biblical foundations for intercession.' },
              { icon: Globe, title: 'Global Mobilization', text: 'Connecting watchmen across nations for coordinated prayer strikes.' },
              { icon: Users, title: 'Gatherings', text: 'Conferences and intensives designed to ignite spiritual passion.' },
              { icon: Calendar, title: 'Outreach', text: 'Extending the love of Christ to our local and global communities.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 border border-white/5 hover:border-gold-500/30 transition-all duration-500 bg-charcoal-800/30 hover:bg-charcoal-800/50">
                <item.icon className="text-gold-500 mb-6 h-8 w-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-serif text-xl text-ivory-100 mb-3">{item.title}</h3>
                <p className="text-ivory-200/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event Feature */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <SectionHeader title="Upcoming Gathering" subtitle="Join Us" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
              <img 
                src={UPCOMING_EVENTS[0].imageUrl} 
                alt={UPCOMING_EVENTS[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors pointer-events-none" />
            </div>
            <div>
              <div className="text-gold-500 font-bold tracking-widest text-sm mb-4 uppercase">{UPCOMING_EVENTS[0].date}</div>
              <h3 className="font-serif text-4xl text-ivory-100 mb-6">{UPCOMING_EVENTS[0].title}</h3>
              <p className="text-ivory-200/70 mb-8 text-lg font-light">
                {UPCOMING_EVENTS[0].description} <br />
                Location: {UPCOMING_EVENTS[0].location}
              </p>
              <Button to="/events">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Targets Grid */}
      <section className="py-24 bg-charcoal-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Training Preview */}
            <div className="relative p-10 border border-white/5 bg-charcoal-900">
              <span className="absolute top-0 right-0 p-4 text-gold-500/20 opacity-20">
                <BookOpen size={120} />
              </span>
              <SectionHeader title="Training" subtitle="Equip" className="mb-8" />
              <div className="relative z-10">
                <h4 className="font-serif text-2xl text-ivory-100 mb-2">{LATEST_TRAINING.title}</h4>
                <p className="text-gold-500 text-sm mb-4">With {LATEST_TRAINING.instructor}</p>
                <p className="text-ivory-200/60 mb-8">{LATEST_TRAINING.description}</p>
                <Button to="/training" variant="outline">View All Courses</Button>
              </div>
            </div>

            {/* World Prayer Target */}
            <div className="relative p-10 border border-white/5 bg-gradient-to-br from-charcoal-900 to-accent-purple/20">
               <span className="absolute top-0 right-0 p-4 text-gold-500/20 opacity-20">
                <Globe size={120} />
              </span>
              <SectionHeader title="Global Target" subtitle="Intercede" className="mb-8" />
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-500 text-xs tracking-widest uppercase mb-4">
                  {CURRENT_PRAYER_TARGET.month} Focus
                </div>
                <h4 className="font-serif text-2xl text-ivory-100 mb-4">{CURRENT_PRAYER_TARGET.region}</h4>
                <p className="text-ivory-200/60 mb-8 line-clamp-3">
                  {CURRENT_PRAYER_TARGET.description}
                </p>
                <Button to="/world-prayer-targets" variant="outline">View Targets</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimony / Impact */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
             <img src="https://picsum.photos/100/100?random=10" alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-gold-500 p-1 object-cover grayscale" />
             <blockquote className="font-serif text-2xl md:text-3xl text-ivory-100 italic leading-relaxed mb-6">
               "The gathering completely shifted my perspective on what it means to be a watchman. The presence of God was tangible."
             </blockquote>
             <cite className="not-italic text-gold-500 tracking-widest text-sm uppercase font-bold">- Sarah J., Participant</cite>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gold-600 text-charcoal-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Ready to stand in the gap?</h2>
          <p className="max-w-xl mx-auto mb-8 font-medium opacity-80">
            Join our mailing list to receive weekly prayer points and event updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" className="bg-charcoal-900 text-ivory-100 hover:bg-charcoal-800">Get Updates</Button>
            <Button to="/prayer-request" className="border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-100">Send Prayer Request</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;