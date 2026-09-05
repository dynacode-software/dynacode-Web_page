# DYNACODE — Landing Page

Landing page institucional de DYNACODE, con soporte para modo claro y modo oscuro.

## Tecnología

**HTML, CSS y JavaScript puro (vanilla). No se utiliza ningún framework.**

¿Por qué vanilla y no un framework (React, Vue, etc.)?
- La página es estática y de una sola vista: no hay estado complejo, ruteo ni
  necesidad de un motor de renderizado por componentes.
- No requiere proceso de build (webpack, vite, etc.), lo que facilita que
  cualquier persona del equipo la abra o la despliegue directamente.
- Es más liviana y rápida de cargar que incluir una librería completa para
  esta necesidad.
- Si más adelante el sitio crece (múltiples páginas, formularios con lógica
  de negocio, integraciones), sí valdría la pena evaluar un framework; por
  ahora el alcance no lo justifica.

Los archivos JS se dividen por responsabilidad usando el patrón **IIFE +
namespace** (`window.DynaCode`), en lugar de ES Modules (`import`/`export`).
Se eligió así a propósito: los navegadores bloquean los `<script type="module">`
por política CORS cuando el HTML se abre directamente con doble clic
(protocolo `file://`), y solo funcionan si el sitio se sirve desde un
servidor. Con IIFE + namespace, el sitio funciona igual abriendo
`index.html` directamente que sirviéndolo con un servidor.

## Estructura del proyecto

```
dynacode-landing/
├── index.html              # Estructura y contenido de la página
├── css/
│   ├── variables.css        # Tokens de color/tipografía por tema (claro/oscuro)
│   ├── base.css              # Reset + estilos base + utilidades compartidas
│   ├── components.css        # Componentes reutilizables (botones, tarjetas, forms, mockups)
│   ├── sections.css          # Estilos propios de cada sección (hero, contacto, footer, etc.)
│   └── responsive.css        # Media queries
├── js/
│   ├── theme.js              # Módulo (window.DynaCode.theme): lógica del interruptor de tema
│   └── main.js               # Punto de entrada: inicializa los módulos (se carga después de theme.js)
└── README.md
```

### Por qué esta división

- **`index.html`** solo contiene marcado semántico y referencias a los
  archivos externos — nada de estilos ni scripts embebidos.
- **CSS dividido por responsabilidad**, en el orden en que se cargan:
  `variables → base → components → sections → responsive`. Esto evita un
  único archivo gigante y facilita ubicar qué archivo tocar según el cambio
  que se necesite (un color de marca, un componente puntual, una sección,
  o un breakpoint).
- **JS dividido por módulo**: `theme.js` no sabe nada del resto de la página,
  solo del cambio de tema, y expone su API en `window.DynaCode.theme`.
  `main.js` es el único punto de entrada que arranca los módulos, y se
  carga en el HTML después de `theme.js`. Agregar nueva lógica (por ejemplo,
  el envío real del formulario) implica crear un nuevo archivo
  (`js/contact-form.js`) con el mismo patrón (`window.DynaCode.contactForm = ...`),
  incluirlo en `index.html` antes de `main.js`, y llamarlo desde ahí — sin
  tocar `theme.js`.

## Estado actual (a definir por el equipo)

El interruptor de tema (☀️/🌙) es el único elemento con lógica funcional.
El resto de botones, enlaces de navegación, íconos sociales y el formulario
de contacto están maquetados pero **sin lógica conectada**, a la espera de
que el equipo defina:
- Endpoint / servicio para el envío del formulario de contacto.
- Rutas reales para "Conoce DYNACODE" y los enlaces del footer.
- Cuentas reales de redes sociales.

## Cómo verlo localmente

No requiere instalación ni build. Basta con abrir `index.html` en el
navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
# o
python3 -m http.server
```

## Fuentes

El diseño usa las tipografías **Plus Jakarta Sans** (encabezados) e
**Inter** (texto), cargadas desde Google Fonts en `index.html`.
