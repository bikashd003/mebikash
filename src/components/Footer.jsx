import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

import { animateScroll as scroll } from 'react-scroll';
import { Container, Row, Col } from "react-bootstrap";

const date = new Date();

function Footers() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} sm={4}>
            <Link to="/" onClick={scrollToTop}><img className="f-img" src={logo} alt="logo" /></Link>
            
          </Col>
          <Col>
            <div>
              <Row>
                <Col lg={4} sm={4}>
                  <div className="f-middle">
                    <h3>Sitemap</h3>
                    <ul className="sitemap">
                      <li>
                        <Link to="/privacy-policy" onClick={scrollToTop}>Privacy</Link>
                      </li>
                      <li>
                        <Link to="/cookie-policy" onClick={scrollToTop}>Cookie Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-condition" onClick={scrollToTop}>
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={6} sm={4}>
                  <div className="f-right">
                    <h3>Address</h3>
                    <h5>
                      <i className="ri-map-pin-fill"></i> Kanchrapara, Kolkata,
                      India
                    </h5>
                    <h5>
                      <i className="ri-mail-send-fill"></i>{" "}
                      bikashd003@gmail.com
                    </h5>
                    <h5>
                      <i className="ri-phone-line"></i> Phone: +917003725063
                    </h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/its_me_bd_003/"
            className="icon icon--instagram"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100012611074019"
            className="icon icon--facebook"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bikash-das-a7634a225/"
            className="icon icon--linkedin"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="https://github.com/bikashd003" className="icon icon--github">
            <i className="ri-github-line"></i>
          </a>
        </div>
      </Container>
      <p className="f-bottom">
        Created by Bikash Das | &copy; {date.getFullYear()} All rights reserved{" "}
      </p>
    </section>
  );
}

export default Footers;
