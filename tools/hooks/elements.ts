const nodeExternals = require('webpack-node-externals');

// Hook provided by `ngx-build-plus`. The provided argument
// is the Angular CLI webpack config. This hook returns a modified
// webpack config suited for bundling lazily loaded sub-apps or Angular Elements.
export default config => {
  // Remove entries and optimizations that would result in
  // multiple bundles.
  delete config.entry.polyfills;
  delete config.entry.styles;
  // delete config.optimization.runtimeChunk;
  delete config.optimization.splitChunks;
  // Expose bundle under all the module definitions, allowing
  // it to work with CommonJS and AMD.
  // see: https://webpack.js.org/configuration/output/#output-librarytarget
  // config.output.libraryTarget = 'umd';
  // Prevent bundling of imported node modules.
  // see: https://webpack.js.org/configuration/externals/
  // config.externals = [nodeExternals()];
  config.externals = {
    rxjs: 'rxjs',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/router': 'ng.router',
    '@angular/forms': 'ng.forms',
    '@angular/elements': 'ng.elements',
    '@angular/platform-browser': 'ng.platformBrowser',
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic"
  };
  // Remove `IndexHtmlWebpackPlugin` to prevent index.html from
  // being generated.
  // config.plugins.splice(4, 1);
  return config;
};
