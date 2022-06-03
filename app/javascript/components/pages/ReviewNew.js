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
      },
    };
  }

  handleChange = (e) => {
    console.log(e.target);
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
      <div>
        <h1>ReviewNew</h1>
        <Form>
          {/* <fieldset> */}
          <Label>
            <h3>Restaurant Review</h3>
            <input
              name="text_review"
              type="text"
              onChange={this.handleChange}
            />
          </Label>
          {/* </fieldset> */}
          <button onClick={this.handleSubmit} type="submit">
            Submit Review
          </button>
        </Form>
        {this.state.submitted && <Redirect to="/reviewindex" />}
      </div>
    );
  }
}
