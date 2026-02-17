export interface NavItem {
  label: string;
  path: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  instructor: string;
  date: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface PrayerTarget {
  id: string;
  region: string;
  focus: string;
  description: string;
  points: string[];
  month: string;
}

export interface MediaItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  type: 'Sermon' | 'Clip' | 'Worship';
}