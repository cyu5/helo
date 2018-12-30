import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  let Nav = null;
  if (props.location.pathname !== `/`) {
    Nav = (
      <div className="Nav">
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/">Logout</NavLink>
        <NavLink to="/post/:1">New Post</NavLink>
      </div>
    );
  }

  return Nav;
}
