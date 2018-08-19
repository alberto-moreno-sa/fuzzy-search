const path = require('path');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);

  config.resolve.alias = {
    '@app': path.resolve(__dirname, './src/app')
  };

  return config;
};
