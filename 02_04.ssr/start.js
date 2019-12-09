
// css modules
// require('css-modules-require-hook/preset');
require('css-modules-require-hook')({
  extensions: ['.scss'],
  preprocessCss: (data, filename) =>
      require('node-sass').renderSync({
          data,
          file: filename
      }).css,
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// es6 modules
require("@babel/register")({});

module.exports = require('./server.js');