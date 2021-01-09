import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="pageTransition">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
