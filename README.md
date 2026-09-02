# Encinos Café & Bistro

Sitio web informativo de Encinos Café & Bistro. Esta versión conserva el diseño original y reorganiza el proyecto para facilitar su mantenimiento y publicación.

## Estructura

```text
assets/
  css/       Estilos propios y dependencias visuales
  fonts/     Tipografías e iconos locales
  images/    Fotografías y recursos gráficos
  js/        Comportamiento y dependencias del navegador
tools/       Validación y generación del sitio
*.html       Páginas públicas
```

## Desarrollo

```bash
npm run check
npm run dev
```

El servidor local queda disponible en `http://localhost:8080`.

## Publicación

Ejecuta `npm run build` para generar la versión publicable dentro de `dist/`.

## Decisiones técnicas

- Se conservaron el layout, estilos, fotografías y contenido del menú original.
- Se retiraron páginas de demostración sin adaptar y ejemplos PHP/MySQL inseguros que no formaban parte del sitio visible.
- Los scripts propios ahora comprueban que sus elementos existan antes de usarlos.
- La versión pública no contiene contraseñas, credenciales ni configuración de base de datos.
