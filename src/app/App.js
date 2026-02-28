import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../styles/global.css';
import '../styles/common.css';
import './App.css';
import { Banner, ToCome, Footer, NavBar, Projects, Brands, Events, EventDetail } from '../components';
import { hasEventDetail } from '../data/RoyalRumbleData';

function App() {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleSelectEvent = (eventId) => {
    if (hasEventDetail(eventId)) {
      setSelectedEventId(eventId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackFromEventDetail = () => {
    setSelectedEventId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar />

      {selectedEventId ? (
        <EventDetail eventId={selectedEventId} onBack={handleBackFromEventDetail} />
      ) : (
        <>
          <Banner />
          <Brands />
          <Events onSelectEvent={handleSelectEvent} />
          <Projects />
          <ToCome />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
