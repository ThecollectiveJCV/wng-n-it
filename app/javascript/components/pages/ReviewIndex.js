import React, { Component } from "react";
import {
  Container,
  CardGroup,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  Row,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

class ReviewIndex extends Component {



  render() {
    let { reviews } = this.props;
    
    return (
      
      <Container>
        <CardGroup>
          <button>
            <NavLink to="/restaurantindex">Restaurants</NavLink>
          </button>
          <button>
            <NavLink to="/reviewindex">Wng Feed</NavLink>
          </button>
          <Row sm="8" md="6" xl="3" className="reviewContainer">
            {reviews &&
              reviews.map((review) => {
                return (
                  <Card body key={review.id}>
                    <CardBody>
                      <img
                        alt="Card image cap"
                        src={review.img}
                        className="indexImg"
                      />
                      <CardTitle tag="h5">
                        {review.restaurant_name}, {review.rating}
                      </CardTitle>
                      <CardText tag="h5">{review.text_review}</CardText>
                      <Button>
                        <NavLink to={(`/reviewshow/${review.id}`)}>
                          View review{" "}
                        </NavLink>
                      </Button>
                   
                    </CardBody>
                  </Card>
                );
              })}
          </Row>
        </CardGroup>
      </Container>
    );
  }
}

export default ReviewIndex;
