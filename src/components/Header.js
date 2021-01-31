import React from "react";
import { withStyles, Heading, Row, Col, Header, Button } from "arwes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const styles = (theme) => ({
  siteHeader: {
    display: "inline-block",
    width: "100%",
    height: "60px"
  },
  homeHeader: {
    margin: "10px 10px 0px 10px",
    width: "auto",
    fontSize: "35px",
    textDecoration: "none"
  },
  homeLogo: {
    width: "auto",
    display: "inline"
  },
  homeLink: {
    textDecoration: "none",
    border: 0,
    float: "left",
    color: "inherit",
    fontSize: "30px",
    margin: "10px 20px 10px 20px",
  },
  linkGroup: {
    marginTop: "10px",
    float: "right",
  },
  routeLink: {
    textDecoration: "none",
    border: 0,
    color: "inherit",
    fontSize: "24px",
    margin: "10px 20px 10px 20px",
  },
});

const SiteHeader = withStyles(styles)(({ classes, children }) => (

  <Header className={classes.siteHeader} animate >
    <Link className={classes.homeHeader} to="/">
      <Heading className={classes.homeLogo}>Aftercrush</Heading>
    </Link>
    <span className={classes.linkGroup}>
      <Link className={classes.routeLink} to="/about">
        About
      </Link>
      <Link className={classes.routeLink} to="/music">
        Music
      </Link>
      <a
        className={classes.routeLink}
        href={"https://github.com/zvanderwater15/GazerBot"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Lyric Generator
      </a>
      <Link className={classes.routeLink} to="/contact">
        Contact
      </Link>
    </span>
  </Header>
));

export default SiteHeader;
