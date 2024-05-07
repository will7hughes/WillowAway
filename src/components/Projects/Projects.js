import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import {
//   FaWater,
//   FaQuestion,
//   FaMicrophone,
//   FaClock
// } from "react-icons/fa";
import clearWaterLogo from "../../Assets/Projects/clear-water-logo-md.png";
import questContinueLogo from "../../Assets/Projects/quest-continue-logo-md.png";
// import dialectorLogo from "../../Assets/Projects/dialector-logo.png";
// import cocomoLogo from "../../Assets/Projects/cocomo-logo.png";

function Projects() {
  return (
    <Container id="project" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <ProjectCard
              logo={clearWaterLogo}
              title="ClearWater"
              description="ClearWater is a Unity puzzle game that challenges players to strategically rotate mazes, guiding a pool of water to the finish line. Navigating through unpure water sections is essential, as encountering dirty water reduces the water's purity level, impacting the player's star rating upon completing each level."
              languages="C#"
              backgroundColor="#178600"
              ghLink="https://github.com/willowaway/Clear-Water"
            />
            
        <ProjectCard
          logo={questContinueLogo}
          title="QuestContinue"
          description="QuestContinue is a lightweight quality-of-life mod for Elder Scrolls Online that enhances your questing experience. With QuestContinue, accepting a quest automatically adds it to the quest watch list and sets it to super tracked, eliminating the need for manual tracking and ensuring a seamless transition to your next quest."
          languages="Lua"
          backgroundColor="#000080"
          ghLink="https://github.com/willowaway/Clear-Water"
        />
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          </Col>
          <Col md={4} className="project-card">
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
