import React from 'react';
import { withStyles, Heading, Row, Col, Button, Frame } from 'arwes';

const styles = theme => ({
    frame: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '10%',
            marginBottom: '2%',
            marginLeft: '25%',
            marginRight: '25%'
        },
    text: {
        padding: '10px 10px 10px 10px'
    }  
});

const Content = withStyles(styles)(({ classes, children }) => (
    <div className={classes.text} >
        {children}
    </div>
  ));

const ContentFrame = withStyles(styles)(({ classes, children }) => (
    <Col s={6} className={classes.frame} >
        <Frame  animate level={1} corners={3}>
            {children}
        </Frame>
    </Col>
  ));
  

function Contact(props) {
    return (
        <ContentFrame>
            <Content>
                <Heading>Contact</Heading>
                <Row>(under construction)</Row>
            </Content>
        </ContentFrame>);
}

export default Contact;
