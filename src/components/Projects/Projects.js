import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { PeopleFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../../assets/img/ImgBanners/Banners/Banner2.jpg';
import { ProjectCard } from '../ProjectCard';
import { rosterTabs } from '../../data/RosterData/rosterData';
import './Projects.css';

export const Projects = () => {
  const renderProjectGrid = (items, variant) => (
    <Row>
      {items.map((project) => (
        <ProjectCard key={project.id} variant={variant} {...project} />
      ))}
    </Row>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2 className="section-title">
                    <PeopleFill /> Roster
                  </h2>
                  <p>
                    Welcome to the WWE Roster section, where you can explore and get to know the
                    superstars that make up the universe of professional wrestling. This section is
                    designed to provide detailed and up-to-date information about each fighter, from the
                    most iconic to the new emerging talents.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {rosterTabs.map((tab) => (
                        <Nav.Item key={tab.id}>
                          <Nav.Link eventKey={tab.id}>{tab.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      {rosterTabs.map((tab) => (
                        <Tab.Pane key={tab.id} eventKey={tab.id}>
                          {renderProjectGrid(tab.items, tab.variant)}
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

