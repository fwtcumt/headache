const path = require('path');
const { override, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    "assets": path.resolve(__dirname, 'src/assets'),
    "components": path.resolve(__dirname, 'src/components'),
    "config": path.resolve(__dirname, 'src/config'),
    "utils": path.resolve(__dirname, 'src/utils')
  })
);