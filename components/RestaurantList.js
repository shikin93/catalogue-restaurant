import PropTypes from 'prop-types';
import RestaurantItem, { restaurantItemShape } from './RestaurantItem';

export default function RestaurantList({ restaurants }) {
  return (
    <div className="grid">
      {
        restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} {...restaurant} />
        ))
      }
    </div>
  );
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape(restaurantItemShape),
  ),
};
