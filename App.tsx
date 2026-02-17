import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Events from './pages/Events';
import PrayerRequest from './pages/PrayerRequest';
import WorldPrayerTargets from './pages/WorldPrayerTargets';
import Media from './pages/Media';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="training" element={<Training />} />
          <Route path="events" element={<Events />} />
          <Route path="prayer-request" element={<PrayerRequest />} />
          <Route path="world-prayer-targets" element={<WorldPrayerTargets />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;