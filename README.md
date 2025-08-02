# 🏪 AriStore - Sistema de Gestión Empresarial

![AriStore Logo](logos/aristore.png)

## 📋 Descripción

**AriStore** es un sistema completo de gestión empresarial diseñado específicamente para tiendas de accesorios tecnológicos. Desarrollado con tecnologías web modernas, ofrece una solución integral para la administración de inventario, ventas, clientes, proveedores y análisis de negocio.

### ✨ Características Principales

- 🎯 **Dashboard Inteligente** con métricas en tiempo real
- 📦 **Gestión de Inventario** con sincronización automática
- 💰 **Sistema POS** con impresión profesional de recibos
- 👥 **CRM Completo** con códigos automáticos de clientes
- 🚛 **Gestión de Proveedores** con análisis de rendimiento
- 📊 **Reportes Avanzados** con visualizaciones interactivas
- ⚙️ **Configuración Completa** del sistema
- 🎨 **Interfaz Moderna** con diseño glassmorphism

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos avanzados con glassmorphism y responsive design
- **JavaScript ES6+** - Funcionalidad interactiva y dinámica
- **Chart.js** - Visualizaciones de datos profesionales
- **Font Awesome** - Iconografía consistente
- **Inter Font** - Tipografía moderna y legible

### Librerías de Exportación
- **jsPDF** - Generación de documentos PDF
- **jsPDF-AutoTable** - Tablas profesionales en PDF
- **XLSX** - Exportación a Excel
- **HTML5 Canvas** - Exportación de gráficos a PNG

### Almacenamiento
- **LocalStorage** - Persistencia de datos del lado del cliente
- **JSON** - Formato de intercambio de datos

## 📁 Estructura del Proyecto

```
AriStore/
├── index.html              # Dashboard principal
├── inventario.html         # Gestión de inventario
├── ventas.html            # Sistema POS y ventas
├── clientes.html          # Gestión de clientes (CRM)
├── proveedores.html       # Gestión de proveedores
├── reportes.html          # Análisis y reportes
├── configuracion.html     # Configuración del sistema
├── styles.css             # Estilos centralizados
├── logos/
│   └── aristore.png       # Logo de la empresa
└── README.md              # Documentación del proyecto
```

## 🎯 Módulos del Sistema

### 1. 📊 Dashboard Principal
- **Archivo**: `index.html`
- **Funcionalidades**:
  - Métricas en tiempo real (ventas, ganancias, productos, clientes)
  - Gráficos de rendimiento diario y semanal
  - Alertas de inventario crítico
  - Accesos rápidos a todos los módulos
  - Generación de reportes diarios

### 2. 📦 Gestión de Inventario
- **Archivo**: `inventario.html`
- **Funcionalidades**:
  - CRUD completo de productos
  - Gestión de categorías (Auriculares, Cargadores, Fundas, Cables, Smartwatches)
  - Cálculo automático de márgenes de ganancia
  - Alertas de stock bajo y crítico
  - Sincronización automática con ventas
  - Exportación a PDF, Excel y CSV

### 3. 💰 Sistema POS y Ventas
- **Archivo**: `ventas.html`
- **Funcionalidades**:
  - Sistema de punto de venta profesional
  - Carrito de compras dinámico
  - Cálculo automático de totales e impuestos
  - Impresión profesional de recibos
  - Generación de PDFs con branding corporativo
  - Actualización automática del inventario
  - Historial completo de transacciones

### 4. 👥 Gestión de Clientes (CRM)
- **Archivo**: `clientes.html`
- **Funcionalidades**:
  - Base de datos completa de clientes
  - Códigos automáticos (CLI-001, CLI-002, etc.)
  - Gestión de información de contacto
  - Seguimiento de compras y gastos totales
  - Sistema de clasificación (Regular, VIP, Premium)
  - Búsqueda y filtrado avanzado
  - Exportación de datos

### 5. 🚛 Gestión de Proveedores
- **Archivo**: `proveedores.html`
- **Funcionalidades**:
  - Registro completo de proveedores
  - Códigos automáticos (PROV-001, PROV-002, etc.)
  - Categorización por tipo de productos
  - Gestión de términos de pago
  - Seguimiento de pedidos y gastos
  - Análisis de rendimiento
  - Reportes de proveedores

### 6. 📈 Reportes y Análisis
- **Archivo**: `reportes.html`
- **Funcionalidades**:
  - Métricas principales con tendencias
  - Gráficos interactivos de ventas
  - Top 10 productos más vendidos
  - Análisis por categorías
  - Rendimiento por días de la semana
  - Análisis de clientes (nuevos, VIP, recurrentes)
  - Evaluación de proveedores
  - Reportes rápidos personalizables
  - Exportación completa de análisis

### 7. ⚙️ Configuración del Sistema
- **Archivo**: `configuracion.html`
- **Funcionalidades**:
  - Información general de la tienda
  - Gestión de usuarios y roles
  - Configuración fiscal (impuestos, monedas)
  - Personalización de alertas
  - Sistema de notificaciones
  - Respaldos automáticos y manuales
  - Restauración de datos
  - Configuraciones avanzadas de seguridad
  - Información del sistema

## 🎨 Diseño y UX

### Tema Visual
- **Estilo**: Glassmorphism con tema oscuro
- **Colores Principales**: 
  - Primary: `#4ecdc4` (Turquesa)
  - Secondary: `#667eea` (Azul)
  - Success: `#4ecdc4` (Verde turquesa)
  - Warning: `#f9ca24` (Amarillo)
  - Error: `#ff6b6b` (Rojo coral)

### Componentes UI
- **Cards con Glassmorphism**: Efectos de vidrio con blur
- **Botones Interactivos**: Hover y efectos de transición
- **Formularios Modernos**: Inputs con efectos focus
- **Navegación Intuitiva**: Breadcrumbs y menús claros
- **Iconografía Consistente**: Font Awesome 6.0
- **Responsive Design**: Optimizado para móviles y tablets

## 💾 Almacenamiento de Datos

El sistema utiliza **LocalStorage** para persistir los datos localmente en el navegador:

### Estructura de Datos

```javascript
// Productos
aristore_products = [
  {
    id: "PROD-001",
    name: "Auriculares Bluetooth",
    category: "Auriculares",
    stock: 25,
    buyPrice: 45.00,
    salePrice: 79.99,
    margin: 43.75,
    supplier: "TechSupply Co.",
    dateAdded: "2025-08-01"
  }
]

// Ventas
aristore_sales = [
  {
    id: "SALE-001",
    date: "2025-08-01T10:30:00Z",
    items: [...],
    total: 159.98,
    customer: "CLI-001",
    paymentMethod: "Efectivo"
  }
]

// Clientes
aristore_clients = [
  {
    id: "CLI-001",
    name: "Juan Pérez",
    email: "juan@email.com",
    phone: "+1234567890",
    city: "Ciudad de México",
    status: "regular",
    totalPurchases: 3,
    totalSpent: 450.75,
    dateAdded: "2025-07-15"
  }
]

// Proveedores
aristore_suppliers = [
  {
    id: "PROV-001",
    name: "TechSupply Co.",
    contact: "María González",
    email: "maria@techsupply.com",
    phone: "+1987654321",
    category: "Electrónicos",
    paymentTerms: "30 días",
    status: "activo",
    totalOrders: 15,
    totalSpent: 12500.00
  }
]
```

## 🔧 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación

1. **Clonar o descargar** el proyecto:
   ```bash
   git clone https://github.com/tu-usuario/aristore.git
   cd aristore
   ```

2. **Abrir en un servidor local** (opcional):
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Acceder al sistema**:
   - Local: Abrir `index.html` directamente en el navegador
   - Servidor: `http://localhost:8000`

### Primera Configuración

1. **Acceder a Configuración** (`configuracion.html`)
2. **Configurar datos de la tienda**:
   - Nombre de la empresa
   - Información de contacto
   - Configuración fiscal
3. **Crear usuarios del sistema**
4. **Configurar alertas y notificaciones**
5. **¡Listo para usar!**

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos
- 💻 **Desktop**: Experiencia completa
- 📱 **Móvil**: Interfaz adaptada y táctil
- 📟 **Tablet**: Optimizado para pantallas medianas

## 🚀 Funcionalidades Avanzadas

### Exportación de Datos
- **PDF**: Recibos, reportes, listas de productos
- **Excel**: Inventario, clientes, proveedores, ventas
- **CSV**: Datos para análisis externos
- **PNG**: Gráficos y visualizaciones

### Sincronización Automática
- **Inventario ↔ Ventas**: Stock actualizado automáticamente
- **Clientes ↔ Ventas**: Historial de compras actualizado
- **Dashboard**: Métricas en tiempo real

### Alertas Inteligentes
- **Stock Crítico**: Notificaciones automáticas
- **Ventas Diarias**: Resúmenes por email
- **Nuevos Clientes**: Seguimiento de registros

## 🔐 Seguridad

### Características de Seguridad
- **Datos Locales**: Información almacenada localmente
- **Validación de Formularios**: Prevención de errores
- **Respaldos Automáticos**: Protección contra pérdida de datos
- **Control de Usuarios**: Sistema de roles y permisos

### Recomendaciones
- Realizar respaldos regulares
- Mantener actualizado el navegador
- Usar HTTPS en producción
- Configurar contraseñas seguras

## 📊 Métricas y Análisis

### KPIs Principales
- **Ingresos Totales**: Suma de todas las ventas
- **Ganancia Neta**: Ingresos menos costos
- **Ticket Promedio**: Valor promedio por venta
- **Productos Más Vendidos**: Ranking de popularidad
- **Clientes Activos**: Segmentación y análisis

### Reportes Disponibles
- Reporte Diario de Ventas
- Análisis Semanal de Rendimiento
- Reporte Mensual Completo
- Estado de Inventario
- Análisis de Clientes VIP
- Rendimiento de Proveedores

## 🛠️ Desarrollo y Personalización

### Estructura CSS
```css
/* Variables principales */
:root {
  --primary-color: #4ecdc4;
  --secondary-color: #667eea;
  --background-dark: #1a1a2e;
  --glass-bg: rgba(255, 255, 255, 0.02);
  --glass-border: rgba(255, 255, 255, 0.1);
}
```

### Funciones JavaScript Principales
- `loadInventory()`: Cargar productos desde localStorage
- `processSale()`: Procesar venta y actualizar inventario
- `generateReport()`: Crear reportes dinámicos
- `exportToPDF()`: Exportación a PDF
- `showAlert()`: Sistema de notificaciones

### Personalización
- **Colores**: Modificar variables CSS en `:root`
- **Logo**: Reemplazar `logos/aristore.png`
- **Categorías**: Agregar en arrays de JavaScript
- **Campos**: Extender objetos de datos según necesidades

## 🤝 Contribución

### Cómo Contribuir
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Guías de Desarrollo
- Mantener consistencia en el diseño
- Documentar nuevas funciones
- Probar en múltiples navegadores
- Seguir patrones de código existentes

## 📝 Changelog

### v2.1.0 (Agosto 2025)
- ✅ Sistema completo implementado
- ✅ 7 módulos funcionales
- ✅ Diseño glassmorphism moderno
- ✅ Exportación múltiple (PDF, Excel, PNG)
- ✅ Sistema de respaldos
- ✅ Análisis avanzados con Chart.js
- ✅ CRM completo con códigos automáticos
- ✅ Gestión de proveedores
- ✅ Configuración administrativa completa

### Próximas Versiones
- 🔄 Integración con APIs de pago
- 🔄 Soporte para múltiples monedas
- 🔄 Módulo de empleados y nómina
- 🔄 Integración con servicios de email
- 🔄 App móvil nativa

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte y Contacto

### Información de Contacto
- **Email**: contacto@aristore.com
- **Teléfono**: +1 (555) 123-4567
- **Sitio Web**: www.aristore.com

### Soporte Técnico
- **Documentación**: Consultar este README
- **Issues**: Reportar problemas en GitHub
- **Wiki**: Guías detalladas disponibles

## 🎉 Agradecimientos

Desarrollado con ❤️ para pequeñas y medianas empresas que buscan una solución completa de gestión empresarial.

### Tecnologías y Recursos
- Chart.js por las visualizaciones
- Font Awesome por los iconos
- jsPDF por la generación de PDFs
- Google Fonts por la tipografía Inter

---

**AriStore v2.1.0** - Sistema de Gestión Empresarial Completo
*"Tu negocio, organizado y profesional"*

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
