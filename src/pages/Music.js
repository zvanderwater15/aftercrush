import React from "react";
import { Heading, Row } from "arwes";
import ContentFrame from "../components/ContentFrame.js";

function Music() {
  return (
    <Row className="centeredRow">
    <ContentFrame>
        <Heading>Music</Heading>
        <Row>
            <a href="https://untilcricketsguideyouback.bandcamp.com/album/no-bad-words-for-the-coast-today-the-execution-of-all-things-covers-comp-2">
            Jenny You're Barely Alive (Rilo Kiley Cover)
            </a>
        </Row>
    </ContentFrame>
    </Row>
  );
}

export default Music;
