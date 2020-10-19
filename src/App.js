import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import Home from './pages/Home.js'

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes animate show>
      <Home/>
    </Arwes>
  </ThemeProvider>
);

export default App;
