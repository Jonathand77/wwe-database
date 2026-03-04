import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../../assets/img/ImgBanners/Banners/Banner2.jpg';
import { ProjectCard } from '../ProjectCard';
import { getEventDetailById } from '../../data';
import './EventDetail.css';

export const EventDetail = ({ eventId, onBack }) => {
  const eventDetail = getEventDetailById(eventId);

  if (!eventDetail) {
    return null;
  }

  const defaultTab = eventDetail.tabs[0]?.id || 'winners';

  const renderGrid = (items, variant) => (
    <Row>
      {items.map((item) => (
        <ProjectCard key={item.id} variant={variant} {...item} />
      ))}
    </Row>
  );

  return (
    <section className="project event-detail" id="event-detail">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <div className="event-detail__header">
                    <Button variant="outline-light" onClick={onBack}>
                      Back to events
                    </Button>
                    <h2 className="section-title">{eventDetail.title}</h2>
                  </div>
                  <p>{eventDetail.subtitle}</p>

                  <Tab.Container id="event-detail-tabs" defaultActiveKey={defaultTab}>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {eventDetail.tabs.map((tabItem) => (
                        <Nav.Item key={tabItem.id}>
                          <Nav.Link eventKey={tabItem.id}>{tabItem.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      {eventDetail.tabs.map((tabItem) => (
                        <Tab.Pane key={tabItem.id} eventKey={tabItem.id}>
                          {renderGrid(tabItem.items, tabItem.variant)}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right fluid-bg" src={colorSharp2} alt="Background" />
    </section>
  );
};

