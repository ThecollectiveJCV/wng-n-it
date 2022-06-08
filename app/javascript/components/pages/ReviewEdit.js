import React, { Component } from 'react'
import { Label, Form } from "reactstrap";
import { Redirect } from "react-router-dom";


export default class ReviewEdit extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      newReview: {
        text_review: "",
        user_id: this.props.current_user.id,
        restaurant_id: this.props.restaurant_id,
      },
      submitted: false
    };
}

handleChange = (e) => {
  const { newReview } = this.state;
  newReview[e.target.name] = e.target.value;
  this.setState({ newReview: newReview });
};

handleSubmit = () => {
  this.props.updateReview(this.state.newReview, this.props.review.id);
  
  this.setState({ submitted: true });
};


  render() {
  
    return (
      
      <div className="editRev">
        <img
                
                src={require("../assets/logo-favicon-headernav.png")}
              />
          <Form>
            <Label>
             
              <input
                name="text_review"
                type="text"
                onChange={this.handleChange}
              />
            </Label>
            <button onClick={this.handleSubmit} type="submit">
              Edit Review
            </button>
          </Form>
          {this.state.submitted && <Redirect to="/reviewindex" />}
    </div>
  );

  }
}
