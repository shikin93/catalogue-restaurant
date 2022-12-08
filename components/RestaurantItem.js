import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function RestaurantItem({
  id, pictureId, name, description,
}) {
  return (
    <div className="card">
        <Image src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`} alt={name} width="300" height="200" />

      <div className="container">
        <h2><Link href={`/detail/${id}`}>{name}</Link></h2>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
}

const restaurantItemShape = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { restaurantItemShape };

RestaurantItem.propTypes = {
  ...restaurantItemShape,
};
