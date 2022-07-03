import React, { useState } from "react";
import { Heading, Header, Row } from "arwes";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "./MenuIcon";
import "./Header.css";

const SiteHeader = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  if (isMobile) {
    return <MobileSiteHeader />;
  } else {
    return (
      <Header id="siteHeader" animate>
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
          <Link className="routeLink" to="/projects">
            Projects
          </Link>
          <Link className="routeLink" to="/contact">
            Contact
          </Link>
        </span>
      </Header>
    );
  }
}

const MobileSiteHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const links = (
    <span>
      <Row>
        <Link className="routeLink" onClick={() => setMenuOpened(false)} to="/about">
          About
        </Link>
      </Row>
      <Row>
        <Link className="routeLink" onClick={() => setMenuOpened(false)} to="/music">
          Music
        </Link>
      </Row>
      <Row>
        <Link className="routeLink" onClick={() => setMenuOpened(false)} to="/projects">
          Projects
        </Link>
      </Row>
      <Row>
        <Link className="routeLink" onClick={() => setMenuOpened(false)} to="/contact">
          Contact
        </Link>
      </Row>
    </span>
  );

  return (
    <Header id="siteHeader" animate>
      <Link id="homeLink" to="/">
        <Heading id="homeLogo">Aftercrush</Heading>
      </Link>
      <span className="linkGroup">
        <MenuIcon setMenuOpened={setMenuOpened} />
      </span>
      {menuOpened && links}
    </Header>
  );
};

export default SiteHeader;
