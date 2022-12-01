'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('productCategories',   [
    
      {
        productId:1,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:1,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:1,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },

      {
        productId: 2,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 2,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 2,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },

      {
        productId: 3,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 3,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 3,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },

      {
        productId: 4,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 4,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 4,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 5,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 5,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 5,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 6,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 6,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 6,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 7,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 7,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 7,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 8,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 8,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 8,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 9,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 9,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 9,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 10,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 10,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 10,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 20,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 20,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 20,
        categoryId: 20,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 25,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 25,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 25,
        categoryId: 18,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 26,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 26,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 26,
        categoryId: 18,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 27,
        categoryId: 8,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 27,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 27,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 11,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 11,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 11,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 39,
        categoryId: 9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 39,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 39,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 39,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 17,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 17,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 17,
        categoryId: 20,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 33,
        categoryId: 13,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 33,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 33,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 31,
        categoryId: 8,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 31,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 31,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 34,
        categoryId: 13,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 34,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 34,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 12,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 12,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 12,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 18,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 18,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 18,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 18,
        categoryId: 20,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 47,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 47,
        categoryId: 14,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 46,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 15,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 15,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 15,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 40,
        categoryId: 9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 40,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 40,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 40,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 13,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 13,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 13,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 21,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 21,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 21,
        categoryId: 20,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 19,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 19,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 19,
        categoryId: 20,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 37,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 37,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 37,
        categoryId: 9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 32,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 32,
        categoryId: 13,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 32,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 24,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 24,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 24,
        categoryId: 18,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 38,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 38,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 38,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 38,
        categoryId: 9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 48,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 48,
        categoryId: 14,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 28,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 28,
        categoryId: 8,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 28,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 30,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 30,
        categoryId: 8,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 50,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 50,
        categoryId: 14,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 51,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 51,
        categoryId: 14,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 42,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 42,
        categoryId: 11,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 29,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 29,
        categoryId: 8,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 29,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 41,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 41,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 41,
        categoryId: 9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 41,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 16,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 16,
        categoryId: 4,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 16,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 36,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 36,
        categoryId: 13,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 36,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 23,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 23,
        categoryId: 18,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 23,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 44,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 44,
        categoryId: 11,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 49,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 49,
        categoryId: 14,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 22,
        categoryId: 2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 22,
        categoryId: 18,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 22,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 45,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 43,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 43,
        categoryId: 11,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 14,
        categoryId: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 14,
        categoryId: 5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 14,
        categoryId: 7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 35,
        categoryId: 3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 35,
        categoryId: 6,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId: 35,
        categoryId: 13,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      
    ] , {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('productCategories', null, {});
  }
};
