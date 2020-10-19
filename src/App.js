import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import Home from './pages/Home.js'
import backgroundImg from './static/images/background-large.jpg'
import glow from './static/images/redgrid.svg'

function App(props) {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate background={backgroundImg} pattern={glow}>
        <Home/>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
