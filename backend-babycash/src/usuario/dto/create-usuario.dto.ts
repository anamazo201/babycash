import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';

export enum TipoUsuario {
  ADMINISTRADOR = 'administrador',
  CLIENTE = 'cliente',
}

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan'
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'Pérez'
  })
  @IsString()
  apellido: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan@example.com'
  })
  @IsEmail()
  correo: string;

  @ApiProperty({
    description: 'Contraseña del usuario (mínimo 6 caracteres)',
    example: 'password123',
    minLength: 6
  })
  @IsString()
  @MinLength(6)
  contrasena: string;

  @ApiProperty({
    description: 'Tipo de usuario',
    enum: TipoUsuario,
    example: TipoUsuario.CLIENTE
  })
  @IsEnum(TipoUsuario)
  tipo: TipoUsuario;
}
