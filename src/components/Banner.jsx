import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {Link} from 'react-router-dom'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const toRotate = ["Web Developer", "Coder", "Fast Learner"];

  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(30);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div 
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="main-text">{`Hello, my name is`}</h2>
                  <h1>
                    {"Bikash Das"}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Coder", "Fast Learner" ]'
                    >
                      <span>{"And I'm a "}</span>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <div className="icons">
                    <Link
                      to="https://www.instagram.com/its_me_bd_003/"
                      class="icon icon--instagram"
                    >
                      <i class="ri-instagram-line"></i>
                    </Link>
                    <Link
                      to="https://www.facebook.com/profile.php?id=100012611074019"
                      class="icon icon--facebook"
                    >
                      <i class="ri-facebook-circle-fill"></i>
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/bikash-das-a7634a225/"
                      class="icon icon--linkedin"
                    >
                      <i class="ri-linkedin-line"></i>
                    </Link>
                    <Link
                      to="https://github.com/bikashd003"
                      class="icon icon--github"
                    >
                      <i class="ri-github-line"></i>
                    </Link>
                  </div>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="header-img"
                  />
            
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;