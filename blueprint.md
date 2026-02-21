# Blueprint: Darts Bar Website

## Visión General

Crear una página web estática, atractiva y fácil de mantener para un bar de dardos. El sitio web será de una sola página y destacará el ambiente del bar, mostrará fotos, anunciará eventos y proporcionará información de contacto. El diseño será moderno, oscuro y temático en torno a los dardos.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de colores:** Tonos oscuros (negros, grises) con acentos vibrantes (rojo, amarillo neón) que recuerdan a un bar y a las dianas de dardos.
*   **Tipografía:** Una fuente sans-serif moderna y legible para el cuerpo del texto, y una fuente más audaz y estilizada para los encabezados.
*   **Imágenes:** Imágenes de alta calidad que muestren el interior del bar, gente jugando a los dardos, bebidas y comida. Se utilizarán imágenes de marcador de posición inicialmente.
*   **Iconografía:** Se usarán iconos para mejorar la navegación y la comprensión de las secciones.

### Características

*   **Página Única (Single-Page):** Toda la información estará en una sola página principal para facilitar la navegación.
*   **Diseño Responsivo:** La web se adaptará a cualquier tamaño de pantalla (móvil, tableta, escritorio).
*   **Secciones:**
    *   **Encabezado y Navegación:** Logo del bar y enlaces suaves a las diferentes secciones de la página.
    *   **Sección Hero:** Una imagen de fondo a pantalla completa con el nombre del bar y un eslogan.
    *   **Sobre Nosotros:** Texto descriptivo sobre el bar.
    *   **Galería:** Cuadrícula de imágenes.
    *   **Eventos/Promociones:** Tarjetas con información sobre próximos eventos.
    *   **Pie de Página:** Dirección, horario de apertura, enlaces a redes sociales y otra información de contacto.
*   **Contenido Fácil de Editar:** Todo el texto y las rutas de las imágenes estarán directamente en el archivo `src/pages/index.astro`, haciendo que las actualizaciones sean muy sencillas sin necesidad de tocar la lógica del código.

## Plan Actual

1.  **Crear el archivo `blueprint.md`:** Documentar la visión, el diseño y las características del proyecto.
2.  **Eliminar Componentes Innecesarios:** Borrar los archivos `src/components/Counter.tsx` y `src/components/Counter.css` del proyecto inicial.
3.  **Modificar la Página Principal (`index.astro`):**
    *   Reemplazar el contenido existente con la nueva estructura HTML para el sitio del bar de dardos.
    *   Añadir las secciones definidas (Hero, Sobre Nosotros, Galería, Eventos, Contacto).
    *   Usar texto e imágenes de marcador de posición.
4.  **Estilizar la Página:**
    *   Aplicar estilos base en `src/styles/global.css`.
    *   Usar clases de Tailwind CSS directamente en el archivo `index.astro` para implementar el diseño oscuro y moderno.
