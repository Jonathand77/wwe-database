import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CalendarEventFill } from 'react-bootstrap-icons';
import meter1 from '../../assets/img/EventRR.png';
import meter2 from '../../assets/img/EventEC.png';
import meter3 from '../../assets/img/EventWM.png';
import meter4 from '../../assets/img/EventBK.png';
import meter5 from '../../assets/img/EventKOTR.png';
import meter6 from '../../assets/img/EventCATC.png';
import meter7 from '../../assets/img/EventMITB.png';
import meter8 from '../../assets/img/EventSS.png';
import meter9 from '../../assets/img/EventBIB.png';
import meter10 from '../../assets/img/EventBB.png';
import meter11 from '../../assets/img/EventCJ.png';
import meter12 from '../../assets/img/EventSSWG.png';
import './Events.css';

export const Events = () => {
  const eventsResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
                responsive={eventsResponsive}
                infinite
                className="owl-carousel owl-theme events-slider"
              >
                <div className="events-item">
                  <img src={meter1} alt="Royal Rumble event poster" />
                  <h5>ROYAL RUMBLE</h5>
                </div>
                <div className="events-item">
                  <img src={meter2} alt="Elimination Chamber event poster" />
                  <h5>ELIMINATION CHAMBER</h5>
                </div>
                <div className="events-item">
                  <img src={meter3} alt="WrestleMania event poster" />
                  <h5>WRESTLEMANIA</h5>
                </div>
                <div className="events-item">
                  <img src={meter4} alt="Backlash event poster" />
                  <h5>BACKLASH</h5>
                </div>
                <div className="events-item">
                  <img src={meter5} alt="King and Queen of the Ring event poster" />
                  <h5>KING AND QUEEN OF THE RING</h5>
                </div>
                <div className="events-item">
                  <img src={meter6} alt="Clash at the Castle event poster" />
                  <h5>CLASH AT THE CASTLE</h5>
                </div>
                <div className="events-item">
                  <img src={meter7} alt="Money in the Bank event poster" />
                  <h5>MONEY IN THE BANK</h5>
                </div>
                <div className="events-item">
                  <img src={meter8} alt="SummerSlam event poster" />
                  <h5>SUMMER SLAM</h5>
                </div>
                <div className="events-item">
                  <img src={meter9} alt="Bash in Berlin event poster" />
                  <h5>BASH IN BERLIN</h5>
                </div>
                <div className="events-item">
                  <img src={meter10} alt="Bad Blood event poster" />
                  <h5>BAD BLOOD</h5>
                </div>
                <div className="events-item">
                  <img src={meter11} alt="Crown Jewel event poster" />
                  <h5>CROWN JEWEL</h5>
                </div>
                <div className="events-item">
                  <img src={meter12} alt="Survivor Series event poster" />
                  <h5>SURVIVOR SERIES</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
