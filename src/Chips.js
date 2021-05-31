import React from "react";
import { Link } from "react-router-dom";
import Lays from "./lays.jpg";

/** Chips
 * 
 * Props: none
 * 
 * State: none
 * 
 * VendingMachine --> Chips
*/
function Chips() {
  return (
    <div className="Chips">
      <img src={Lays}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div>
  );
}

export default Chips;