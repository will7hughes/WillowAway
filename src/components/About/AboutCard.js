import React from "react";
import Card from "react-bootstrap/Card";
import { ImBubble, ImPointRight, ImStatsDots } from "react-icons/im";
import { Fade } from "react-reveal";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Fade left duration={1000}>
              <p>
                  I am a dedicated and versatile Software Engineer 
                with <span className="green">7+</span> years of experience in the industry. 
                <br />
                <br />
              </p>
            </Fade>

            <Fade left duration={1000}>
              <p>
                Over the years, I've honed my skills in both front-end and back-end technologies, 
                cultivating a passion for crafting innovative solutions to complex challenges.
                <br />
                <br />
              </p>
            </Fade>
            
            <Fade left duration={1000}>
              <p>
                Apart from coding, some other activities that I love to do!
              </p>
            </Fade>
          </p>
          <ul>
            <Fade left duration={1000}>
              <li className="about-activity">
                &#8226; Acrylic Painting
              </li>
            </Fade>
            <Fade left duration={1000}>
              <li className="about-activity">
                &#8226; Playing Games
              </li>
            </Fade>
            <Fade left duration={1000}>
              <li className="about-activity">
                &#8226; Writing Poetry
              </li>
            </Fade>
          </ul>

          <Fade left duration={1000}>
            <p className="about-poem">
              Diversity paints the canvas of our shared reality. Each hue a unique identity.
              <br />
              <br />
              Inclusion weaves the tapestry, transcending society, inviting harmony into the symphony of our community.{" "}
            </p>
            <footer className="blockquote-footer">Willow</footer>
          </Fade>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
