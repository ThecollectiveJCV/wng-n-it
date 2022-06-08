import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {Button} from "reactstrap"


class ReviewShow extends Component {
   
    constructor(props) {
        super(props);
     
        this.state = {
          newReview: {
            text_review: "",
            restaurant_id: this.props.restaurant_id,
          },
          submitted: false
        };
    }
  handleSubmit = () => {
      this.props.deleteReview(this.props.review.id)
  }
    render() {
        let {review} = this.props
     
            return (
                <div class="resShow" >
                    <img
                src={require("../assets/logo-favicon-headernav.png")}
                     />

                    <h4>{review && review.restaurant_name}</h4>
                    <img src={review && review.img}/>
                    <h4>{review && review.text_review}</h4>
                    <div className="revBtn">
                    <Button  className="revShow">
                        <NavLink                        
                            to={
                            `/reviewedit/${review.id}`                            
                            } className="nav-link">Edit Review
                        </NavLink>
                    </Button>
                    <Button onClick={this.handleSubmit} className="revShow">
                        <NavLink                        
                            to={
                            "/reviewindex/"                            
                            } className="nav-link">Delete Review
                        </NavLink>
                    </Button>
                    </div>
                </div>
            );
    }
}

export default ReviewShow;