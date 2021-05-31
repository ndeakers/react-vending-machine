import React from "react"
import { Link } from "react-router-dom";
import skittles from "./skittles.jpeg";

/** Skittles
 * 
 * Props: none
 * 
 * State: none
 * 
 * VendingMachine --> Skittles
 */
function Skittles() {
  return (
    <div className="Skittles">
      <img src={skittles}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div >
  );
}

export default Skittles;