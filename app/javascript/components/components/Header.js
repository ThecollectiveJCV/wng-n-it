import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { logged_in, current_user } = this.props;

    return (
      <>
        <h1>Why Stress When You Can Wng It?</h1>
        <Nav className="nav">
          <NavItem className="navitem">
            <NavLink to="/reviewindex" className="nav-link">
              <img
                className="logo-home-button"
                src={require("../assets/logo-favicon-headernav.png")}
              />
            </NavLink>
          </NavItem>
          <NavItem className="navitem">
            <NavLink to="/aboutus" className="nav-link">
              About Wng-N-It App
            </NavLink>
          </NavItem>
          <NavItem className="navitem">
            <NavLink to="/reviewindex" className="nav-link">
              Wng Feed
            </NavLink>
          </NavItem>
          {logged_in && (
            <NavItem className="navitem">
              <a href="/users/sign_out" className="nav-link">
                Sign Out
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem className="navitem">
              <a href="/users/sign_in" className="nav-link">
                Sign In
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem className="navitem">
              <a href="/users/sign_up" className="nav-link">
                Sign Up
              </a>
            </NavItem>
          )}
        </Nav>
      </>
    );
  }
}
