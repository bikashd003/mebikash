import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { animateScroll as scroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto n-items">
            <HashLink as={Link} to="/"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={() => { onUpdateActiveLink('home'); scrollToTop(); }}>Home</HashLink>
            <HashLink to="/#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</HashLink>
            <HashLink to="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</HashLink>
            <HashLink to="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</HashLink>
          </Nav>
          <span className="navbar-text">
            <HashLink smooth to="/#contact" >
              <button className="vvd"><span>Contact</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
