import React from "react";
import { Heading, Row } from "arwes";
import ContentFrame from "../components/ContentFrame.js";

function About() {
  return (
    <Row className="centeredRow">
      <ContentFrame>
        <Heading>About</Heading>
        <Row>Inactive transcontinental shoegaze band formed in 2021.</Row>
      </ContentFrame>
    </Row>
  );
}

export default About;
