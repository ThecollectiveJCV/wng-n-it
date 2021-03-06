import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <div className="headerMain">
         <h1 className="header">Wng-N-It</h1>
        <h2 className="header2">Why Stress When You Can Wng It?</h2>
        <Nav className="nav">
          
            <div className="logo-home-button">
              <img
                
                src={require("../assets/logo-favicon-headernav.png")}
              />
              </div>
       


          <NavItem className="navitem">
            <NavLink to="/" className="nav-link">
              About Wng-N-It
            </NavLink>
          </NavItem>

          <NavItem className="navitem">
            <NavLink to="/restaurantindex" className="nav-link">
              Restaurants
            </NavLink>
          </NavItem>

          <NavItem className="navitem">
            <NavLink to="/reviewindex" className="nav-link">
              Wng Feed
            </NavLink>
          </NavItem>


          {logged_in && (
            <NavItem className="navitem">
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
          )}

          {!logged_in && (
            <NavItem className="navitem">
              <a href={sign_in_route} className="nav-link">
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
      </div>
    );
  }
}
