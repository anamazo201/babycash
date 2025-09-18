import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  //Esto se debe poner en todos los modulos que usen prisma
  imports: [PrismaModule],
  //fin prisma
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
