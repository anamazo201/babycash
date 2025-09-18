import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginUsuarioDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'admin@babycash.com'
  })
  @IsEmail()
  correo: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123'
  })
  @IsString()
  contrasena: string;
}