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
      
     
          <div>
            
          <Col>
            {reviews &&
              reviews.map((review) => {
                return (
                  <div className="reviewcard" key={review.id}>
                  <Card >
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
                      <Button className="btnReview">
                        <NavLink to={`/reviewshow/${review.id}`}className="nav-link">
                          View review{" "}
                        </NavLink>
                      </Button>
                    </CardBody>
                  </Card>
                  </div>
                );
              })}
          </Col>
          </div>

        
    );
  }
}

export default ReviewIndex;
