import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, CardBody, Card, Button } from "reactstrap";


export default class RestaurantIndex extends Component {
  render() {
    let { restaurants } = this.props;
    return (
  
        <div>
          <h2 style={{textAlign: 'center', color: "white"}}>The Wngiest Restaurants Around</h2>
          <Row>
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <div class="reviewcard">
                  <Card  body key={restaurant.id}>
                    <CardBody>
                    <div class="reviewtitle" style={{ textAlign: "center" }}>
                      <h4>{restaurant.name}</h4>
                    </div>
                      <img class='indexImg' src={restaurant.img} />
                      <h4>Average Rating: {restaurant.avg_rating}</h4>
                      <br />
                      <Button className="restaurantshow-btn">
                        <NavLink to={`/restaurantshow/${restaurant.id}`}className="nav-link">
                          View restaurant{" "}
                        </NavLink>
                      </Button>
                    </CardBody>
                    </Card>
                    </div>
                );
              })}
          </Row>
        </div>
   
    );
  }
}