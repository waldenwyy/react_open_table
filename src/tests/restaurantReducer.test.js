import restaurantReducer from '../reducers/restaurantReducer';
import { FETCH_DATA_BEGIN } from '../actions/restaurantActions';
import expect from 'expect';

describe('post reducer', () => {
    const initialState = {
        restaurants: [],
        city: '',
        refine: '',
        total_items: 0,
        loading: false,
        error: null
    };

    it('should return the initial state', () => {
      expect(restaurantReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_DATA_BEGIN', () => {
        const startAction = {
          type: FETCH_DATA_BEGIN
        };

        expect(restaurantReducer({}, startAction)).toEqual({'error': null, 'loading': true});
    });
});