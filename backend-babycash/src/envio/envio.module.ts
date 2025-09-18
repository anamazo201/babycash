import { Module } from '@nestjs/common';
import { EnvioService } from './envio.service';
import { EnvioController } from './envio.controller';

@Module({
  controllers: [EnvioController],
  providers: [EnvioService],
})
export class EnvioModule {}
