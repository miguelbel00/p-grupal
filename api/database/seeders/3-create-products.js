'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Products', [
        {
        id:"1",
        name:"Pc Cpu Computadora Amd 3.5ghz Dual core Nueva C/garantia",
        description: "Computadora completa Procesador AMD Dual core 3.5Ghz Mother FM2 Disco rigido 1Tb (1000Gb) o solido ssd 250gb segun stock o eleccion del comprador Memoria : 4 GB Gabinete con fuente de 450w / 500w Incluye teclado y mouse Tambien podes agregarle: Monitor; DVD; Placa WiFi; Parlantes, agregar memoria o disco; cambio de fuente, placa serie para tiquet fiscal.....etc NO INCLUYE MONITOR *** *** Las fotos son a modo ilustrativo y pueden variar segun stock",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_672029-MLA31725850773_082019-F.webp'],
        price: 300,
        stock: 4,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null

      },
      {
        id:"2",
        name:"Pc Armada Intel Core I5 8gb Ssd240 W10 Office",
        description: "8GIGAS, DDR3, SSD 240, GAB ATX FUENTE 550W, SISTEMA OPERATIVO INSTALADO LISTA PARA USAR",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_711170-MLA31113816812_062019-F.webp'],
        price: 400,
        stock: 12,
        updatedAt: "2022-11-10T23:20:56.217Z",
        createdAt: "2022-11-10T23:20:56.217Z",
        deletedAt: null

      },
      {
        id: "3",
        name:"Pc Gamer Amd A6 7480 4ghz X6 8gb Ram Ssd240 Hdmi Radeon R5",
        description: "- MICRO: INTEL CELERON G5905 10MA GEN Dual Core, MOTHER: H510M PCIE 4.0 DDR4 USB 3.2, DISCO RIGIDO: ESTADO SOLIDO SSD 240GB SATA3, MEMORIA RAM: 8GB 2666MHZ DDR4, GABINETE: ATX G18 POWER KIT FUENTE 500W",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_658643-MLA31115500498_062019-F.webp'],
        price: 500,
        stock: 5,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
      },
      {
        id:"4",
        name:"Computadora Pc Cpu Solarmax Intel Core I5 16gb 480 Ssd Wifi",
        description: "Procesador Intel Core i5 10ma Generación LGA1200, Motherboard H410 con: HD Audio integrado Conexion Red LAN (por cable) integrada, 2 puertos USB 3.2 Gen 1 Type-A, 4 puertos USB 2.0, 1 Puerto PS2 para Mouse o Teclado, Video Graficos Integrados Intel UHD-630 Resolucion 4K, Modulo Wifi Interno para conexiones locales inalámbricas, Gabinete Solarmax CI-S102 de diseño compacto, Fuente Solarmax KC-EAA500 (500W)",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_718221-MLA49225892289_022022-F.webp'],
        price: 800,
        stock: 7,
        updatedAt: "2022-11-10T23:21:19.670Z",
        createdAt: "2022-11-10T23:21:19.670Z",
        deletedAt: null
      },
      {
        id:"5",
        name:"Pc Armada Gamer Amd Ryzen 5 5600g 6/12 Nucleos 16gb Ram DDR4",
        description: "MICRO PROCESADOR: AMD Ryzen 5 5600G 6/12 NUCLEOS 4.4GHZ, PLACA DE VIDEO INCORPORADA RADEON VEGA RX, MOTHER: MSI A320M PRO PCI 3.0 USB 3.1, DISCO SSD: 480GB SATA3 ADATA 500MB, MEMORIA RAM: 16GB DDR4 2666 EXPANDIBLE HASTA 64GB, GABINETE: ATX SENTEY F10 - FUENTE BCP500W, SISTEMA OPERATIVO: WINDOWS 10 64BITS TRIAL",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_976403-MLA51364537264_082022-F.webp'],
        price: 1000,
        stock: 64,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null

      },
      {
        id:"6",
        name:"Pc Armada Gamer Amd Ryzen 3 3200g 8gb Ddr4 1 Tb",
        description: "AMD Ryzen 3 3200G, N.° de núcleos de CPU: 4, N.° de subprocesos: 4, N.° de núcleos de GPU: 8, Reloj base: 3.6GHz, Reloj de aumento Max: 4GHz,Caché L1 total: 384KB,Caché L2 total: 2MB,Caché L3 total:4MB,-Versión de PCI Express: PCIe 3.0 x8Velocidad máxima de memoria: 2933MHz, Canales de memoria: 2, Frecuencia de gráficos: 1250 MHz, Modelo de gráficos: Radeon™ Vega 8 Graphics, Número de núcleos de los gráficos: 8,   ",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_790647-MLA32097918712_092019-F.webp'],
        price: 500,
        stock: 3,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null

      },
      {
        id:"7",
        name:"Pc Armada Gamer Amd Ryzen 5 4600g 8gb Ddr4 Nvme 240 Rx Vega",
        description: "Microprocesador AMD Ryzen 5 4600G 8MB 3.7GHz AM4, Memoria Ddr4 8Gb, Disco Solido Ssd 240Gb Nvme Western Digital Green SN350, Mother A320M Socket AM4, Sistema Operativo : Windows 10 Home 30 dias de prueba",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_787728-MLA50545076522_072022-F.webp'],
        price: 700,
        stock: 40,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null

      },
      {
        id:"8",
        name:"Pc Armada Core I3 8g Ssd240 (gabinete Oulet) W10 Ofice",
        description: "PC ARMADA I3, 8 GIGAS ddr3, SSD 240, REG DE DVD, GAB ATX 550w OULET o USADO ACTUAL, SISTEMA OPERATIVO, W10 OFFICE ANTIVIRUS",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_947590-MLA49891440341_052022-F.webp'],
        price: 450,
        stock: 9,
        updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null
      },
      {
        id:"9",
        name:"Pc Armada Gamer Ryzen 5 3600 Rtx 3060 12gb Cyberpunk 2077",
        description: "MICRO: AMD Ryzen 5 3600, VIDEO: NVIDIA RTX3060 12GB PNY XLR8 con RGB, MOTHER: MSI A320 M2 PRO AM4, DISCO SSD: 240GB M2 ADATA 2000MB/S, DISCO DURO: 1TB SEAGATE 7200RPM, MEMORIA RAM: 16GB DDR4 3200MHZ PNY XLR8 (pack 2 x 8gb), GABINETE: SENTEY R20/S20 con RGB, SISTEMA OPERATIVO: WINDOWS 10 64 TRIAL",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_627363-MLA44320603361_122020-F.webp'],
        price: 1500,
        stock: 39,
        updatedAt: "2022-11-10T23:26:23.182Z",
        createdAt: "2022-11-10T23:26:23.182Z",
        deletedAt: null
      },
      {
        id:"10",
        name:"Pc Gaming Lenovo Legion T5 Intel I7 1tbssd 16gb Rtx3060 12gb",
        description: "Legion Tower T5i 6ta GeneraciónModelo: 90RT00XJAE Color: Negro Procesador11va generación Intel® Core™ i7-11700F Procesador (2.50 GHz hasta 4.90 GHz), Sistema Operativo Windows 11 Home Single Language 64, Memoria 16 GB (2 x 8 GB) UDIMM ARMOR DDR4 3200MHz, Almacenamiento 1TB SSD, Adaptador de Corriente 550W, Tarjeta Gráfica NVIDIA GeForce® RTX™ 3060 12GB GDDR6, Potencia 550W, Conectividad Inalámbrica11AX (2x2) & Bluetooth® 5.1",
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_600063-MLA51397037621_092022-F.webp'],
        price: 1500,
        stock: 1,
        updatedAt: "2022-11-10T23:30:26.774Z",
        createdAt: "2022-11-10T23:30:26.774Z",
        deletedAt: null
      },
     
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Products', null, {});
  }
};
