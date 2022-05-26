import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, Button } from "reactstrap";

export default class RestaurantIndex extends Component {
  render() {
    let {restaurants} = this.props
    return (
      <div className='ContainerRestaurant'>RestaurantIndex
      <Col sm="6">
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <Card body key={restaurant.id}>
                    <CardTitle style={{ textAlign: "center" }}>
                      <img src={restaurant.img}  />
                      <h4>Name: {restaurant.name}</h4>
                      <h4>City: {restaurant.zip}</h4>
                      <h4>Rating: {restaurant.avg_rating}</h4>
                      <br />
                      <Button className="restaurantshow-btn">
                        <NavLink to={`/restaurantshow/${restaurant.id}`}>
                          View restaurant{" "}
                        </NavLink>
                      </Button>
                    </CardTitle>
                  </Card>
                );
              })}
          </Col>

        </div>
    
    );
  }

}


