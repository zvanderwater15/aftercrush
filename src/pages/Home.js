import React, { useEffect } from "react";
import { Heading, Row, Col, Button } from "arwes";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const twttr = window.twttr;

  useEffect(() => {
    if (twttr) {
      twttr.widgets.load();
    }  
  }, [twttr])

  return (
    <Container>
      <Header>Aftercrush</Header>
      <Row className="centeredRow">
        <LinkButton page="/about">About</LinkButton>
        <LinkButton page="/music">Music</LinkButton>
        <LinkButton page="/projects">Projects</LinkButton>
        <LinkButton page="/contact">Contact</LinkButton>
      </Row>
      <Row className="centeredRow">
        <Col s={12} m={8} l={6} className="twitter-container">
          <a
            class="twitter-timeline"
            data-height="400"
            data-theme="dark"
            href="https://twitter.com/Aftercrush1?ref_src=twsrc%5Etfw"
          >
            Tweets by Aftercrush
          </a>
        </Col>
      </Row>
    </Container>
  );
}

const Container = (props) => <div className="root">{props.children}</div>;

const Header = (props) => (
  <header className="header">
    <Heading id="title" node="h1">
      {props.children}
    </Heading>
  </header>
);

function LinkButton(props) {
  return (
    <Col className="buttonCol">
      <Link to={props.page}>
        <Button animate show>
          {props.children}
        </Button>
      </Link>
    </Col>
  );
}

export default Home;
