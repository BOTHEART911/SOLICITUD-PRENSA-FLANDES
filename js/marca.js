/* ============================================================
   SOLICITUD-PRENSA-FLANDES · MARCA
   Ajuste previo a la Fase 11 · 25/09/2026

   El ÚNICO archivo que se toca al mover el despliegue del CORE. El resto
   de la web no conoce ninguna URL.

   APP 'SOLICITANTE': así se llaman en el CORE las rutas de esta web
   (SolicitudExterna.gs). No es una app de la hoja USUARIOS: quien entra
   es un solicitante de la hoja SOLICITANTES.
   ============================================================ */
(function (raiz) {
  'use strict';

  raiz.MARCA = {
    APP: 'SOLICITANTE',
    TITULO: 'Solicitud a Comunicaciones',
    MUNICIPIO: 'Alcaldía de Flandes',

    /* El despliegue del CORE: el MISMO de las siete apps. */
    API_URL: 'https://script.google.com/macros/s/AKfycbzzjZSH_cW4k_FQGnl4gjoj67PUrIUlaO4vq4OQbiXrFa3VnOzEM12EBYPLMRGCBj5gBw/exec',

    MEDIOS_BASE: 'https://botheart911.github.io/ALCALDIA-MEDIOS/',

    /* Mismo origen de GitHub Pages que las siete apps: sin este prefijo,
       la sesión de esta web pisaría la de otra. */
    STORAGE_NS: 'solicitud-externa.',

    APP_ICON: 'img/escudo.webp'
  };
  raiz.STORAGE_NS = raiz.MARCA.STORAGE_NS;
}(typeof self !== 'undefined' ? self : this));
