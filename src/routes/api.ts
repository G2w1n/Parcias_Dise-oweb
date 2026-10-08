import { Router } from "express";
import { categorias, marcas, productos, promociones, pedidos } from "../data/datos";
import { Pedido, Producto } from "../models";

const router = Router();

// Agrega nombre de categoría, marca y descuento vigente a cada producto
function enriquecer(p: Producto) {
  const categoria = categorias.find((c) => c.id === p.categoriaId);
  const marca = marcas.find((m) => m.id === p.marcaId);
  const promo = promociones.find(
    (pr) => pr.categoriaId === p.categoriaId && new Date(pr.vigencia) >= new Date()
  );
  const descuento = promo ? promo.descuentoPorcentaje : 0;
  return {
    ...p,
    categoria: categoria?.nombre ?? "",
    marca: marca?.nombre ?? "",
    descuento,
    precioFinal: Math.round(p.precio * (100 - descuento)) / 100,
  };
}

// ===== PRODUCTOS (con filtros por parámetros) =====
router.get("/productos", (req, res) => {
  const { categoriaId, marcaId, precioMin, precioMax, q, orden } = req.query;
  let lista = [...productos];

  if (categoriaId) lista = lista.filter((p) => p.categoriaId === Number(categoriaId));
  if (marcaId) lista = lista.filter((p) => p.marcaId === Number(marcaId));
  if (precioMin) lista = lista.filter((p) => p.precio >= Number(precioMin));
  if (precioMax) lista = lista.filter((p) => p.precio <= Number(precioMax));
  if (q) {
    const texto = String(q).toLowerCase();
    lista = lista.filter(
      (p) => p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto)
    );
  }

  if (orden === "precio-asc") lista.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
  if (orden === "nombre") lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

  res.json(lista.map(enriquecer));
});

router.get("/productos/:id", (req, res) => {
  const p = productos.find((x) => x.id === Number(req.params.id));
  if (!p) {
    res.status(404).json({ mensaje: "Producto no encontrado" });
    return;
  }
  res.json(enriquecer(p));
});

// ===== RECURSOS RELACIONADOS =====
router.get("/categorias", (_req, res) => {
  res.json(categorias);
});

router.get("/marcas", (_req, res) => {
  res.json(marcas);
});

router.get("/promociones", (_req, res) => {
  res.json(promociones);
});

// ===== PEDIDOS (lo que envía el carrito) =====
router.get("/pedidos", (_req, res) => {
  res.json(pedidos);
});

router.post("/pedidos", (req, res) => {
  const { cliente, items } = (req.body ?? {}) as {
    cliente?: { nombre: string; email: string; telefono: string };
    items?: { productoId: number; cantidad: number }[];
  };

  if (!cliente?.nombre || !cliente?.email) {
    res.status(400).json({ mensaje: "Nombre y correo son obligatorios" });
    return;
  }
  if (!items || items.length === 0) {
    res.status(400).json({ mensaje: "El carrito está vacío" });
    return;
  }

  const itemsPedido: Pedido["items"] = [];
  let total = 0;

  for (const item of items) {
    const producto = productos.find((p) => p.id === item.productoId);
    if (!producto) {
      res.status(404).json({ mensaje: `Producto ${item.productoId} no existe` });
      return;
    }
    if (item.cantidad < 1 || item.cantidad > producto.stock) {
      res.status(409).json({ mensaje: `Stock insuficiente para ${producto.nombre}` });
      return;
    }
    const precioUnitario = enriquecer(producto).precioFinal;
    itemsPedido.push({ productoId: producto.id, cantidad: item.cantidad, precioUnitario });
    total += precioUnitario * item.cantidad;
  }

  // Descontar stock solo si todo el pedido es válido
  for (const item of itemsPedido) {
    const producto = productos.find((p) => p.id === item.productoId)!;
    producto.stock -= item.cantidad;
  }

  const pedido: Pedido = {
    id: pedidos.length + 1,
    cliente: { nombre: cliente.nombre, email: cliente.email, telefono: cliente.telefono ?? "" },
    items: itemsPedido,
    total: Math.round(total * 100) / 100,
    fecha: new Date().toISOString(),
    estado: "Recibido",
  };
  pedidos.push(pedido);
  res.status(201).json(pedido);
});

export default router;