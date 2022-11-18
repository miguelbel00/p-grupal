"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Computadora Cpu Armada Intel Core I5 8 Gb 240 Gb Ssd",
          description: `
        Procesador: Intel Core i5.
        Motherboard: Gigabyte, MSI, Esonic (a disponibilidad de stock).
        Memoria Ram: 8 Gb DDR3 1600 mhz.
        Gráficos HD Intel Graphics.
        Almacenamiento: 240 GB SSD.
        Salida de video VGA y HDMI.
        8 Puertos usb, ethernet, video y audio.`,
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
          name: "Pc Armada Intel Core I5 8gb Ssd240 W10 Office",
          description: `8GIGAS, DDR3, SSD 240, GAB ATX FUENTE 550W, SISTEMA OPERATIVO INSTALADO LISTA PARA USAR`,
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
          description: `MICRO: INTEL CELERON G5905 10MA GEN Dual Core, MOTHER: H510M PCIE 4.0 DDR4 USB 3.2, DISCO RIGIDO: ESTADO SOLIDO SSD 240GB SATA3, MEMORIA RAM: 8GB 2666MHZ DDR4, GABINETE: ATX G18 POWER KIT FUENTE 500W`,
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
          description: `Procesador Intel Core i5 10ma Generación LGA1200, Motherboard H410 con: HD Audio integrado Conexion Red LAN (por cable) integrada, 2 puertos USB 3.2 Gen 1 Type-A, 4 puertos USB 2.0, 1 Puerto PS2 para Mouse o Teclado, Video Graficos Integrados Intel UHD-630 Resolucion 4K, Modulo Wifi Interno para conexiones locales inalámbricas, Gabinete Solarmax CI-S102 de diseño compacto, Fuente Solarmax KC-EAA500 (500W)`,
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
          name: "Pc Armada Gamer Amd Ryzen 5 5600g 6/12 Nucleos 16gb Ram DDR4",
          description: `MICRO PROCESADOR: AMD Ryzen 5 5600G 6/12 NUCLEOS 4.4GHZ, PLACA DE VIDEO INCORPORADA RADEON VEGA RX, MOTHER: MSI A320M PRO PCI 3.0 USB 3.1, DISCO SSD: 480GB SATA3 ADATA 500MB, MEMORIA RAM: 16GB DDR4 2666 EXPANDIBLE HASTA 64GB, GABINETE: ATX SENTEY F10 - FUENTE BCP500W, SISTEMA OPERATIVO: WINDOWS 10 64BITS TRIAL`,
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
          name: "Pc Armada Gamer Amd Ryzen 3 3200g 8gb Ddr4 1 Tb",
          description: `AMD Ryzen 3 3200G, N.° de núcleos de CPU: 4, N.° de subprocesos: 4, N.° de núcleos de GPU: 8, Reloj base: 3.6GHz, Reloj de aumento Max: 4GHz,Caché L1 total: 384KB,Caché L2 total: 2MB,Caché L3 total:4MB,-Versión de PCI Express: PCIe 3.0 x8Velocidad máxima de memoria: 2933MHz, Canales de memoria: 2, Frecuencia de gráficos: 1250 MHz, Modelo de gráficos: Radeon™ Vega 8 Graphics, Número de núcleos de los gráficos: 8 `,
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
          name: "Pc Armada Gamer Amd Ryzen 5 4600g 8gb Ddr4 Nvme 240 Rx Vega",
          description: `Microprocesador AMD Ryzen 5 4600G 8MB 3.7GHz AM4, Memoria Ddr4 8Gb, Disco Solido Ssd 240Gb Nvme Western Digital Green SN350, Mother A320M Socket AM4, Sistema Operativo : Windows 10 Home 30 dias de prueba`,
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
          name: "Pc Armada Core I3 8g Ssd240 (gabinete Oulet) W10 Ofice",
          description: `PC ARMADA I3, 8 GIGAS ddr3, SSD 240, REG DE DVD, GAB ATX 550w OULET o USADO ACTUAL, SISTEMA OPERATIVO, W10 OFFICE ANTIVIRUS`,
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
          name: "Pc Armada Gamer Ryzen 5 3600 Rtx 3060 12gb Cyberpunk 2077",
          description: `MICRO: AMD Ryzen 5 3600, VIDEO: NVIDIA RTX3060 12GB PNY XLR8 con RGB, MOTHER: MSI A320 M2 PRO AM4, DISCO SSD: 240GB M2 ADATA 2000MB/S, DISCO DURO: 1TB SEAGATE 7200RPM, MEMORIA RAM: 16GB DDR4 3200MHZ PNY XLR8 (pack 2 x 8gb), GABINETE: SENTEY R20 con RGB, SISTEMA OPERATIVO: WINDOWS 10 64 TRIAL`,
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
          description: `Legion Tower T5i 6ta GeneraciónModelo: 90RT00XJAE Color: Negro Procesador11va generación Intel® Core™ i7-11700F Procesador (2.50 GHz hasta 4.90 GHz), Sistema Operativo Windows 11 Home Single Language 64, Memoria 16 GB (2 x 8 GB) UDIMM ARMOR DDR4 3200MHz, Almacenamiento 1TB SSD, Adaptador de Corriente 550W, Tarjeta Gráfica NVIDIA GeForce® RTX™ 3060 12GB GDDR6, Potencia 550W, Conectividad Inalámbrica11AX (2x2) & Bluetooth® 5.1`,
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
          description: `La notebook EXO Smart R33 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Pantalla con gran impacto visual Su pantalla de 14 y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance Con su procesador Intel Celeron de 2 núcleos, lograrás el desempeño que necesitás para navegar y trabajar. Podrás usar los programas más esenciales, llevar a cabo tus tareas y organizar tu vida diaria. Un procesador exclusivo para los gráficos Su placa de video Intel UHD Graphics 600 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.`,
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
          description: `Procesador AMD Ryzen 5, Memoria RAM de 8GB, Pantalla LCD de 15.5, Resolución de 1366x768 px, Es antirreflejo, Placa de video AMD Radeon RX Vega 8 (Ryzen 2000/3000), Conexión wifi y bluetooth, Cuenta con 3 puertos USB y puerto HDMI, Incluye lector de tarjeta de memoria, Posee pad numérico, Modo de sonido Stereo, HD Audio, La duración de la batería depende del uso que se le dé al producto.`,
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
          description: `Procesador Intel Celeron, Memoria RAM de 4GB, Pantalla LED de 14", Resolución de 1920x1080 px, Placa de video Intel Graphics HD, Conexión wifi y bluetooth, Cuenta con 2 puertos USB y puerto HDMI, Incluye lector de tarjeta de memoria, Modo de sonido Stereo, La duración de la batería depende del uso que se le dé al producto.`,
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
          description: ` Procesador Intel Core i3, Memoria RAM de 8GB, Pantalla LCD de 14", Resolución de 1920x1080 px, Conexión wifi y bluetooth, Cuenta con puerto HDMI, Incluye lector de tarjeta de memoria, La duración de la batería depende del uso que se le dé al producto.`,
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
          description: `Procesador AMD Ryzen 5, Memoria RAM de 8GB, Pantalla LED de 14", Resolución de 1920x1080 px, Es antirreflejo, Placa de video AMD Radeon RX Vega 6 (Ryzen 4000/5000), Conexión wifi y bluetooth, Cuenta con 5 puertos USB y puerto HDMI, Incluye lector de tarjeta de memoria, Modo de sonido Mono, Harman/kardon, La duración de la batería depende del uso que se le dé al producto,
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
          name: "Mouse de juego Xinua M3 rosa",
          description: `
Es inalámbrico.
Tipo de alimentación inalámbrica: batería.
Posee rueda de desplazamiento.
Con luces para mejorar la experiencia de uso.
Resolución de 1600dpi.
Creado para llevar a todas partes.
Control inteligente y navegación fácil.
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
          name: "Mouse de juego Logitech G Series Lightsync G203 negro",
          description: `
Utiliza cable.
Posee rueda de desplazamiento.
Con luces para mejorar la experiencia de uso.
Con sensor óptico.
Resolución de 8000dpi.
Creado para llevar a todas partes.
Control inteligente y navegación fácil.
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
          name: "Mouse de juego Razer Viper Mini negro",
          description: `
      Utiliza cable.
Posee rueda de desplazamiento.
Con luces para mejorar la experiencia de uso.
Con sensor óptico.
Resolución de 8500dpi.
Creado para llevar a todas partes.
Control inteligente y navegación fácil.
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
          name: "Mouse Genius Dx-110 Usb 1000 Dpi Negro 31010116100",
          description: `
 Compatible con Windows y MacOS
Genial para ambas manos.
Sensación suave y cómoda al tacto.

Requisitos del sistema:
Windows 7, 8, 8.1, 10
Mac OS 10.7.4 o superior
Puerto USB

Especificaciones:
Unidad de sensor: Óptico
Longitud de cable: 1.5m
Cantidad de botones: Tres (izquierda, derecha y central con desplazamiento)
Color; negro
Peso: 85 g
Dimensiones (A x A x P) 60 x 105 x 37 mm (2,36 x 4,13 x 1,46 pulgadas)
Resolución (DPI): 1000
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
          name: "Mouse de juego Logitech G Series Lightsync G203 blanco",
          description: `
      Utiliza cable.
Posee rueda de desplazamiento.
Con luces para mejorar la experiencia de uso.
Con sensor óptico.
Resolución de 8000dpi.
Creado para llevar a todas partes.
Control inteligente y navegación fácil.
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
          name: "Teclado bluetooth Apple Magic QWERTY español España color plata y blanco",
          description: `
      Conectividad con múltiples dispositivos.
      Tipo de teclado: tijera.
      Tecla plana.
      Con conector USB.
      Con cable removible.
      Medidas: 27.9cm de ancho, 11.49cm de alto y 1.09cm de profundidad.
      Indispensable para tus actividades.
      Las imágenes pueden ser ilustrativas.
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
          name: "Teclado bluetooth Logitech K380 QWERTY español color negro",
          description: `
      Conectividad con múltiples dispositivos.
      Ergonómico y apto para diversos usos.
      Resiste a salpicaduras.
      Tipo de teclado: tijera.
      Tecla plana.
      Medidas: 279mm de ancho, 124mm de alto y 16mm de profundidad.
      Indispensable para tus actividades.
      Las imágenes pueden ser ilustrativas.
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
          name: "Teclado gamer T-Dagger Arena T-TGK321 QWERTY T-Dagger Brown inglés US color negro con luz rainbow",
          description: `Resiste a salpicaduras.
      Función antighosting incorporada.
      Tipo de teclado: mecánico.
      Tecla cilíndrica.
      Con conector USB-C.
      Con cable removible.
      Medidas: 293mm de ancho, 104mm de alto y 35mm de profundidad.
      Indispensable para tus actividades.
      Las imágenes pueden ser ilustrativas.

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
          name: "Teclado gamer Redragon Yama K550 QWERTY Outemu Purple español latinoamérica color negro con luz RGB",
          description: `
      Ergonómico y apto para diversos usos.
      Tiene reposa muñeca.
      Resiste a salpicaduras.
      Contiene teclado numérico.
      Función antighosting incorporada.
      Tipo de teclado: mecánico.
      Tecla cilíndrica.
      Con conector USB.
      Medidas: 45.5cm de ancho, 22.4cm de alto y 2.6cm de profundidad.
      Indispensable para tus actividades.
      Las imágenes pueden ser ilustrativas.
      
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
          name: "Teclado gamer bluetooth Redragon Draconic K530 QWERTY Outemu Brown inglés US color blanco con luz RGB",
          description: `
      Conectividad con múltiples dispositivos.
Resiste a salpicaduras.
Función antighosting incorporada.
Tipo de teclado: mecánico.
Tecla cilíndrica.
Con conector USB-C.
Con cable removible.
Medidas: 11.5" de ancho, 3.9" de alto y 1.4" de profundidad.
Indispensable para tus actividades.
Las imágenes pueden ser ilustrativas.

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
      Plataforma: Intel
      Capacidad máxima soportada de la memoria RAM: 128 GB
      Chipsets: B460
      Socket: LGA1200
      Ranuras de expansión: 1 x PCIe 3.0/2.0 x16 (x16 mode),2 x PCIe 3.0/2.0 x1
      Con procesador: No
      Tipo de memoria RAM: DDR4
      Factor de forma: Micro ATX
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
      Plataforma: AMD
Capacidad máxima soportada de la memoria RAM: 64 GB
Chipsets: AMD B450
Socket: Socket AM4
Ranuras de expansión: 1 x PCI Express 3.0 x16 (x16 mode),1 x PCI Express 3.0 x16 (x8 mode),1 x PCIe 2.0 x16 (x4 mode),1 x PCI Express 2.0 x1
Con procesador: No
Tipo de memoria RAM: DDR4
Factor de forma: mATX
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
 Admite procesadores de escritorio AMD AM4 Socket Ryzen ™ de las series 2000, 3000 y 5000
Soporta DDR4 3533+ (OC)
2 PCIe 3.0 x16, 4 PCIe 2.0 x1
AMD Quad CrossFireX ™
Salida de gráficos: DisplayPort, HDMI
Audio 7.1 canales HD (Códec de audio Realtek ALC892 / 897)
6 SATA3, 1 Ultra M.2 (PCIe Gen3 x4), 1 M.2 (PCIe Gen3 x2 y SATA3)
2 USB 3.1 Gen2 (trasero tipo A + C)
6 USB 3.1 Gen1 (2 frontales, 4 traseros)
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
      Marca: Gigabyte
Modelo: H510M H.
Socket: Intel LGA1200.
CPU Compatibles: Intel Core 11va y 10ma Gen, Intel Core Pentium Gold y Celeron 10ma gen.
Ranuras PCIe: 1x PCIe x16 4.0/3.0, 1x PCIe x1.
Puerto de almacenamiento: 1x M.2 / 4x Sata.
Chipset: Intel H510 Express Chipset.
RAM Capacidad/Velocidad máx.: 64GB/3200MHz.
Puertos USB: 2x USB 3.1 / 4x USB 2.0.
Puertos de video: 1x HDMI / 1x VGA.
Factor de forma: Micro ATX.
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
Memoria:
4 x DIMM, máx. 128 GB, DDR4 5133 (OC) / 5000 (OC) / 4800 (OC) / 4700 (OC) / 4600 (OC) / 4500 (OC) / 4400 (OC) / 4266 (OC) / 4133 (OC) / 4000 ( OC) / 3866 (OC) / 3733 (OC) / 3600 (OC) / 3466 (OC) / 3400 (OC) / 3333 (OC) / 3200/3000/2933/2800/2666/2400/2133 MHz Sin ECC , Memoria sin búfer .

Gráficos:
1 x DisplayPort 1.4
1 x HDMITM 1.4 / 2.0

Ranuras de expansión:
1 x ranura PCIe 3.0 x16 (admite el modo x4)
2 x ranuras PCIe 3.0 x1

Inalámbrico y Bluetooth:
Solo ranura VM.2 (Key E, CNVi y PCIe),
El módulo Wi-Fi y el juego de soporte vertical M.2 Key E se compran por separado.

Puertos de E / S del panel posterior:
1 x puerto USB 3.2 Gen 2x2 (1 x USB Type-C®),
1 x puerto USB 3.2 Gen 2 (1 x Type-A),
2 x puertos USB 3.2 Gen 1 (2 x Type-A),
2 x puertos USB 2.0 ( 2 x Tipo A),
1 x DisplayPort,
1 x Puerto HDMI,
1 x Ranura VM.2 (Clave E),
1 x Puerto Ethernet Realtek 2.5Gb,
5 x Tomas de audio,
1 x Puerto de salida S / PDIF óptico,
1 x Teclado PS / 2 / Puerto combinado de mouse,
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
Optimizá el rendimiento de tu máquina con la tecnología DDR4.
Memoria con formato DIMM.
Alcanza una velocidad de 2400 MHz.
Apta para computadoras de escritorio.
Línea Value Select.
Cuenta con una tasa de transferencia de 19200 MB/s.
Compatible con Intel.
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
Optimizá el rendimiento de tu máquina con la tecnología DDR4 SDRAM.
Memoria con formato UDIMM.
Alcanza una velocidad de 3200 MHz.
Apta para computadoras de escritorio.
Línea Fury Beast DDR4.
Cuenta con una tasa de transferencia de 25600 MB/s.
Compatible con AMD Ryzen.
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
          name: "Memoria RAM XLR8 Gaming EPIC-X RGB gamer color negro 8GB 1 PNY MD8GD4320016XRGB",
          description: `
Optimizá el rendimiento de tu máquina con la tecnología DDR4.
Memoria con formato UDIMM.
Alcanza una velocidad de 3200 MHz.
Apta para computadoras de escritorio.
Línea XLR8 Gaming EPIC-X RGB.
Cuenta con una tasa de transferencia de 25600 MB/s.
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
          name: "Memoria RAM Vengeance RGB Pro gamer color blanco 16GB 2 Corsair CMW16GX4M2C3200C16",
          description: `
Optimizá el rendimiento de tu máquina con la tecnología DDR4 DRAM.
Memoria con formato DIMM.
Alcanza una velocidad de 3200 MHz.
Apta para computadoras de escritorio.
Línea Vengeance RGB Pro.
Cuenta con una tasa de transferencia de 25600 MB/s.
Compatible con Intel, AMD.
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
          name: "Memoria RAM Vengeance LPX gamer color black 16GB 1 Corsair CMK16GX4M1D3000C16",
          description: `
Optimizá el rendimiento de tu máquina con la tecnología DDR4 DRAM.
Memoria con formato DIMM.
Alcanza una velocidad de 3000 MHz.
Apta para computadoras de escritorio.
Línea Vengeance LPX.
Cuenta con una tasa de transferencia de 24000 MB/s.
Compatible con Intel.
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
          name: "Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
          description: `
Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.
Memoria caché de 16 MB, rápida y volátil.
Procesador gráfico Radeon Graphics.
Soporta memoria RAM DDR4.
Su potencia es de 65 W.
Cuenta con 16 hilos que favorecen la ejecución de múltiples programas a la vez.
Producto en empaque original.
Procesador innovador desarrollado bajo altos estándares de calidad.
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
          name: "Pocesador gamer AMD Ryzen 5 5600X 100-100000065BOX de 6 núcleos y 4.6GHz de frecuencia",
          description: `
 Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.
Memoria caché de 32 MB, rápida y volátil.
Soporta memoria RAM DDR4.
Su potencia es de 65 W.
Cuenta con 12 hilos que favorecen la ejecución de múltiples programas a la vez.
Producto en empaque original.
Procesador innovador desarrollado bajo altos estándares de calidad.
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
          name: "Procesador gamer Intel Core i5-10400F BX8070110400F de 6 núcleos y 4.3GHz de frecuencia",
          description: `
Ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento del dispositivo.
Memoria caché de 12 MB, rápida y volátil.
Soporta memoria RAM DDR4.
Su potencia es de 65 W.
Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos.
Producto en empaque original.
Procesador avanzado de alto desempeño y marca líder en el rubro.
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
          name: "Proocesador gamer Intel Core i9-10900F BX8070110900F de 10 núcleos y 5.2GHz de frecuencia",
          description: `
Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.
Memoria caché de 20 MB, rápida y volátil.
Soporta memoria RAM DDR4.
Su potencia es de 65 W.
Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos.
Es compatible con 4K.
Producto en empaque original.
Procesador avanzado de alto desempeño y marca líder en el rubro.
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
          name: "Microprocesador Gamer Amd Ryzen 9 5900x 4.8ghz Am4 5ta Gen F",
          description: `
Plataforma: Boxed Processor.
Familia de productos: AMD Ryzen™ Processors.
Línea de productos: AMD Ryzen™ 9 Desktop Processors.
de núcleos de CPU: 12, de hilos: 24.
Reloj de aumento máx.: Hasta 4.8GHz, Reloj base: 3.7GHz.
Caché L2 total: 6MB.
Caché L3 total: 64MB.
TDP/TDP predeterminado: 105W.
CPU Socket: AM4.
Temp. máx.: 90°C.
Fecha de lanzamiento: 11/5/2020.
Windows 10 edición de 64·bits.
RHEL x86 edición de 64·bits.
Ubuntu x86 edición de 64·bits.
Tipo de memoria: DDR4.
Velocidad máxima de memoria: Up to 3200MHz.
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
          name: "Disco sólido interno Kingston SA400S37/480G 480GB negro",
          description: `
Con tecnología 3D NAND.
Útil para guardar programas y documentos con su capacidad de 480 GB.
Resistente a fuertes golpes.
Tamaño de 2.5 ".
Interfaz de conexión: SATA III.
Apto para PC y Notebook.
Las imágenes pueden ser ilustrativas.
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
          name: "Disco sólido interno Western Digital WD Green WDS240G2G0A 240GB verde",
          description: `
Útil para guardar programas y documentos con su capacidad de 240 GB.
Resistente a fuertes golpes.
Tamaño de 2.5 ".
Interfaz de conexión: SATA III.
Apto para PC y Notebook.
Las imágenes pueden ser ilustrativas.
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
          name: "Disco sólido interno Gigabyte GP-GSTFS31120GNTD 120GB negro",
          description: `
Con tecnología 3D NAND.
Útil para guardar programas y documentos con su capacidad de 120 GB.
Resistente a fuertes golpes.
Tamaño de 2.5 ".
Es compatible con Windows 10.
Interfaz de conexión: SATA III.
Apto para PC y Notebook.
Las imágenes pueden ser ilustrativas.
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
          name: "Disco duro interno Western Digital WD10EZEX 1TB",
          description: `
Útil para guardar programas y documentos con su capacidad de 1 TB.
Tamaño de 3.5 ".
Interfaz de conexión: SATA III.
Optimizado para configuraciones RAID.
Apto para PC y AIO.
Las imágenes pueden ser ilustrativas.
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
          name: "Disco duro externo Seagate Basic STJL2000400 2TB negro",
          description: `
Útil para guardar programas y documentos con su capacidad de 2 TB.
Es compatible con Windows 10, Windows 8, Windows 7.
Fácil de transportar.
Interfaces de conexión: USB 3.0 y USB 2.0.
Apto para Notebook y PC.
Accesorios incluidos: cable usb, manual.
Las imágenes pueden ser ilustrativas.
  `,
          image: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_660846-MLA48157646449_112021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_970799-MLA48157585691_112021-F.webp",
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
          name: "Fuente de alimentación para PC Noga ATX-550 P4 550W negra 200V",
          description: `
Potencia de salida de 550W.
Fuente de tipo ATX.
Diámetro del ventilador de 8cm.
Refrigeración por aire.
Transforma la energía.
De uso imprescindible para el buen funcionamiento de la PC.
  `,
          image: [
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
          name: "Fuente de alimentación para PC LNZ PX550-FS 550W 115V/230V",
          description: `
Potencia de salida de 550W.
Fuente de tipo ATX.
Diámetro del ventilador de 80mm.
Refrigeración por aire.
Transforma la energía.
De uso imprescindible para el buen funcionamiento de la PC.
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
          name: "Fuente de alimentación para PC Corsair RMx Series RM850x 850W black 100V/240V",
          description: ` 
Potencia de salida de 850W.
Sistema de cableado modular para mayor flexibilidad.
Fuente de tipo ATX.
Con certificación de eficiencia 80 Plus Gold.
Diámetro del ventilador de 140mm.
Refrigeración por aire.
Transforma la energía.
De uso imprescindible para el buen funcionamiento de la PC.
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
          name: "Fuente Redragon 850w Gc-ps010 Full Modular 80 Plus Gold",
          description: `
Potencia de salida de 850W.
Sistema de cableado modular para mayor flexibilidad.
Fuente de tipo ATX.
Con certificación de eficiencia 80 Plus Gold.
Diámetro del ventilador de 120mm.
Refrigeración por aire.
Transforma la energía.
De uso imprescindible para el buen funcionamiento de la PC.
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
          name: "Fuente de alimentación para PC LNZ SX Series SX850-FS 850W negra 115V/230V",
          description: `
Potencia de salida de 850W.
Luz led de colores incluida.
Fuente de tipo ATX.
Diámetro del ventilador de 140mm.
Refrigeración por aire.
Transforma la energía.
De uso imprescindible para el buen funcionamiento de la PC.
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
