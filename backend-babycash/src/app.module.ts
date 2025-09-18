import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { VentaModule } from './venta/venta.module';
import { CarritoModule } from './carrito/carrito.module';
import { UsuarioModule } from './usuario/usuario.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { InventarioModule } from './inventario/inventario.module';
import { EnvioModule } from './envio/envio.module';
import { ClienteModule } from './cliente/cliente.module';
import { ItemCarritoModule } from './item-carrito/item-carrito.module';
import { PagoModule } from './pago/pago.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule, 
    ProductosModule, 
    VentaModule, 
    CarritoModule, 
    UsuarioModule, 
    DetalleVentaModule, 
    InventarioModule, 
    EnvioModule, 
    ClienteModule, 
    ItemCarritoModule, 
    PagoModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
