import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionHeader title="Get In Touch" subtitle="Contact Us" />
          <p className="text-ivory-200/70 mb-12 text-lg">
            Whether you have a question about an upcoming event, need prayer, or want to partner with us, we'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-charcoal-800 flex items-center justify-center text-gold-500 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ivory-100 mb-1">Email Us</h4>
                <p className="text-ivory-200/50">info@gatheringwatchmen.org</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-charcoal-800 flex items-center justify-center text-gold-500 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ivory-100 mb-1">Call Us</h4>
                <p className="text-ivory-200/50">+1 (555) 123-4567</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-charcoal-800 flex items-center justify-center text-gold-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ivory-100 mb-1">Location</h4>
                <p className="text-ivory-200/50">Charlotte, NC (Headquarters)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-charcoal-800/20 border border-white/5 p-10">
          <h3 className="font-serif text-2xl text-ivory-100 mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div>
               <label className="block text-xs uppercase tracking-widest text-gold-500 font-bold mb-2">Full Name</label>
               <input type="text" className="w-full bg-charcoal-900 border border-white/10 p-3 text-ivory-100 focus:border-gold-500 outline-none transition-colors" />
            </div>
            <div>
               <label className="block text-xs uppercase tracking-widest text-gold-500 font-bold mb-2">Email Address</label>
               <input type="email" className="w-full bg-charcoal-900 border border-white/10 p-3 text-ivory-100 focus:border-gold-500 outline-none transition-colors" />
            </div>
            <div>
               <label className="block text-xs uppercase tracking-widest text-gold-500 font-bold mb-2">Message</label>
               <textarea rows={5} className="w-full bg-charcoal-900 border border-white/10 p-3 text-ivory-100 focus:border-gold-500 outline-none transition-colors resize-none"></textarea>
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;