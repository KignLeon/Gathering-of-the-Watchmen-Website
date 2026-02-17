import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { LATEST_TRAINING } from '../constants';

const Training: React.FC = () => {
  const courses = [
    LATEST_TRAINING,
    {
      id: '102',
      title: 'Prophetic Intercession',
      instructor: 'Rev. David Chen',
      date: 'Starts Dec 05, 2024',
      description: 'Moving beyond petition into hearing God\'s heart and praying it back to earth.',
      level: 'Intermediate',
    },
    {
      id: '103',
      title: 'Spiritual Mapping',
      instructor: 'Team Lead',
      date: 'On Demand',
      description: 'How to research and pray over the history and strongholds of your city.',
      level: 'Advanced',
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionHeader title="Equipping The Saints" subtitle="Training" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-charcoal-800/20 border border-white/5 p-8 flex flex-col h-full hover:border-gold-500/30 transition-colors">
            <div className="mb-4">
              <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-widest border ${
                course.level === 'Beginner' ? 'border-green-500/30 text-green-500' :
                course.level === 'Intermediate' ? 'border-gold-500/30 text-gold-500' :
                'border-red-500/30 text-red-500'
              } rounded`}>
                {course.level}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-ivory-100 mb-2">{course.title}</h3>
            <p className="text-sm text-ivory-200/40 mb-4">{course.instructor} • {course.date}</p>
            <p className="text-ivory-200/60 mb-8 flex-grow">
              {course.description}
            </p>
            <Button variant="secondary" className="w-full">Enroll Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;