# Blueprint: Cervecería 501 - Sitio Web Oficial

## Visión General

Crear una página web estática, inmersiva y de una sola página para la "Cervecería 501". El sitio está diseñado para capturar la energía y el ambiente único del bar, utilizando un diseño moderno y audaz, y está gestionado a través de Firebase para permitir actualizaciones de contenido dinámicas y sencillas.

## Arquitectura de Contenido (CMS)

El sitio utiliza una arquitectura de contenido desacoplada (headless) con Firebase, separando los datos de la presentación:

*   **Firebase Firestore:** Actúa como el CMS principal para todo el contenido de texto. Un único documento (`content/pageData`) almacena los textos del hero, la sección "Sobre Nosotros", la lista de eventos y la información del footer. Esto permite al equipo del bar actualizar la información en tiempo real sin tocar el código.

*   **Firebase Storage:** Se utiliza para gestionar todas las imágenes de la galería. Las imágenes se suben a la carpeta `/gallery` y el sitio las obtiene dinámicamente. Gracias a una función de búsqueda recursiva, las imágenes pueden organizarse en subcarpetas dentro de `/gallery` para una mejor organización, y el sitio las encontrará igualmente.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de Colores:** Una base de tonos oscuros (negro y grises) que crea un ambiente íntimo, contrastada con un **amarillo vibrante** para llamadas a la acción, enlaces y efectos hover, generando un look enérgico y memorable.
*   **Tipografía:**
    *   **Fuente Logo (`Lobster`):** Utilizada para el nombre "Cervecería 501" en la cabecera, aportando un toque estilizado y reconocible.
    *   **Fuente Títulos (`Permanent Marker`):** Aplicada a los títulos de sección y a la navegación, esta fuente de estilo "escrito a mano" unifica el diseño con una estética audaz y rebelde.
*   **Header Fijo y Translúcido:** La cabecera se mantiene fija en la parte superior, con un fondo amarillo muy sutil y translúcido (`bg-yellow-400 bg-opacity-20`) y un efecto de desenfoque (`backdrop-blur-md`). Esto permite que la imagen de fondo se vea a través, integrando la cabecera en el diseño inmersivo.
*   **Legibilidad del Header:** Para asegurar una legibilidad perfecta del texto blanco sobre el fondo claro del header, se ha aplicado una sombra de texto (`text-shadow`), que crea un contorno sutil y efectivo.
*   **Fondo Inmersivo:** Una imagen de fondo (`diana.png`) cubre toda la página y permanece estática (`background-attachment: fixed`), creando un efecto de profundidad. Una superposición oscura general asegura la legibilidad del contenido en todas las secciones.

### Características y Funcionalidad

*   **Página Única (Single-Page):** Toda la información se presenta en una sola página con scroll vertical. La navegación del header desplaza suavemente al usuario a la sección correspondiente.
*   **Diseño Responsivo y Móvil:** El diseño se adapta perfectamente a cualquier tamaño de pantalla.
    *   **Menú Móvil Funcional:** En dispositivos móviles, un menú de hamburguesa deslizable desde la derecha (`translate-x-full`) proporciona una navegación limpia y funcional.
*   **Galería Dinámica desde Firebase Storage:**
    *   Las imágenes se cargan automáticamente desde la carpeta `/gallery` en Firebase Storage.
    *   El código utiliza una función **recursiva** con `listAll` para buscar imágenes en `/gallery` y todas sus subcarpetas, ofreciendo flexibilidad en la organización de archivos.
    *   Las URLs de descarga se generan dinámicamente, y la galería se renderiza en el lado del servidor (`server-side rendering`) por Astro.
*   **Carrusel de Eventos Horizontal:**
    *   La sección de eventos se presenta como un carrusel horizontal deslizable, ideal para la navegación táctil en dispositivos móviles.
    *   Utiliza `flex` y `overflow-x-auto` para crear el contenedor deslizable.
    *   Las tarjetas de evento tienen un ancho fijo (`flex-shrink-0`) para mantener un tamaño consistente durante el scroll.
    *   La barra de desplazamiento horizontal está oculta mediante CSS (`.hide-scrollbar`) para una apariencia más limpia y nativa.
*   **Configuración de Acceso a Storage:**
    *   **CORS:** Se ha configurado una política de CORS (`cors.json`) en el bucket para permitir que el navegador solicite las imágenes desde el dominio del sitio web.
    *   **Reglas de Seguridad:** Se han establecido reglas específicas y seguras en Firebase Storage para permitir la lectura pública (`allow read`) **únicamente** en la carpeta `/gallery`, manteniendo el resto del bucket privado.

## Plan y Estado Actual

*   **Implementación de Diseño Inmersivo:** **(Completado)**
*   **Integración de Contenido con Firestore:** **(Completado)**
*   **Creación del Header Fijo con Logo Grande:** **(Completado)**
*   **Implementación del Menú Móvil Funcional:** **(Completado)**
*   **Integración de Galería Dinámica con Firebase Storage:** **(Completado)**
*   **Creación del Carrusel de Eventos Horizontal:** **(Completado)**
*   **Configuración de CORS y Reglas de Seguridad de Storage:** **(Completado)**

**El proyecto se encuentra en un estado estable y funcional. Todas las tareas planificadas han sido completadas.**
