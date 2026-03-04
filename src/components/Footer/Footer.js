import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/ImgBanners/Banners/LogoWWE-Database.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://co.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/wwe/?locale=es_LA">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/wwe/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

