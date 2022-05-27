import React, { Component } from "react";
import Header from "../components/components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import RestaurantIndex from "../components/pages/RestaurantIndex";
import ReviewIndex from "./pages/ReviewIndex";
import ReviewNew from "./pages/ReviewNew";
import RestaurantShow from "./pages/RestaurantShow";
import SingleRestaurantIndex from "./pages/SingleRestaurantIndex";
import ReviewEdit from "./pages/ReviewEdit";
import ReviewDelete from "./pages/ReviewDelete";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  componentDidMount(){
    this.readReview();
  }
  
  readReview = () => {
    fetch("/reviews")
    .then(response => response.json())
    .then(reviewsArray => this.setState({reviews: reviewsArray}))
    .catch(errors => console.log("Review read errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    console.log("new_user_route:", new_user_route);
    console.log("sign_in_route:", sign_in_route);
    console.log("sign_out_route:", sign_out_route);
    return (
      <>
        <h1>Wng-N-It</h1>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
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
            <Route path="/reviewnew" component={ReviewNew}></Route>
            <Route
              path="/SingleRestaurantIndex"
              component={SingleRestaurantIndex}
            />
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
