import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class='hero'>
          <div class='heroimage'>
            <h1 class='herotext'>Wng-N-It connects people with great local businesses</h1>
          </div>
        </div>
        <h1>About Us</h1>
        <br />
        <h2> What is Wng-N-It?</h2>
        <br />

        <p>One fateful night many moons ago three gentlemen found themselves lost in their everlasting quest for the best wings in their area. They searched high and low to now avail, close to defeat they put their heads together and decided to create Wng-N-It. Why should other weary travelers have to fight the grueling challenge on the quest to find the best wings when these men decided to finally say enough is enough, there must be a tool to make this easier and if there isn't they were determined to create it.</p>

        <img className="aboutusphotos" src={require('../assets/vicente.png')}/>
        <br />
        <h3>Vicente</h3>
        <br />

        <img className="aboutusphotos" src={require('../assets/jose.png')}/>
        <br />
        <h3>Jose</h3>
        <br />

      </div>
    )
  }
}
