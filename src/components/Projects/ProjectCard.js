import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
// import {Fade} from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Card className="project-card-view mb-4">
      {/* {props.icon} */}
      {/* <div className="card-horizontal"> */}
      <Row>
        <Col md="auto">
          <Card.Img className="project-card-img" variant="top" src={props.logo} alt="card-img" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title className="project-card-title">{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer className="project-card-footer">
        <Row>
          <Col className="text-start d-flex justify-content-start">
            <span className="project-card-language">
              <div className="language-color" style={{backgroundColor: props.backgroundColor}}></div>
              {props.languages}
            </span>
          </Col>
          <Col className="text-end">
            <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                GitHub
            </Button>
          </Col>
        </Row>
      </Card.Footer>
      {/* </div> */}
    </Card>
  );
}
export default ProjectCard;
