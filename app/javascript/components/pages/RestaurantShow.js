import React, { Component } from 'react'

export default class RestaurantShow extends Component {
  render() {
    let {restaurant} = this.props
    return (
      <div>
        <h1>RestaurantShow</h1>
        <h4>{restaurant && restaurant.name}</h4>
        <img src={restaurant && restaurant.img} />
        <ul>
          <li>zip code: {restaurant && restaurant.zip}</li>
        </ul>
      </div>
    )
  }
}
