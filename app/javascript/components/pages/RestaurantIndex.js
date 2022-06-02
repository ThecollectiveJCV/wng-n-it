import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, Button } from "reactstrap";
import SecondaryHeader from '../components/SecondaryHeader'


export default class RestaurantIndex extends Component {

  // restaurantReview = (e) => {
    
  //   let target = e.target.value
  //   console.log(target)
  // }
  render() {
    let {restaurants} = this.props
    // console.log("**",restaurants)
    return (
      <>
      <SecondaryHeader />
      <div className='ContainerRestaurant'>The Wngiest Restaurants Around
      <Col sm="6">
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <Card body key={restaurant.id}>
                    <CardTitle style={{ textAlign: "center" }}>
                      <h4>{restaurant.name}</h4>
                      <img src={restaurant.img}  />
                      <h4>Average Rating: {restaurant.avg_rating}</h4>
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
        </>
    
    );
  }

}


