import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@ApiTags('Carrito')
@ApiBearerAuth()
@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Crear carrito',
    description: 'Crea un nuevo carrito de compras para un usuario'
  })
  @ApiResponse({ status: 201, description: 'Carrito creado exitosamente' })
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritoService.create(createCarritoDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar carritos',
    description: 'Obtiene la lista de todos los carritos de compras'
  })
  @ApiResponse({ status: 200, description: 'Lista de carritos obtenida exitosamente' })
  findAll() {
    return this.carritoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Obtener carrito por ID',
    description: 'Obtiene la información de un carrito específico por su ID'
  })
  @ApiResponse({ status: 200, description: 'Carrito encontrado' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  findOne(@Param('id') id: string) {
    return this.carritoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Actualizar carrito',
    description: 'Actualiza la información de un carrito existente'
  })
  @ApiResponse({ status: 200, description: 'Carrito actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritoService.update(+id, updateCarritoDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Eliminar carrito',
    description: 'Elimina un carrito del sistema'
  })
  @ApiResponse({ status: 200, description: 'Carrito eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  remove(@Param('id') id: string) {
    return this.carritoService.remove(+id);
  }
}
