import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap';


export default class RestaurantShow extends Component {

 restaurantReview = () => {   
    this.props.handleRestaurantId(this.props.restaurant.id)

  }

  render() {

    let {restaurant} = this.props
    // console.log(restaurant)
    return (
      <div>
        <h1>RestaurantShow</h1>
        <h4>{restaurant && restaurant.name}</h4>
        <img src={restaurant && restaurant.img} />
        <ul>
          <li>zip code: {restaurant && restaurant.zip}</li>
        </ul>
        <Button onClick={this.restaurantReview}>
          <NavLink                        
            to={{
              pathname:"/reviewnew"
              }}>Add Review</NavLink>
        </Button>
      </div>
    )
  }
}
