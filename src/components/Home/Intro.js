import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Intro() {
  return (
    <Container fluid className="intro-section" id="intro">
      <Container>
        <Row>
          <Col md={8} className="intro-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="intro-body">
            I'm a creative individual who thrives on translating my imaginative concepts into the realm of software engineering.
              <br />
              <br />I am fluent in
              <i>
                <b className="blue"> C#, ASP.NET, Javascript, and TypeScript. </b>
              </i>
              <br />
              <br />
              My field of interest's are building new
              <i>
                <b className="blue">Web Applications and Products </b> in areas related to{" "}
                <br></br>
                <b className="blue">
                  E-Commerce and Education.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with 
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="intro-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="intro-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/willowaway"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  intro-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/willowaway/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  intro-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/willow_away"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour intro-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Intro;
