import { Col, Container, Row } from 'react-bootstrap';
import { BellFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import toComeImg from '../../assets/img/Banners/PosterWrestlemania.jpg';
import './ToCome.css';

export const ToCome = () => {

  return (
    <section className="to-come" id="to-come">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={toComeImg}
                  alt="WWE teaser poster"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <div className="to-come-content">
                    <h2 className="section-title">
                      <BellFill /> To come!!!
                    </h2>
                    <p>
                      New WWE features and sections are on the way. Stay tuned for updates with more
                      stats, roster details and event data.
                    </p>
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
