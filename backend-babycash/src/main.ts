import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Baby Cash API')
    .setDescription('API REST para la plataforma Baby Cash. Documentación de endpoints para autenticación, usuarios, productos y operaciones del sistema.')
    .setVersion('1.0.0')
    .setContact('Baby Cash Team', 'https://babycash.com', 'admin@babycash.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      description: 'Ingresa solo tu token JWT (sin "Bearer")',
      in: 'header',
    })
    .addTag('Autenticación', 'Endpoints para login, registro y gestión de tokens JWT')
    .addTag('Usuarios', 'Gestión de usuarios del sistema (Solo Administrador)')
    .addTag('Productos', 'Gestión del catálogo de productos para bebés')
    .addTag('Carrito', 'Gestión del carrito de compras (Solo Administrador)')
    .addTag('Ventas', 'Gestión de ventas y órdenes (Solo Administrador)')
    .addTag('Inventario', 'Control de inventario y stock (Solo Administrador)')
    .addTag('Envíos', 'Gestión de envíos y entregas (Solo Administrador)')
    .addTag('Pagos', 'Procesamiento de pagos (Solo Administrador)')
    .addTag('General', 'Endpoints generales y de bienvenida')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
    customSiteTitle: '🍼 Baby Cash API Documentation',
    customfavIcon: '/productos/icono-pinguino.png',
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Aplicación ejecutándose en: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Documentación Swagger disponible en: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
