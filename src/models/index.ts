export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Marca {
  id: number;
  nombre: string;
  pais: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoriaId: number;
  marcaId: number;
  especificaciones: Record<string, string>;
}

export interface Promocion {
  id: number;
  titulo: string;
  descripcion: string;
  descuentoPorcentaje: number;
  categoriaId: number;
  vigencia: string;
}

export interface ItemPedido {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}

export interface Pedido {
  id: number;
  cliente: { nombre: string; email: string; telefono: string };
  items: ItemPedido[];
  total: number;
  fecha: string;
  estado: string;
}