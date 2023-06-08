Feature('Unliking Restaurant');
const assert = require('assert');
const { async } = require('regenerator-runtime');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('#/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.seeElement('.post-item');

  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.post-item__title');

  const firstRestaurantLiked = locate('.post-item__title a').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});
