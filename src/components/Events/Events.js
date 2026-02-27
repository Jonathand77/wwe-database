import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CalendarEventFill } from 'react-bootstrap-icons';
import { defaultCarouselResponsive } from '../../data/carouselConfig';
import { events } from '../../data/eventsData';
import { hasEventDetail } from '../../data/eventDetailsData';
import './Events.css';

export const Events = ({ onSelectEvent }) => {
  const handleEventClick = (eventId) => {
    if (hasEventDetail(eventId) && onSelectEvent) {
      onSelectEvent(eventId);
    }
  };

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="events-box wow zoomIn">
              <h2 className="section-title">
                <CalendarEventFill /> Premium Live Events
              </h2>
              <p>
                WWE Premium Live Events (PLE) are the pinnacle of sports entertainment, offering
                unforgettable shows that combine intense action, dramatic stories and world-class
                production. These events are cornerstones of the WWE calendar for fans around the world
                with their unique blend of excitement and spectacle.
              </p>
              <Carousel
                responsive={defaultCarouselResponsive}
                infinite
                className="owl-carousel owl-theme events-slider"
              >
                {events.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`events-item ${hasEventDetail(event.id) ? 'events-item--active' : 'events-item--disabled'}`}
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
