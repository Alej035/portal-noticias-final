# Portal de Noticias

Trabajo Práctico Final — Taller de Internet 1

## Integrantes

- Alejo
- Juan Brajkovic
- Máximo Ortenzi
- Santiago

## Cómo ejecutar el proyecto

1. Clonar el repositorio
2. Abrir `index.html` en el navegador
3. No requiere servidor ni instalación adicional

## Usuario administrador

Las credenciales se validan contra la API de dummyjson.

- **Usuario:** `emilys`
- **Contraseña:** `emilyspass`

## Estructura del proyecto

```
portal-noticias/
├── index.html       → página principal (visitante)
├── login.html       → formulario de login
├── admin.html       → panel de administración
├── css/
│   └── styles.css   → estilos y dark mode
└── js/
    ├── app.js       → inicialización, noticias y dark mode
    ├── dolar.js     → API dólar blue y conversor de moneda
    ├── auth.js      → autenticación con dummyjson
    ├── noticias.js  → datos y persistencia en localStorage
    └── admin.js     → CRUD de noticias (agregar, editar, eliminar)
```

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla (sin frameworks)
- localStorage y sessionStorage
- GitHub Pages
