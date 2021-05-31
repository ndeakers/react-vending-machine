import React from "react"
import { Link } from "react-router-dom";
import gummyBears from "./gummyBears.jpeg";

/** Gummybears
 * 
 * Props- none
 * 
 * State- none
 * 
 * VendingMachine --> Gummybears
*/
function Gummybears() {
  return (
    <div className="GummyBears">
      <img src={gummyBears}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div >
  );
}

export default Gummybears;