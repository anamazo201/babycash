import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './public.decorator';
import { LoginUsuarioDto } from '../usuario/dto/login-usuario.dto';
import { RegisterUsuarioDto } from '../usuario/dto/register-usuario.dto';
import { LoginResponseDto } from '../usuario/dto/login-response.dto';

@ApiTags('🔐 Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiOperation({ 
    summary: '🔑 Iniciar sesión',
    description: 'Autentica usuario y devuelve token JWT. **Copia el access_token y úsalo en el botón "Authorize" arriba.**'
  })
  @ApiBody({ 
    type: LoginUsuarioDto,
    examples: {
      administrador: {
        summary: '👨‍💼 Login Administrador',
        description: 'Credenciales para acceso completo al sistema',
        value: {
          correo: 'admin@babycash.com',
          contrasena: 'admin123'
        }
      },
      cliente: {
        summary: '👤 Login Cliente',
        description: 'Credenciales para acceso de cliente',
        value: {
          correo: 'cliente@babycash.com',
          contrasena: 'cliente123'
        }
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: '✅ Login exitoso - Token generado',
    type: LoginResponseDto,
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImNvcnJlbyI6ImFkbWluQGJhYnljYXNoLmNvbSIsInRpcG8iOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzMyNjMxMjAwLCJleHAiOjE3MzI2MzQ4MDB9...',
        user: {
          id: 1,
          nombre: 'Administrador',
          correo: 'admin@babycash.com',
          tipo: 'administrador'
        },
        expires_in: 3600
      }
    }
  })
  @ApiResponse({
    status: 401,
    description: '❌ Credenciales inválidas',
    schema: {
      example: {
        statusCode: 401,
        message: 'Credenciales inválidas',
        error: 'Unauthorized'
      }
    }
  })
  async login(@Body() loginDto: LoginUsuarioDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('register')
  @ApiOperation({ 
    summary: '📝 Registrar nuevo usuario',
    description: '**Para crear ADMINISTRADOR:** usar tipo: "administrador" | **Para crear CLIENTE:** usar tipo: "cliente"'
  })
  @ApiBody({ 
    type: RegisterUsuarioDto,
    examples: {
      administrador: {
        summary: '👨‍💼 Crear Administrador',
        description: 'Registro con permisos completos del sistema',
        value: {
          nombre: 'Administrador',
          correo: 'admin@babycash.com',
          contrasena: 'admin123',
          confirmarContrasena: 'admin123',
          tipo: 'administrador',
          telefono: '+57 300 123 4567',
          direccion: 'Oficina Principal'
        }
      },
      cliente: {
        summary: '👤 Crear Cliente',
        description: 'Registro con permisos de cliente',
        value: {
          nombre: 'Juan Pérez',
          correo: 'cliente@babycash.com',
          contrasena: 'cliente123',
          confirmarContrasena: 'cliente123',
          tipo: 'cliente',
          telefono: '+57 300 987 6543',
          direccion: 'Calle 123 #45-67'
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: '✅ Usuario registrado y sesión iniciada automáticamente',
    schema: {
      example: {
        message: 'Usuario registrado exitosamente',
        userData: {
          id: 1,
          nombre: 'Administrador',
          correo: 'admin@babycash.com',
          tipo: 'administrador',
          telefono: '+57 300 123 4567',
          direccion: 'Oficina Principal',
          fechaCreacion: '2024-01-15T10:30:00.000Z'
        },
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        user: {
          id: 1,
          nombre: 'Administrador',
          correo: 'admin@babycash.com',
          tipo: 'administrador'
        },
        expires_in: 3600
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
    description: '❌ Las contraseñas no coinciden',
    schema: {
      example: {
        statusCode: 401,
        message: 'Las contraseñas no coinciden',
        error: 'Unauthorized'
      }
    }
  })
  async register(@Body() registerDto: RegisterUsuarioDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ 
    summary: '👤 Obtener perfil del usuario',
    description: 'Obtiene información del usuario autenticado. **Requiere token JWT válido.**'
  })
  @ApiResponse({
    status: 200,
    description: '✅ Perfil obtenido exitosamente',
    schema: {
      example: {
        id: 1,
        nombre: 'Administrador',
        correo: 'admin@babycash.com',
        tipo: 'administrador',
        telefono: '+57 300 123 4567',
        direccion: 'Oficina Principal',
        fechaCreacion: '2024-01-15T10:30:00.000Z'
      }
    }
  })
  @ApiResponse({
    status: 401,
    description: '❌ Token inválido o expirado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
        error: 'Unauthorized'
      }
    }
  })
  async getProfile(@Request() req) {
    return this.authService.getProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('validate-token')
  @ApiBearerAuth()
  @ApiOperation({ 
    summary: '🔍 Validar token JWT',
    description: 'Verifica que el token JWT sea válido y no haya expirado'
  })
  @ApiResponse({
    status: 200,
    description: '✅ Token válido',
    schema: {
      example: {
        valid: true,
        user: {
          userId: 1,
          correo: 'admin@babycash.com',
          tipo: 'administrador'
        },
        message: 'Token válido'
      }
    }
  })
  @ApiResponse({
    status: 401,
    description: '❌ Token inválido o expirado'
  })
  async validateToken(@Request() req) {
    return {
      valid: true,
      user: req.user,
      message: 'Token válido'
    };
  }
}