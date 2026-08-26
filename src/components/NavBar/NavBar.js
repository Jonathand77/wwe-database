import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/banners/LogoWWE-Database.png';
import navIcon1 from '../../assets/img/icons/nav-icon1.svg';
import portfolioIcon from '../../assets/img/icons/portfolio.svg';
import navIcon3 from '../../assets/img/icons/nav-icon3.svg';
import './NavBar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'brands', label: 'Brands', href: '#brands' },
  { id: 'events', label: 'Events', href: '#events' },
  { id: 'historic-events', label: 'Legacy PLEs', href: '#historic-events' },
  { id: 'projects', label: 'Champions', href: '#projects' },
  { id: 'to-come', label: 'To Come', href: '#to-come' },
];

export const NavBar = ({ onNavigate }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = null;

      NAV_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      if (current) {
        setActiveLink(current);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavLinkClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    setExpanded(false);
    onNavigate?.(id);
  };

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      className={scrolled ? 'scrolled' : ''}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="navbar-brand-logo"
          onClick={(event) => onNavLinkClick(event, 'home')}
        >
          <img src={logo} alt="WWE Database" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NAV_LINKS.map(({ id, label, href }) => (
              <Nav.Link
                key={id}
                href={href}
                className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                aria-current={activeLink === id ? 'page' : undefined}
                onClick={(event) => onNavLinkClick(event, id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
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
                href="https://www.instagram.com/jonathandvid77?igsh=eGp6N2F4dTZnMDlu"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
