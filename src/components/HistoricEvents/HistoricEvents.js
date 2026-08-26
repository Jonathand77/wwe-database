import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HourglassSplit } from 'react-bootstrap-icons';
import { defaultCarouselResponsive, historicEvents, hasEventDetail } from '../../data';
import './HistoricEvents.css';

export const HistoricEvents = ({ onSelectEvent }) => {
  const handleEventClick = (eventId) => {
    if (hasEventDetail(eventId) && onSelectEvent) {
      onSelectEvent(eventId);
    }
  };

  return (
    <section className="historic-events" id="historic-events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="historic-events-box">
              <h2 className="section-title">
                <HourglassSplit /> Historic Premium Live Events
              </h2>
              <p>
                Before the modern era, WWE built its legacy through one-off specials and
                short-lived series like In Your House, King of the Ring and the UK-exclusive
                shows. Revisit the editions that shaped sports entertainment history.
              </p>
              <Carousel
                responsive={defaultCarouselResponsive}
                infinite
                className="owl-carousel owl-theme historic-events-slider"
              >
                {historicEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`historic-events-item ${hasEventDetail(event.id) ? 'historic-events-item--active' : 'historic-events-item--disabled'}`}
                    onClick={() => handleEventClick(event.id)}
                    disabled={!hasEventDetail(event.id)}
                    aria-label={`Open ${event.name} details`}
                  >
                    <img src={event.image} alt={event.alt} />
                    <h5>{event.name}</h5>
                  </button>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
