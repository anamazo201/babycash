import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  //Esto se debe poner en todos los modulos que usen prisma
  imports: [PrismaModule],
  //fin prisma
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService], // Exportar el servicio para que lo use AuthModule
})
export class UsuarioModule {}
