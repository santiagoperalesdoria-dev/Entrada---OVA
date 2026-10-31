export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  app: { head: { title: 'Aventureros del Cosmos', htmlAttrs: { lang: 'es' }, meta: [{ name: 'description', content: 'Aprende y juega explorando el sistema solar.' }] } }
})
