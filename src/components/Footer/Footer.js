import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/banners/LogoWWE-Database.png';
import navIcon1 from '../../assets/img/icons/nav-icon1.svg';
import portfolioIcon from '../../assets/img/icons/portfolio.svg';
import navIcon3 from '../../assets/img/icons/nav-icon3.svg';
import './Footer.css';

export const Footer = ({ onNavigate }) => {
  const onLogoClick = (event) => {
    event.preventDefault();
    onNavigate?.('home');
  };

  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#home" className="footer-logo" onClick={onLogoClick}>
              <img src={logo} alt="WWE Database" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://co.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://jonathand77.github.io/mi-portafolio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio"
              >
                <img src={portfolioIcon} alt="" />
              </a>
              <a
                href="https://www.instagram.com/wwe/"
                target="_blank"
                rel="noreferrer"
                aria-label="WWE on Instagram"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
