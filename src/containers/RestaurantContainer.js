import React, { Component } from 'react';
import RestaurantList from '../components/RestaurantList';
import { connect } from 'react-redux';
import { getVisibleRestaurants } from '../selectors/restaurantSelector'

class RestaurantContainer extends Component {
  
  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }

    return (
      <div>
        { this.props.loading ? <p>Loading</p> : null }
        <p>
          Total items: {this.props.refine ? this.props.restaurants.length : this.props.total}
        </p>
        <RestaurantList restaurants={this.props.restaurants} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    restaurants: getVisibleRestaurants(state),
    total: state.restaurantReducer.total_items,
    error: state.restaurantReducer.error,
    loading: state.restaurantReducer.loading,
    refine: state.restaurantReducer.refine
  } 
}

export default connect(mapStatetoProps, null)(RestaurantContainer);
