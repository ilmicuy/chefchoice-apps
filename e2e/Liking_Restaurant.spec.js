Feature('Liking Restaurant');
const assert = require('assert');
const { async } = require('regenerator-runtime');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.waitForElement('#restaurants');
  I.seeElement('#restaurants');

  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('#/');
  I.waitForElement('.post-item__title a');
  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('#/like');

  I.waitForElement('.post-item');
  I.seeElement('.post-item');

  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
