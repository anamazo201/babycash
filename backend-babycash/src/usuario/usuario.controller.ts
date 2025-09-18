import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Roles } from '../auth/roles.decorator';

@ApiTags('👥 Usuarios')
@ApiBearerAuth()
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @Roles('administrador')
  @ApiOperation({ 
    summary: '➕ Crear usuario',
    description: '**🔒 Solo Administradores** - Crea un nuevo usuario en el sistema'
  })
  @ApiResponse({ 
    status: 201, 
    description: '✅ Usuario creado exitosamente',
    schema: {
      example: {
        id: 1,
        nombre: 'Juan Pérez',
        correo: 'juan@babycash.com',
        tipo: 'cliente',
        telefono: '+57 300 123 4567',
        direccion: 'Calle 123 #45-67',
        fechaCreacion: '2024-01-15T10:30:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 409, 
    description: '❌ El correo ya está registrado',
    schema: {
      example: {
        statusCode: 409,
        message: 'El correo ya está registrado',
        error: 'Conflict'
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
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @Roles('administrador')
  @ApiOperation({ 
    summary: '📋 Listar usuarios',
    description: '**🔒 Solo Administradores** - Obtiene todos los usuarios registrados en el sistema'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Lista de usuarios obtenida exitosamente',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          nombre: { type: 'string', example: 'Juan Pérez' },
          correo: { type: 'string', example: 'juan@babycash.com' },
          tipo: { type: 'string', example: 'cliente', enum: ['cliente', 'administrador'] },
          telefono: { type: 'string', example: '+57 300 123 4567' },
          direccion: { type: 'string', example: 'Calle 123 #45-67' },
          fechaCreacion: { type: 'string', format: 'date-time' }
        }
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
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @Roles('administrador')
  @ApiOperation({ 
    summary: '🔍 Obtener usuario por ID',
    description: '**🔒 Solo Administradores** - Obtiene información detallada de un usuario específico'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Usuario encontrado',
    schema: {
      example: {
        id: 1,
        nombre: 'Juan Pérez',
        correo: 'juan@babycash.com',
        tipo: 'cliente',
        telefono: '+57 300 123 4567',
        direccion: 'Calle 123 #45-67',
        fechaCreacion: '2024-01-15T10:30:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Usuario no encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Usuario no encontrado',
        error: 'Not Found'
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
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @Roles('administrador')
  @ApiOperation({ 
    summary: '✏️ Actualizar usuario',
    description: '**🔒 Solo Administradores** - Actualiza información de un usuario existente'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Usuario actualizado exitosamente',
    schema: {
      example: {
        id: 1,
        nombre: 'Juan Pérez Actualizado',
        correo: 'juan.nuevo@babycash.com',
        tipo: 'cliente',
        telefono: '+57 300 987 6543',
        direccion: 'Nueva Calle 456 #78-90',
        fechaCreacion: '2024-01-15T10:30:00.000Z',
        fechaActualizacion: '2024-01-16T14:20:00.000Z'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Usuario no encontrado' 
  })
  @ApiResponse({ 
    status: 401, 
    description: '❌ No autorizado - Se requiere autenticación' 
  })
  @ApiResponse({ 
    status: 403, 
    description: '❌ Acceso denegado - Se requiere rol administrador' 
  })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @Roles('administrador')
  @ApiOperation({ 
    summary: '🗑️ Eliminar usuario',
    description: '**🔒 Solo Administradores** - Elimina un usuario del sistema permanentemente'
  })
  @ApiResponse({ 
    status: 200, 
    description: '✅ Usuario eliminado exitosamente',
    schema: {
      example: {
        message: 'Usuario eliminado exitosamente',
        id: 1
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: '❌ Usuario no encontrado' 
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
    return this.usuarioService.remove(+id);
  }
}
