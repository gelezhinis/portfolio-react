import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

import {useContext} from 'react';
import Home from './components/Home/Home';
import Code from './components/Code/Code';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}} >
      <Toggle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
