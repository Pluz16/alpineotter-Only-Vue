const { defineConfig } = require('@vue/cli-service');
// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSPAPlugin({
  //       staticDir: path.join(__dirname, 'dist'),
  //       routes: ['/', '/allevamento', '/pensione', '/chi-siamo'],
  //       renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
  //         renderAfterDocumentEvent: 'render-event',
  //       }),
  //     }),
  //   ],
  // },
});
