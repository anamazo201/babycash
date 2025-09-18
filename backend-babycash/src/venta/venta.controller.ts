import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@ApiTags('Ventas')
@ApiBearerAuth()
@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Crear venta',
    description: 'Registra una nueva venta en el sistema'
  })
  @ApiResponse({ status: 201, description: 'Venta creada exitosamente' })
  create(@Body() createVentaDto: CreateVentaDto) {
    return this.ventaService.create(createVentaDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar ventas',
    description: 'Obtiene la lista de todas las ventas registradas'
  })
  @ApiResponse({ status: 200, description: 'Lista de ventas obtenida exitosamente' })
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Obtener venta por ID',
    description: 'Obtiene la información de una venta específica por su ID'
  })
  @ApiResponse({ status: 200, description: 'Venta encontrada' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  findOne(@Param('id') id: string) {
    return this.ventaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Actualizar venta',
    description: 'Actualiza la información de una venta existente'
  })
  @ApiResponse({ status: 200, description: 'Venta actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.ventaService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Eliminar venta',
    description: 'Elimina una venta del sistema'
  })
  @ApiResponse({ status: 200, description: 'Venta eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}
