import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return ( 
    <Router>
      <header>
        <NavLink className="link" to="/">Login</NavLink>
        <NavLink className="link" to="/bubble-page">Bubblepage</NavLink>
      </header>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble-page" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
