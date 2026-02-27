import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/Banners/LogoWWE-Database.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#brands"
              className={activeLink === 'brands' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('brands')}
            >
              Brands
            </Nav.Link>
            <Nav.Link
              href="#events"
              className={activeLink === 'events' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('events')}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Champions
            </Nav.Link>
            <Nav.Link
              href="#to-come"
              className={activeLink === 'toCome' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('toCome')}
            >
              To Come
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://co.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100003792250786&mibextid=ZbWKwL">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/jonathandvid77?igsh=eGp6N2F4dTZnMDlu">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
