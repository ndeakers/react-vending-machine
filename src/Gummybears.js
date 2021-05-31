import React from "react"
import { Link } from "react-router-dom";
const GUMMY_BEAR_IMG = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg"
/*
* Props- none
*
*VendingMaching --> Gummybears
*/
function Gummybears() {
  return (
    <div className="GummyBears">
      <img src={GUMMY_BEAR_IMG}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div >
  )
}

export default Gummybears;