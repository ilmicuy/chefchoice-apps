Feature('Liking Restaurants');
const assert = require('assert');
const { async } = require('regenerator-runtime');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');

  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
