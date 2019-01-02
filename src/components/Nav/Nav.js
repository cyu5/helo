import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser } from "../../ducks/reducer";

function Nav(props) {
  let Nav = null;
  if (props.location.pathname !== `/`) {
    Nav = (
      <div className="Nav">
        <img
          className="profile"
          src={props.profile_pic}
          alt={props.profile_pic}
        />
        <p>{props.username}</p>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/post/:1">New Post</NavLink>
        <NavLink to="/" onClick={props.clearUser}>
          Logout
        </NavLink>
      </div>
    );
  }

  return Nav;
}

const mapStateToProps = state => {
  const { username, profile_pic } = state;
  return { username, profile_pic };
};

const mapDispatchToProps = { clearUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
