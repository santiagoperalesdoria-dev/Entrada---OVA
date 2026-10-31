# Aventureros del Cosmos — Vue + Nuxt

Proyecto educativo interactivo desarrollado con Nuxt 3 y Vue 3. La interfaz y los iconos se construyen con CSS y SVG propios.

## Requisitos
- Node.js 20 o superior
- npm

## Instalar y ejecutar
Desde esta carpeta, ejecuta:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección local que indique Nuxt en la terminal.

## Compilar para producción
```bash
npm run build
npm run preview
```

## Funcionalidades
- Navegación adaptable a móviles.
- Fichas interactivas de los ocho planetas.
- Sección con 12 curiosidades espaciales.
- Juego de memoria con parejas y opción para volver a jugar.
- Cuestionario de 12 preguntas, retroalimentación inmediata, barra de progreso, puntuación final y reinicio.

## Estructura
- `pages/index.vue`: página principal, planetas, curiosidades y juegos.
- `components/CosmicIcon.vue`: iconos SVG propios.
- `assets/css/main.css`: estilos responsive.
- `nuxt.config.ts`: configuración de Nuxt.

No se utilizan Bootstrap, Font Awesome, bibliotecas de iconos ni emojis del sistema operativo.
