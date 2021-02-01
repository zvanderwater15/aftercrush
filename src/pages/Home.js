import React from 'react';
import {  Heading, Row, Col, Button } from 'arwes';
import { useMediaQuery } from 'react-responsive';
import {Link} from "react-router-dom";
import "./Home.css"
  
  const Container = (props) => (
    <div className="root">
      {props.children}
    </div>
  );
  
  const Header = (props) => (
    <header className="header">
        <Heading className="title" node='h1'>{props.children}</Heading>
    </header>
  );
  
  const PageButtonMobile = (props) => (
    <Row className="mobileButton">
      <Link to={props.page}><Button animate show>{props.children}</Button></Link>
    </Row>
);

  const LinkButtonMobile = (props) => (
    <Row  className="mobileButton">
        <a href={props.link} target = "_blank" rel = "noopener noreferrer">
            <Button animate show>{props.children}</Button>
        </a>
    </Row>
  );

  const PageButtonDesktop = (props) => (
    <Col className="buttonCol">
      <Link to={props.page}><Button animate show>{props.children}</Button></Link>
    </Col>
  );

  const LinkButtonDesktop = (props) => (
    <Col className="buttonCol">
        <a href={props.link} target = "_blank" rel = "noopener noreferrer">
            <Button animate show>{props.children}</Button>
        </a>
    </Col>
  );

  const DesktopLinks = (props) => (
    <Row className="links">
      {props.children}
    </Row>
  );

  const MobileLinks = (props) => (
    <div>
      {props.children}
    </div>
  );

  function Links(props) {
    if (props.isMobile) {
      return <MobileLinks>{props.children}</MobileLinks>;
    }
    else {
        return <DesktopLinks>{props.children}</DesktopLinks>;
    }
  }
  
  function LinkButton(props) {
    if (props.isMobile && props.link) {
      return <LinkButtonMobile link={props.link}>{props.children}</LinkButtonMobile>;
    }
    else if (props.isMobile && props.page) {
      return <PageButtonMobile page={props.page}>{props.children}</PageButtonMobile>;
    }
    else if (!(props.isMobile) && props.link) {
      return <LinkButtonDesktop link={props.link} >{props.children}</LinkButtonDesktop>;
    }
    else {
      return <PageButtonDesktop page={props.page}>{props.children}</PageButtonDesktop>;
    }
  }

  function Home(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    console.log(isMobile)

    return (
        <Container>
            <Header>Aftercrush</Header>
            <Links isMobile={isMobile}>
                <LinkButton page='/about' isMobile={isMobile}>About</LinkButton>
                <LinkButton page='/music' isMobile={isMobile}>Music</LinkButton>
                <LinkButton link='https://github.com/zvanderwater15/GazerBot' isMobile={isMobile}>Lyric Generator</LinkButton>
                <LinkButton page='/contact' isMobile={isMobile}>Contact</LinkButton>
            </Links>
        </Container>
    );
  }
  
export default Home;
