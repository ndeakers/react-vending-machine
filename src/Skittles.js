import React from "react"
import { Link } from "react-router-dom";
const SKITTLES_IMG = "https://www.candywarehouse.com/item-images/126889-01_skittles-candy-54-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000"
/*
* Props- none
*
*VendingMaching --> Skittles
*/
function Skittles() {
  return (
    <div className="Skittles">
      <img src={SKITTLES_IMG}></img>
      <p>Go to <Link to="/">Vending Machine</Link></p>
    </div >
  )
}

export default Skittles;