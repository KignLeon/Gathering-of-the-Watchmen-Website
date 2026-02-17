import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const PrayerRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate static form submission
    setTimeout(() => setSubmitted(true), 500);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="font-serif text-4xl text-gold-500 mb-6">Prayer Received</h2>
        <p className="text-ivory-200/70 mb-8 text-lg">
          We are standing in agreement with you. Your request has been sent to our intercessory team.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Send Another</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <SectionHeader title="How Can We Pray?" subtitle="Prayer Request" centered />
      
      <div className="bg-charcoal-800/20 p-8 md:p-12 border border-white/5">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Name (Optional)</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-charcoal-900 border-b border-white/10 focus:border-gold-500 outline-none py-3 text-ivory-100 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Email (Optional)</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-charcoal-900 border-b border-white/10 focus:border-gold-500 outline-none py-3 text-ivory-100 transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="request" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Your Prayer Request (Required)</label>
            <textarea 
              id="request" 
              required
              rows={6}
              className="w-full bg-charcoal-900 border-b border-white/10 focus:border-gold-500 outline-none py-3 text-ivory-100 transition-colors resize-none"
              placeholder="Share your burden with us..."
            />
          </div>

          <div className="text-center pt-4">
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrayerRequest;