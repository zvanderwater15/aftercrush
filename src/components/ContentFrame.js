import React from "react";
import { Col, Frame } from "arwes";
import "./ContentFrame.css";

const ContentFrame = (props) => (
  <Col s={6} className="contentFrame">
    <Frame animate level={1} corners={3}>
      {props.children}
    </Frame>
  </Col>
);

export default ContentFrame;
