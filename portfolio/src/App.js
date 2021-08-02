import React from "react";
import { Route } from "react-router";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
