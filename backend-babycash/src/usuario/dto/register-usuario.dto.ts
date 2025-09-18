
import { ApiProperty } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString } from 'class-validator';

export class RegisterUsuarioDto extends CreateUsuarioDto {
  @ApiProperty({
    description: 'Confirmación de contraseña',
    example: 'password123'
  })
  @IsString()
  confirmarContrasena: string;
}