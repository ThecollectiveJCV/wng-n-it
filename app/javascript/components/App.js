import React, { Component } from "react";
import Header from "../components/components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import RestaurantIndex from "../components/pages/RestaurantIndex";
import ReviewIndex from "./pages/ReviewIndex";
import ReviewNew from "./pages/ReviewNew";
import RestaurantShow from "./pages/RestaurantShow";

import ReviewEdit from "./pages/ReviewEdit";
import ReviewDelete from "./pages/ReviewDelete";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      reviews: [],
    };
  }
  componentDidMount(){
    this.readReview();
    this.readRestaurant();
  }

  
  readRestaurant = () => {
    fetch("/restaurants")
    .then(response => response.json())
    .then(restaurantsArray => this.setState({restaurants: restaurantsArray}))
    .catch(errors => console.log("Review read errors:", errors))
  }

  readReview = () => {
    fetch("/reviews")
    .then(response => response.json())
    .then(reviewsArray => this.setState({reviews: reviewsArray}))
    .catch(errors => console.log("Review read errors:", errors))
  }

  createReview = (newReview) => {
    fetch("/reviews", {
      body: JSON.stringify(newReview),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readReview())
    .catch(errors => console.log("Review create errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    // console.log("logged_in:", logged_in);
    // console.log("current_user:", current_user);
    // console.log("new_user_route:", new_user_route);
    // console.log("sign_in_route:", sign_in_route);
    // console.log("sign_out_route:", sign_out_route);
    return (
      <>
        <h1>Wng-N-It</h1>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route
              path="/restaurantindex"
              render={() => (
                <RestaurantIndex restaurants={this.state.restaurants} />
              )}
            />
            <Route
              path="/reviewindex"
              render={() => <ReviewIndex reviews={this.state.reviews} />}
            />
            <Route
              path="/restaurantshow/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let restaurant = this.state.restaurants.find(
                  (restaurantObject) => restaurantObject.id === id
                );
                return <RestaurantShow restaurant={restaurant} />;
              }}
            />
            <Route path="/reviewnew" 
            render={() => {return <ReviewNew current_user={current_user} createReview={this.createReview} /> }} />
            <Route path="/reviewedit" component={ReviewEdit} />
            <Route path="/reviewdelete" component={ReviewDelete} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
