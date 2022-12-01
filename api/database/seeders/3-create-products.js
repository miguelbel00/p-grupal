"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Computer Armed Cpu Intel Core I5 ​​8 Gb 240 Gb Ssd",
          description: `
          Processor: Intel Core i5.
          Motherboard: Gigabyte, MSI, Esonic (upon stock availability).
          Ram Memory: 8 GB DDR3 1600 MHz.
          Intel Graphics HD graphics.
          Storage: 240 GB SSD.
          VGA and HDMI video output.
          8 USB, ethernet, video and audio ports.`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_728500-MLA50595322358_072022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_766828-MLA50551035671_072022-F.webp",
          ],
          price: 300,
          stock: 4,
          sold: 50,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc ARMED Intel Core I5 8gb Ssd240 W10 Office",
          description: `8GIGAS, DDR3, SSD 240, GAB ATX POWER SUPPLY 550W`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_711170-MLA31113816812_062019-F.webp",
            "https://www.compusantafe.com.ar/productos/get-imagen/8122",
          ],
          price: 400,
          stock: 12,
          sold: 52,
          updatedAt: "2022-11-10T23:20:56.217Z",
          createdAt: "2022-11-10T23:20:56.217Z",
          deletedAt: null,
        },
        {
          name: "Pc Gamer Amd A6 7480 4ghz X6 8gb Ram Ssd240 Hdmi Radeon R5",
          description: `MICRO: INTEL CELERON G5905 10MA GEN Dual Core, MOTHER: H510M PCIE 4.0 DDR4 USB 3.2, HARD DISK:  SSD 240GB SATA3, MEMORY RAM: 8GB 2666MHZ DDR4, CABINET: ATX G18 POWER KIT POWER SUPPLY  500W`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_978377-MLA43312085713_082020-F.webp",
          ],
          price: 500,
          stock: 5,
          sold: 54,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc Cpu Solarmax Intel Core I5 16gb 480 Ssd Wifi",
          description: `10th Generation Intel Core i5 LGA1200 Processor, H410 Motherboard with: Integrated HD Audio, Integrated LAN Network Connection (wired), 2 USB 3.2 Gen 1 Type-A ports, 4 USB 2.0 ports, 1 PS2 Port for Mouse or Keyboard, Integrated Video Graphics Intel UHD-630 4K Resolution, Internal Wifi Module for local wireless connections, Solarmax CI-S102 Cabinet with compact design, Solarmax KC-EAA500 Power Supply (500W)`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_632761-MLA47747827649_102021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_631249-MLA47747827650_102021-O.webp",
          ],
          price: 800,
          stock: 7,
          sold: 58,
          updatedAt: "2022-11-10T23:21:19.670Z",
          createdAt: "2022-11-10T23:21:19.670Z",
          deletedAt: null,
        },
        {
          name: "Pc Armed Gamer Amd Ryzen 5 5600g 6/12 Nucleos 16gb Ram DDR4",
          description: `MICRO PROCESSOR: AMD Ryzen 5 5600G 6/12 CORE 4.4GHZ, BUILT-IN VIDEO BOARD RADEON VEGA RX, MOTHER: MSI A320M PRO PCI 3.0 USB 3.1, SSD DISK: 480GB SATA3 ADATA 500MB, RAM MEMORY: 16GB DDR4 2666, UP TO 64GB EXPANDABLE CASE: ATX SENTEY F10 - SOURCE BCP500W, OPERATING SYSTEM: WINDOWS 10 64BITS TRIAL`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_940844-MLA52267654288_112022-F.webp",
          ],
          price: 1000,
          stock: 64,
          sold: 60,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc Armed Gamer Amd Ryzen 3 3200g 8gb Ddr4 1 Tb",
          description: `AMD Ryzen 3 3200G, #CPU Cores: 4, #Threads: 4, #GPU Cores: 8, Base Clock: 3.6GHz, Max Boost Clock: 4GHz,Total L1 Cache: 384KB,Total L2 Cache: 2MB,Total L3 Cache:4MB,-PCI Express Version: PCIe 3.0 x8Max Memory Speed: 2933MHz, Memory Channels: 2, Graphics Frequency: 1250 MHz, Graphics Model: Radeon™ Vega 8 Graphics, Number of graphics cores: 8`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_625946-MLA46946916104_082021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_709165-MLA46946939068_082021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_978239-MLA46946914132_082021-F.webp",
          ],
          price: 500,
          stock: 3,
          sold: 40,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc Armed Gamer Amd Ryzen 5 4600g 8gb Ddr4 Nvme 240 Rx Vega",
          description: `AMD Ryzen 5 4600G 8MB 3.7GHz AM4 microprocessor, Ddr4 8Gb Memory, 240Gb SSD Solid Disk Nvme Western Digital Green SN350, Mother A320M Socket AM4, Operating System: Windows 10 Home 30 day trial`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_787728-MLA50545076522_072022-F.webp",
          ],
          price: 700,
          stock: 40,
          sold: 40,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc Armed Core I3 8g Ssd240 (gabinete Oulet) W10 Office",
          description: `PC ARMADA I3, 8 GIGAS ddr3, SSD 240, DVD REG, GAB ATX 550w OULET or CURRENT USED, OPERATING SYSTEM, W10 OFFICE ANTIVIRUS`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_947590-MLA49891440341_052022-F.webp",
          ],
          price: 450,
          stock: 9,
          sold: 40,
          updatedAt: "2022-11-10T20:47:06.072Z",
          createdAt: "2022-11-10T20:47:06.072Z",
          deletedAt: null,
        },
        {
          name: "Pc Armed Gamer Ryzen 5 3600 Rtx 3060 12gb Cyberpunk 2077",
          description: `MICRO: AMD Ryzen 5 3600, VIDEO: NVIDIA RTX3060 12GB PNY XLR8 with RGB, MOTHER: MSI A320 M2 PRO AM4, SSD DISK: 240GB M2 ADATA 2000MB/S, HARD DISK: 1TB SEAGATE 7200RPM, RAM MEMORY: 16GB DDR4 3200MHZ PNY XLR8 (pack 2 x 8gb), CABINET: SENTEY R20 with RGB, OPERATING SYSTEM: WINDOWS 10 64 TRIAL`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_627363-MLA44320603361_122020-F.webp",
          ],
          price: 1500,
          stock: 39,
          sold: 40,
          updatedAt: "2022-11-10T23:26:23.182Z",
          createdAt: "2022-11-10T23:26:23.182Z",
          deletedAt: null,
        },
        {
          name: "Pc Gaming Lenovo Legion T5 Intel I7 1tbssd 16gb Rtx3060 12gb",
          description: `Legion Tower T5i 6th GenerationModel: 90RT00XJAEColor: BlackProcessor11th generation Intel® Core™ i7-11700F Processor (2.50 GHz up to 4.90 GHz), Windows 11 Home Single Language 64 Operating System, Memory 16 GB (2 x 8 GB) UDIMM ARMOR DDR4 3200MHz , 1TB SSD Storage, 550W Power Adapter, NVIDIA GeForce® RTX™ 3060 12GB GDDR6 Graphics Card, 550W Power, 11AX (2x2) Wireless & Bluetooth® 5.1 Connectivity`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_736771-MLA51397037619_092022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_600063-MLA51397037621_092022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_616833-MLA51397037622_092022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_633065-MLA51397037618_092022-F.webp",
          ],
          price: 1500,
          stock: 1,
          sold: 40,
          updatedAt: "2022-11-10T23:30:26.774Z",
          createdAt: "2022-11-10T23:30:26.774Z",
          deletedAt: null,
        },
        {
          name: "Notebook EXO Smart R33 gris 14, Intel Celeron N4020 4GB de RAM 64GB SSD, Intel UHD Graphics 600 1366x768px Windows 11 Home",
          description: `The EXO Smart R33 notebook is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office. Screen with great visual impact Its 14 and 1366x768 px resolution screen will give you more vivid and defined colors. Your favorite movies and series will come to life, as they will gain quality and definition in every detail. Efficiency at your fingertips With its 2-core Intel Celeron processor, you'll get the performance you need to browse and work. You will be able to use the most essential programs, carry out your tasks and organize your daily life. An exclusive processor for graphics Its Intel UHD Graphics 600 video card makes this device a great work tool for any design professional. It will allow you to achieve great performance in all your games and in other daily tasks that involve graphic processing.`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_617213-MLA51801124141_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_836176-MLA51801111447_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_860265-MLA51801124156_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_964537-MLA51801124174_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_917237-MLA51801124169_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_770709-MLA51801118290_102022-F.webp",
          ],
          price: 600,
          stock: 175,
          sold: 40,
          updatedAt: "2022-11-12T22:53:13.771Z",
          createdAt: "2022-11-12T22:53:13.771Z",
          deletedAt: null,
        },
        {
          name: "Notebook Dell Inspiron 3515 plateada 15.5, AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home",
          description: `AMD Ryzen 5 processor, 8GB RAM memory, 15.5 LCD screen, 1366x768 px resolution, It is anti-glare, AMD Radeon RX Vega 8 (Ryzen 2000/3000) video card, Wi-Fi and Bluetooth connection, It has 3 USB ports and port HDMI, Includes memory card reader, Has numeric pad, Stereo sound mode, HD Audio, Battery life depends on the use given to the product.`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_642997-MLA52223463168_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_606407-MLA52223463170_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_967312-MLA52223427985_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_827950-MLA52223468108_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_726352-MLA52223463174_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_940588-MLA52223427986_102022-F.webp",
          ],
          price: 800,
          stock: 10,
          sold: 40,
          updatedAt: "2022-11-12T23:01:23.385Z",
          createdAt: "2022-11-12T23:01:23.385Z",
          deletedAt: null,
        },
        {
          name: "Notebook Asus X515EA slate gray 15.6, Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px",
          description: `Procesador Intel Core i5, Memoria RAM de 8GB, Resolución de 1920x1080 px, Es antirreflejo, Placa de video Intel Iris Xe Graphics G7 80EUs, Conexión wifi y bluetooth, Cuenta con 4 puertos USB y puerto HDMI, Modo de sonido SonicMaster, Mono, La duración de la batería depende del uso que se le dé al producto`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_981554-MLA52223907790_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_830654-MLA49895291893_052022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_773531-MLA49895291894_052022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_746507-MLA49895291895_052022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_768802-MLA49895291896_052022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_877064-MLA49895291897_052022-F.webp",
          ],
          price: 850,
          stock: 50,
          sold: 40,
          updatedAt: "2022-11-12T23:09:12.357Z",
          createdAt: "2022-11-12T23:09:12.357Z",
          deletedAt: null,
        },
        {
          name: "Notebook Kelyx Kl3350 Gris 14 , Intel Celeron N3350 4gb De Ram 64gb Ssd, Intel Hd Graphics 1920x1080px Windows 10 Home",
          description: `Intel Celeron processor, 4GB RAM memory, 14" LED screen, 1920x1080 px resolution, Intel Graphics HD video card, Wi-Fi and Bluetooth connection, It has 2 USB ports and an HDMI port, Includes memory card reader, Sleep mode Stereo sound, Battery life depends on the use that is given to the product.`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_624320-MLA51838855951_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_912825-MLA51838863832_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_986196-MLA51838855963_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_780982-MLA51838842946_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_758547-MLA51839137194_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_777475-MLA51839158127_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_714074-MLA51838842954_102022-F.webp",
          ],
          price: 250,
          stock: 33,
          sold: 40,
          updatedAt: "2022-11-12T23:17:53.447Z",
          createdAt: "2022-11-12T23:17:53.447Z",
          deletedAt: null,
        },
        {
          name: "Notebook Lenovo Ideapad 3 14iil05 Intel Core I3 1005g1, 8gb De Ram, 128gb Ssd, 14 Full Hd, Windows 11 S, Gris Platino",
          description: ` Intel Core i3 processor, 8GB RAM memory, 14" LCD screen, 1920x1080 px resolution, Wi-Fi and Bluetooth connection, Has HDMI port, Includes memory card reader, Battery life depends on usage to the product.`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_975834-MLA51015201380_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_691485-MLA45629807363_042021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_739693-MLA45629747469_042021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_665472-MLA45629807364_042021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_842629-MLA45629747470_042021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_918264-MLA45629747471_042021-F.webp",
          ],
          price: 695,
          stock: 27,
          sold: 40,
          updatedAt: "2022-11-12T22:53:13.771Z",
          createdAt: "2022-11-12T22:53:13.771Z",
          deletedAt: null,
        },
        {
          name: "Notebook Asus ZenBook 14 UM425QA pine gray 14, AMD Ryzen 5 4500U 8GB de RAM 512GB SSD, AMD Radeon RX Vega 6 (Ryzen 4000/5000) 1920x1080px Windows 11 Home",
          description: `AMD Ryzen 5 processor, 8GB RAM memory, 14" LED screen, 1920x1080 px resolution, It is anti-glare, AMD Radeon RX Vega 6 (Ryzen 4000/5000) video card, Wi-Fi and Bluetooth connection, It has 5 USB ports and HDMI port, Includes memory card reader, Mono sound mode, Harman/kardon, Battery life depends on product usage,
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_818349-MLA50955991721_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_967827-MLA50955991711_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_715561-MLA50955991708_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_994500-MLA50955973891_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_937137-MLA50955973892_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_920009-MLA50955991728_082022-F.webp",
          ],
          price: 1760,
          stock: 21,
          sold: 40,
          updatedAt: "2022-11-12T23:31:49.812Z",
          createdAt: "2022-11-12T23:31:49.812Z",
          deletedAt: null,
        },
        {
          name: "Xinua M3 pink gaming mouse",
          description: `
          It's wireless.
          Wireless Power Type: Battery
          It has a scroll wheel.
          With lights to improve the user experience.
          1600dpi resolution.
          Created to take everywhere.
          Smart control and easy navigation.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_664695-MLA49985603030_052022-F.webp",
          ],
          price: 13,
          stock: 261,
          sold: 40,
          updatedAt: "2022-11-12T23:59:05.182Z",
          createdAt: "2022-11-12T23:59:05.182Z",
          deletedAt: null,
        },
        {
          name: "Logitech G Series Lightsync G203 Gaming Mouse Black",
          description: `
          Use cord.
          It has a scroll wheel.
          With lights to improve the user experience.
          With optical sensor.
          8000dpi resolution.
          Created to take everywhere.
          Smart control and easy navigation.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_779763-MLA45385615296_032021-F.webp",
          ],
          price: 28,
          stock: 3,
          sold: 40,
          updatedAt: "2022-11-13T00:04:04.579Z",
          createdAt: "2022-11-13T00:04:04.579Z",
          deletedAt: null,
        },
        {
          name: "Razer Viper Mini Black Gaming Mouse",
          description: `
      Use cord.
It has a scroll wheel.
With lights to improve the user experience.
With optical sensor.
8500dpi resolution.
Created to take everywhere.
Smart control and easy navigation.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_915211-MLA43229688568_082020-F.webp",
          ],
          price: 56,
          stock: 32,
          sold: 40,
          updatedAt: "2022-11-13T00:07:26.182Z",
          createdAt: "2022-11-13T00:07:26.182Z",
          deletedAt: null,
        },
        {
          name: "Mouse Genius Dx-110 Usb 1000 Dpi Black 31010116100",
          description: `
          Compatible with Windows and MacOS
          Great for both hands.
          Soft and comfortable touch feeling.
          
          System Requirements:
          Windows 7, 8, 8.1, 10
          Mac OS 10.7.4 or higher
          USB port
          
          Specs:
          Sensor unit: Optical
          Cable length: 1.5m
          Number of buttons: Three (left, right and center with scroll)
          Color; black
          Weight: 85g
          Dimensions (W x H x D) 60 x 105 x 37 mm (2.36 x 4.13 x 1.46 inches)
          Resolution (DPI): 1000
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_608891-MLA31023920148_062019-F.webp",
          ],
          price: 9,
          stock: 200,
          sold: 40,
          updatedAt: "2022-11-13T00:10:08.856Z",
          createdAt: "2022-11-13T00:10:08.856Z",
          deletedAt: null,
        },
        {
          name: "Logitech G Series Lightsync G203 Gaming Mouse White",
          description: `
          Use cord.
          It has a scroll wheel.
          With lights to improve the user experience.
          With optical sensor.
          8000dpi resolution.
          Created to take everywhere.
          Smart control and easy navigation.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_775601-MLA45385615343_032021-F.webp",
          ],
          price: 26,
          stock: 7,
          sold: 40,
          updatedAt: "2022-11-12T23:31:49.812Z",
          createdAt: "2022-11-12T23:31:49.812Z",
          deletedAt: null,
        },
        {
          name: "Apple Magic QWERTY bluetooth keyboard Spanish Spain silver and white color",
          description: `
          Connectivity with multiple devices.
          Type of keyboard: scissor.
          Flat key.
          With USB connector.
          With removable cable.
          Measures: 27.9cm wide, 11.49cm high and 1.09cm deep.
          Indispensable for your activities.
          Images may be illustrative.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_898796-MLA52350355193_112022-F.webp",
          ],
          price: 113,
          stock: 5,
          sold: 40,
          updatedAt: "2022-11-13T00:27:23.018Z",
          createdAt: "2022-11-13T00:27:23.018Z",
          deletedAt: null,
        },
        {
          name: "Logitech K380 bluetooth keyboard QWERTY Spanish black color",
          description: `
          Connectivity with multiple devices.
          Ergonomic and suitable for various uses.
          Resistant to splashes.
          Type of keyboard: scissors.
          Flat key.
          Measures: 279mm wide, 124mm high and 16mm deep.
          Indispensable for your activities.
          Images may be illustrative.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_948839-MLA46869223637_072021-F.webp",
          ],
          price: 50,
          stock: 15,
          sold: 40,
          updatedAt: "2022-11-13T00:26:54.118Z",
          createdAt: "2022-11-13T00:26:54.118Z",
          deletedAt: null,
        },
        {
          name: "Gamer keyboard T-Dagger Arena T-TGK321 QWERTY T-Dagger Brown English US color black with rainbow light",
          description: `Splash resistant.
          Built-in anti-ghosting function.
          Keyboard type: mechanical.
          Cylindrical key.
          With USB-C connector.
          With removable cable.
          Measures: 293mm wide, 104mm high and 35mm deep.
          Indispensable for your activities.
          Images may be illustrative.

      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_645832-MLA50403770037_062022-F.webp",
          ],
          price: 31,
          stock: 91,
          sold: 40,
          updatedAt: "2022-11-13T00:26:02.662Z",
          createdAt: "2022-11-13T00:26:02.662Z",
          deletedAt: null,
        },
        {
          name: "Gamer keyboard Redragon Yama K550 QWERTY Outemu Purple spanish latin america black color with RGB light",
          description: `
          Ergonomic and suitable for various uses.
          It has wrist rest.
          Resistant to splashes.
          Contains numeric keypad.
          Built-in anti-ghosting function.
          Type of keyboard: mechanical.
          Cylindrical key.
          With USB connector.
          Measures: 45.5cm wide, 22.4cm high and 2.6cm deep.
          Indispensable for your activities.
          The images can be illustrative.
      
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_935185-MLA46504064329_062021-F.webp",
          ],
          price: 100,
          stock: 8,
          sold: 40,
          updatedAt: "2022-11-13T00:25:24.446Z",
          createdAt: "2022-11-13T00:25:24.446Z",
          deletedAt: null,
        },
        {
          name: "Redragon Draconic K530 QWERTY Outemu Brown English US gamer bluetooth keyboard white with RGB lighting",
          description: `
          Connectivity with multiple devices.
          Splash resistant.
          Built-in anti-ghosting function.
          Keyboard type: mechanical.
          Cylindrical key.
          With USB-C connector.
          With removable cable.
          Measures: 11.5" wide, 3.9" high and 1.4" deep.
          Indispensable for your activities.
          Images may be illustrative.

      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_975008-MLA46503943203_062021-F.webp",
          ],
          price: 75,
          stock: 21,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Motherboard Asus Prime B460m-a S1200 Intel B460 Hdmi R2.0",
          description: `
          Platform: Intel
          Maximum RAM memory capacity supported: 128 GB
          Chipsets: B460
          Socket: LGA1200
          Expansion slots: 1 x PCIe 3.0/2.0 x16 (x16 mode),2 x PCIe 3.0/2.0 x1
          With processor: No
          RAM type: DDR4
          Form factor: Micro ATX
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_799372-MLA48026435344_102021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_983812-MLA48256893894_112021-F.webp",
          ],
          price: 119,
          stock: 42,
          sold: 40,
          updatedAt: "2022-11-13T01:24:51.418Z",
          createdAt: "2022-11-13T01:24:51.418Z",
          deletedAt: null,
        },
        {
          name: "Motherboard Asus Tuf B450m Plus Gaming Ii Am4 Ddr4 Hdmi",
          description: `
          Platform: AMD
          Maximum RAM memory capacity supported: 64 GB
          Chipsets: AMD B450
          Socket: Socket AM4
          Expansion slots: 1 x PCI Express 3.0 x16 (x16 mode),1 x PCI Express 3.0 x16 (x8 mode),1 x PCIe 2.0 x16 (x4 mode),1 x PCI Express 2.0 x1
          With processor: No
          RAM type: DDR4
          Form factor: mATX
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_676206-MLA47169414658_082021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_994849-MLA47169400730_082021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_947909-MLA47169369866_082021-F.webp",
          ],
          price: 188,
          stock: 20,
          sold: 40,
          updatedAt: "2022-11-13T01:25:47.618Z",
          createdAt: "2022-11-13T01:25:47.618Z",
          deletedAt: null,
        },
        {
          name: "Motherboard Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer",
          description: `
          Supports AMD AMD AM4 Socket Ryzen ™ 2000, 3000 and 5000 series desktop processors
          Supports DDR4 3533+ (OC)
          2 PCIe 3.0 x16, 4 PCIe 2.0 x1
          AMD Quad CrossFireX™
          Graphics output: DisplayPort, HDMI
          7.1 channel HD audio (Realtek ALC892 / 897 audio codec)
          6 SATA3, 1 Ultra M.2 (PCIe Gen3 x4), 1 M.2 (PCIe Gen3 x2 and SATA3)
          2 USB 3.1 Gen2 (rear Type A + C)
          6 USB 3.1 Gen1 (2 front, 4 rear)
          Realtek Gigabit LAN
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_721198-MLA51347721570_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_669646-MLA51124529444_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_716148-MLA51124525460_082022-F.webp",
          ],
          price: 214,
          stock: 9,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Motherboard Gigabyte H510m-h Intel 10ma 11va Gen Lga 1200 Pc",
          description: `
          Brand: Gigabyte
          Model: H510M H.
          Socket: Intel LGA1200.
          Compatible CPUs: Intel Core 11th and 10th Gen, Intel Core Pentium Gold and Celeron 10th gen.
          PCIe slots: 1x PCIe x16 4.0/3.0, 1x PCIe x1.
          Storage port: 1x M.2 / 4x Sata.
          Chipset: Intel H510 Express Chipset.
          RAM Capacity / Max. speed: 64GB/3200MHz.
          USB ports: 2x USB 3.1 / 4x USB 2.0.
          Video ports: 1x HDMI / 1x VGA.
          Form factor: Micro ATX.
          SKU 413544
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_939395-MLA46871617575_072021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_679048-MLA46871558818_072021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_662151-MLA46871641482_072021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_712994-MLA46871602661_072021-F.webp",
          ],
          price: 135,
          stock: 13,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Motherboard Asus Prime Z590-p S1200 Intel",
          description: `
          Memory:
          4 x DIMM, max. 128 GB, DDR4 5133 (OC) / 5000 (OC) / 4800 (OC) / 4700 (OC) / 4600 (OC) / 4500 (OC) / 4400 (OC) / 4266 (OC) / 4133 (OC) / 4000 ( OC) / 3866 (OC) / 3733 (OC) / 3600 (OC) / 3466 (OC) / 3400 (OC) / 3333 (OC) / 3200/3000/2933/2800/2666/2400/2133 MHz No ECC , Unbuffered memory .

          Graphics:
          1 x DisplayPort 1.4
          1 x HDMITM 1.4 / 2.0
          
          Expansion slots:
          1 x PCIe 3.0 x16 slot (supports x4 mode).
          2 x PCIe 3.0 x1 slots

          Wireless and Bluetooth:
          VM.2 slot only (Key E, CNVi and PCIe),
          Wi-Fi module and M.2 Key E vertical bracket kit are purchased separately.

          Rear panel I/O ports:
          1 x USB 3.2 Gen 2x2 port (1 x USB Type-C®),
          1 x USB 3.2 Gen 2 port (1 x Type-A),
          2 x USB 3.2 Gen 1 ports (2 x Type-A),
          2 x USB 2.0 ports (2 x Type-A),
          1 x DisplayPort,
          1 x HDMI port,
          1 x VM.2 Slot (Key E),
          1 x Realtek 2.5Gb Ethernet Port,
          5 x Audio jacks,
          1 x Optical S/PDIF output port,
          1 x PS / 2 keyboard / mouse combo port.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_607355-MLA45141973694_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_916510-MLA45141964910_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_873138-MLA45141988393_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_918578-MLA45141967777_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_742421-MLA45141988397_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_916747-MLA45142003019_032021-F.webp",
          ],
          price: 289,
          stock: 1,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "Memoria RAM Value Select gamer color negro 16GB 1 Corsair CMV16GX4M1A2400C16",
          description: `
          Optimize the performance of your machine with DDR4 technology.
          DIMM format memory.
          Reaches a speed of 2400 MHz.
          Suitable for desktop computers.
          Value Select line.
          It has a transfer rate of 19200 MB/s.
          Compatible with Intel.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_852659-MLA41522341298_042020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_685121-MLA41522341297_042020-F.webp",
          ],
          price: 157,
          stock: 4,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8",
          description: `
          Optimize the performance of your machine with DDR4 SDRAM technology.
          UDIMM format memory.
          Reaches a speed of 3200 MHz.
          Suitable for desktop computers.
          Fury Beast DDR4 line.
          It has a transfer rate of 25600 MB/s.
          Compatible with AMD Ryzen.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_612752-MLA48636149729_122021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_899160-MLA48636298242_122021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_914690-MLA48636149731_122021-F.webp",
          ],
          price: 81,
          stock: 347,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "RAM memory XLR8 Gaming EPIC-X RGB gamer black color 8GB 1 PNY MD8GD4320016XRGB",
          description: `
          Optimize the performance of your machine with DDR4 technology.
          UDIMM format memory.
          Reaches a speed of 3200 MHz.
          Suitable for desktop computers.
          XLR8 Gaming EPIC-X RGB line.
          It has a transfer rate of 25600 MB/s.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_677059-MLA49041476800_022022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_837300-MLA51164496571_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_719019-MLA51164405993_082022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_637875-MLA51164542232_082022-F.webp",
          ],
          price: 81,
          stock: 24,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "RAM memory Vengeance RGB Pro gamer white color 16GB 2 Corsair CMW16GX4M2C3200C16",
          description: `
          Optimize the performance of your machine with DDR4 DRAM technology.
          DIMM format memory.
          Reaches a speed of 3200 MHz.
          Suitable for desktop computers.
          Vengeance RGB Pro line.
          It has a transfer rate of 25600 MB/s.
          Compatible with Intel, AMD.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_950470-MLA47873777689_102021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_639095-MLA47873777638_102021-F.webp",
          ],
          price: 182,
          stock: 3,
          sold: 40,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "RAM memory Vengeance LPX gamer color black 16GB 1 Corsair CMK16GX4M1D3000C16",
          description: `
          Optimize the performance of your machine with DDR4 DRAM technology.
          DIMM format memory.
          Reaches a speed of 3000 MHz.
          Suitable for desktop computers.
          Vengeance LPX line.
          It has a transfer rate of 24000 MB/s.
          Compatible with Intel.
      `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_732636-MLA32169346962_092019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_726382-MLA32170094040_092019-F.webp",
          ],
          price: 152,
          stock: 5,
          sold: 19,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "AMD Ryzen 7 5700G 100-100000263BOX 8-core 4.6GHz AMD processor with integrated graphics",
          description: `
          It is ideal for gamers and content creators who require a high-performance instrument.
          Fast and volatile 16 MB cache memory.
          Radeon Graphics processor.
          Supports DDR4 RAM memory.
          Its power is 65 W.
          It has 16 threads that favor the execution of multiple programs at the same time.
          Product in original packaging.
          Innovative processor developed under high quality standards
    `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_940934-MLU47593217192_092021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_642030-MLU47593199220_092021-F.webp",
          ],
          price: 471,
          stock: 2,
          sold: 19,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Gamer processor AMD Ryzen 5 5600X 100-100000065BOX 6-core, 4.6GHz",
          description: `
          It is ideal for gamers and content creators who require a high-performance instrument.
          Fast and volatile 32 MB cache memory.
          Supports DDR4 RAM memory.
          Its power is 65 W.
          It has 12 threads that favor the execution of multiple programs at the same time.
          Product in original packaging.
          Innovative processor developed under high quality standards.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_806834-MLA44347094824_122020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_984767-MLA44347094822_122020-F.webp",
          ],
          price: 379,
          stock: 35,
          sold: 17,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "Gamer processor Intel Core i5-10400F BX8070110400F 6-core 4.3GHz ",
          description: `
          Run video editing, content creation, streaming and gaming programs without affecting device performance.
          Fast and volatile 12 MB cache memory.
          Supports DDR4 RAM memory.
          Its power is 65 W.
          It has Hyper-Threading that favors the execution of programs simultaneously, by dividing the physical processor into two logical processors.
          Product in original packaging.
          Advanced high performance processor and leading brand in the field.
`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_602530-MLA43003993713_082020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_951550-MLA43003993763_082020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_676435-MLA43003993799_082020-F.webp",
          ],
          price: 221,
          stock: 12,
          sold: 18,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "Gamer Processor Intel Core i9-10900F BX8070110900F 10-core, 5.2GHz ",
          description: `
          Runs any type of program quickly and efficiently without affecting the overall performance of the device.
          20 MB cache memory, fast and volatile.
          Supports DDR4 RAM memory.
          Its power is 65 W.
          It has Hyper-Threading that favors the execution of programs simultaneously, by dividing the physical processor into two logical processors.
          It is compatible with 4K.
          Product in original packaging.
          Advanced high performance processor and leading brand in the industry.
`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_939767-MLA43004112705_082020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_895971-MLA43003993961_082020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_804031-MLA43004112799_082020-F.webp",
          ],
          price: 578,
          stock: 1,
          sold: 16,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "Microprocessor Gamer Amd Ryzen 9 5900x 4.8ghz Am4 5th Gen F",
          description: `
          Platform: Boxed Processor.
          Product Family: AMD Ryzen™ Processors.
          Product line: AMD Ryzen™ 9 Desktop Processors.
          CPU cores: 12, Thread count: 24.
          Max. boost clock: Up to 4.8GHz, Base clock: 3.7GHz.
          Total L2 cache: 6MB.
          Total L3 cache: 64MB.
          Default TDP/TDP: 105W.
          CPU Socket: AM4.
          Max. Temp: 90°C.
          Release date: 11/5/2020.
          Windows 10 64-bit edition.
          RHEL x86 64-bit edition.
          Ubuntu x86 64-bit edition.
          Memory type: DDR4.
          Maximum memory speed: Up to 3200MHz.
`,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_848940-MLA48571693445_122021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_848940-MLA48571693445_122021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_792101-MLA48571699421_122021-F.webp",
          ],
          price: 775,
          stock: 2,
          sold: 15,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Kingston SA400S37/480G 480GB internal solid disk drive black",
          description: `
          With 3D NAND technology.
          Useful for storing programs and documents with its 480 GB capacity.
          Resistant to strong shocks.
          Size of 2.5 ".
          Connection interface: SATA III.
          Suitable for PC and Notebook.
          The images may be illustrative.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_751939-MLA46221843872_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_781382-MLA46221874645_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_893373-MLA46221874646_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_983600-MLA50710963317_072022-F.webp",
          ],
          price: 64,
          stock: 664,
          sold: 14,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Western Digital WD Green WDS240G2G0A 240GB green internal solid disk drive",
          description: `
          Useful for storing programs and documents with its 240 GB capacity.
          Resistant to strong shocks.
          Size of 2.5 ".
          Connection interface: SATA III.
          Suitable for PC and Notebook.
          The images may be illustrative.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_651889-MLA40193501924_122019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_998393-MLA40193501933_122019-F.webp",
          ],
          price: 39,
          stock: 18,
          sold: 13,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Gigabyte GP-GSTFS31120GNTD 120GB internal solid disk drive black",
          description: `
          With 3D NAND technology.
          Useful for storing programs and documents with its 120 GB capacity.
          Resistant to strong shocks.
          Size of 2.5 ".
          It is compatible with Windows 10.
          Connection interface: SATA III.
          Suitable for PC and Notebook.
          The images may be illustrative.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_707852-MLA40177545670_122019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_973461-MLA40178190200_122019-F.webp",
          ],
          price: 28,
          stock: 71,
          sold: 12,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Western Digital WD10EZEX Internal Hard Drive 1TB",
          description: `
          Useful for storing programs and documents with its 1TB capacity.
          Size of 3.5 ".
          Connection interface: SATA III.
          Optimized for RAID configurations.
          Suitable for PC and AIO.
          Images may be illustrative.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_950993-MLA48157298622_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_712939-MLA51801197263_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_798931-MLA48157392118_112021-F.webp",
          ],
          price: 58,
          stock: 283,
          sold: 87,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Seagate Basic External Hard Drive STJL2000400 2TB black",
          description: `
          Useful for storing programs and documents with its 2TB capacity.
          Compatible with Windows 10, Windows 8, Windows 7.
          Easy to transport.
          Connection interfaces: USB 3.0 and USB 2.0.
          Suitable for Notebook and PC.
          Included accessories: usb cable, manual.
          The images may be illustrative.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_970799-MLA48157585691_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_660846-MLA48157646449_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_689728-MLA48157585709_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_780518-MLA48157767042_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_712189-MLA48157585726_112021-F.webp",
          ],
          price: 100,
          stock: 40,
          sold: 96,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "PC Power Supply Noga ATX-550 P4 550W black 200V",
          description: `
          Power output of 550W.
          ATX type power supply.
          Fan diameter of 8cm.
          Air cooling.
          Transforms energy.
          Of indispensable use for the good operation of the PC.
  `,
          image: [
            "https://res.cloudinary.com/di8j5hytq/image/upload/b_rgb:ffffff,c_pad,h_300,w_300/v1668984026/pf_grupal_folder/D_NQ_NP_2X_824426-MLA40183015404_122019-F_v1pxou.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_824426-MLA40183015404_122019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_642441-MLA40183015411_122019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_894797-MLA43358416079_092020-F.webp",
          ],
          price: 15,
          stock: 126,
          sold: 84,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "PC power supply LNZ PX550-FS 550W 115V/230V",
          description: `
          Power output of 550W.
          ATX type power supply.
          Fan diameter of 80mm.
          Air cooling.
          Transforms energy.
          Essential for the proper functioning of the PC.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_716085-MLA46012797554_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_834671-MLA45996533219_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_737683-MLA45996500333_052021-F.webp",
          ],
          price: 32,
          stock: 1000,
          sold: 13,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "PC power supply Corsair RMx Series RM850x 850W black 100V/240V",
          description: ` 
          850W output power.
          Modular cabling system for greater flexibility.
          ATX type power supply.
          Certified 80 Plus Gold efficiency.
          Fan diameter of 140mm.
          Air cooling.
          Transforms energy.
          Essential for the proper functioning of the PC.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_639976-MLA45772593351_042021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_834153-MLA45772736208_042021-F.webp",
          ],
          price: 277,
          stock: 37,
          sold: 5,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
        {
          name: "Redragon 850w Gc-ps010 Full Modular 80 Plus Gold Power Supply",
          description: `
          Power output of 850W.
          Color led light included.
          ATX type power supply.
          Fan diameter of 120mm.
          Air cooling.
          Transforms energy.
          Essential use for the proper functioning of the PC..
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_653647-MLA51838551209_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_917104-MLA51838551212_102022-F.webp",
          ],
          price: 138,
          stock: 113,
          sold: 1,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },

        {
          name: "PC power supply LNZ SX Series SX850-FS 850W black 115V/230V",
          description: `
          Power output of 850W.
          Color led light included.
          ATX type power supply.
          Fan diameter of 140mm.
          Air cooling.
          Transforms energy.
          Essential use for the proper functioning of the PC.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_773233-MLA45991876938_052021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_803894-MLA45992087518_052021-F.webp",
          ],
          price: 99,
          stock: 8,
          sold: 35,
          updatedAt: "2022-11-13T00:24:43.383Z",
          createdAt: "2022-11-13T00:24:43.383Z",
          deletedAt: null,
        },
      ],
      {}
    );
    {
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
