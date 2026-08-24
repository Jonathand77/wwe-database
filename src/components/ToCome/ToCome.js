import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle, BellFill } from 'react-bootstrap-icons';
import toComeImg from '../../assets/img/banners/PosterWrestlemania.jpg';
import './ToCome.css';

export const ToCome = () => {
  return (
    <section className="to-come" id="to-come">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="to-come-photo">
              <img src={toComeImg} alt="WWE teaser poster" />
            </div>
          </Col>
          <Col size={12} md={6}>
            <div>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

