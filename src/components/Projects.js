import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/WorldChampion.png";
import projImg2 from "../assets/img/WweChampion.png";
import projImg3 from "../assets/img/USChampion.png";
import projImg4 from "../assets/img/ICChampion.png";
import projImg5 from "../assets/img/WweTGChampions.png";
import projImg6 from "../assets/img/WorldTGChampions.png";
import projImg7 from "../assets/img/WorldWNChampion.png";
import projImg8 from "../assets/img/WweWNChampion.webp";
import projImg9 from "../assets/img/WweWNTGChampions.png";
import projImg10 from "../assets/img/NXTChampion.png";
import projImg11 from "../assets/img/NXTNAChampion.png";
import projImg12 from "../assets/img/NXTTGChampions.png";
import projImg13 from "../assets/img/NXTWNChampion.png";
import projImg14 from "../assets/img/NXTNAWNChampion.png";
import colorSharp2 from "../assets/img/Banner2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Damien Priest",
      description: "World Champion",
      imgUrl: projImg1,
    },
    {
      title: "Cody Rhodes",
      description: "WWE Champion",
      imgUrl: projImg2,
    },
    {
      title: "Logan Paul",
      description: "United States Champion",
      imgUrl: projImg3,
    },
    {
      title: "Samy Zayn",
      description: "Intercontinental Champion",
      imgUrl: projImg4,
    },
    {
      title: "DIY",
      description: "WWE Tag Team Champions",
      imgUrl: projImg5,
    },
    {
      title: "Judment Day",
      description: "World Tag Team Champions",
      imgUrl: projImg6,
    },
    {
      title: "Liv Morgan",
      description: "World Women´s Champion",
      imgUrl: projImg7,
    },
    {
      title: "Bayley",
      description: "WWE Women´s Champion",
      imgUrl: projImg8,
    },
    {
      title: "Alba Fyre & Isla Dawn",
      description: "World Tag Team Women´s Champions",
      imgUrl: projImg9,
    },
    {
      title: "Ethan Page",
      description: "NXT Champion",
      imgUrl: projImg10,
    },
    {
      title: "Oba Femi",
      description: "NXT North American Champion",
      imgUrl: projImg11,
    },
    {
      title: "Axiom & Nethan Frazer",
      description: "NXT Tag Team Champions",
      imgUrl: projImg12,
    },
    {
      title: "Roxan Perez",
      description: "NXT Women´s Champion",
      imgUrl: projImg13,
    },
    {
      title: "Kelani Jordan",
      description: "nxt Women´s North American Champion",
      imgUrl: projImg14,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Roster</h2>
                <p>Welcome to the WWE Roster section, where you can explore and get to know the superstars that make up the universe of professional wrestling. This section is designed to provide detailed and up-to-date information about each fighter, from the most iconic to the new emerging talents.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Champions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Roster</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">leyends</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Welcome to the WWE Roster section, where you can explore and get to know the superstars that make up the universe of professional wrestling. This section is designed to provide detailed and updated information about each male and female fighter that makes up the star scene today.</p>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Welcome to the WWE Roster section, where you can explore and get to know the superstars that make up the universe of professional wrestling. This section is designed to provide detailed and up-to-date information on each of the most iconic fighters of all time.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}