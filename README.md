# **🤼 WWE Database**

---

## 🛠️ Stack tecnológico y Arquitectura

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black)
![React Bootstrap](https://img.shields.io/badge/React--Bootstrap-UI%20Components-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3&logoColor=white)
![Create React App](https://img.shields.io/badge/Create%20React%20App-Tooling-09D3AC?logo=createreactapp&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Component%20%2F%20Data%20Driven-blue)
![GitHub repo size](https://img.shields.io/github/repo-size/Jonathand77/wwe-database)
![GitHub last commit](https://img.shields.io/github/last-commit/Jonathand77/wwe-database)
![Languages](https://img.shields.io/github/languages/count/Jonathand77/wwe-database)

## 👤 Autor

| 👨‍💻 Nombre | 📧 Correo | 🏫 Link directo al repositorio | 🐙 Usuario GitHub |
|---|---|---|---|
| **Jonathan David Fernandez Vargas** | jonathanfdez62@gmail.com | [LinkRepositorio](https://github.com/Jonathand77/wwe-database) | [jonathand77](https://github.com/jonathand77) |

**Práctica de desarrollo web que recrea una base de datos visual de WWE: marcas, campeones, eventos premium y su historial de ediciones/ganadores.**

---

## 1. 🔍 Introducción

Este proyecto es una aplicación **React** de página única (SPA) que funciona como una base de datos visual del universo WWE. Permite navegar por las tres marcas (**RAW**, **SmackDown** y **NXT**), consultar sus campeones actuales y logos, explorar el roster general (Champions, Wyatts, MFT) y revisar los **Premium Live Events** (Royal Rumble, WrestleMania, Money in the Bank, Clash at the Castle, SummerSlam, Crown Jewel, Survivor Series y Elimination Chamber) con sus ganadores históricos y ediciones de logo.

Toda la navegación ocurre sin recargar la página: al seleccionar una marca o un evento se reemplaza la vista principal por una vista de detalle con pestañas (`DetailView`), y el botón "Back" o los enlaces del `NavBar` regresan a la vista general con scroll suave a la sección correspondiente.

## 2. ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de contar con:
- Git
- [Node.js](https://nodejs.org/) v18 o superior (incluye npm)
- Un navegador web (Chrome, Edge, Firefox, etc.)
- Un editor de código como Visual Studio Code (opcional)

No se requiere base de datos ni backend: todo el contenido vive como datos estáticos en `src/data/`.

## 📦 Estructura del Proyecto

```
wwe-database/
├── RAÍZ
│   ├── .gitignore
│   ├── .git/
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── favicon.ico
│   │   └── LogoWWE-Database.png
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── styles/
│       │   ├── global.css
│       │   └── common.css
│       ├── assets/
│       │   ├── font/            # Tipografía CentraNo2 (Bold / Book / Medium)
│       │   └── img/
│       │       ├── banners/      # Imágenes del Banner, ToCome y fondos
│       │       ├── brands/       # Logos actuales de RAW, SmackDown y NXT
│       │       ├── events/       # Carátulas del carrusel de eventos
│       │       ├── icons/        # Iconos de redes sociales del Footer
│       │       ├── roster/       # Fotos de campeones, Wyatts y MFT
│       │       └── ple/          # Logos y ganadores por evento (royal-rumble, wrestlemania, mitb, ...)
│       ├── components/
│       │   ├── NavBar/           # Navegación y scroll-spy
│       │   ├── Banner/           # Sección de bienvenida
│       │   ├── Brands/           # Carrusel de marcas (RAW / SmackDown / NXT)
│       │   ├── Events/           # Carrusel de Premium Live Events
│       │   ├── Projects/         # Roster general con tabs (Champions / Wyatts / MFT)
│       │   ├── BrandDetail/      # Vista de detalle de una marca
│       │   ├── EventDetail/      # Vista de detalle de un evento
│       │   ├── DetailView/       # Layout de tabs compartido por Brand/Event Detail
│       │   ├── ProjectCard/      # Card reutilizable (imagen + nombre + descripción)
│       │   ├── ToCome/           # Sección "próximamente"
│       │   └── Footer/           # Pie de página y contacto
│       └── data/
│           ├── BrandData/        # brandsData, brandDetailsData, rawData, smackdownData, nxtData
│           ├── EventsData/       # eventsData, eventDetailsData
│           ├── PleData/          # Un archivo por evento (royalRumbleData, wrestlemaniaData, ...)
│           ├── RosterData/       # rosterData (Champions / Wyatts / MFT)
│           └── carouselConfig.js # Breakpoints responsive de los carruseles
```

---

## 3. 🖥️ Guía Paso a Paso para Levantar el Proyecto

### 3.1 Clonar el repositorio

```bash
git clone https://github.com/Jonathand77/wwe-database.git
cd wwe-database
```

### 3.2 Instalar dependencias

```bash
npm install
```

### 3.3 Levantar el entorno de desarrollo

```bash
npm start
```

**Ya puedes abrir en el navegador y utilizar la aplicación:**
`http://localhost:3000`

La página se recarga automáticamente con cada cambio y verás los errores de lint en la consola.

### 3.4 Generar el build de producción (opcional)

```bash
npm run build
```

Genera una versión optimizada y minificada en la carpeta `build/`, lista para desplegar en cualquier hosting estático.

---

## 4. 🗂️ Modelo de Datos y Buenas Prácticas

### 4.1 Forma de un ítem de datos

Todo el contenido visual (campeones, logos, ganadores) sigue la misma forma, consumida por `ProjectCard`:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | string | Identificador único del ítem |
| `title` | string | Nombre del luchador, equipo o edición |
| `description` | string | Título que ostenta, año o contexto |
| `imgUrl` | string | Imagen importada desde `assets/img/` |

### 4.2 Forma de una vista de detalle

`BrandDetail` y `EventDetail` reutilizan `DetailView`, que renderiza pestañas a partir de un objeto con `id`, `title`, `subtitle` y un arreglo `tabs` (cada tab con `id`, `label`, `variant` e `items`). El `variant` controla el gradiente de fondo de las cards (por marca, por evento o el genérico `champions`).

### 4.3 Buenas prácticas y arquitectura

- **Separación por dominio de datos**: cada marca/evento tiene su propio archivo en `BrandData/` o `PleData/`, y un archivo agregador (`brandDetailsData.js`, `eventDetailsData.js`) los combina en un único mapa consultado por `id`.
- **Componentes de presentación reutilizables**: `ProjectCard` y `DetailView` son agnósticos del contenido; solo reciben `items`/`tabs` y renderizan.
- **Accesibilidad**: `alt` descriptivo en imágenes, `aria-label` en botones de carrusel y navegación, estados `disabled` para marcas/eventos sin detalle cargado.
- **Sin animaciones de reingreso**: las secciones se renderizan directamente al montar, evitando destellos al navegar entre la vista principal y las vistas de detalle.

## 5. 📜 Scripts disponibles

En el directorio del proyecto puedes ejecutar:

| Script | Descripción |
|---|---|
| `npm start` | Corre la app en modo desarrollo en `http://localhost:3000` |
| `npm test` | Lanza el test runner en modo interactivo (Jest + Testing Library) |
| `npm run build` | Genera el build de producción minificado en `build/` |
| `npm run eject` | Expone la configuración de Create React App (operación irreversible) |

## 6. 🧩 Componentes clave

- **NavBar**: navegación fija con scroll-spy entre secciones (`home`, `brands`, `events`, `projects`, `to-come`, `connect`).
- **Banner**: presentación inicial con efecto de texto rotativo.
- **Brands / Events**: carruseles (`react-multi-carousel`) que abren `BrandDetail` / `EventDetail` al hacer clic.
- **Projects**: roster general con pestañas Champions / Wyatts / MFT.
- **BrandDetail / EventDetail**: obtienen su contenido por `id` desde `data/` y lo delegan a `DetailView`.
- **DetailView**: layout compartido de pestañas (`react-bootstrap` `Tab.Container`) + grilla de `ProjectCard`.
- **ProjectCard**: card con imagen, overlay de color por `variant` y nombre/descripción.
- **Footer**: enlaces de contacto y navegación de regreso al inicio.

---
## **Fin de la guía y manual de usuario.**

* Tell others about this project 📢
* Say thank you publicly 🤓

---
⌨️ by [Jonathand77](https://github.com/Jonathand77) 😊
