import { Injectable } from '@nestjs/common';
import { CreateItemCarritoDto } from './dto/create-item-carrito.dto';
import { UpdateItemCarritoDto } from './dto/update-item-carrito.dto';

@Injectable()
export class ItemCarritoService {
  create(createItemCarritoDto: CreateItemCarritoDto) {
    return 'This action adds a new itemCarrito';
  }

  findAll() {
    return `This action returns all itemCarrito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemCarrito`;
  }

  update(id: number, updateItemCarritoDto: UpdateItemCarritoDto) {
    return `This action updates a #${id} itemCarrito`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemCarrito`;
  }
}
