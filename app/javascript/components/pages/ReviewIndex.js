import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap'

class ReviewIndex extends Component {
    render() {
        let { reviews } = this.props;
        return (
            <>
            {reviews && reviews.map(review => {
                return (
            <Card body key={review.id}>
                <img style={{height:"100px", width:"100px"}}alt="Card image cap" src= {review.img} className="indexImg"/>
                    <CardBody>                            
                    <CardTitle tag="h5">
                        {review.restaurant_name}, {review.rating}
                    </CardTitle>
                    <CardText tag="h5">
                        {review.text_review}
                    </CardText>                                  
                </CardBody>
            </Card>
            
            )       
        })}
            </>
        );
    }
}

export default ReviewIndex;