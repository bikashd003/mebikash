import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form
                action="https://formspree.io/f/xayzllqn"
                method="POST"
              >
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="First Name" name="First Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" name="Last Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email Address" name="Email Address"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone No." name="Phone No" />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Message" name="Message"></textarea>
                    <button type="submit">
                      <span>Send</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
