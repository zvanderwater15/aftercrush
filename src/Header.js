import React from 'react';
import { withStyles, Heading, Row, Col, Header, Button } from 'arwes';
import { useMediaQuery } from 'react-responsive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = theme => ({
    homebutton: {
        textDecoration: 'none',
        border: 0,
        color: 'inherit'
    }
});

 
const SiteHeader = withStyles(styles)(({ classes, children }) => (
    <Header animate>
    <Link  className={classes.homebutton} to='/'>
        <h1 style={{margin: 0}}>
                Aftercrush
        </h1>
    </Link>
</Header>
));
  
export default SiteHeader;
