import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import handCoding from "../../Assets/hand-coding.svg";
import Intro from "./Intro";
import Projects from "../Projects/Projects";
// import Particle from "../Particle";


function Home() {
  return (
    <section className="home">
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
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
      <Intro />
    </section>
  );
}

export default Home;
