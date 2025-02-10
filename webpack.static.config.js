const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

// Usaremos el fork actualizado para Webpack 5; por ejemplo, @dreysolano/prerender-spa-plugin
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = merge(commonConfig, {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'app-rendered',
        headless: true,
        navigationOptions: { timeout: 0 },
        maxConcurrentRoutes: 1,
      }),
    }),
  ],
});