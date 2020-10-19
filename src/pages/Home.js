import React from 'react';
import '../App.css';
import { withStyles, Row, Col, Button } from 'arwes';

const styles = theme => ({
    root: {
      padding: [theme.padding, 0],
      background: theme.background.primary.level0,
      height: '100vh'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },  
    title: {
      fontSize: '7rem',
      marginBottom: '2%', 
      fontFamily: '"Lucida Console", Monaco, monospace'
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
      <h1 className={classes.title}>{children}</h1>
    </header>
  ));
  
  const Links = withStyles(styles)(({ classes, children }) => (
    <Row className={classes.links}>
      {children}
    </Row>
  ));

  const LinkButton = withStyles(styles)(({ classes, children }) => (
    <Col className={classes.buttonCol}><Button animate show>{children}</Button></Col>
  ));

  function Home(props) {
      return (
        <Container>
            <Header>Aftercrush</Header>
            <Links>
                <LinkButton>About</LinkButton>
                <LinkButton>Music</LinkButton>
                <LinkButton>Lyric Generator</LinkButton>
                <LinkButton>Contact</LinkButton>
            </Links>
        </Container>
      );
  }
  
export default Home;
