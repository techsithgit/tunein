import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="bodyContainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
