# Aroma - Cafetería Artesanal ☕

Un sitio web moderno e innovador para una cafetería artesanal, creado con React, Vite, Tailwind CSS y Framer Motion.

## ✨ Características

- **Diseño Innovador**: Interfaz limpia pero atrevida con animaciones fluidas
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Avanzadas**: Powered by Framer Motion para una experiencia inmersiva
- **Elementos Flotantes**: Decoraciones dinámicas que dan vida al sitio
- **Paleta de Colores Cafetera**: Tonos tierra cálidos que evocan la experiencia del café
- **Componentes Modulares**: Arquitectura bien organizada y escalable

## 🎨 Secciones

1. **Hero**: Portada impactante con animaciones de vapor y elementos flotantes
2. **Nosotros**: Historia de la cafetería con estadísticas visuales
3. **Menú**: Catálogo interactivo de bebidas con categorías
4. **Experiencia**: Servicios adicionales y testimoniales
5. **Contacto**: Formulario de contacto con información de ubicación

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 🛠️ Stack Tecnológico

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesamiento de CSS

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   └── ui/
│       └── FloatingElements.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Personalización

### Colores
El tema utiliza una paleta personalizada de colores café definida en `tailwind.config.js`:
- `coffee-*`: Tonos marrones desde claro hasta oscuro
- `cream-*`: Tonos crema cálidos

### Animaciones
Las animaciones están configuradas en:
- Tailwind config para animaciones CSS puras
- Componentes individuales para animaciones Framer Motion

### Contenido
Para personalizar el contenido:
1. Modifica los textos en cada componente de sección
2. Actualiza el menú en `Menu.jsx`
3. Cambia la información de contacto en `Contact.jsx`

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🌟 Características Avanzadas

- **Scroll Suave**: Navegación fluida entre secciones
- **Lazy Loading**: Animaciones que se activan al entrar en viewport
- **Micro-interacciones**: Hover effects y feedback visual
- **Performance**: Optimizado para carga rápida

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea tu feature branch
3. Commit tus cambios
4. Push al branch
5. Abre un Pull Request

---

Desarrollado con ❤️ y mucho ☕ para crear experiencias digitales excepcionales.
