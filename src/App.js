import React from "react";
import './App.css';
import Chips from "./Chips"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/gummybears">
          <Gummybears />
        </Route>
        <Route exact path="/skittle">
          <Skittles />
        </Route>

      </BrowserRouter>
    </div >
  );
}

export default App;
