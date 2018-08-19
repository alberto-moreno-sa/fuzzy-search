const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    '@app': path.resolve(__dirname, './src/app')
  };

  return config;
};
