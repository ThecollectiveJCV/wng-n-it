import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div class="notfound">
        <h1> Seem's like you couldn't find the wings you were looking for...at least not here. </h1>
        <img class='nfgif' src={require('../assets/error-404-shaq-gif.gif')} />
        <h2>Click the button below to head back to Wng Feed</h2>
        <button class='nfbutton'> Wng Feed </button>
      </div>
    )
  }
}
