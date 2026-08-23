import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import backgroundImg from '../../assets/img/banners/Banner2.jpg';
import { ProjectCard } from '../ProjectCard';
import './DetailView.css';

export const DetailView = ({ detail, onBack, backLabel = 'Back' }) => {
  if (!detail) {
    return null;
  }

  const defaultTab = detail.tabs[0]?.id;

  const renderGrid = (items, variant) => (
    <Row>
      {items.map((item) => (
        <ProjectCard key={item.id} variant={variant} {...item} />
      ))}
    </Row>
  );

  return (
    <section className="detail-view" id="detail-view">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <div className="detail-view__header">
                    <Button variant="outline-light" className="detail-view__back" onClick={onBack}>
                      <ArrowLeftCircle size={18} /> {backLabel}
                    </Button>
                    <h2 className="section-title">{detail.title}</h2>
                  </div>
                  <p>{detail.subtitle}</p>

                  <Tab.Container id="detail-view-tabs" defaultActiveKey={defaultTab}>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {detail.tabs.map((tabItem) => (
                        <Nav.Item key={tabItem.id}>
                          <Nav.Link eventKey={tabItem.id}>{tabItem.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      {detail.tabs.map((tabItem) => (
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

      <img className="background-image-right fluid-bg" src={backgroundImg} alt="Background" />
    </section>
  );
};
