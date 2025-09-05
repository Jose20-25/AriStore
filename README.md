# 🏪 AriStore - Sistema ERP Completo

## 📋 Descripción del Proyecto

**AriStore** es un sistema ERP (Enterprise Resource Planning) completo desarrollado en HTML5, CSS3 y JavaScript puro. Diseñado para pequeñas y medianas empresas que necesitan gestionar de manera eficiente sus operaciones de ventas, inventario y clientes.

### ✨ Características Principales

- **🎨 Interfaz Moderna**: Diseño responsivo con gradientes y tipografía Inter
- **💾 Persistencia Local**: Almacenamiento en localStorage sin necesidad de base de datos
- **🔄 Sistema Integrado**: Módulos interconectados que comparten información en tiempo real
- **📱 Responsive**: Adaptable a dispositivos móviles y tablets
- **🚀 Sin Dependencias**: Funciona completamente offline

---

## 🏗️ Estructura del Sistema

```
AriStore/
├── 📄 index.html          # Dashboard principal
├── 🛒 ventas.html         # Sistema de punto de venta (POS)
├── 📦 inventario.html     # Gestión de productos e inventario
├── 👥 clientes.html       # Administración de clientes
├── 🚚 proveedores.html    # Gestión de proveedores
├── 📊 reportes.html       # Reportes y estadísticas
├── 💰 finanzas.html       # Control financiero
├── ⚙️  configuracion.html # Configuraciones del sistema
├── 🖼️  logos/             # Recursos gráficos
│   └── aristore.png       # Logo principal
└── 📝 README.md           # Documentación del proyecto
```

---

## 🎯 Módulos del Sistema

### 1. 🏠 **Dashboard (index.html)**
- **Funcionalidad**: Panel principal de control
- **Características**:
  - Resumen de ventas del día
  - Indicadores clave de rendimiento (KPI)
  - Acceso rápido a todos los módulos
  - Navegación lateral integrada

### 2. 🛒 **Sistema de Ventas (ventas.html)**
- **Funcionalidad**: Punto de venta completo
- **Características**:
  - Catálogo de productos con búsqueda
  - Carrito de compras dinámico
  - Cálculo automático de IVA (13% incluido)
  - Gestión de clientes
  - Historial de ventas
  - Múltiples métodos de pago

### 3. 📦 **Inventario (inventario.html)**
- **Funcionalidad**: Gestión completa de productos
- **Características**:
  - CRUD de productos
  - Control de stock
  - Categorización
  - Códigos de barras
  - Precios de compra y venta
  - Ubicación en almacén

### 4. 👥 **Clientes (clientes.html)**
- **Funcionalidad**: CRM básico
- **Características**:
  - Registro de clientes
  - Historial de compras
  - Información de contacto
  - Segmentación por estado
  - Total de compras

### 5. 🚚 **Proveedores (proveedores.html)**
- **Funcionalidad**: Gestión de proveedores
- **Características**:
  - Datos de contacto
  - Productos suministrados
  - Términos de pago
  - Historial de compras

---

## 🔧 Configuración Técnica

### **Tecnologías Utilizadas**
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Estilos**: CSS Grid, Flexbox, Variables CSS
- **Iconos**: Font Awesome 6.4.0
- **Fuentes**: Google Fonts (Inter)
- **Almacenamiento**: LocalStorage API

### **Compatibilidad**
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

### **Claves de LocalStorage**
```javascript
// Datos principales
'aristore_products'    // Productos e inventario
'aristore_clientes'    // Base de datos de clientes
'aristore_sales_v2'    // Historial de ventas
'aristore_counter_v2'  // Contador de ventas
```

---

## 🚀 Instalación y Uso

### **Requisitos**
- Navegador web moderno
- Servidor web local (opcional pero recomendado)

### **Instalación Básica**
1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador web
3. **¡Listo!** El sistema está funcionando

### **Instalación con Servidor Local**
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx http-server

# Opción 3: PHP
php -S localhost:8000
```

Luego acceder a: `http://localhost:8000`

---

## 📊 Sistema de IVA

### **Configuración Fiscal**
- **IVA**: 13% (incluido en precios)
- **Cálculo**: Los precios mostrados YA incluyen IVA
- **Desglose**: El sistema calcula automáticamente la base gravable

### **Ejemplo de Cálculo**
```
Precio mostrado: $100.00 (incluye IVA)
├── Subtotal (sin IVA): $88.50
├── IVA (13%): $11.50
└── Total: $100.00
```

---

## 🎨 Guía de Estilo

### **Colores Principales**
```css
/* Gradiente principal */
background: linear-gradient(180deg, #1e3c72 0%, #2a5298 100%);

/* Colores de estado */
--success: #059669    /* Verde - Disponible */
--warning: #f59e0b    /* Amarillo - Stock bajo */
--danger: #dc2626     /* Rojo - Sin stock */
--info: #1e3c72       /* Azul - Información */
```

### **Tipografía**
- **Fuente principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

---

## 💡 Funciones de Debug

### **Sistema de Ventas**
```javascript
// Abrir consola del navegador (F12)
debugSystem()        // Diagnóstico completo
testIntegration()    // Prueba de integración
viewSystemData()     // Ver datos en consola
clearAllData()       // Limpiar datos (confirmación)
```

---

## 🔄 Flujo de Trabajo

### **Proceso de Venta**
1. **Inventario** → Agregar productos
2. **Clientes** → Registrar clientes (opcional)
3. **Ventas** → Realizar transacciones
4. **Reportes** → Analizar resultados

### **Integración de Datos**
- Los productos se sincronizan entre **inventario** y **ventas**
- Las ventas actualizan automáticamente el **stock**
- Los clientes se comparten entre módulos
- El historial se mantiene persistente

---

## 📈 Características Avanzadas

### **Búsqueda Inteligente**
- Búsqueda por nombre de producto
- Filtrado por código
- Búsqueda por categoría
- Resultados en tiempo real

### **Gestión de Stock**
- Indicadores visuales de stock
- Alertas de stock bajo
- Control automático en ventas
- Prevención de sobreventa

### **Interfaz Responsiva**
- Adaptación automática a pantallas pequeñas
- Menú lateral colapsible
- Grid responsive para productos
- Optimización táctil para tablets

---

## 🛠️ Personalización

### **Modificar Colores**
Editar variables CSS en cada archivo:
```css
:root {
  --primary-color: #1e3c72;
  --secondary-color: #2a5298;
  --success-color: #059669;
  /* ... más colores */
}
```

### **Cambiar Logo**
Reemplazar `logos/aristore.png` con tu propio logo.

### **Ajustar IVA**
Modificar el valor en `ventas.html`:
```javascript
const totalWithTax = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const subtotal = totalWithTax / 1.13; // Cambiar 1.13 por 1 + tu_iva
```

---

## 🔒 Seguridad y Privacidad

### **Almacenamiento Local**
- ✅ Los datos se guardan solo en el navegador del usuario
- ✅ No se envía información a servidores externos
- ✅ Control total sobre los datos
- ⚠️ Hacer respaldos regulares (exportar datos)

### **Respaldo de Datos**
Los datos se almacenan en localStorage y pueden perderse si:
- Se limpia el cache del navegador
- Se desinstala el navegador
- Se cambia de dispositivo

**Recomendación**: Implementar sistema de exportación de datos.

---

## 🐛 Solución de Problemas

### **Problemas Comunes**

#### **Los productos no aparecen**
```javascript
// Verificar en consola (F12)
debugSystem()
```

#### **Datos perdidos al recargar**
- Verificar que localStorage esté habilitado
- No usar modo incógnito
- Revisar configuraciones de privacidad

#### **Errores de cálculo**
- Verificar formato de números
- Comprobar configuración de IVA
- Revisar datos de productos

---

## 📝 Changelog

### **Versión 1.0.0** (Septiembre 2025)
- ✨ Sistema de ventas completo
- ✨ Gestión de inventario
- ✨ Base de datos de clientes
- ✨ Integración completa entre módulos
- ✨ IVA del 13% incluido en precios
- ✨ Interfaz responsiva moderna
- ✨ Persistencia en localStorage

---

## 🤝 Contribuciones

### **Cómo Contribuir**
1. Fork del proyecto
2. Crear rama para nueva característica
3. Realizar cambios
4. Probar exhaustivamente
5. Enviar pull request

### **Áreas de Mejora**
- [ ] Sistema de reportes avanzados
- [ ] Exportación de datos (CSV, PDF)
- [ ] Códigos de barras
- [ ] Impresión de tickets
- [ ] Multi-usuario
- [ ] API REST

---

## 📞 Soporte y Contacto

### **Documentación**
- Este README contiene toda la información básica
- Código comentado en español
- Funciones de debug incluidas

### **Reporte de Errores**
Al reportar errores, incluir:
- Navegador y versión
- Pasos para reproducir
- Mensaje de error (si existe)
- Datos de prueba

---

## 📄 Licencia

Este proyecto es de código abierto. Puedes usar, modificar y distribuir libremente.

### **Términos de Uso**
- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida
- ✅ Uso privado permitido

---

## 🎉 Créditos

**Desarrollado con ❤️ para pequeñas y medianas empresas**

### **Tecnologías Agradecidas**
- [Font Awesome](https://fontawesome.com/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografía Inter
- MDN Web Docs - Documentación JavaScript/CSS

---

*AriStore ERP - Gestión empresarial simple y eficaz* 🚀
