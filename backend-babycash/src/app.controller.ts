import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from './auth/public.decorator';
import { AppService } from './app.service';

@ApiTags('General')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @ApiOperation({ 
    summary: 'Saludo de bienvenida',
    description: 'Endpoint público que devuelve un mensaje de bienvenida a la API'
  })
  @ApiResponse({
    status: 200,
    description: 'Mensaje de bienvenida',
    schema: {
      example: 'Hello World!'
    }
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
