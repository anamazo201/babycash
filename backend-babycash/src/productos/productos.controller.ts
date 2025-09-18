import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Public } from '../auth/public.decorator';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Roles } from '../auth/roles.decorator';

@ApiTags('🛍️ Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiBearerAuth()
  @Post()
  @Roles('administrador')
  @ApiOperation({ 
    summary: '➕ Crear producto',
    description: '**🔒 Solo Administradores** - Crea un nuevo producto en el catálogo'
  })
  @ApiResponse({ 
    status: 201, 
    description: '✅ Producto creado exitosamente',
    schema: {
      example: {
        id: 1,
        nombre: 'Producto Baby',
        descripcion: 'Descripción del producto',
        precio: 29999.99,
        categoria: 'Alimentación',
        stock: 100,
        imagen: 'https://ejemplo.com/imagen.jpg',
        fechaCreacion: '2024-01-15T10:30:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 401, 
    description: '❌ No autorizado - Se requiere autenticación' 
  })
  @ApiResponse({ 
    status: 403, 
    description: '❌ Acceso denegado - Se requiere rol administrador' 
  })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Public()
  @Get()
  @ApiOperation({ 
    summary: '📋 Listar productos',
    description: '🌐 **Acceso Público** - Obtiene todos los productos del catálogo'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Lista de productos obtenida exitosamente',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          nombre: { type: 'string', example: 'Producto Baby' },
          descripcion: { type: 'string', example: 'Descripción del producto' },
          precio: { type: 'number', example: 29999.99 },
          categoria: { type: 'string', example: 'Alimentación' },
          stock: { type: 'number', example: 100 },
          imagen: { type: 'string', example: 'https://ejemplo.com/imagen.jpg' },
          fechaCreacion: { type: 'string', format: 'date-time' }
        }
      }
    }
  })
  findAll() {
    return this.productosService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ 
    summary: '🔍 Obtener producto por ID',
    description: '🌐 **Acceso Público** - Obtiene información detallada de un producto específico'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Producto encontrado',
    schema: {
      example: {
        id: 1,
        nombre: 'Producto Baby',
        descripcion: 'Descripción detallada del producto',
        precio: 29999.99,
        categoria: 'Alimentación',
        stock: 100,
        imagen: 'https://ejemplo.com/imagen.jpg',
        fechaCreacion: '2024-01-15T10:30:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Producto no encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Producto no encontrado',
        error: 'Not Found'
      }
    }
  })
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @Roles('administrador')
  @ApiOperation({ 
    summary: '✏️ Actualizar producto',
    description: '**🔒 Solo Administradores** - Actualiza información de un producto existente'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Producto actualizado exitosamente',
    schema: {
      example: {
        id: 1,
        nombre: 'Producto Baby Actualizado',
        descripcion: 'Nueva descripción',
        precio: 34999.99,
        categoria: 'Alimentación',
        stock: 150,
        imagen: 'https://ejemplo.com/nueva-imagen.jpg',
        fechaCreacion: '2024-01-15T10:30:00.000Z',
        fechaActualizacion: '2024-01-16T14:20:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Producto no encontrado' 
  })
  @ApiResponse({ 
    status: 401, 
    description: '❌ No autorizado - Se requiere autenticación' 
  })
  @ApiResponse({ 
    status: 403, 
    description: '❌ Acceso denegado - Se requiere rol administrador' 
  })
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @Roles('administrador')
  @ApiOperation({ 
    summary: '🗑️ Eliminar producto',
    description: '**🔒 Solo Administradores** - Elimina un producto del catálogo permanentemente'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Producto eliminado exitosamente',
    schema: {
      example: {
        message: 'Producto eliminado exitosamente',
        id: 1
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Producto no encontrado' 
  })
  @ApiResponse({ 
    status: 401, 
    description: '❌ No autorizado - Se requiere autenticación' 
  })
  @ApiResponse({ 
    status: 403, 
    description: '❌ Acceso denegado - Se requiere rol administrador' 
  })
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
