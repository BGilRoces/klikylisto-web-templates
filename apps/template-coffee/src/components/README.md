# Estructura de Componentes - Template Catalog

## Organización de Carpetas

### `/layout`
Componentes relacionados con la estructura y layout de las páginas:
- `Header.jsx` - Cabecera principal del sitio con logo y navegación
- `Footer.jsx` - Pie de página con información de contacto
- `Navigation.jsx` - Barra de navegación para el viewer de templates
- `Container.jsx` - Contenedor reutilizable con diferentes tamaños
- `PageLayout.jsx` - Layout base para páginas

### `/sections`
Componentes que representan secciones completas de las páginas:
- `TemplatesSection.jsx` - Sección que contiene la grilla de templates
- `CTASection.jsx` - Sección de llamada a la acción (Call to Action)

### `/ui`
Componentes de interfaz reutilizables y pequeños:
- `Button.jsx` - Botón reutilizable con diferentes variantes
- `Badge.jsx` - Insignias/chips para mostrar características
- `TemplateCard.jsx` - Tarjeta individual para mostrar cada template
- `BrowserFrame.jsx` - Marco de navegador para el viewer de templates
- `LoadingSpinner.jsx` - Indicador de carga

### `/pages`
Componentes que representan páginas completas:
- `ErrorPage.jsx` - Página de error para templates no encontrados

## Componentes Principales

### `CatalogHome.jsx`
Página principal que muestra todos los templates disponibles. Compuesta por:
- Header
- TemplatesSection (que contiene TemplateCard para cada template)
- CTASection
- Footer

### `TemplateViewer.jsx`
Componente para mostrar la vista previa de un template específico. Utiliza:
- TemplateLayout que contiene Navigation y BrowserFrame

### `TemplateLayout.jsx`
Layout específico para la vista de templates que incluye:
- Navigation con controles de responsive
- BrowserFrame para mostrar el template

## Datos Centralizados

### `/data/templates.js`
Contiene:
- `TEMPLATE_DATA` - Array con la información de todos los templates
- `CONTACT_INFO` - Información de contacto de la empresa

## Uso

Todos los componentes están exportados desde `index.js` para facilitar las importaciones:

```javascript
import { Button, Badge, TemplateCard } from './components'
```

## Beneficios de esta Estructura

1. **Modularidad**: Cada componente tiene una responsabilidad específica
2. **Reutilización**: Los componentes UI pueden usarse en múltiples lugares
3. **Mantenibilidad**: Es fácil localizar y modificar componentes específicos
4. **Escalabilidad**: Fácil agregar nuevos componentes en las carpetas correspondientes
5. **Consistencia**: Los componentes UI garantizan un diseño consistente
