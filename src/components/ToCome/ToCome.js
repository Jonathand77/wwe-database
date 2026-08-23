import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle, BellFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import toComeImg from '../../assets/img/banners/PosterWrestlemania.jpg';
import './ToCome.css';

export const ToCome = () => {
  return (
    <section className="to-come" id="to-come">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={`to-come-photo ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
                  <img src={toComeImg} alt="WWE teaser poster" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <div className="to-come-content">
                    <h2 className="section-title">
                      <BellFill className="to-come-bell" /> To come!!!
                    </h2>
                    <p>
                      New WWE features and sections are on the way. Stay tuned for updates with more
                      stats, roster details and event data.
                    </p>
                    <button
                      className="to-come-cta"
                      onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Notified <ArrowRightCircle size={22} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

