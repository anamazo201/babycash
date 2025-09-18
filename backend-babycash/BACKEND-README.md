# 🍼 BabyCash - Backend

## 📖 ¿Qué es BabyCash Backend?

BabyCash Backend es el **servidor que maneja toda la lógica de negocio** de la aplicación de comercio electrónico para productos de bebés. Este es el "cerebro" que procesa datos, gestiona la base de datos, maneja la autenticación, y proporciona APIs REST para que el frontend pueda comunicarse.

**¿Qué significa "Backend"?**
- Es la parte del sistema que no ve el usuario directamente
- Procesa todas las operaciones de negocio (login, compras, inventario)
- Almacena y gestiona datos en la base de datos
- Proporciona seguridad y autenticación
- Expone APIs (endpoints) para que el frontend consuma datos

---

## 🛠️ Tecnologías Principales

### **NestJS 11.1.6** 
- **¿Qué es?** Framework de Node.js para construir aplicaciones de servidor escalables
- **¿Por qué se usa?** Arquitectura modular, decoradores, inyección de dependencias
- **¿Cómo funciona?** Organiza el código en módulos, controladores y servicios

### **TypeScript 5.7.3**
- **¿Qué es?** JavaScript con tipos de datos estáticos
- **¿Por qué se usa?** Previene errores, mejora la calidad y mantenibilidad del código
- **¿Cómo ayuda?** Autocompletado inteligente y detección temprana de errores

### **Prisma 6.16.1**
- **¿Qué es?** ORM (Object-Relational Mapping) moderno para bases de datos
- **¿Por qué se usa?** Simplifica las consultas a la base de datos con type-safety
- **¿Cómo funciona?** Convierte código TypeScript en consultas SQL optimizadas

### **SQLite**
- **¿Qué es?** Base de datos ligera que se ejecuta como un archivo
- **¿Por qué se usa?** Fácil de configurar, perfecta para desarrollo y proyectos pequeños
- **¿Dónde está?** En el archivo `prisma/baby_cash.db`

---

## 📦 Librerías y Dependencias

### **Autenticación y Seguridad**
- **@nestjs/jwt 11.0.0**: Manejo de tokens JWT
- **@nestjs/passport 11.0.5**: Framework de autenticación
- **passport-jwt 4.0.1**: Estrategia JWT para Passport
- **bcrypt 6.0.0**: Encriptación de contraseñas
  - Genera hashes seguros de contraseñas
  - Hace imposible recuperar la contraseña original

### **Validación y Transformación**
- **class-validator 0.14.2**: Validación de DTOs (Data Transfer Objects)
- **class-transformer 0.5.1**: Transformación y serialización de datos
  - Valida emails, longitud de campos, tipos de datos
  - Convierte strings a números automáticamente

### **Documentación**
- **@nestjs/swagger 11.2.0**: Generación automática de documentación API
  - Crea interfaz visual para probar endpoints
  - Documenta automáticamente todos los endpoints

### **Utilidades**
- **@nestjs/mapped-types**: Reutilización de DTOs
- **reflect-metadata 0.2.2**: Metadata para decoradores
- **rxjs 7.8.1**: Programación reactiva

---

## 📁 Estructura del Proyecto

```
backend-babycash/
├── 📁 prisma/                    # Base de datos y esquemas
│   ├── schema.prisma             # Definición de modelos de datos
│   ├── baby_cash.db              # Archivo de base de datos SQLite
│   └── migrations/               # Migraciones de base de datos
│
├── 📁 src/                       # Código fuente principal
│   ├── 📄 main.ts               # Punto de entrada de la aplicación
│   ├── 📄 app.module.ts         # Módulo principal
│   ├── 📄 app.controller.ts     # Controlador principal
│   ├── 📄 app.service.ts        # Servicio principal
│   │
│   ├── 📁 auth/                 # 🔐 Módulo de Autenticación
│   │   ├── auth.controller.ts   # Endpoints de login/register
│   │   ├── auth.service.ts      # Lógica de autenticación
│   │   ├── auth.module.ts       # Configuración del módulo
│   │   ├── jwt.strategy.ts      # Estrategia JWT
│   │   ├── jwt-auth.guard.ts    # Guard de autenticación
│   │   ├── roles.guard.ts       # Guard de roles (admin/user)
│   │   ├── roles.decorator.ts   # Decorador de roles
│   │   └── public.decorator.ts  # Decorador para endpoints públicos
│   │
│   ├── 📁 usuario/              # 👤 Gestión de Usuarios
│   │   ├── usuario.controller.ts # CRUD de usuarios
│   │   ├── usuario.service.ts    # Lógica de negocio de usuarios
│   │   ├── usuario.module.ts     # Configuración del módulo
│   │   └── dto/                  # Data Transfer Objects
│   │       ├── create-usuario.dto.ts
│   │       ├── update-usuario.dto.ts
│   │       ├── login-usuario.dto.ts
│   │       ├── register-usuario.dto.ts
│   │       └── login-response.dto.ts
│   │
│   ├── 📁 productos/            # 🛍️ Gestión de Productos
│   │   ├── productos.controller.ts # CRUD de productos
│   │   ├── productos.service.ts    # Lógica de negocio
│   │   ├── productos.module.ts     # Configuración del módulo
│   │   └── dto/                    # DTOs de productos
│   │
│   ├── 📁 carrito/              # 🛒 Carrito de Compras
│   ├── 📁 venta/                # 💰 Gestión de Ventas
│   ├── 📁 inventario/           # 📦 Control de Inventario
│   ├── 📁 envio/                # 🚚 Gestión de Envíos
│   ├── 📁 pago/                 # 💳 Procesamiento de Pagos
│   ├── 📁 cliente/              # 👥 Datos Adicionales de Clientes
│   ├── 📁 item-carrito/         # 🛒 Items del Carrito
│   ├── 📁 detalle-venta/        # 📋 Detalles de Ventas
│   │
│   └── 📁 prisma/               # 🗄️ Configuración de Base de Datos
│       ├── prisma.module.ts     # Módulo de Prisma
│       └── prisma.service.ts    # Servicio de conexión
│
├── 📁 test/                     # Pruebas unitarias y e2e
├── 📄 package.json              # Dependencias y scripts
├── 📄 nest-cli.json             # Configuración de NestJS CLI
├── 📄 tsconfig.json             # Configuración de TypeScript
└── 📄 README.md                 # Este archivo
```

---

## 🗄️ Base de Datos (Prisma Schema)

### **Modelos Principales:**

#### **👤 Usuario**
```prisma
model usuario {
  id            Int      @id @default(autoincrement())
  nombre        String   // Nombre del usuario
  apellido      String   // Apellido del usuario
  correo        String   @unique  // Email único para login
  contrasena    String   // Password hasheado con bcrypt
  tipo          String   // 'usuario' | 'administrador'
  fechaRegistro DateTime @default(now())
  
  // Relaciones
  carritos carrito[]    // Un usuario puede tener múltiples carritos
  ventas   venta[]      // Un usuario puede tener múltiples ventas
}
```

#### **🛍️ Producto**
```prisma
model producto {
  id          Int      @id @default(autoincrement())
  nombre      String   // Nombre del producto
  descripcion String   // Descripción detallada
  precio      Float    // Precio en pesos colombianos
  stock       Int      // Cantidad disponible
  categoria   String   // Categoría del producto
  createdAt   DateTime @default(now())
  
  // Relaciones
  carritos      carrito[]
  detalles      detalleVenta[]
  inventarios   inventario[]
  itemCarritos  itemCarrito[]
}
```

#### **💰 Venta**
```prisma
model venta {
  id        Int      @id @default(autoincrement())
  usuarioId Int      // Referencia al usuario
  total     Float    // Total de la venta
  fecha     DateTime @default(now())
  
  // Relaciones
  usuario   usuario @relation(fields: [usuarioId], references: [id])
  detalles  detalleVenta[]  // Items específicos de la venta
  envios    envio[]         // Información de envío
  pagos     pago[]          // Información de pago
}
```

#### **🛒 Carrito**
```prisma
model carrito {
  id            Int      @id @default(autoincrement())
  usuarioId     Int      // Usuario propietario
  fechaCreacion DateTime @default(now())
  estado        String   // 'activo' | 'finalizado'
  productoId    Int      // Producto en el carrito
  
  // Relaciones
  usuario       usuario @relation(fields: [usuarioId], references: [id])
  producto      producto @relation(fields: [productoId], references: [id])
  itemCarritos  itemCarrito[]  // Items específicos con cantidades
}
```

### **📊 Relaciones de Base de Datos:**

```
Usuario (1) ←→ (N) Carrito ←→ (N) Producto
Usuario (1) ←→ (N) Venta ←→ (N) DetalleVenta ←→ (1) Producto
Venta (1) ←→ (N) Envio
Venta (1) ←→ (N) Pago
Producto (1) ←→ (N) Inventario
Carrito (1) ←→ (N) ItemCarrito ←→ (1) Producto
```

---

## 🔐 Sistema de Autenticación Completo

### **🔄 Flujo de Registro Paso a Paso**

#### **1. Usuario llena formulario de registro en frontend**
```typescript
// Frontend envía:
{
  "nombre": "Juan",
  "apellido": "Pérez", 
  "correo": "juan@email.com",
  "contrasena": "password123",
  "confirmarContrasena": "password123"
}
```

#### **2. Request llega al AuthController**
```typescript
// src/auth/auth.controller.ts
@Post('register')
async register(@Body() registerDto: RegisterUsuarioDto) {
  return this.authService.register(registerDto);
}
```

#### **3. AuthService procesa el registro**
```typescript
// src/auth/auth.service.ts
async register(registerDto: RegisterUsuarioDto) {
  // Validar que las contraseñas coincidan
  if (registerDto.contrasena !== registerDto.confirmarContrasena) {
    throw new UnauthorizedException('Las contraseñas no coinciden');
  }

  // Remover confirmación antes de crear usuario
  const { confirmarContrasena, ...createUserDto } = registerDto;
  
  // Crear usuario (incluye hasheo de contraseña)
  const user = await this.usuarioService.create(createUserDto);
  
  // Generar token JWT inmediatamente
  const payload = { 
    correo: user.correo, 
    sub: user.id, 
    tipo: user.tipo 
  };
  const access_token = this.jwtService.sign(payload);

  return {
    message: 'Usuario registrado exitosamente',
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
```

#### **4. UsuarioService crea el usuario**
```typescript
// src/usuario/usuario.service.ts
async create(createUsuarioDto: CreateUsuarioDto) {
  // 1. Verificar si el correo ya existe
  const existingUser = await this.prisma.usuario.findUnique({
    where: { correo: createUsuarioDto.correo }
  });

  if (existingUser) {
    throw new ConflictException('El correo ya está registrado');
  }

  // 2. HASHEAR LA CONTRASEÑA (SÚPER IMPORTANTE)
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, saltRounds);

  // 3. Crear usuario en base de datos
  const usuario = await this.prisma.usuario.create({
    data: {
      ...createUsuarioDto,
      contrasena: hashedPassword, // ⚠️ NUNCA se guarda la contraseña en texto plano
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      correo: true,
      tipo: true,
      fechaRegistro: true,
      // ⚠️ NUNCA retornar la contraseña hasheada
    }
  });

  return usuario;
}
```

### **🔓 Flujo de Login Paso a Paso**

#### **1. Usuario ingresa credenciales**
```typescript
// Frontend envía:
{
  "correo": "juan@email.com",
  "contrasena": "password123"
}
```

#### **2. AuthService valida credenciales**
```typescript
// src/auth/auth.service.ts
async login(loginDto: LoginUsuarioDto): Promise<LoginResponseDto> {
  // Validar usuario
  const user = await this.validateUser(loginDto.correo, loginDto.contrasena);
  
  if (!user) {
    throw new UnauthorizedException('Credenciales inválidas');
  }

  // Crear payload para JWT
  const payload = { 
    correo: user.correo, 
    sub: user.id,        // 'sub' es estándar JWT para user ID
    tipo: user.tipo      // Rol del usuario
  };

  // Generar token firmado
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
```

#### **3. Validación de contraseña con bcrypt**
```typescript
// src/usuario/usuario.service.ts
async validateUser(loginDto: LoginUsuarioDto) {
  // 1. Buscar usuario por correo
  const usuario = await this.findByEmail(loginDto.correo);
  
  // 2. Si existe, comparar contraseñas
  if (usuario && await bcrypt.compare(loginDto.contrasena, usuario.contrasena)) {
    // ⚠️ NUNCA retornar la contraseña hasheada
    const { contrasena, ...result } = usuario;
    return result;
  }
  
  return null; // Credenciales inválidas
}
```

### **🔒 ¿Por Qué y Cómo se Hashean las Contraseñas?**

#### **🚨 Problema de Seguridad:**
```
❌ NUNCA HACER ESTO:
Base de datos:
| usuario | contraseña  |
|---------|-------------|
| juan    | password123 |
| maria   | qwerty123   |

¿Por qué está mal?
- Si alguien hackea la base de datos, ve todas las contraseñas
- Los administradores pueden ver contraseñas de usuarios
- No hay protección contra ataques internos
```

#### **✅ Solución con Hashing:**
```
✅ CORRECTO CON BCRYPT:
Base de datos:
| usuario | contraseña_hash                                    |
|---------|---------------------------------------------------|
| juan    | $2b$10$N9qo8uLOickgx2ZMRZoMye5X9zYH0mYWgz6B.7X.1Y |
| maria   | $2b$10$K8fLmKXeUrDqJB9YxPkKHu2X8xY2zE9VgA3.2B.8Z  |

¿Por qué es seguro?
- Imposible recuperar la contraseña original del hash
- Cada hash es único aunque la contraseña sea igual
- Usa "salt" aleatorio para prevenir ataques de diccionario
```

#### **🔐 Proceso de Hashing con bcrypt:**
```typescript
// REGISTRO - Hashear contraseña
const saltRounds = 10; // Nivel de complejidad
const plainPassword = "password123";
const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
// Resultado: "$2b$10$N9qo8uLOickgx2ZMRZoMye5X9zYH0mYWgz6B.7X.1Y"

// LOGIN - Verificar contraseña
const plainPassword = "password123"; // Lo que ingresa el usuario
const hashedPassword = "$2b$10$N9qo8uLOickgx2ZMRZoMye5X9zYH0mYWgz6B.7X.1Y"; // Lo guardado en BD
const isValid = await bcrypt.compare(plainPassword, hashedPassword);
// Resultado: true o false
```

**¿Qué hace bcrypt internamente?**
1. **Salt**: Genera un valor aleatorio único
2. **Hash**: Combina contraseña + salt y hace múltiples iteraciones
3. **Resultado**: String que no se puede revertir a la contraseña original

### **🎫 ¿Qué son los Tokens JWT y Cómo Funcionan?**

#### **📝 ¿Qué es un JWT?**
```
JWT = JSON Web Token
Es como una "credencial digital" que contiene información del usuario

Estructura: xxxxx.yyyyy.zzzzz
- xxxxx = Header (algoritmo usado)
- yyyyy = Payload (datos del usuario)
- zzzzz = Signature (firma para verificar autenticidad)
```

#### **🏗️ Construcción del Token:**
```typescript
// Payload que se incluye en el token
const payload = {
  correo: "juan@email.com",
  sub: 123,              // ID del usuario  
  tipo: "administrador", // Rol del usuario
  iat: 1640995200,       // Fecha de emisión (timestamp)
  exp: 1640998800        // Fecha de expiración (timestamp)
};

// JWT firmado con clave secreta
const token = this.jwtService.sign(payload);
// Resultado: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJqd..."
```

#### **🔍 Verificación de Token:**
```typescript
// JWT Strategy (src/auth/jwt.strategy.ts)
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'baby-cash-secret-key',
    });
  }

  async validate(payload: any) {
    // Este payload viene del token decodificado
    return {
      userId: payload.sub,
      email: payload.correo,
      tipo: payload.tipo
    };
  }
}
```

### **🛡️ Protección de Rutas con Guards**

#### **🔐 JWT Auth Guard - Verificar Autenticación:**
```typescript
// src/auth/jwt-auth.guard.ts
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (isPublic) {
      return true; // Ruta pública, no necesita autenticación
    }
    
    return super.canActivate(context); // Verificar JWT
  }
}
```

#### **👑 Roles Guard - Verificar Permisos:**
```typescript
// src/auth/roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true; // No se requiere rol específico
    }
    
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.tipo?.includes(role));
  }
}
```

#### **🎯 Uso de Decoradores:**
```typescript
// Endpoint público (sin autenticación)
@Public()
@Get('productos')
obtenerProductos() { ... }

// Endpoint protegido (requiere login)
@Get('perfil')
obtenerPerfil() { ... }

// Endpoint solo para administradores
@Roles('administrador')
@Post('productos')
crearProducto() { ... }
```

---

## 🚀 Endpoints y CRUDs por Módulo

### **🔐 Auth Module - Autenticación**

**Base URL:** `/auth`

#### **POST /auth/register** - Registro de Usuario
```typescript
Body: {
  "nombre": "Juan",
  "apellido": "Pérez",
  "correo": "juan@email.com",
  "contrasena": "password123",
  "confirmarContrasena": "password123"
}

Response: {
  "message": "Usuario registrado exitosamente",
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "nombre": "Juan",
    "correo": "juan@email.com",
    "tipo": "usuario"
  },
  "expires_in": 3600
}
```

#### **POST /auth/login** - Iniciar Sesión
```typescript
Body: {
  "correo": "juan@email.com",
  "contrasena": "password123"
}

Response: {
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "nombre": "Juan",
    "correo": "juan@email.com",
    "tipo": "usuario"
  },
  "expires_in": 3600
}
```

### **🛍️ Products Module - Productos**

**Base URL:** `/productos`

#### **GET /productos** - Obtener Todos los Productos (Público)
```typescript
Response: [
  {
    "id": 1,
    "nombre": "Biberón Anticólicos",
    "descripcion": "Biberón especial para prevenir cólicos en bebés",
    "precio": 45000,
    "stock": 50,
    "categoria": "Alimentación",
    "createdAt": "2024-01-15T10:00:00Z"
  },
  // ... más productos
]
```

#### **GET /productos/:id** - Obtener Producto por ID (Público)
```typescript
Response: {
  "id": 1,
  "nombre": "Biberón Anticólicos",
  "descripcion": "Biberón especial para prevenir cólicos en bebés",
  "precio": 45000,
  "stock": 50,
  "categoria": "Alimentación",
  "createdAt": "2024-01-15T10:00:00Z"
}
```

#### **POST /productos** - Crear Producto (Solo Admin)
```typescript
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

Body: {
  "nombre": "Nuevo Producto",
  "descripcion": "Descripción del producto",
  "precio": 35000,
  "stock": 100,
  "categoria": "Juguetes"
}

Response: {
  "id": 5,
  "nombre": "Nuevo Producto",
  "descripcion": "Descripción del producto",
  "precio": 35000,
  "stock": 100,
  "categoria": "Juguetes",
  "createdAt": "2024-01-16T15:30:00Z"
}
```

#### **PATCH /productos/:id** - Actualizar Producto (Solo Admin)
```typescript
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

Body: {
  "precio": 40000,
  "stock": 75
}

Response: {
  "id": 1,
  "nombre": "Biberón Anticólicos",
  "descripcion": "Biberón especial para prevenir cólicos en bebés",
  "precio": 40000,    // ← Actualizado
  "stock": 75,        // ← Actualizado
  "categoria": "Alimentación",
  "createdAt": "2024-01-15T10:00:00Z"
}
```

#### **DELETE /productos/:id** - Eliminar Producto (Solo Admin)
```typescript
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

Response: {
  "message": "Producto eliminado exitosamente",
  "id": 1
}
```

### **👤 Usuario Module - Gestión de Usuarios**

**Base URL:** `/usuario`

#### **GET /usuario** - Obtener Todos los Usuarios (Solo Admin)
```typescript
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

Response: [
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juan@email.com",
    "tipo": "usuario",
    "fechaRegistro": "2024-01-15T10:00:00Z"
  },
  // ... más usuarios
]
```

#### **GET /usuario/:id** - Obtener Usuario por ID (Solo Admin)
#### **PATCH /usuario/:id** - Actualizar Usuario (Solo Admin)
#### **DELETE /usuario/:id** - Eliminar Usuario (Solo Admin)

### **💰 Venta Module - Gestión de Ventas**

**Base URL:** `/venta`

#### **Endpoints principales:**
- **POST /venta** - Crear nueva venta
- **GET /venta** - Obtener todas las ventas (Admin)
- **GET /venta/:id** - Obtener venta específica
- **PATCH /venta/:id** - Actualizar estado de venta

### **🛒 Carrito Module - Carrito de Compras**

**Base URL:** `/carrito`

#### **Endpoints principales:**
- **POST /carrito** - Crear carrito
- **GET /carrito/usuario/:userId** - Obtener carrito del usuario
- **PATCH /carrito/:id** - Actualizar carrito
- **DELETE /carrito/:id** - Eliminar carrito

---

## 🔧 Configuración del Proyecto

### **main.ts - Punto de Entrada**
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS - Permitir conexiones desde frontend
  app.enableCors();
  
  // Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,           // Solo campos permitidos
    forbidNonWhitelisted: true, // Rechazar campos extra
    transform: true,           // Convertir tipos automáticamente
  }));

  // Configuración de Swagger para documentación
  const config = new DocumentBuilder()
    .setTitle('Baby Cash API')
    .setDescription('API REST para la plataforma Baby Cash')
    .setVersion('1.0.0')
    .addBearerAuth() // Soporte para tokens JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
```

### **app.module.ts - Módulo Principal**
```typescript
@Module({
  imports: [
    AuthModule,      // Autenticación
    PrismaModule,    // Base de datos
    ProductosModule, // Productos
    UsuarioModule,   // Usuarios
    VentaModule,     // Ventas
    CarritoModule,   // Carrito
    // ... otros módulos
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,  // Guard global de autenticación
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,    // Guard global de roles
    },
  ],
})
export class AppModule {}
```

---

## 📋 DTOs (Data Transfer Objects)

### **¿Qué son los DTOs?**
Los DTOs definen la estructura exacta de datos que:
- Recibe el backend (request)
- Envía el backend (response)
- Incluyen validaciones automáticas

### **Ejemplo: CreateUsuarioDto**
```typescript
// src/usuario/dto/create-usuario.dto.ts
import { IsEmail, IsString, MinLength, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
    minLength: 2
  })
  @IsString({ message: 'El nombre debe ser texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  nombre: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'Pérez'
  })
  @IsString({ message: 'El apellido debe ser texto' })
  @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres' })
  apellido: string;

  @ApiProperty({
    description: 'Correo electrónico único',
    example: 'juan@email.com'
  })
  @IsEmail({}, { message: 'Debe ser un correo válido' })
  correo: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
    minLength: 6
  })
  @IsString({ message: 'La contraseña debe ser texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  contrasena: string;

  @ApiProperty({
    description: 'Tipo de usuario',
    example: 'usuario',
    enum: ['usuario', 'administrador']
  })
  @IsIn(['usuario', 'administrador'], { 
    message: 'El tipo debe ser "usuario" o "administrador"' 
  })
  tipo: string;
}
```

### **Validaciones Automáticas**
Cuando llega una request, NestJS automáticamente:
1. Verifica que el email sea válido
2. Revisa que la contraseña tenga al menos 6 caracteres
3. Valida que el tipo sea "usuario" o "administrador"
4. Si algo está mal, devuelve error 400 con mensaje específico

---

## 🚀 Scripts de Desarrollo

### **En package.json:**
```json
{
  "scripts": {
    "start": "nest start",                    // Iniciar en producción
    "start:dev": "nest start --watch",       // Desarrollo con auto-reload
    "start:debug": "nest start --debug --watch", // Desarrollo con debugging
    "build": "nest build",                   // Construir para producción
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix", // Revisar código
    "test": "jest",                          // Ejecutar pruebas unitarias
    "test:e2e": "jest --config ./test/jest-e2e.json" // Pruebas end-to-end
  }
}
```

### **Comandos de Uso:**
```bash
# Instalar dependencias
npm install

# Generar cliente de Prisma (después de cambios en schema)
npx prisma generate

# Ejecutar migraciones de base de datos
npx prisma migrate dev

# Iniciar servidor de desarrollo (puerto 3000)
npm run start:dev

# Ver base de datos en navegador
npx prisma studio
```

---

## 🔄 Flujo Completo: Frontend ↔ Backend

### **Ejemplo: Usuario Obtiene Lista de Productos**

```
1. Usuario visita página /productos en frontend
   ↓
2. Frontend: useEffect(() => { productService.getAll() })
   ↓
3. Axios: GET http://localhost:3000/productos
   ↓
4. Backend: ProductosController.findAll()
   ↓
5. ProductosService.findAll()
   ↓
6. Prisma: this.prisma.producto.findMany()
   ↓
7. SQLite: SELECT * FROM producto
   ↓
8. SQLite devuelve array de productos
   ↓
9. Prisma convierte a objetos TypeScript
   ↓
10. ProductosService retorna productos
    ↓
11. ProductosController envía JSON response
    ↓
12. Axios recibe response en frontend
    ↓
13. React actualiza estado: setProductos(data)
    ↓
14. UI se re-renderiza con productos
    ↓
15. Usuario ve productos en pantalla
```

### **Ejemplo: Usuario Hace Login**

```
1. Usuario llena formulario login (email, password)
   ↓
2. Frontend: authService.login({ email, password })
   ↓
3. Axios: POST http://localhost:3000/auth/login
   Headers: { "Content-Type": "application/json" }
   Body: { "correo": "user@email.com", "contrasena": "pass123" }
   ↓
4. Backend: AuthController.login()
   ↓
5. AuthService.validateUser()
   ↓
6. UsuarioService.findByEmail()
   ↓
7. Prisma: usuario.findUnique({ where: { correo } })
   ↓
8. SQLite: SELECT * FROM usuario WHERE correo = ?
   ↓
9. bcrypt.compare(plainPassword, hashedPassword)
   ↓
10. Si es válido: JwtService.sign(payload)
    ↓
11. Backend responde:
    {
      "access_token": "eyJhbGci...",
      "user": { "id": 1, "nombre": "Juan", ... },
      "expires_in": 3600
    }
    ↓
12. Frontend guarda en localStorage
    ↓
13. AuthContext se actualiza
    ↓
14. Futuras requests incluyen: Authorization: "Bearer token"
    ↓
15. Usuario está autenticado
```

---

## 🛡️ Seguridad Implementada

### **1. Hasheo de Contraseñas**
- ✅ bcrypt con salt rounds = 10
- ✅ Nunca se almacenan contraseñas en texto plano
- ✅ Imposible recuperar contraseña original

### **2. Tokens JWT**
- ✅ Tokens firmados con clave secreta
- ✅ Expiración en 1 hora
- ✅ Payload incluye info mínima necesaria

### **3. Guards de Protección**
- ✅ JwtAuthGuard: Verificar autenticación
- ✅ RolesGuard: Verificar permisos por rol
- ✅ Decorador @Public() para endpoints públicos

### **4. Validación de Datos**
- ✅ DTOs con class-validator
- ✅ Sanitización automática
- ✅ Prevención de injection básica

### **5. CORS Configurado**
- ✅ Permite conexiones desde frontend
- ✅ Headers apropiados configurados

---

## 🧪 Testing y Calidad

### **Estructura de Testing:**
```
test/
├── app.e2e-spec.ts     # Pruebas end-to-end
├── jest-e2e.json       # Configuración de pruebas e2e
└── src/
    ├── auth/
    │   └── auth.service.spec.ts
    ├── usuario/
    │   └── usuario.service.spec.ts
    └── productos/
        └── productos.service.spec.ts
```

### **Comandos de Testing:**
```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar con coverage
npm run test:cov

# Ejecutar pruebas e2e
npm run test:e2e

# Ejecutar pruebas en modo watch
npm run test:watch
```

---

## 📚 Recursos de Aprendizaje

### **Documentación Oficial:**
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

### **Conceptos Clave:**
- **Decoradores**: @Controller, @Service, @Injectable
- **Dependency Injection**: Inyección de dependencias
- **Guards**: Protección de rutas
- **Pipes**: Transformación y validación
- **Interceptors**: Modificación de requests/responses

---

## 🔧 Solución de Problemas

### **Problemas Comunes:**

**Error: "Prisma Client no encontrado"**
```bash
# Solución:
npx prisma generate
```

**Error: "Base de datos no existe"**
```bash
# Solución:
npx prisma migrate dev
```

**Error: "Puerto 3000 en uso"**
```bash
# Solución:
lsof -ti:3000 | xargs kill -9
```

**Error: "JWT secret no configurado"**
```bash
# Solución: Crear archivo .env
JWT_SECRET=tu-clave-secreta-aqui
```

---

## 🚀 Guía de Instalación

### **Prerrequisitos:**
1. **Node.js** (versión 18+)
2. **npm** (incluido con Node.js)
3. **SQLite** (generalmente ya instalado)

### **Pasos:**
```bash
# 1. Clonar proyecto
git clone [url-del-repositorio]
cd backend-babycash

# 2. Instalar dependencias
npm install

# 3. Generar cliente Prisma
npx prisma generate

# 4. Ejecutar migraciones
npx prisma migrate dev

# 5. (Opcional) Poblar base de datos
npx prisma db seed

# 6. Iniciar servidor
npm run start:dev

# 7. Verificar en navegador:
# http://localhost:3000 (API)
# http://localhost:3000/api (Swagger docs)
```

---

¡Felicidades! 🎉 Ahora tienes una comprensión completa del backend de BabyCash. Este servidor robusto maneja toda la lógica de negocio, seguridad, y persistencia de datos para la plataforma de comercio electrónico de productos para bebés.