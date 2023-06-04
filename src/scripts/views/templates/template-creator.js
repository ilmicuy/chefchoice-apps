import CONFIG from '../../global/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="detail__title">${restaurant.name}</h2>
  <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="detail__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;
 
const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
<div class="post-item__card">
<img class="post-item__thumbnail" src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}' alt="${restaurant.name}">
<p class="post-item__location">🏠 ${restaurant.city}</p>
<p class="post-item__rating">⭐ ${restaurant.rating}</p>
</div>           
<div class="post-item__content">
  <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
  <p class="post-item__description">${restaurant.description}</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
    createRestaurantItemTemplate, 
    createRestaurantDetailTemplate, 
    createLikeButtonTemplate,
    createLikedButtonTemplate, 
};