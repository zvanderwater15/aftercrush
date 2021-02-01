import React from "react";
import {  Heading, Header } from "arwes";
import { Link } from "react-router-dom";
import './Header.css'

const SiteHeader = () => (
  <Header id="siteHeader" animate >
    <Link id="homeLink" to="/">
      <Heading id="homeLogo">Aftercrush</Heading>
    </Link>
    <span className="linkGroup">
      <Link className="routeLink" to="/about">
        About
      </Link>
      <Link className="routeLink" to="/music">
        Music
      </Link>
      <a
        className="routeLink"
        href={"https://github.com/zvanderwater15/GazerBot"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Lyric Generator
      </a>
      <Link className="routeLink" to="/contact">
        Contact
      </Link>
    </span>
  </Header>
);

export default SiteHeader;
