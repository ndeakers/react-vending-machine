import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Gummybears from "./Gummybears";
import Skittles from "./Skittles";
import NavBar from "./NavBar"

/** App
 * 
 * Props: none
 * State: none
 * 
 * App --> BrowserRouter, VendingMachine, Chips, Skittles, Gummybears
 * browserrouter can go a level higher in the index.js
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/gummybears">
          <Gummybears />
        </Route>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
      </BrowserRouter>
    </div >
  );
}

export default App;
