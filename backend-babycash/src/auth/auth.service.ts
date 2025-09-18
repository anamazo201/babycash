import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginUsuarioDto } from '../usuario/dto/login-usuario.dto';
import { RegisterUsuarioDto } from '../usuario/dto/register-usuario.dto';
import { LoginResponseDto } from '../usuario/dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(correo: string, contrasena: string): Promise<any> {
    const user = await this.usuarioService.validateUser({ correo, contrasena });
    if (user) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginUsuarioDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(loginDto.correo, loginDto.contrasena);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { 
      correo: user.correo, 
      sub: user.id, 
      tipo: user.tipo 
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        tipo: user.tipo,
      },
      expires_in: 3600, // 1 hora
    };
  }

  async register(registerDto: RegisterUsuarioDto) {
    if (registerDto.contrasena !== registerDto.confirmarContrasena) {
      throw new UnauthorizedException('Las contraseñas no coinciden');
    }

    const { confirmarContrasena, ...createUserDto } = registerDto;
    
    const user = await this.usuarioService.create(createUserDto);
    
    // Crear payload y token directamente sin hacer otro login
    const payload = { 
      correo: user.correo, 
      sub: user.id, 
      tipo: user.tipo 
    };

    const access_token = this.jwtService.sign(payload);

    return {
      message: 'Usuario registrado exitosamente',
      userData: user,
      access_token,
      user: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        tipo: user.tipo,
      },
      expires_in: 3600,
    };
  }

  async getProfile(userId: number) {
    return await this.usuarioService.findOne(userId);
  }
}