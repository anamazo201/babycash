# 🍼 BabyCash - Frontend

## 📖 ¿Qué es BabyCash Frontend?

BabyCash es una **aplicación web moderna para el comercio electrónico de productos para bebés**. Este es el frontend (parte visual que ven los usuarios) construido con tecnologías modernas de React. La aplicación permite a los usuarios navegar productos, crear cuentas, hacer compras, contactar la empresa y mucho más.

**¿Qué significa "Frontend"?**
- Es la parte de la aplicación que los usuarios ven y con la que interactúan
- Incluye botones, formularios, páginas, navegación, etc.
- Se ejecuta en el navegador web del usuario
- Se comunica con el backend (servidor) para obtener y enviar datos

---

## 🛠️ Tecnologías Principales

### **React 18.3.1** 
- **¿Qué es?** Una librería de JavaScript para crear interfaces de usuario
- **¿Por qué se usa?** Permite crear aplicaciones interactivas y rápidas
- **¿Cómo funciona?** Organiza la aplicación en "componentes" reutilizables

### **TypeScript 5.3**
- **¿Qué es?** JavaScript con tipos de datos
- **¿Por qué se usa?** Previene errores y mejora la calidad del código
- **¿Cómo ayuda?** Autocompletado inteligente y detección temprana de errores

### **Vite**
- **¿Qué es?** Herramienta para desarrollo y construcción del proyecto
- **¿Por qué se usa?** Extremadamente rápido para desarrollo
- **¿Qué hace?** Sirve archivos en desarrollo y empaqueta para producción

### **Tailwind CSS 3.4.17**
- **¿Qué es?** Framework de CSS para estilos
- **¿Por qué se usa?** Permite estilizar rápidamente sin escribir CSS personalizado
- **¿Cómo funciona?** Usando clases predefinidas como `bg-blue-500`, `text-center`

---

## 📦 Librerías y Herramientas

### **Navegación y Routing**
- **react-router-dom 6.30.1**: Maneja la navegación entre páginas
  - Permite URLs como `/productos`, `/login`, `/carrito`
  - Navegación sin recargar la página (SPA - Single Page Application)

### **Animaciones y Efectos Visuales**
- **framer-motion 10.18.0**: Animaciones fluidas y modernas
  - Transiciones suaves entre páginas
  - Efectos hover y click en botones
  - Animaciones de entrada y salida

### **Iconos y UI**
- **lucide-react 0.294.0**: Librería de iconos modernos
  - Iconos para botones, navegación, formularios
  - Iconos de redes sociales, carritos, usuarios, etc.

### **Formularios y Validación**
- **react-hook-form 7.62.0**: Manejo eficiente de formularios
- **@hookform/resolvers 3.10.0**: Integración con validadores
- **zod 3.25.76**: Validación de esquemas y tipos
  - Validación de emails, contraseñas, campos requeridos
  - Mensajes de error personalizados

### **HTTP y API**
- **axios 1.6.2**: Cliente HTTP para comunicarse con el backend
  - Envío de formularios de login/registro
  - Obtención de productos desde la base de datos
  - Manejo de tokens de autenticación

### **Utilidades de Estilo**
- **clsx 2.1.1**: Combinación condicional de clases CSS
  - Aplicar estilos según estado (activo, deshabilitado, etc.)

### **Notificaciones**
- **react-hot-toast 2.6.0**: Notificaciones elegantes
  - Mensajes de éxito, error, información
  - Aparecen temporalmente en la esquina de la pantalla

### **Mapas (Opcional)**
- **leaflet 1.9.4** y **react-leaflet 4.2.1**: Mapas interactivos
- **mapbox-gl 3.0.1** y **react-map-gl 7.1.7**: Mapas de Mapbox
  - Para mostrar ubicación de la tienda
  - Direcciones de entrega

### **Gráficos (Opcional)**
- **recharts 3.2.1**: Gráficos y charts
  - Para estadísticas en el panel de administrador

---

## 📁 Estructura del Proyecto

```
frontend-babycash/
├── 📁 public/                 # Archivos públicos (imágenes, favicon)
│   ├── vite.svg              # Logo de Vite
│   └── productos/            # Imágenes de productos
│       └── icono-pinguino.png
│
├── 📁 src/                   # Código fuente principal
│   ├── 📄 main.tsx          # Punto de entrada de la aplicación
│   ├── 📄 App.tsx           # Componente principal
│   ├── 📄 index.css         # Estilos globales
│   ├── 📄 vite-env.d.ts     # Tipos de Vite
│   │
│   ├── 📁 components/        # Componentes reutilizables
│   │   ├── 📁 cards/        # Tarjetas (productos, blog, testimonios)
│   │   ├── 📁 layout/       # Estructura (navbar, footer)
│   │   └── 📁 ui/           # Elementos básicos (botones, inputs)
│   │
│   ├── 📁 pages/            # Páginas de la aplicación
│   │   ├── Home.tsx         # Página principal
│   │   ├── Login.tsx        # Iniciar sesión
│   │   ├── Register.tsx     # Registrarse
│   │   ├── Productos.tsx    # Catálogo de productos
│   │   ├── Carrito.tsx      # Carrito de compras
│   │   └── ...              # Más páginas
│   │
│   ├── 📁 contexts/         # Estado global de la aplicación
│   │   ├── AuthContext.tsx  # Estado de autenticación
│   │   └── CartContext.tsx  # Estado del carrito
│   │
│   ├── 📁 services/         # Comunicación con el backend
│   │   └── api.ts           # Servicios de API
│   │
│   ├── 📁 types/            # Definiciones de tipos TypeScript
│   │   └── index.ts         # Tipos principales
│   │
│   ├── 📁 data/             # Datos de ejemplo/mock
│   │   ├── products.ts      # Productos de ejemplo
│   │   ├── blog.ts          # Posts de blog
│   │   └── testimonials.ts  # Testimonios
│   │
│   └── 📁 router/           # Configuración de rutas
│       └── AppRouter.tsx    # Definición de todas las rutas
│
├── 📄 package.json          # Dependencias y scripts
├── 📄 vite.config.ts        # Configuración de Vite
├── 📄 tailwind.config.js    # Configuración de Tailwind CSS
├── 📄 tsconfig.json         # Configuración de TypeScript
└── 📄 README.md             # Este archivo
```

---

## 🔧 Configuración del Proyecto

### **Vite Configuration (`vite.config.ts`)**
```typescript
export default defineConfig({
  plugins: [react()],          // Plugin de React
  resolve: {
    alias: {
      '@': '/src',              // Alias para imports (@/components/...)
    },
  },
});
```

### **Tailwind Configuration (`tailwind.config.js`)**
```javascript
theme: {
  extend: {
    colors: {
      'baby-blue': '#A7D8FF',    // Azul bebé personalizado
      'baby-pink': '#FFC1E3',    // Rosa bebé personalizado
      'baby-mint': '#C8F7DC',    // Verde menta bebé
      'baby-light': '#F9FAFB',   // Fondo claro
      'baby-gray': '#1F2937',    // Gris para texto
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],  // Fuente principal
      inter: ['Inter', 'sans-serif'],      // Fuente secundaria
    },
    animation: {
      'bounce-slow': 'bounce 3s infinite',  // Animación personalizada
      'fade-in': 'fadeIn 0.6s ease-in-out',
      'slide-up': 'slideUp 0.8s ease-out',
    },
  },
},
```

### **TypeScript Configuration**
- **Strict mode**: Activado para máxima seguridad de tipos
- **JSX**: Configurado para React 18
- **Module resolution**: Bundler mode para Vite
- **No unused variables**: Limpieza automática de código

---

## 📄 Páginas de la Aplicación

### **🏠 Páginas Públicas** (No requieren login)

#### **Home.tsx** - Página Principal
- **Qué hace:** Página de bienvenida con hero section, productos destacados
- **Componentes:** Banner principal, galería de productos, testimonios
- **Navegación:** Primera página que ven los usuarios

#### **Productos.tsx / Productos2.tsx** - Catálogo
- **Qué hace:** Muestra todos los productos disponibles
- **Funcionalidades:** Filtros por categoría, búsqueda, agregar al carrito
- **Datos:** Se conecta con el backend para obtener productos reales

#### **Nosotros.tsx** - Sobre la Empresa
- **Qué hace:** Información sobre BabyCash, misión, visión
- **Contenido:** Historia de la empresa, valores, equipo

#### **Contacto.tsx** - Formulario de Contacto
- **Qué hace:** Permite a usuarios enviar mensajes
- **Funcionalidades:** Formulario con validación, mapa de ubicación
- **Integración:** Envía emails a través del backend

#### **Blog.tsx** - Blog de Contenido
- **Qué hace:** Artículos sobre cuidado de bebés, productos
- **Funcionalidades:** Lista de posts, categorías, búsqueda

#### **Testimonios.tsx** - Reseñas de Clientes
- **Qué hace:** Muestra opiniones y calificaciones de clientes
- **Funcionalidades:** Sistema de estrellas, filtros por calificación

### **🔐 Páginas de Autenticación**

#### **Login.tsx** - Iniciar Sesión
- **Qué hace:** Permite a usuarios existentes acceder a su cuenta
- **Funcionalidades:** 
  - Formulario con email y contraseña
  - Validación en tiempo real
  - Mostrar/ocultar contraseña
  - Manejo de errores en español
  - Redirección automática según rol (admin/usuario)

#### **Register.tsx** - Registro de Usuarios
- **Qué hace:** Permite crear cuentas nuevas
- **Funcionalidades:**
  - Formulario completo (nombre, apellido, email, contraseña)
  - Validación de confirmación de contraseña
  - Verificación de email existente
  - Términos y condiciones

#### **ForgotPassword.tsx** - Recuperar Contraseña
- **Qué hace:** Proceso para resetear contraseñas olvidadas
- **Funcionalidades:** Envío de email de recuperación

### **👤 Páginas de Usuario** (Requieren login)

#### **Perfil.tsx** - Perfil de Usuario
- **Qué hace:** Gestión de información personal
- **Funcionalidades:** Editar datos, cambiar contraseña, historial de pedidos

#### **Carrito.tsx** - Carrito de Compras
- **Qué hace:** Gestión de productos seleccionados
- **Funcionalidades:** 
  - Agregar/eliminar productos
  - Modificar cantidades
  - Calcular totales
  - Proceder al checkout

### **👑 Páginas de Administrador**

#### **AdminPanel.tsx** - Panel de Administración
- **Qué hace:** Control total de la aplicación (solo para admins)
- **Funcionalidades:**
  - Gestión de productos (crear, editar, eliminar)
  - Gestión de usuarios
  - Ver estadísticas y reportes
  - Gestión de pedidos

### **📋 Páginas Legales**

#### **Terminos.tsx** - Términos y Condiciones
- **Qué hace:** Términos legales de uso de la plataforma

#### **TratamientoDatos.tsx** - Política de Privacidad
- **Qué hace:** Explicación del manejo de datos personales

### **❌ Páginas de Error**

#### **NotFound.tsx** - Página No Encontrada
- **Qué hace:** Se muestra cuando la URL no existe
- **Funcionalidades:** Navegación de regreso al inicio

---

## 🎯 Contextos (Estado Global)

### **AuthContext.tsx** - Gestión de Autenticación
```typescript
type AuthContextType = {
  user: User | null;                    // Usuario actual
  login: (email, password) => Promise;  // Función de login
  logout: () => void;                   // Función de logout
  isAuthenticated: boolean;             // Estado de autenticación
  loading: boolean;                     // Estado de carga
};
```

**¿Qué hace?**
- Mantiene el estado de login en toda la aplicación
- Persiste la sesión en localStorage
- Protege rutas que requieren autenticación
- Maneja tokens JWT para comunicación segura

### **CartContext.tsx** - Gestión del Carrito
```typescript
type CartContextType = {
  items: CartItem[];                           // Productos en el carrito
  addToCart: (item: CartItem) => void;         // Agregar producto
  updateQuantity: (id, quantity) => void;      // Cambiar cantidad
  removeFromCart: (id: string) => void;        // Eliminar producto
  clearCart: () => void;                       // Vaciar carrito
  getTotalPrice: () => number;                 // Calcular total
  getTotalItems: () => number;                 // Contar productos
};
```

**¿Qué hace?**
- Mantiene productos seleccionados en toda la aplicación
- Persiste el carrito en localStorage
- Calcula totales automáticamente
- Sincroniza con el backend cuando el usuario está logueado

---

## 🔌 Conexión Frontend ↔ Backend

### **¿Cómo se Conecta el Frontend con el Backend?**

El frontend de BabyCash se comunica con el backend a través de **APIs REST** usando **HTTP**. Es como una conversación entre dos programas:

1. **Frontend** (lo que ve el usuario) → Envía peticiones
2. **Backend** (servidor) → Procesa y responde con datos
3. **Frontend** → Muestra los datos al usuario

### **Flujo de Comunicación Paso a Paso:**

```
Usuario hace click en "Login" 
    ↓
Frontend toma email/password del formulario
    ↓
Frontend envía POST a http://localhost:3001/api/auth/login
    ↓
Backend valida credenciales en la base de datos
    ↓
Backend responde con usuario + token JWT
    ↓
Frontend guarda token y redirige al usuario
```

---

## 🔌 Servicios de API

### **api.ts** - Centro de Comunicación con Backend

#### **Configuración Base**
```typescript
const api = axios.create({
  baseURL: 'http://localhost:3001/api',  // URL donde vive el backend
  timeout: 10000,                        // Máximo 10 segundos esperando respuesta
  headers: {
    'Content-Type': 'application/json',   // Enviamos y recibimos JSON
  },
});
```

**¿Qué significa cada parte?**
- **baseURL**: Dirección del servidor backend (puerto 3001)
- **timeout**: Si el servidor no responde en 10 segundos, cancelar
- **headers**: Decirle al servidor qué tipo de datos enviamos

#### **Interceptores - Automatización Inteligente**

**1. Request Interceptor (ANTES de enviar):**
```typescript
api.interceptors.request.use((config) => {
  const user = localStorage.getItem('baby-cash-user');
  if (user) {
    const userData = JSON.parse(user);
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
});
```

**¿Qué hace?**
- **Automáticamente** agrega el token de autenticación a TODAS las peticiones
- Lee el token del navegador (localStorage)
- Lo incluye en el header "Authorization"
- Así el backend sabe quién está haciendo la petición

**2. Response Interceptor (DESPUÉS de recibir):**
```typescript
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('baby-cash-user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

**¿Qué hace?**
- Si el servidor responde con error 401 (no autorizado)
- **Automáticamente** borra la sesión y lleva al usuario al login
- Esto pasa cuando el token expira o es inválido

### **🔄 Flujo Completo de Extracción de Datos**

#### **Ejemplo: Obtener Lista de Productos**

**1. Usuario visita página /productos**
```typescript
// En la página Productos.tsx
const [productos, setProductos] = useState([]);

useEffect(() => {
  obtenerProductos();
}, []);

const obtenerProductos = async () => {
  try {
    const response = await productService.getAll();
    setProductos(response.data);
  } catch (error) {
    toast.error('Error al cargar productos');
  }
};
```

**2. Frontend llama al servicio**
```typescript
// En services/api.ts
export const productService = {
  async getAll(): Promise<ApiResponse<Product[]>> {
    const response = await api.get('/products');
    return response.data;
  }
};
```

**3. Lo que sucede internamente:**
```
Frontend: GET http://localhost:3001/api/products
    ↓
Backend recibe petición en ProductsController
    ↓
ProductsService consulta base de datos con Prisma
    ↓
Base de datos SQLite devuelve array de productos
    ↓
Backend formatea respuesta JSON
    ↓
Frontend recibe: { success: true, data: [...productos] }
    ↓
React actualiza estado y re-renderiza componentes
    ↓
Usuario ve productos en pantalla
```

#### **Ejemplo: Login de Usuario (Más Complejo)**

**1. Usuario llena formulario y hace click en "Iniciar Sesión"**
```typescript
// En pages/Login.tsx
const onSubmit = async (data: LoginFormData) => {
  try {
    setLoading(true);
    const response = await authService.login(data);
    
    // Guardar usuario y token en localStorage
    localStorage.setItem('baby-cash-user', JSON.stringify(response.data));
    
    // Actualizar contexto global
    setUser(response.data);
    
    // Redirigir según rol
    if (response.data.role === 'ADMIN') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  } catch (error) {
    toast.error('Credenciales incorrectas');
  } finally {
    setLoading(false);
  }
};
```

**2. Servicio de autenticación**
```typescript
// En services/api.ts
export const authService = {
  async login(credentials: LoginFormData): Promise<ApiResponse<User & { token: string }>> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  }
};
```

**3. Flujo completo paso a paso:**
```
Usuario ingresa email: "admin@babycash.com" y password: "admin123"
    ↓
Frontend valida formulario (email válido, password no vacío)
    ↓
POST http://localhost:3001/api/auth/login
Body: { "email": "admin@babycash.com", "password": "admin123" }
    ↓
Backend recibe en AuthController.login()
    ↓
AuthService busca usuario en base de datos por email
    ↓
bcrypt.compare() verifica password hasheado
    ↓
Si es correcto: genera token JWT con información del usuario
    ↓
Backend responde: {
  success: true,
  data: {
    id: "1",
    email: "admin@babycash.com",
    name: "Admin",
    role: "ADMIN",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
    ↓
Frontend guarda todo en localStorage.setItem('baby-cash-user', ...)
    ↓
AuthContext se actualiza con el nuevo usuario
    ↓
Todas las próximas peticiones incluirán automáticamente el token
    ↓
Usuario es redirigido a /admin porque es administrador
```

### **🔒 Flujo de Autenticación Detallado**

#### **¿Cómo Funciona la Seguridad?**

**1. Token JWT (JSON Web Token)**
```
¿Qué es un JWT?
- Es como una "credencial digital"
- Contiene información del usuario encriptada
- Tiene fecha de expiración
- Solo el servidor puede verificar que es válido

Estructura: xxxxx.yyyyy.zzzzz
- xxxxx = Header (algoritmo usado)
- yyyyy = Payload (datos del usuario)
- zzzzz = Signature (firma para verificar autenticidad)
```

**2. Persistencia de Sesión**
```typescript
// El token se guarda en localStorage
localStorage.setItem('baby-cash-user', JSON.stringify({
  id: "1",
  email: "user@example.com",
  name: "Usuario",
  role: "USER",
  token: "eyJhbGciOiJIUzI1NiIs..."
}));

// Al recargar la página, se recupera automáticamente
const savedUser = localStorage.getItem('baby-cash-user');
if (savedUser) {
  setUser(JSON.parse(savedUser));
}
```

**3. Protección de Rutas**
```typescript
// En contextos/AuthContext.tsx
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};
```

**4. Inclusión Automática de Token**
```typescript
// Cada petición incluye automáticamente:
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs...",
  "Content-Type": "application/json"
}

// El backend verifica este token en cada petición protegida
```

#### **Servicios Disponibles**

**1. authService** - Autenticación
- `login(credentials)`: Iniciar sesión
- `register(userData)`: Crear cuenta
- `getProfile()`: Obtener datos del usuario
- `updateProfile(userData)`: Actualizar perfil

**2. productService** - Productos
- `getAll()`: Obtener todos los productos
- `getById(id)`: Obtener producto específico
- `getByCategory(category)`: Filtrar por categoría
- `search(query)`: Buscar productos

**3. cartService** - Carrito
- `getCart()`: Obtener carrito del usuario
- `addToCart(productId, quantity)`: Agregar producto
- `updateCartItem(productId, quantity)`: Actualizar cantidad
- `removeFromCart(productId)`: Eliminar producto
- `clearCart()`: Vaciar carrito

**4. contactService** - Contacto
- `sendMessage(data)`: Enviar mensaje de contacto

**5. orderService** - Pedidos
- `createOrder(orderData)`: Crear nuevo pedido
- `getOrders()`: Obtener historial de pedidos
- `getOrderById(id)`: Obtener pedido específico

**6. blogService** - Blog
- `getPosts()`: Obtener posts del blog
- `getPostById(id)`: Obtener post específico

---

## 🧩 Componentes Reutilizables

### **📁 components/ui/** - Elementos Básicos

#### **Button.tsx** - Botón Personalizado
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}
```

**Características:**
- 5 variantes de estilo (primary=azul, secondary=rosa, etc.)
- 3 tamaños diferentes
- Estado de carga con spinner
- Animaciones con framer-motion
- Totalmente accesible

#### **Input.tsx** - Campo de Entrada
- Integrado con react-hook-form
- Validación visual de errores
- Estilos consistentes con el diseño
- Soporte para diferentes tipos (text, email, password)

#### **Modal.tsx** - Ventana Modal
- Fondo oscuro semi-transparente
- Animaciones de entrada/salida
- Cierre con ESC o click fuera
- Centrado responsive

#### **Preloader.tsx** - Indicador de Carga
- Animación suave mientras cargan las páginas
- Diseño consistente con la marca
- Se muestra durante lazy loading

### **📁 components/layout/** - Estructura

#### **Navbar.tsx** - Barra de Navegación
**Funcionalidades:**
- Logo y navegación principal
- Menú responsive para móviles
- Indicador de carrito con contador
- Botones de login/logout
- Enlaces de administrador (solo para admins)
- Búsqueda de productos

#### **Footer.tsx** - Pie de Página
**Contenido:**
- Información de contacto
- Enlaces legales (términos, privacidad)
- Redes sociales
- Mapa del sitio
- Copyright

### **📁 components/cards/** - Tarjetas

#### **ProductCard.tsx** - Tarjeta de Producto
**Elementos:**
- Imagen del producto
- Nombre y descripción
- Precio formatado
- Botón "Agregar al carrito"
- Animaciones hover
- Estado de carga

#### **BlogCard.tsx** - Tarjeta de Blog
**Elementos:**
- Imagen destacada
- Título y extracto
- Fecha y autor
- Categoría
- Enlace para leer más

#### **TestimonialCard.tsx** - Tarjeta de Testimonio
**Elementos:**
- Avatar del cliente
- Nombre y ubicación
- Calificación con estrellas
- Mensaje del testimonio
- Diseño elegante

---

## 🚀 Scripts de Desarrollo

### **En package.json:**

```json
{
  "scripts": {
    "dev": "vite",                    // Iniciar servidor de desarrollo
    "build": "tsc && vite build",     // Construir para producción
    "preview": "vite preview",        // Vista previa de la build
    "lint": "eslint \"src/**/*.{ts,tsx}\"",           // Revisar código
    "lint:fix": "eslint \"src/**/*.{ts,tsx}\" --fix", // Corregir automáticamente
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"", // Formatear código
    "check": "npm run lint && npm run format"         // Revisar y formatear
  }
}
```

### **Comandos de Uso:**

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo (puerto 5173)
npm run dev

# Construir para producción
npm run build

# Revisar calidad de código
npm run check
```

---

## 🎨 Sistema de Diseño

### **Colores Personalizados**
```css
:root {
  --baby-blue: #A7D8FF;    /* Azul principal */
  --baby-pink: #FFC1E3;    /* Rosa secundario */
  --baby-mint: #C8F7DC;    /* Verde acento */
  --baby-light: #F9FAFB;   /* Fondo claro */
  --baby-gray: #1F2937;    /* Texto oscuro */
  --baby-purple: #BB86FC;  /* Acento púrpura */
}
```

### **Tipografía**
- **Poppins**: Fuente principal para títulos y texto importante
- **Inter**: Fuente secundaria para texto de lectura

### **Espaciado y Tamaños**
- Sistema basado en múltiplos de 4px
- Breakpoints responsive estándar de Tailwind
- Componentes con padding y margin consistentes

### **Animaciones**
- Transiciones suaves de 200ms por defecto
- Animaciones de entrada con fade-in
- Efectos hover sutiles
- Respeto por preferencias de movimiento reducido

---

## 📱 Responsive Design

### **Breakpoints:**
- **sm**: 640px+ (teléfonos grandes)
- **md**: 768px+ (tablets)
- **lg**: 1024px+ (laptops)
- **xl**: 1280px+ (desktop)
- **2xl**: 1536px+ (pantallas grandes)

### **Estrategia Mobile-First:**
- Diseño base para móviles
- Expansión progresiva para pantallas más grandes
- Navegación hamburguesa en móviles
- Grids responsivos para productos
- Texto y botones accesibles en touch

---

## 🔒 Seguridad y Autenticación

### **JWT (JSON Web Tokens)**
- Tokens seguros para autenticación
- Almacenamiento en localStorage
- Expiración automática
- Renovación transparente

### **Protección de Rutas**
- Rutas protegidas por autenticación
- Redirección automática a login
- Verificación de roles (admin/usuario)
- Limpieza de tokens en logout

### **Validación de Formularios**
- Validación en tiempo real
- Sanitización de inputs
- Prevención de XSS básica
- Mensajes de error informativos

---

## 🧪 Calidad de Código

### **ESLint** - Linter de JavaScript/TypeScript
- Reglas estrictas de calidad
- Integración con React hooks
- Accesibilidad (jsx-a11y)
- Consistencia de código

### **Prettier** - Formateador de Código
- Formato automático consistente
- Integración con ESLint
- Configuración para múltiples tipos de archivo

### **TypeScript** - Tipado Estático
- Prevención de errores en tiempo de compilación
- Autocompletado inteligente
- Refactoring seguro
- Documentación implícita

---

## 🌐 Variables de Entorno

### **`.env` (crear en la raíz del proyecto):**
```bash
VITE_API_URL=http://localhost:3001/api  # URL del backend
VITE_MAPBOX_TOKEN=your_mapbox_token     # Token de Mapbox (opcional)
VITE_APP_NAME=BabyCash                  # Nombre de la aplicación
```

**Nota:** Las variables deben empezar con `VITE_` para ser accesibles en el código.

---

## 📋 Lista de Funcionalidades

### ✅ **Implementadas:**
- [x] Sistema de autenticación completo (login/register)
- [x] Carrito de compras persistente
- [x] Catálogo de productos con filtros
- [x] Panel de administración
- [x] Formulario de contacto
- [x] Blog y testimonios
- [x] Páginas legales
- [x] Diseño responsive
- [x] Animaciones y efectos visuales
- [x] Notificaciones toast
- [x] Validación de formularios
- [x] Integración con backend
- [x] Lazy loading de páginas
- [x] Sistema de tipos con TypeScript

### 🚧 **Por Implementar:**
- [ ] Recuperación de contraseña funcional
- [ ] Pasarela de pagos
- [ ] Chat en vivo
- [ ] Wishlist/Lista de deseos
- [ ] Reviews de productos
- [ ] Notificaciones push
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios
- [ ] Optimización SEO

---

## 🚀 Guía de Instalación para Principiantes

### **Prerrequisitos:**
1. **Node.js** (versión 18 o superior)
   - Descargar desde: https://nodejs.org/
   - Verificar instalación: `node --version`

2. **npm** (incluido con Node.js)
   - Verificar instalación: `npm --version`

3. **Git** (opcional, para clonar repositorio)
   - Descargar desde: https://git-scm.com/

### **Pasos de Instalación:**

```bash
# 1. Clonar o descargar el proyecto
git clone [url-del-repositorio]
cd frontend-babycash

# 2. Instalar dependencias
npm install
# Esto puede tomar varios minutos la primera vez

# 3. Crear archivo de variables de entorno
# Crear archivo .env en la raíz con:
# VITE_API_URL=http://localhost:3001/api

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir navegador en:
# http://localhost:5173
```

### **Problemas Comunes:**

**Error: "npm no reconocido"**
- Solución: Instalar Node.js desde el sitio oficial

**Error: "Puerto 5173 en uso"**
- Solución: Cerrar otras aplicaciones o cambiar puerto

**Error: "No se puede conectar al backend"**
- Solución: Verificar que el backend esté ejecutándose en puerto 3001

---

## 📚 Recursos de Aprendizaje

### **Documentación Oficial:**
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### **Tutoriales Recomendados:**
- React para principiantes
- TypeScript básico
- Tailwind CSS crash course
- React Router v6
- Axios y APIs

### **Herramientas Útiles:**
- **VS Code**: Editor recomendado
- **React Developer Tools**: Extensión para Chrome/Firefox
- **Tailwind CSS IntelliSense**: Extensión para VS Code

---

## 🤝 Contribuciones

### **Estructura para Nuevas Funcionalidades:**
1. Crear rama nueva: `git checkout -b feature/nueva-funcionalidad`
2. Seguir convenciones de nombres en archivos
3. Usar TypeScript estricto
4. Agregar validaciones apropiadas
5. Mantener diseño consistente
6. Probar en múltiples dispositivos

### **Convenciones de Código:**
- Nombres de componentes en PascalCase
- Nombres de archivos coinciden con componente principal
- Usar interfaces TypeScript para props
- Comentarios en español
- Commits descriptivos

---

## 📞 Soporte

**Para problemas técnicos:**
1. Revisar consola del navegador (F12)
2. Verificar logs del terminal
3. Comprobar conexión con backend
4. Revisar variables de entorno

**Para nuevas funcionalidades:**
1. Definir requerimientos claramente
2. Crear mockups o wireframes
3. Considerar impacto en UX
4. Planificar integración con backend

---

¡Felicidades! 🎉 Ahora tienes una comprensión completa del frontend de BabyCash. Esta aplicación utiliza las tecnologías más modernas para ofrecer una experiencia de usuario excepcional en el comercio electrónico de productos para bebés.