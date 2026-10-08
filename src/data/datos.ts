import { Categoria, Marca, Producto, Promocion, Pedido } from "../models";

const img = (texto: string) =>
  `https://placehold.co/600x400/1e293b/ffffff?text=${encodeURIComponent(texto)}`;

export const categorias: Categoria[] = [
  { id: 1, nombre: "Procesadores", descripcion: "El cerebro de tu PC" },
  { id: 2, nombre: "Tarjetas de video", descripcion: "Potencia gráfica para juegos y diseño" },
  { id: 3, nombre: "Memoria RAM", descripcion: "Más multitarea y velocidad" },
  { id: 4, nombre: "Almacenamiento", descripcion: "SSD y discos de alta velocidad" },
  { id: 5, nombre: "Placas madre", descripcion: "La base que conecta todo" },
  { id: 6, nombre: "Periféricos", descripcion: "Mouse, teclados y audífonos" },
];

export const marcas: Marca[] = [
  { id: 1, nombre: "Intel", pais: "Estados Unidos" },
  { id: 2, nombre: "AMD", pais: "Estados Unidos" },
  { id: 3, nombre: "NVIDIA", pais: "Estados Unidos" },
  { id: 4, nombre: "Kingston", pais: "Estados Unidos" },
  { id: 5, nombre: "Corsair", pais: "Estados Unidos" },
  { id: 6, nombre: "Samsung", pais: "Corea del Sur" },
  { id: 7, nombre: "ASUS", pais: "Taiwán" },
  { id: 8, nombre: "Logitech", pais: "Suiza" },
];

export const productos: Producto[] = [
  { id: 1, nombre: "Intel Core i5-12400F", descripcion: "Procesador de 6 núcleos ideal para gaming.", precio: 520, stock: 15, imagen: img("Core i5-12400F"), categoriaId: 1, marcaId: 1, especificaciones: { Núcleos: "6", Hilos: "12", Frecuencia: "4.4 GHz", Socket: "LGA1700" } },
  { id: 2, nombre: "Intel Core i7-13700K", descripcion: "Alto rendimiento para juegos y producción.", precio: 1290, stock: 6, imagen: img("Core i7-13700K"), categoriaId: 1, marcaId: 1, especificaciones: { Núcleos: "16", Hilos: "24", Frecuencia: "5.4 GHz", Socket: "LGA1700" } },
  { id: 3, nombre: "AMD Ryzen 5 5600", descripcion: "Excelente relación precio-rendimiento.", precio: 480, stock: 20, imagen: img("Ryzen 5 5600"), categoriaId: 1, marcaId: 2, especificaciones: { Núcleos: "6", Hilos: "12", Frecuencia: "4.4 GHz", Socket: "AM4" } },
  { id: 4, nombre: "AMD Ryzen 7 7800X3D", descripcion: "El procesador gamer más potente de su gama.", precio: 1650, stock: 4, imagen: img("Ryzen 7 7800X3D"), categoriaId: 1, marcaId: 2, especificaciones: { Núcleos: "8", Hilos: "16", Frecuencia: "5.0 GHz", Socket: "AM5" } },
  { id: 5, nombre: "NVIDIA GeForce RTX 4060", descripcion: "Gráficos modernos con DLSS 3 para 1080p.", precio: 1450, stock: 8, imagen: img("RTX 4060"), categoriaId: 2, marcaId: 3, especificaciones: { Memoria: "8 GB GDDR6", Consumo: "115 W", Salidas: "HDMI, DisplayPort" } },
  { id: 6, nombre: "NVIDIA GeForce RTX 4070 Super", descripcion: "Rendimiento de alta gama para 1440p.", precio: 2900, stock: 3, imagen: img("RTX 4070 Super"), categoriaId: 2, marcaId: 3, especificaciones: { Memoria: "12 GB GDDR6X", Consumo: "220 W", Salidas: "HDMI, DisplayPort" } },
  { id: 7, nombre: "ASUS Dual GeForce RTX 3050 6GB", descripcion: "Tarjeta de entrada con refrigeración dual.", precio: 890, stock: 10, imagen: img("ASUS RTX 3050"), categoriaId: 2, marcaId: 7, especificaciones: { Memoria: "6 GB GDDR6", Consumo: "70 W", Ventiladores: "2" } },
  { id: 8, nombre: "Kingston Fury Beast 16GB DDR4", descripcion: "Memoria RAM de 3200 MHz con disipador.", precio: 165, stock: 40, imagen: img("Fury Beast 16GB"), categoriaId: 3, marcaId: 4, especificaciones: { Capacidad: "16 GB", Tipo: "DDR4", Velocidad: "3200 MHz" } },
  { id: 9, nombre: "Kingston Fury Beast 32GB DDR5", descripcion: "Kit de alta velocidad para plataformas modernas.", precio: 380, stock: 18, imagen: img("Fury Beast 32GB"), categoriaId: 3, marcaId: 4, especificaciones: { Capacidad: "32 GB", Tipo: "DDR5", Velocidad: "5600 MHz" } },
  { id: 10, nombre: "Corsair Vengeance 16GB DDR5", descripcion: "Memoria DDR5 con perfil de baja altura.", precio: 270, stock: 0, imagen: img("Vengeance 16GB"), categoriaId: 3, marcaId: 5, especificaciones: { Capacidad: "16 GB", Tipo: "DDR5", Velocidad: "5200 MHz" } },
  { id: 11, nombre: "Kingston NV2 1TB NVMe", descripcion: "SSD rápido para arranque y juegos.", precio: 260, stock: 30, imagen: img("Kingston NV2 1TB"), categoriaId: 4, marcaId: 4, especificaciones: { Capacidad: "1 TB", Interfaz: "NVMe PCIe 4.0", Lectura: "3500 MB/s" } },
  { id: 12, nombre: "Samsung 980 Pro 1TB", descripcion: "SSD NVMe de alto rendimiento.", precio: 520, stock: 12, imagen: img("Samsung 980 Pro"), categoriaId: 4, marcaId: 6, especificaciones: { Capacidad: "1 TB", Interfaz: "NVMe PCIe 4.0", Lectura: "7000 MB/s" } },
  { id: 13, nombre: "Samsung 870 EVO 500GB", descripcion: "SSD SATA confiable para cualquier equipo.", precio: 230, stock: 25, imagen: img("Samsung 870 EVO"), categoriaId: 4, marcaId: 6, especificaciones: { Capacidad: "500 GB", Interfaz: "SATA III", Lectura: "560 MB/s" } },
  { id: 14, nombre: "ASUS Prime B660M-A", descripcion: "Placa micro-ATX para procesadores Intel.", precio: 540, stock: 9, imagen: img("ASUS Prime B660M"), categoriaId: 5, marcaId: 7, especificaciones: { Socket: "LGA1700", Formato: "mATX", Memoria: "DDR4" } },
  { id: 15, nombre: "ASUS ROG Strix B650-A", descripcion: "Placa ATX gamer para procesadores AMD.", precio: 1150, stock: 5, imagen: img("ROG Strix B650-A"), categoriaId: 5, marcaId: 7, especificaciones: { Socket: "AM5", Formato: "ATX", Memoria: "DDR5" } },
  { id: 16, nombre: "Logitech G203 Mouse Gamer", descripcion: "Mouse con iluminación RGB y 8000 DPI.", precio: 95, stock: 50, imagen: img("Logitech G203"), categoriaId: 6, marcaId: 8, especificaciones: { Sensor: "8000 DPI", Conexión: "USB", Botones: "6" } },
  { id: 17, nombre: "Logitech G413 SE Teclado Mecánico", descripcion: "Teclado mecánico compacto para juegos.", precio: 240, stock: 14, imagen: img("Logitech G413 SE"), categoriaId: 6, marcaId: 8, especificaciones: { Tipo: "Mecánico", Conexión: "USB", Distribución: "Completo" } },
  { id: 18, nombre: "Corsair HS55 Audífonos", descripcion: "Audífonos gamer ligeros con micrófono.", precio: 290, stock: 11, imagen: img("Corsair HS55"), categoriaId: 6, marcaId: 5, especificaciones: { Conexión: "Jack 3.5 mm", Micrófono: "Desmontable", Sonido: "Estéreo" } },
];

export const promociones: Promocion[] = [
  { id: 1, titulo: "Semana del Gamer", descripcion: "15% de descuento en tarjetas de video.", descuentoPorcentaje: 15, categoriaId: 2, vigencia: "2026-12-31" },
  { id: 2, titulo: "Más memoria, más velocidad", descripcion: "10% de descuento en memoria RAM.", descuentoPorcentaje: 10, categoriaId: 3, vigencia: "2026-11-30" },
  { id: 3, titulo: "Periféricos al 20%", descripcion: "20% de descuento en mouse, teclados y audífonos.", descuentoPorcentaje: 20, categoriaId: 6, vigencia: "2026-12-15" },
  { id: 4, titulo: "Almacenamiento veloz", descripcion: "12% de descuento en SSD.", descuentoPorcentaje: 12, categoriaId: 4, vigencia: "2026-11-15" },
];

export const pedidos: Pedido[] = [];