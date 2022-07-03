import React from "react";
import { Heading, Row } from "arwes";
import ContentFrame from "../components/ContentFrame.js";

function Contact(props) {
  return (
    <Row className="centeredRow">
      <ContentFrame>
        <Heading>Contact</Heading>
        <Row>Send comments and questions to zoe.van42@gmail.com.</Row>
      </ContentFrame>
    </Row>
  );
}

export default Contact;
