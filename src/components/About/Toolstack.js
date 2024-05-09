import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiPostman,
  SiSlack,
  SiAdobephotoshop,
  SiGooglechrome,
  SiMicrosoftword,
  SiWindows,
  SiUnity,
  SiGithub,
  SiWindowsterminal
} from "react-icons/si";
import { Fade } from "react-reveal";

function Toolstack() {
  return (
    <Fade bottom duration={3000} distance="40px">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobephotoshop />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiUnity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglechrome />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftword />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindowsterminal />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </Row>
    </Fade>
  );
}

export default Toolstack;
