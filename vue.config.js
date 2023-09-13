const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path'); // Aggiungi questa riga per importare il modulo path

const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'), // Utilizza la variabile path
        routes: ['/', '/allevamento', '/pensione', '/contattaci', '/chi-siamo', '/chi-siamo#ethics-section', '/cookies', '/privacy'],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          renderAfterDocumentEvent: 'render-event',
        }),
      }),
    ],
  },
};


