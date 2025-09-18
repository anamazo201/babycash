import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemCarritoService } from './item-carrito.service';
import { CreateItemCarritoDto } from './dto/create-item-carrito.dto';
import { UpdateItemCarritoDto } from './dto/update-item-carrito.dto';

@Controller('item-carrito')
export class ItemCarritoController {
  constructor(private readonly itemCarritoService: ItemCarritoService) {}

  @Post()
  create(@Body() createItemCarritoDto: CreateItemCarritoDto) {
    return this.itemCarritoService.create(createItemCarritoDto);
  }

  @Get()
  findAll() {
    return this.itemCarritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemCarritoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemCarritoDto: UpdateItemCarritoDto) {
    return this.itemCarritoService.update(+id, updateItemCarritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemCarritoService.remove(+id);
  }
}
