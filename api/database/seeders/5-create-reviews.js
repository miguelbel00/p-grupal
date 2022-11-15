'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews',   [
    
      {
        productId:1,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Super",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:1,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"No me parecio muy bueno la verdad",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:1,
        userId:"ded44a11-3764-4818-bdee-b36bda2bc0a0",
        comment:"El producto esta estupendo",
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:2,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"El producto no esta bien",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:3,
        userId:"f3225f0e-bbfb-4496-ab37-761bd31403bf",
        comment:"Me gustaria otro color para ese producto",
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:4,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Me gusta el producto",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:5,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"No lo recomiendo para nada",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:6,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Podria mejorar la calidad del producto",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:7,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"No era lo que yo me esperaba",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:8,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"Es perfecto para su trabajo",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"a4a6c3c1-1327-439d-979b-b40e419aba9b",
        comment:"No me gusto ",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"19750223-1209-4b74-93da-18198fa44fe0",
        comment:"Me gusto",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"12f31e83-d880-43e9-938c-92bce27c9406",
        comment:"Me impresiono lo bueno del producto",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:9,
        userId:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        comment:"Me gusta pero queria saber si tienes mas unidades",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        productId:10,
        userId:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        comment:"No me gusto el producto en absoluto",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
      
    ] , {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Reviews', null, {});
  }
};
