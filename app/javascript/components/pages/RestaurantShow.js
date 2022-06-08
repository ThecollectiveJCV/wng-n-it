import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, NavItem } from "reactstrap";

export default class RestaurantShow extends Component {
  restaurantReview = () => {
    this.props.handleRestaurantId(this.props.restaurant.id);
  };

  render() {
    let { restaurant } = this.props;
    let { current_user } = this.props;
    return (
      <div class="resShow">
        <h1>Restaurant Info</h1>
        <img
                src={require("../assets/logo-favicon-headernav.png")}
                     />
        <h2>{restaurant && restaurant.name}</h2>
        <img src={restaurant && restaurant.img} />
        <h3>Location: {restaurant && restaurant.zip}</h3>
        <h3>Overall rating: {restaurant && restaurant.avg_rating}</h3>

        {current_user && (
          <Button onClick={this.restaurantReview}className="btnShow">
            <NavLink to={"/reviewnew"} className="nav-link">Add Review</NavLink>
          </Button>
        )}
        {!current_user && (
          <Button className="btnShow">
            <NavItem className="navitem">
            <a href="/users/sign_up"> Sign Up</a>
            </NavItem>
          </Button>
        )}
      </div>
    );
  }
}
