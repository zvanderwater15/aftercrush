import React from "react";
import { Heading, Row } from "arwes";
import Content from "../components/Content.js";
import ContentFrame from "../components/ContentFrame.js";

function About() {
  return (
    <div>
      <ContentFrame>
        <Content>
          <Heading>About</Heading>
          <Row>We are a band.... (under construction)</Row>
        </Content>
      </ContentFrame>
    </div>
  );
}

export default About;
