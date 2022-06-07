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
      <div>
        <h1>RestaurantShow</h1>
        <h4>{restaurant && restaurant.name}</h4>
        <img src={restaurant && restaurant.img} />
        <h3>zip code: {restaurant && restaurant.zip}</h3>

        {current_user && (
          <Button onClick={this.restaurantReview}>
            <NavLink to={"/reviewnew"}>Add Review</NavLink>
          </Button>
        )}
        {!current_user && (
          <Button>
            <NavItem className="navitem">
            <a href="/users/sign_up"> Sign Up</a>
            </NavItem>
          </Button>
        )}
      </div>
    );
  }
}
