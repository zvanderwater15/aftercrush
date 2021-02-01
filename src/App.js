import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'
import Music from './pages/Music.js'
import SiteHeader from './components/Header.js'
import backgroundImg from './static/images/background.jpg'
import glow from './static/images/redgrid.svg'

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={createTheme()}>
        <Arwes animate background={backgroundImg} pattern={glow}>
        {anim => (
          <Switch>
            <Route path="/about">
              <SiteHeader/>
              <About />
            </Route>
            <Route path="/contact">
              <SiteHeader/>
              <Contact />
            </Route>
            <Route path="/music">
              <SiteHeader/>
              <Music />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>      
        )}
        </Arwes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
