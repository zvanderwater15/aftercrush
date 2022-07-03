import React from "react";
import { Col, Frame } from "arwes";
import "./ContentFrame.css";

const ContentFrame = (props) => (
  <Col s={12} m={8} l={6} className="contentFrame">
    <Frame animate level={1} corners={3}>
        <div className="contentText">
            {props.children}
        </div>
    </Frame>
  </Col>
);

export default ContentFrame;
