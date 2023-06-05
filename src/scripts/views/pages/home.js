import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
      <div class="explore">
        <div class="explore__label">
          <h1>Explore Restaurant</h1>
          <div class="posts"></div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
