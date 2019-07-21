import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/restaurantActions';

const initialState = {
  restaurants: [],
  city: '',
  total_items: 0,
  loading: false,
  error: null
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
     case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload.restaurants,
        total_items: action.payload.total_entries
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        restaurants: []
      };

    default:
      return state
  }
}

export default restaurantReducer;