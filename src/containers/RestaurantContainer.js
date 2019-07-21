import React, { Component } from 'react';
import RestaurantList from '../components/RestaurantList';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        city: 'Toronto',
        name: '',
        address: '',
        area: ''
      }
    }
  }
  
  render() {
    if (this.state.error) {
      return <div>Error! {this.error.message}</div>;
    }

    return (
      <div>
        { this.props.loading ? <p>Loading</p> : null }
        <p>Total items: {this.props.total}</p>
        <RestaurantList restaurants={this.props.restaurants} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    restaurants: state.restaurantReducer.restaurants,
    total: state.restaurantReducer.total_items,
    error: state.restaurantReducer.error,
    loading: state.restaurantReducer.loading
  } 
}

export default connect(mapStatetoProps, null)(RestaurantContainer);
