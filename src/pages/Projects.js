import React from "react";
import { Heading, Row } from "arwes";
import ContentFrame from "../components/ContentFrame.js";

function Projects() {
  return (
    <Row className="centeredRow">
    <ContentFrame>
        <Heading>Projects</Heading>
        <Row>
            <a href="https://github.com/zvanderwater15/GazerBot">
            Lyric Generator
            </a>
        </Row>
    </ContentFrame>
    </Row>
  );
}

export default Projects;
