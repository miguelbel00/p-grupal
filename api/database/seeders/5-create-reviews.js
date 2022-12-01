'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews',   [
    
      {
        productId:1,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Cool",
        rating: 5,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:1,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"I really didn't think it was very good",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:1,
        userId:"ded44a11-3764-4818-bdee-b36bda2bc0a0",
        comment:"The product is great",
        rating: 2,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:2,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"the product is not good",
        rating: 3,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:3,
        userId:"f3225f0e-bbfb-4496-ab37-761bd31403bf",
        comment:"I would like another color for that product",
        rating: 2,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:4,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"I like the product",
        rating: 3,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:5,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"I do not recommend it at all",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:6,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Could improve product quality",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:7,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"It was not what I expected",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:8,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"It's perfect for your job",
        rating: 5,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"a4a6c3c1-1327-439d-979b-b40e419aba9b",
        comment:"I did not like",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"19750223-1209-4b74-93da-18198fa44fe0",
        comment:"I liked",
        rating: 5,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"12f31e83-d880-43e9-938c-92bce27c9406",
        comment:"I was impressed by the goodness of the product",
        rating: 5,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"I like it but I wanted to know if you have more units",
        rating: 3,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:10,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"I did not like the product at all",
        rating: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date(),
        deletedAt: null
      }
      
    ] , {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Reviews', null, {});
  }
};
