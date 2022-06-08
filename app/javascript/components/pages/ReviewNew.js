import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Label, Form } from "reactstrap";

export default class ReviewNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        text_review: "",
        user_id: this.props.current_user.id,
        restaurant_id: this.props.restaurant_id,
        img: this.props.restaurant.img,
        restaurants: this.props.restaurants,
        restaurant_name: this.props.restaurant.name,
        avg_rating: this.props.restaurant.avg_rating
      },
    };
  }

  handleChange = (e) => {
    const { newReview } = this.state;
    newReview[e.target.name] = e.target.value;
    this.setState({ newReview: newReview });
  };

  handleSubmit = () => {
    this.props.createReview(this.state.newReview);
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
            <h3>Create a new review</h3>
            <input
              name="text_review"
              type="text"
              onChange={this.handleChange}
            />
          </Label>
          <button onClick={this.handleSubmit} type="submit">
            Submit Review
          </button>
        </Form>
        {this.state.submitted && <Redirect to="/reviewindex" />}
      </div>
    );
  }
}
