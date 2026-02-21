# Blueprint: Darts Bar Website

## Visión General

Crear una página web estática, atractiva y fácil de mantener para un bar de dardos. El sitio web será de una sola página y destacará el ambiente del bar, mostrará fotos, anunciará eventos y proporcionará información de contacto. El diseño será moderno, oscuro y temático en torno a los dardos.

## Gestión de Contenido

Para facilitar las actualizaciones, todo el contenido editable (textos, rutas de imágenes, información de contacto, etc.) se gestiona de forma centralizada a través de **Firebase Firestore**. La página web se conecta a Firestore para obtener dinámicamente toda la información en tiempo real. Esto permite que los cambios de contenido se reflejen en el sitio al instante sin necesidad de modificar el código de la aplicación.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de colores:** Tonos oscuros (negros, grises) con acentos vibrantes (rojo, amarillo neón).
*   **Tipografía:** Fuentes modernas y legibles.
*   **Imágenes:** Se usan rutas locales desde la carpeta `public/images/`.

### Características

*   **Página Única (Single-Page).**
*   **Diseño Responsivo.**
*   **Secciones Dinámicas desde Firebase Firestore:**
    *   Encabezado
    *   Sección Hero
    *   Sobre Nosotros
    *   Galería
    *   Eventos/Promociones
    *   Pie de Página

## Plan Actual

El objetivo actual es asegurar que todos los datos se carguen correctamente desde **Firebase Firestore** y que la aplicación sea robusta frente a posibles datos faltantes o malformados. Cualquier contenido nuevo o modificación se realizará directamente en la base de datos de Firestore.
