"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: "0789de54-a3f6-489d-8321-ad1d6ab5b146",
          name: "Computadores",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "b8d00d79-82c8-4886-aed7-96cc8f057da6",
          name: "Perifericos",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "640f6518-3d50-469f-9e58-e84247a1cd0c",
          name: "Componentes",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "fdb4ffcc-91cd-4bea-ae60-066caf908139",
          name: "Amd",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "c98a9ec8-663d-47d7-ac0c-5fdc312ffa94",
          name: "Intel",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "d43d6e90-6ce9-434f-91fa-1ebf2d75d40f",
          name: "Gamer",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "fbca00ba-0447-4486-b8a5-931175b4cd02",
          name: "Trabajo",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "c8021d34-8829-4891-aa70-1beb749dcc7b",
          name: "Estudio",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "8038762e-d13c-48fe-971f-824b83e4009c",
          name: "Motherboard",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "aa5bde32-d29f-4893-9ee4-1291b401b337",
          name: "Procesador",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "00abd144-8b9d-4d33-8dee-b011a4bec603",
          name: "Disco Duro",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "fb65cd52-2c52-4ad6-8f4e-0d05c77afe6a",
          name: "Disco SSD",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "ad48d869-2fb6-4860-abef-35a84c32d952",
          name: "Memoria Ram",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "147b4165-83e6-4625-beee-1344b0af791e",
          name: "Fuentes",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "40b28073-5504-4628-9837-d73edc6021cc",
          name: "Refrigeracion",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "1bbbe3be-8ef6-4bf9-ac4f-74e422f1147e",
          name: "Placas de video",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "6c5ad3f0-a614-471a-8c8c-98b659246208",
          name: "Gabinet",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "e3dd154e-1b30-4d83-8307-f834ac3480f0",
          name: "Teclad",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "95d09aba-ae58-4be9-a3a2-eda93f18038f",
          name: "Auricular",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        {
          id: "7f96c7fb-6211-46fb-8edd-2fb3a15c3604",
          name: "Mouse",
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
        },
        
      ],
      {}
    );
    {
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("People", null, {});
  },
};
