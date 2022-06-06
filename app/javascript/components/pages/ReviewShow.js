import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {Button} from "reactstrap"


class ReviewShow extends Component {
    // restaurantReview = () => {   
    //     console.log(this.props)
    //     this.props.handleRestaurantId(this.props.restaurant.id)
    
    //   }
    render() {
        let {review} = this.props
        console.log(review)
        
        // let {restaurant} = this.props
            return (
                <div>
                    <h1>Review Show</h1>
                    {/* <h4>{restaurant && restaurant.name}</h4> */}
                    <h4>{review && review.restaurant_name}</h4>
                    <img src={review && review.img}/>
                    <h4>{review && review.text_review}</h4>
                    <Button  >
                        <NavLink                        
                            to={{
                            pathname:`/reviewedit/${review.id}`                            
                            }}>Edit Review
                        </NavLink>
                    </Button>
                </div>
            );
    }
}

export default ReviewShow;