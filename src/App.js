import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'
import Music from './pages/Music.js'
import backgroundImg from './static/images/background-medium.jpg'
import glow from './static/images/redgrid.svg'

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={createTheme()}>
        <Arwes animate background={backgroundImg} pattern={glow}>
        {anim => (
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/music">
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
