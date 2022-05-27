import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return(
      <>
        <h1>React in Rails with Devise</h1>
        <Nav>
            <NavItem>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reviewindex" className="nav-link">Wng Feed</NavLink>
            </NavItem>
          {logged_in &&
            <NavItem>
              <a href='/users/sign_out' className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href='/users/sign_in' className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href='/users/sign_up' className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}