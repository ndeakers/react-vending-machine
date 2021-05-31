import React from "react";
import { Link } from "react-router-dom";
import vendingMachine from "./vendingmachine.png";
import "./VendingMachine.css";

/** VendingMachine
 * 
 * Props: None
 * 
 * State: None
 * 
 * App --> VendingMachine
 */
function VendingMachine() {

  console.log("vendingmachine is", vendingMachine);

  return (
    <div>
      <img src={vendingMachine} />
      <ul className="VendingMachine-links">
        <li>Go to <Link to="/chips">Chips</Link></li>
        <li>Go to <Link to="/gummybears">Gummy Bears</Link></li>
        <li>Go to <Link to="/skittles">Skittles</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;