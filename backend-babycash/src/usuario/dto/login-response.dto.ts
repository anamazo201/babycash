import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token de acceso JWT',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  })
  access_token: string;

  @ApiProperty({
    description: 'Información del usuario autenticado',
    example: {
      id: 1,
      nombre: 'Juan',
      correo: 'juan@example.com',
      tipo: 'cliente'
    }
  })
  user: {
    id: number;
    nombre: string;
    correo: string;
    tipo: string;
  };

  @ApiProperty({
    description: 'Tiempo de expiración del token en segundos',
    example: 3600
  })
  expires_in: number;
}