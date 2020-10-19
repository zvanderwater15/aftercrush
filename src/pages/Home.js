import React from 'react';
import { withStyles, Heading, Row, Col, Button } from 'arwes';

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
       fontSize: '9rem !important',
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
  
  const Links = withStyles(styles)(({ classes, children }) => (
    <Row className={classes.links}>
      {children}
    </Row>
  ));

  const LinkButton = withStyles(styles)(({ classes, children, link, page }) => (
    <Col className={classes.buttonCol}>
        <a href={link} target = "_blank" rel = "noopener noreferrer">
            <Button animate show>{children}</Button>
        </a>
    </Col>
  ));

  function Home(props) {
      return (
        <Container>
            <Header>Aftercrush</Header>
            <Links>
                <LinkButton page='/About.js'>About</LinkButton>
                <LinkButton page='/Music.js'>Music</LinkButton>
                <LinkButton link='https://github.com/zvanderwater15/GazerBot'>Lyric Generator</LinkButton>
                <LinkButton page='/Contact.js'>Contact</LinkButton>
            </Links>
        </Container>
      );
  }
  
export default Home;
