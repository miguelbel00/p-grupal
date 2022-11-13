'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('productCategories',   [
    
      {
        productId:1,
        categoryId:1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:1,
        categoryId:2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:1,
        categoryId:3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:2,
        categoryId:2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:3,
        categoryId:3,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:4,
        categoryId:1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:5,
        categoryId:1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:6,
        categoryId:1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:7,
        categoryId:2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:8,
        categoryId:2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:9,
        categoryId:5,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:9,
        categoryId:7,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:9,
        categoryId:9,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:9,
        categoryId:10,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      },
      {
        productId:10,
        categoryId:2,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z"
      }
      
    ] , {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('productCategories', null, {});
  }
};
