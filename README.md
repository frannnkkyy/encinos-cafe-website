# Encinos Café & Bistro

Sitio web informativo y responsivo para Encinos Café & Bistro, desarrollado con HTML, CSS y JavaScript sin dependencias de compilación.

## Ver el proyecto

Abre `index.html` directamente o inicia un servidor local:

```bash
npm run dev
```

Después visita `http://localhost:8080`.

## Estructura

```text
assets/
  css/styles.css   Estilos y diseño responsivo
  images/          Fotografías e identidad visual
  js/main.js       Navegación y comportamiento básico
index.html         Contenido principal
```

## Publicación

El proyecto es compatible con GitHub Pages. En el repositorio, activa Pages desde **Settings → Pages** y selecciona la rama principal.

## Nota sobre formularios

La versión anterior incluía ejemplos PHP incompletos que guardaban contraseñas sin cifrar. Fueron excluidos de esta versión. Cualquier registro o formulario futuro debe usar un servicio backend seguro, validación del lado del servidor y contraseñas protegidas con hash.
