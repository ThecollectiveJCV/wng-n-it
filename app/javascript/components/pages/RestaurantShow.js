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
        <ul>
          <li>zip code: {restaurant && restaurant.zip}</li>
        </ul>
        {current_user && (
          <Button onClick={this.restaurantReview}>
            <NavLink to={"/reviewnew"}>Add Review</NavLink>
          </Button>
        )}
        {!current_user && (
          <Button>
            <NavItem className="navitem">
              <a href="/users/sign_up">Sign Up</a>
            </NavItem>
          </Button>
        )}
      </div>
    );
  }
}
