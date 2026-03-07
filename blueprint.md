# Blueprint: Sitio Web "5091"

## Visión General

Crear una página web estática y de una sola página para el bar "5091". El objetivo es tener un sitio visualmente impactante, moderno y fácil de navegar que capture la esencia del bar. La web presenta un diseño inmersivo con una cabecera fija, una imagen de fondo persistente y secciones de contenido con efectos de transparencia.

## Gestión de Contenido

El contenido principal (textos, eventos, información de contacto, etc.) se gestiona a través de **Firebase Firestore**. Esto permite una actualización rápida y sencilla del contenido sin necesidad de modificar el código fuente, separando la lógica de presentación de los datos.

## Esquema del Proyecto

### Estilo y Diseño

*   **Paleta de colores:** La base son los tonos oscuros (negro y grises), con un **amarillo vibrante** como color de acento para los elementos interactivos y destacados, creando un contraste fuerte y memorable.
*   **Tipografía:**
    *   **Fuente Logo (`Lobster`):** Usada para el nombre "5091" en la cabecera, dándole un toque clásico y estilizado.
    *   **Fuente Títulos (`Permanent Marker`):** Aplicada a todos los títulos de sección y elementos de navegación, unificando el diseño con un estilo audaz y "gamberro".
*   **Header Fijo:** La cabecera permanece fija en la parte superior de la página durante el scroll. Tiene un fondo semitransparente con un efecto de desenfoque (`backdrop-blur`) que la integra elegantemente con el contenido.
*   **Logo en el Header:** El logo circular del bar se encuentra en la cabecera, junto al nombre, sirviendo como un ancla visual constante de la marca.
*   **Fondo Inmersivo:** Una imagen de fondo (`diana.png`) cubre toda la página y permanece estática, creando una sensación de profundidad. Una superposición oscura garantiza la legibilidad del texto.
*   **Efectos de Transparencia:** Las diferentes secciones de contenido juegan con fondos semitransparentes para permitir que la imagen de fondo se insinúe, añadiendo capas y dinamismo al diseño.
*   **Interactividad:** La mayoría de los textos y enlaces reaccionan al pasar el cursor sobre ellos, cambiando su color a amarillo, lo que proporciona feedback visual al usuario.

### Características y Estructura

*   **Página Única (Single-Page):** Toda la información se presenta en una sola página con scroll vertical, con enlaces de navegación que desplazan al usuario a la sección correspondiente.
*   **Diseño Responsivo:** La web se adapta a dispositivos móviles y de escritorio.
*   **Header Fijo:** Contiene el logo, el nombre del bar y la navegación principal.
*   **Menú Móvil (Hamburguesa):** En dispositivos móviles, la navegación se oculta tras un botón de "hamburguesa" para ahorrar espacio y mantener un diseño limpio.
*   **Sección Hero:** La primera sección que ve el usuario. Presenta un título de bienvenida y un subtítulo, junto con una llamada a la acción principal ("Ver Eventos").
*   **Secciones de Contenido:** "Sobre Nosotros", "Galería" y "Eventos".
*   **Footer:** Pie de página con información de contacto y enlaces a redes sociales.

## Plan Actual

1.  **Sincronizar `blueprint.md`:** **(Completado)** El documento ha sido actualizado para reflejar la nueva estructura del proyecto.
2.  **Agrandar el Logo:** **(Completado)** Se ha aumentado el tamaño del logo en la cabecera.
3.  **Implementar Menú Móvil:** **(Pendiente)** Añadir el código JavaScript necesario para que el menú de hamburguesa sea funcional en dispositivos móviles.
