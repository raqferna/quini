# Blueprint: Darts Bar Website

## Visión General

Crear una página web estática, atractiva y fácil de mantener para un bar de dardos. El sitio web será de una sola página y destacará el ambiente del bar, mostrará fotos, anunciará eventos y proporcionará información de contacto. El diseño será moderno, oscuro y temático en torno a los dardos.

## Gestión de Contenido

Para facilitar las actualizaciones a usuarios no técnicos, todo el contenido editable (textos, rutas de imágenes, información de contacto, etc.) se centralizará en un único archivo: `src/content.json`. La página web leerá dinámicamente este archivo para mostrar la información. Esto significa que para cambiar cualquier texto o imagen, solo es necesario editar este archivo JSON, sin tocar el código de la aplicación.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de colores:** Tonos oscuros (negros, grises) con acentos vibrantes (rojo, amarillo neón).
*   **Tipografía:** Fuentes modernas y legibles.
*   **Imágenes:** Se usan rutas locales desde la carpeta `public/images/`.

### Características

*   **Página Única (Single-Page).**
*   **Diseño Responsivo.**
*   **Secciones Dinámicas desde `content.json`:**
    *   Encabezado
    *   Sección Hero
    *   Sobre Nosotros
    *   Galería
    *   Eventos/Promociones
    *   Pie de Página

## Plan Actual

1.  **Refactorización a `content.json`:**
    *   Crear el archivo `src/content.json` con toda la información editable.
    *   Modificar `src/pages/index.astro` para que lea y muestre el contenido desde `src/content.json`.
    *   Actualizar `blueprint.md` para documentar la nueva arquitectura de contenido.
