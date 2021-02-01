import React from "react";
import { Heading, Row } from "arwes";
import Content from "../components/Content.js";
import ContentFrame from "../components/ContentFrame.js";

function Music() {
  return (
    <ContentFrame>
      <Content>
        <Heading>Music</Heading>
        <Row>
          <a href="https://untilcricketsguideyouback.bandcamp.com/album/no-bad-words-for-the-coast-today-the-execution-of-all-things-covers-comp-2">
            Jenny You're Barely Alive (Rilo Kiley Cover)
          </a>
        </Row>
      </Content>
    </ContentFrame>
  );
}

export default Music;
