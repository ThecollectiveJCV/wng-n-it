import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NotFound extends Component {
  render() {
    return (
      <div class="notfound">
        <h1> Seem's like you couldn't find the wings you were looking for...at least not here. </h1>
        <img class='nfgif' src={require('../assets/shaq-hot-wings.gif')} />
        <h2>Click the button below to head back to Wng Feed</h2>
        <NavLink to={"/reviewindex"}>
        <img                
          src={require("../assets/logo-favicon-headernav.png")}
        />
        </NavLink>
      </div>
    )
  }
}