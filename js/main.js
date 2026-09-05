/**
 * main.js
 * Punto de entrada de la landing page. Arranca cada módulo.
 * Vanilla JavaScript — sin frameworks ni dependencias externas.
 *
 * Se carga como script clásico (no type="module") a propósito, para que
 * la página funcione tanto abriendo index.html directamente con doble clic
 * (file://) como sirviéndola desde un servidor. Debe incluirse en el HTML
 * DESPUÉS de js/theme.js, ya que depende del namespace window.DynaCode.
 */

document.addEventListener('DOMContentLoaded', function () {
  window.DynaCode.theme.initThemeToggle('#themeToggle');

  // Los demás botones e íconos (formulario, navegación, redes sociales)
  // se dejan sin lógica por ahora, a la espera de que el equipo defina
  // el comportamiento real (envío de formulario, rutas, integraciones, etc.).
});
