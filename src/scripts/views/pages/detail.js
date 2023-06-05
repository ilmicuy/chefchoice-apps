import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantContainer.innerHTML += `
    <div id="detail-review"><h3>Customer Reviews</h3></div>`;
    const detailReview = document.querySelector('#detail-review');
    restaurant.customerReviews.forEach((review) => {
      detailReview.innerHTML += createRestaurantReviewTemplate(review);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
