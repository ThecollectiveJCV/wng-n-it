import React, { Component } from 'react'

export default class ReviewNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newReview: {
        text_review: "",
        user_id: this.props.current_user.id,
        restaurant_id: this.props
      }
    }
  }
  
  handleChange = (e) => {
    const {newReview} = this.state
    newReview[e.target.name] = e.target.value
    this.setState({newReview: newReview})
  }

  handleSubmit = () => {
    this.props.createReview(this.state.newReview)
    this.setState({submitted: true})

  }
  
  render() {
    console.log(this.state.newReview.restaurant_id)
    return (

      <div>
       
        <h1>ReviewNew</h1>
        <form>
          <fieldset>
            <label>
              <h3>Restaurant Review</h3>
              <input 
              type="text"
              name="review"
              onChange={this.handleChange} />
            </label>
          </fieldset>
          <button onClick={this.handleSubmit} type="submit">Submit Review</button>
          
          </form>
      </div>


    )
  }
}
