import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/common.css';
import './App.css';
import {
  Banner,
  ToCome,
  Footer,
  NavBar,
  Projects,
  Brands,
  Events,
  EventDetail,
  BrandDetail,
} from './components';
import { hasEventDetail, hasBrandDetail } from './data';

function App() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  const handleSelectEvent = (eventId) => {
    if (hasEventDetail(eventId)) {
      setSelectedEventId(eventId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectBrand = (brandId) => {
    if (hasBrandDetail(brandId)) {
      setSelectedBrandId(brandId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (sectionId) => {
    if (selectedEventId || selectedBrandId) {
      setPendingScrollTarget(sectionId);
      setSelectedEventId(null);
      setSelectedBrandId(null);
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    if (pendingScrollTarget && !selectedEventId && !selectedBrandId) {
      scrollToSection(pendingScrollTarget);
      setPendingScrollTarget(null);
    }
  }, [selectedEventId, selectedBrandId, pendingScrollTarget]);

  const renderMainView = () => {
    if (selectedEventId) {
      return <EventDetail eventId={selectedEventId} onBack={() => handleNavigate('home')} />;
    }

    if (selectedBrandId) {
      return <BrandDetail brandId={selectedBrandId} onBack={() => handleNavigate('home')} />;
    }

    return (
      <>
        <Banner />
        <Brands onSelectBrand={handleSelectBrand} />
        <Events onSelectEvent={handleSelectEvent} />
        <Projects />
        <ToCome />
      </>
    );
  };

  return (
    <div className="App">
      <NavBar onNavigate={handleNavigate} />
      {renderMainView()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
