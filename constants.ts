import { NavItem, Event, TrainingModule, PrayerTarget, MediaItem } from './types';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export const LOGO_URL = "https://res.cloudinary.com/ddnhp0hzd/image/upload/v1771361755/IMG_0547-removebg-preview_ypncml.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Training', path: '/training' },
  { label: 'Events', path: '/events' },
  { label: 'Prayer Requests', path: '/prayer-request' },
  { label: 'World Targets', path: '/world-prayer-targets' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Mail, href: '/contact' },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Global Watchmen Summit 2024',
    date: 'October 15-18, 2024',
    location: 'Charlotte, NC',
    description: 'A 4-day gathering of intercessors from around the globe to align with heaven’s agenda.',
    imageUrl: 'https://picsum.photos/800/600?grayscale',
  },
  {
    id: '2',
    title: 'Regional Prayer Intensive',
    date: 'November 2, 2024',
    location: 'Online / Zoom',
    description: 'Deep dive into strategic prayer for local communities and governance.',
    imageUrl: 'https://picsum.photos/800/601?grayscale',
  }
];

export const LATEST_TRAINING: TrainingModule = {
  id: '101',
  title: 'Foundations of Intercession',
  instructor: 'Dr. Sarah Alenson',
  date: 'Starts Nov 10, 2024',
  description: 'Learn the biblical mandate for the watchman anointing and how to effectively stand in the gap.',
  level: 'Beginner',
};

export const CURRENT_PRAYER_TARGET: PrayerTarget = {
  id: 'target-nov-24',
  region: 'Southeast Asia',
  focus: 'Spiritual Awakening & Church Unity',
  month: 'November 2024',
  description: 'We are focusing our intercession on the nations of Southeast Asia, specifically praying for a fresh wave of the Spirit and unity among local church bodies.',
  points: [
    'Pray for protection over underground church networks.',
    'Pray for wisdom for leaders navigating complex political landscapes.',
    'Pray for a harvest of youth turning to truth.',
    'Pray for resources to reach rural villages.'
  ]
};

export const MEDIA_ITEMS: MediaItem[] = [
  { id: '1', title: 'The Call to Watch', thumbnail: 'https://picsum.photos/400/300?random=1', duration: '5:23', type: 'Clip' },
  { id: '2', title: 'Understanding Times & Seasons', thumbnail: 'https://picsum.photos/400/300?random=2', duration: '45:10', type: 'Sermon' },
  { id: '3', title: 'Worship Encounter Highlights', thumbnail: 'https://picsum.photos/400/300?random=3', duration: '12:45', type: 'Worship' },
  { id: '4', title: 'Authority in Prayer', thumbnail: 'https://picsum.photos/400/300?random=4', duration: '8:15', type: 'Clip' },
];