# Blueprint: Darts Bar Website

## Visión General

Crear una página web estática, atractiva y fácil de mantener para un bar de dardos. El sitio web es de una sola página y destaca el ambiente del bar, muestra fotos, anuncia eventos y proporciona información de contacto. El diseño es moderno e inmersivo, con una imagen de fondo global y secciones de contenido que juegan con las transparencias para crear una experiencia visualmente atractiva y cohesionada.

## Gestión de Contenido

Para facilitar las actualizaciones, el contenido textual, la galería de imágenes y la información de contacto se gestionan de forma centralizada a través de **Firebase Firestore**. Esto permite que la mayoría del contenido se refleje en el sitio al instante sin necesidad de modificar el código. La imagen de fondo es un recurso estático para optimizar la carga y simplificar la gestión.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de colores:** Tonos de gris oscuro y negro, con un amarillo vibrante como color de acento para reflejar la identidad de la marca.
*   **Fondo:** Se utiliza una imagen de fondo estática (`public/images/diana.jpg`) que permanece fija al hacer scroll. Una capa oscura semitransparente se superpone en toda la página para garantizar la legibilidad del texto.
*   **Transparencias:** Las secciones de contenido como la galería, los eventos y el pie de página tienen un fondo semitransparente, permitiendo que la imagen de fondo sea visible sutilmente y creando un efecto de profundidad.
*   **Tipografía:** Fuentes modernas y legibles, con tamaños y pesos variados para crear jerarquía visual.
*   **Interactividad:** Todos los elementos de texto principales tienen un efecto `hover` que los vuelve amarillos al pasar el cursor sobre ellos, añadiendo un toque dinámico a la página.

### Características

*   **Página Única (Single-Page).**
*   **Diseño Responsivo.**
*   **Contenido Dinámico (Firestore):**
    *   **Encabezado:** Título del sitio y menú de navegación.
    *   **Sección Principal (Hero):** Título, subtítulo y descripción del bar.
    *   **Galería:** Lista de URLs de imágenes (alojadas externamente de forma gratuita).
    *   **Eventos:** Lista de próximos eventos.
    *   **Pie de Página:** Información de contacto y enlaces a redes sociales.

## Plan Actual

El proyecto está finalizado. Se ha simplificado la gestión de la imagen de fondo convirtiéndola en un recurso estático, mejorando el rendimiento. El resto del contenido es dinámico y se gestiona a través de Firestore. La web está lista para ser desplegada.