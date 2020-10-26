import React from 'react';
import { withStyles, Heading, Row, Col, Button } from 'arwes';
import { useMediaQuery } from 'react-responsive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const styles = theme => ({
    root: {
      padding: [theme.padding, 0],
      height: '100vh'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '2%' 
    },  
    title: {
        [`@media (min-width: 0px)`]: {
            fontSize: '3rem !important'
        },
        [`@media (min-width: ${theme.responsive.small + 1}px)`]: {
            fontSize: '4rem !important'
        },
        [`@media (min-width: ${theme.responsive.medium + 1}px)`]: {
            fontSize: '6rem !important'
        },
        [`@media (min-width: ${theme.responsive.large + 1}px)`]: {
            fontSize: '9rem !important'
        },
    },
    mobileTitle: {
        fontSize: '3rem !important',
    }, 
    links: {
        display: 'flex',
        width: '70%',
        justifyContent: 'center',
        textAlign: 'center'
    },    
    buttonCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '0px 5px 0px 5px'
    },
    mobileButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%',
        marginBottom: '4%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });
  
  const Container = withStyles(styles)(({ classes, children }) => (
    <div className={classes.root}>
      {children}
    </div>
  ));
  
  const Header = withStyles(styles)(({ classes, children }) => (
    <header className={classes.header}>
        <Heading className={classes.title} node='h1'>{children}</Heading>
    </header>
  ));
  
  const PageButtonMobile = withStyles(styles)(({ classes, children,  page }) => (
    <Row className={classes.mobileButton}>
      <Link to={page}><Button animate show>{children}</Button></Link>
    </Row>
  ));

  const LinkButtonMobile = withStyles(styles)(({ classes, children, link }) => (
    <Row  className={classes.mobileButton}>
        <a href={link} target = "_blank" rel = "noopener noreferrer">
            <Button animate show>{children}</Button>
        </a>
    </Row>
  ));

  const PageButtonDesktop = withStyles(styles)(({ classes, children,  page }) => (
    <Col className={classes.buttonCol}>
      <Link to={page}><Button animate show>{children}</Button></Link>
    </Col>
  ));

  const LinkButtonDesktop = withStyles(styles)(({ classes, children, link }) => (
    <Col className={classes.buttonCol}>
        <a href={link} target = "_blank" rel = "noopener noreferrer">
            <Button animate show>{children}</Button>
        </a>
    </Col>
  ));

  const DesktopLinks = withStyles(styles)(({ classes, children }) => (
    <Row className={classes.links}>
      {children}
    </Row>
  ));

  const MobileLinks = withStyles(styles)(({ classes, children }) => (
    <div>
      {children}
    </div>
  ));

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
