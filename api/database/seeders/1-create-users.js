"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [{
        id:'57e112d5-1d3b-4209-b3f5-8cf9c82ea955',
        fullName: "Miguel Beltran",
        email: "miguel@admin.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: true,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id:"a5f8a297-4dc4-4e59-be24-b417b47872a2",
        fullName: "Kenneth Castillo",
        email: "Kenneth@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"3327c971-6e53-4c8d-90ac-a9396229601f",
        fullName: "John George",
        email: "John@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"7d24fdc6-300c-475e-9fba-6fe41b1304b1",
        fullName: "Richard Hibbs",
        email: "Richard@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"ded44a11-3764-4818-bdee-b36bda2bc0a0",
        fullName: "Elizabeth Dirks",
        email: "Elizabeth@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"f3225f0e-bbfb-4496-ab37-761bd31403bf",
        fullName: "David Simon",
        email: "David@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"a4a6c3c1-1327-439d-979b-b40e419aba9b",
        fullName: "Erin Benitez",
        email: "Erin@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"19750223-1209-4b74-93da-18198fa44fe0",
        fullName: "Bethany Eisenberg",
        email: "Bethany@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"12f31e83-d880-43e9-938c-92bce27c9406",
        fullName: "Judy Nicol",
        email: "Judy@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"a75d6cb0-127c-4b78-90cf-548ca0a75966",
        fullName: "Gail Kenny",
        email: "Gail@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"027ef96e-49a8-4c76-af9a-071ef42cef41",
        fullName: "Scott Holt",
        email: "Scott@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"f14cd9a1-5d3a-46f3-9214-f501d5ad026e",
        fullName: "Shane Wells",
        email: "Shane@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"fee6721a-e530-41b3-aef0-57d09bc0d0bd",
        fullName: "Lauren Douglas",
        email: "Lauren@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null      },{
        id:"612a1592-efda-435f-88fe-d908a3ef2cf6",
        fullName: "John Hornbuckle",
        email: "JohnHornbuckle@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"782ab074-7877-4243-9e9c-666dd4578fea",
        fullName: "Nicholas Savoie",
        email: "Nicholas@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"13e3fc2a-0f31-416d-a916-29bfcb19b0c8",
        fullName: "Lorraine Smith",
        email: "Lorraine@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"d53e7f42-265a-4d01-9b52-a26a13cd5c72",
        fullName: "Jayme Mabry",
        email: "Jayme@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"53583f67-5746-4d43-bed4-c251b9ef3924",
        fullName: "Diane Camire",
        email: "Diane@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: false,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"07cb6f5b-a056-4cb4-b676-f3281a4d923f",
        fullName: "Rosemary Jeffreys",
        email: "Rosemary@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: true,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      },{
        id:"5ad99161-e23c-4310-91ee-ce79bdf75fdb",
        fullName: "Richard Freeman",
        email: "RichardFreeman@mail.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        isAdmin: true,
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null         
      }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
