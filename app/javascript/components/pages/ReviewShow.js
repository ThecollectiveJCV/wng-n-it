import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {Button} from "reactstrap"


class ReviewShow extends Component {
  
    render() {
        let {review} = this.props
       
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
                </div>
            );
    }
}

export default ReviewShow;