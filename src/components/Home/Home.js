import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import handCoding from "../../Assets/hand-coding.svg";
import Intro from "./Intro";
import Projects from "../Projects/Projects";
import { Fade } from "react-reveal";
import { useState } from 'react';
import About from "../About/About";
import Resume from "../Resume/Resume";

function Home() {
    const [open = false, setOpen] = useState(false);
  return (
    <section className="home">
      <Fade md={2} bottom duration={3500} distance="40px">
        <Container fluid className="home-section" id="home">
            <Container className="home-content" >
              <Row>
                <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I am
                    <strong className="main-name"> Willow Hughes</strong>
                  </h1>

                </Col>

                <Col md={5} style={{ paddingBottom: 20 }}>
                  <img
                    src={handCoding}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </Col>
              </Row>
            </Container>
        </Container>
      </Fade>
      <Intro />
      <Projects />
      <About />
      <Resume />
    </section>

  );
}

export default Home;
