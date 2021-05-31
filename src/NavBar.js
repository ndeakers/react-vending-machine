import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
/**
 * NavBar ---> Home || Skittles || Gummybears ||Chips || 
 * 
 */

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/skittles">
        Skittles
      </NavLink>
      <NavLink exact to="/gummybears">
        Gummybears
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
    </nav>
  );
}

export default NavBar;