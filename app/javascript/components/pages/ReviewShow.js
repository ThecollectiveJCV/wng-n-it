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
        console.log(this.props)
        console.log(this.handleSubmit)
            return (
                <div>
                    <h1>Review Show</h1>

                    <h4>{review && review.restaurant_name}</h4>
                    <img src={review && review.img}/>
                    <h4>{review && review.text_review}</h4>
                    <Button  >
                        <NavLink                        
                            to={
                            `/reviewedit/${review.id}`                            
                            }>Edit Review
                        </NavLink>
                    </Button>
                    <Button onClick={this.handleSubmit}>
                        <NavLink                        
                            to={
                            "/reviewindex/"                            
                            }>Delete Review
                        </NavLink>
                    </Button>
                </div>
            );
    }
}

export default ReviewShow;