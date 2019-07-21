import { createSelector } from 'reselect'

const getRestaurants = (state) => state.restaurantReducer.restaurants;
const getRestaurantsFilter = (state) => state.restaurantReducer.refine;

export const getVisibleRestaurants = createSelector(
    [getRestaurants, getRestaurantsFilter],
    (restaurants, refine) => {
        if (refine && restaurants.length > 0) {
            refine = refine.toLowerCase();
            
            return restaurants.filter(restaurant =>
                (restaurant.name.toLowerCase().includes(refine) || restaurant.address.toLowerCase().includes(refine) || restaurant.area.toLowerCase().includes(refine))    
            )
        }

        return restaurants;
    }
)