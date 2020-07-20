"use strict";
const faker = require("faker");
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  //   for (let index = 0; index < 50; index++) {
  //     await strapi.services.activity.create({
  //       title: faker.commerce.productName(),
  //       description: faker.lorem.sentences(),
  //       address: faker.address.streetName(),
  //       city: faker.address.city(),
  //       created: faker.date.recent(),
  //       venue: faker.address.streetAddress(),
  //     });
  //   }
};
