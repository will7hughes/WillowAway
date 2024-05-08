import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Button from "react-bootstrap/Button";

import clearWaterLogo from "../../Assets/Projects/clear-water-logo.png";
import questContinueLogo from "../../Assets/Projects/quest-continue-logo.png";
import dialektorLogo from "../../Assets/Projects/dialektor-logo.png";
import cocomoLogo from "../../Assets/Projects/cocomo-logo.png";

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

        <ProjectCard
          logo={dialektorLogo}
          title="Dialektor"
          description="Dialektor is a tool for recording audio and creating a ledger in order to study the changes overtime."
          languages="JavaScript"
          backgroundColor="#f1e05a"
          ghLink="https://github.com/willowaway/Dialektor"
        />

        <ProjectCard
          logo={cocomoLogo}
          title="Cocomo"
          description="The model utilizes team size and lines of code as input variables, offering a flexible framework for project management. By performing basic or intermediate calculations, it provides valuable insights into staff size, effort estimates, and development time, with a particular focus on sensitivity to changes in team size and lines of code."
          languages="Kotlin"
          backgroundColor="#A97BFF"
          ghLink="https://github.com/willowaway/Cocomo"
        />
        <Button
            variant="primary"
            href="https://github.com/willowaway"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            View More
          </Button>
      </Container>
    </Container>
  );
}

export default Projects;
