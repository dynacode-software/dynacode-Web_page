/**
 * theme.js
 * Módulo responsable únicamente del cambio entre tema claro y oscuro.
 * No depende de ningún framework: usa el atributo data-theme en <html>
 * y las variables CSS definidas en css/variables.css.
 *
 * Nota técnica: se usa un IIFE + namespace (window.DynaCode) en lugar de
 * ES Modules (import/export). Los navegadores bloquean los <script type="module">
 * por política CORS cuando el HTML se abre directamente con doble clic
 * (protocolo file://), y solo funcionan si el sitio se sirve desde un
 * servidor (http/https). Con este patrón el sitio funciona igual abriendo
 * el archivo directamente o sirviéndolo con un servidor local.
 */

window.DynaCode = window.DynaCode || {};

window.DynaCode.theme = (function () {
  const THEME_ATTR = 'data-theme';

  /**
   * Alterna el tema actual entre "dark" y "light".
   * @param {HTMLElement} root - elemento raíz sobre el que se aplica el atributo (por defecto <html>)
   */
  function toggleTheme(root) {
    root = root || document.documentElement;
    const current = root.getAttribute(THEME_ATTR);
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute(THEME_ATTR, next);
    return next;
  }

  /**
   * Conecta el botón de cambio de tema a la lógica de toggleTheme.
   * @param {string} buttonSelector - selector del botón de tema
   */
  function initThemeToggle(buttonSelector) {
    buttonSelector = buttonSelector || '#themeToggle';
    const button = document.querySelector(buttonSelector);
    if (!button) return;

    button.addEventListener('click', function () {
      toggleTheme();
    });
  }

  return {
    toggleTheme: toggleTheme,
    initThemeToggle: initThemeToggle
  };
})();
