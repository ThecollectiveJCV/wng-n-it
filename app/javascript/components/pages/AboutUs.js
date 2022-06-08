import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1>About Us</h1>
        <div class="hero">
          <div class="heroimage">
            <h1 class="herotext">
              Wng-N-It connects people with great local businesses
            </h1>
          </div>
        </div>
        <br />
        <div class="hero2">
          <h2> What is Wng-N-It?</h2>
          <br />
          <p>
            One fateful night many moons ago three gentlemen found themselves
            lost in their everlasting quest for the best wings in their area.
            They searched high and low to no avail. Close to defeat and
            stressed, they put their heads together and decided to create
            "Wng-N-It". Why should other weary travelers have to endure the
            grueling challenge on the quest to find the best wings in there
            area? These men decided to finally say enough is enough, there must
            be a tool out there to make this easier and if there isn't they were
            determined to create it, and so "Wng-N-It" was born. Allowing users
            to find local chicken wings alongside other users reviews for the
            restaurants that serve them.{" "}
          </p>
        </div>
        <div className="aboutusteam">
          <img
            className="aboutusphotos"
            src={require("../assets/vicente1.png")}
          />
          <br />
          <h3>Vicente Saldana - Product and Project Manager</h3>
          <br />

          <img className="aboutusphotos" src={require("../assets/jose.jpeg")} />
          <br />
          <h3>Jose Aguilar - Design Lead</h3>
          <br />
          <img className="aboutusphotos" src={require("../assets/cj.png")} />
          <br />
          <h3>Cj Priedel - Tech Lead</h3>
          <br />
        </div>
      </div>
    );
  }
}
