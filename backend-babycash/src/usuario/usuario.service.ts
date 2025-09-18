import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.prisma.usuario.findUnique({
      where: { correo: createUsuarioDto.correo }
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, saltRounds);

    // Crear usuario
    const usuario = await this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        contrasena: hashedPassword,
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        correo: true,
        tipo: true,
        fechaRegistro: true,
      }
    });

    return usuario;
  }

  async findAll() {
    return await this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        apellido: true,
        correo: true,
        tipo: true,
        fechaRegistro: true,
      }
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        correo: true,
        tipo: true,
        fechaRegistro: true,
      }
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return usuario;
  }

  async findByEmail(correo: string) {
    return await this.prisma.usuario.findUnique({
      where: { correo }
    });
  }

  async validateUser(loginDto: LoginUsuarioDto) {
    const usuario = await this.findByEmail(loginDto.correo);
    
    if (usuario && await bcrypt.compare(loginDto.contrasena, usuario.contrasena)) {
      const { contrasena, ...result } = usuario;
      return result;
    }
    
    return null;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);

    if (updateUsuarioDto.contrasena) {
      const saltRounds = 10;
      updateUsuarioDto.contrasena = await bcrypt.hash(updateUsuarioDto.contrasena, saltRounds);
    }

    return await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
      select: {
        id: true,
        nombre: true,
        apellido: true,
        correo: true,
        tipo: true,
        fechaRegistro: true,
      }
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    
    return await this.prisma.usuario.delete({
      where: { id },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        correo: true,
      }
    });
  }
}
