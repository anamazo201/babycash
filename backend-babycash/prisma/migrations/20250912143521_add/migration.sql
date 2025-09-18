-- CreateTable
CREATE TABLE "producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: usuario
CREATE TABLE "usuario" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "nombre" TEXT NOT NULL,
  "apellido" TEXT NOT NULL,
  "correo" TEXT NOT NULL UNIQUE,
  "contrasena" TEXT NOT NULL,
  "tipo" TEXT NOT NULL,
  "fechaRegistro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: venta
CREATE TABLE "venta" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "usuarioId" INTEGER NOT NULL,
  "total" REAL NOT NULL,
  "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "venta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: detalleVenta
CREATE TABLE "detalleVenta" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "ventaId" INTEGER NOT NULL,
  "productoId" INTEGER NOT NULL,
  "cantidad" INTEGER NOT NULL,
  "precioUnitario" REAL NOT NULL,
  CONSTRAINT "detalleVenta_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "venta" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "detalleVenta_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: inventario
CREATE TABLE "inventario" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "productoId" INTEGER NOT NULL,
  "cantidad" INTEGER NOT NULL,
  "fechaEntrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "lote" TEXT NOT NULL,
  "proveedor" TEXT NOT NULL,
  CONSTRAINT "inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: envio
CREATE TABLE "envio" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "ventaId" INTEGER NOT NULL,
  "direccion" TEXT NOT NULL,
  "ciudad" TEXT NOT NULL,
  "fechaEnvio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "estadoEnvio" TEXT NOT NULL,
  CONSTRAINT "envio_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "venta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: carrito
CREATE TABLE "carrito" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "usuarioId" INTEGER NOT NULL,
  "fechaCreacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "estado" TEXT NOT NULL,
  "productoId" INTEGER NOT NULL,
  CONSTRAINT "carrito_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "carrito_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: cliente
CREATE TABLE "cliente" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "usuarioid" INTEGER NOT NULL,
  "telefono" TEXT NOT NULL,
  "direccion" TEXT NOT NULL,
  "fechaNacimiento" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: itemCarrito
CREATE TABLE "itemCarrito" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "carritoId" INTEGER NOT NULL,
  "productoId" INTEGER NOT NULL,
  "cantidad" INTEGER NOT NULL,
  CONSTRAINT "itemCarrito_carritoId_fkey" FOREIGN KEY ("carritoId") REFERENCES "carrito" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "itemCarrito_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla: pago
CREATE TABLE "pago" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "ventaId" INTEGER NOT NULL,
  "metodoPago" TEXT NOT NULL,
  "estadoPago" TEXT NOT NULL,
  "fechaPago" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "pago_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "venta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);