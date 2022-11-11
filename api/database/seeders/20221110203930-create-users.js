"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id:"be8ab8a7-92bc-466b-a46f-23cc19f48515",
          fullName: "test1",
          email: "test@test.com",
          password: "asfgrhtjukjhsgzasdasd2",
          phone: "+57 123467896",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id:"47adc9f1-5dfc-4a53-a463-83dfcf07efc6",
          fullName: "test1",
          email: "test@test.com",
          password: "asfgrhtjukjhsgzasdasd2",
          phone: "+57 123467896",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id:"7749647b-3252-426b-8a4c-a8701feb72a9",
          fullName: "test1",
          email: "test@test.com",
          password: "asfgrhtjukjhsgzasdasd2",
          phone: "+57 123467896",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
       
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
