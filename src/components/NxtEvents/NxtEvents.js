import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rocket } from 'react-bootstrap-icons';
import { defaultCarouselResponsive, nxtEvents, hasEventDetail } from '../../data';
import './NxtEvents.css';

export const NxtEvents = ({ onSelectEvent }) => {
  const handleEventClick = (eventId) => {
    if (hasEventDetail(eventId) && onSelectEvent) {
      onSelectEvent(eventId);
    }
  };

  return (
    <section className="nxt-events" id="nxt-events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="nxt-events-box">
              <h2 className="section-title">
                <Rocket /> NXT Premium Live Events
              </h2>
              <p>
                WWE's black-and-gold brand runs its own event calendar. From the era-defining
                TakeOver specials to the modern Stand &amp; Deliver, WarGames and Deadline shows,
                revisit every NXT PLE and its editions.
              </p>
              <Carousel
                responsive={defaultCarouselResponsive}
                infinite
                className="owl-carousel owl-theme nxt-events-slider"
              >
                {nxtEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`nxt-events-item ${hasEventDetail(event.id) ? 'nxt-events-item--active' : 'nxt-events-item--disabled'}`}
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
