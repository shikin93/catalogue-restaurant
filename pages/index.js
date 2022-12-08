import RestaurantList from '../components/RestaurantList';

export default function Home({ restaurants }) {
  return (
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await res.json();

  return {
    props: {
      restaurants,
    },
  };
}
