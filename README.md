# Dragon Ball Character Finder

¡Bienvenido a Dragon Ball Character Finder!  
Esta aplicación te permite buscar y filtrar personajes de Dragon Ball usando una API pública.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Variables de Estilo](#variables-de-estilo)
- [Dependencias](#dependencias)
- [Notas](#notas)
- [Licencia](#licencia)

---

## Características

- Búsqueda de personajes por nombre.
- Filtro por nivel de Ki.
- Vista de detalle de cada personaje.
- Manejo de errores de API y mensajes en pantalla.
- Estilos personalizados con SCSS.

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/dragonball-character-finder.git
   cd dragonball-character-finder
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia la aplicación:**
   ```bash
   npm run dev
   ```
---

## Estructura del Proyecto

```
src/
├── components/
│   ├── App.jsx
│   ├── CharacterList.jsx
│   ├── CharacterItem.jsx
│   ├── CharacterDetail.jsx
│   └── filters/
│       ├── Filters.jsx
│       ├── FilterByKi.jsx
│       └── FilterByName.jsx
├── services/
│   └── getCharactersFromAPI.js
├── scss/
│   ├── App.scss
│   ├── layouts/
│   │   └── Filters.scss
│   │   └── FilterByName.scss
│   │   └── FilterByKi.scss
│   │   └── CharacterDetail.scss
│   │   └── CharacterItem.scss
│   │   └── CharacterList.scss
│   └── core/
│       └── _variables.scss
│       └── _reset.scss
└── index.html
└── main.jsx
```

---

## Uso

- En la página principal puedes buscar personajes por nombre y filtrar por nivel de Ki.
- Haz clic en un personaje para ver su detalle.
- Si ocurre un error al cargar los personajes, se mostrará un mensaje en pantalla.

---

## Variables de Estilo

Las variables de color y tipografía están definidas en `src/scss/core/_variables.scss`:

```scss
$orange-color: #f4b966;
$font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
```

Puedes usarlas en tus archivos SCSS importando el archivo de variables.

---

## Dependencias

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Sass](https://sass-lang.com/) (`npm install sass`)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) para peticiones HTTP

---

## Notas

- La API utilizada es [https://dragonball-api.com/api/characters].
- Si tienes problemas con los estilos SCSS, asegúrate de tener instalado `sass`:
  ```bash
  npm install sass
  ```

---

## Licencia

MIT

---

**¡Disfruta buscando a tus personajes favoritos de Dragon Ball!**