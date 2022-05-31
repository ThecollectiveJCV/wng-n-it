import React, { Component } from 'react';
import { Container, CardGroup, Col, Card, CardTitle, CardBody, CardImg, CardText, Row } from 'reactstrap'

class ReviewIndex extends Component {
    render() {
        let { reviews } = this.props;
        return (
        <Container>
            <CardGroup>
                
                   
                    <Row sm="8" md="6" xl="3" className='reviewContainer'>
                        {reviews && reviews.map(review => {
                            return (
                                <Card body key={review.id}>
                                    <CardBody>                            
                                        <img alt="Card image cap" src= {review.img} className="indexImg"/>
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
                    </Row>
                    
                
            </CardGroup>
        </Container>
        );
    }
}

export default ReviewIndex;