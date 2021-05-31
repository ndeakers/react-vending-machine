import React from "react";
import { Link } from "react-router-dom";
import Lays from "../public/Lays.jpg";

const LAYS_IMAGE = "https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg";
/*
* Props- none
*
*VendingMaching --> Chips
*/
function Chips() {
  return (
    <div className="Chips">
      <img src={LAYS_IMAGE}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div>
  )
}

export default Chips;