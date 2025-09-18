import { Module } from '@nestjs/common';
import { ItemCarritoService } from './item-carrito.service';
import { ItemCarritoController } from './item-carrito.controller';

@Module({
  controllers: [ItemCarritoController],
  providers: [ItemCarritoService],
})
export class ItemCarritoModule {}
