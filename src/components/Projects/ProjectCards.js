import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
// import {Fade} from "react-reveal";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* {props.icon} */}
      {/* <div className="card-horizontal"> */}
      <Card.Img variant="top" src={props.logo} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
      </Card.Body>
      {/* </div> */}
    </Card>
  );
}
export default ProjectCards;
