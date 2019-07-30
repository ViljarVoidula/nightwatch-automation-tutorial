// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
const path = require('path');
require('events').EventEmitter.defaultMaxListeners = 0;
require('@babel/register')({
  presets: ['@babel/env'],
  plugins: ['add-module-exports']
});
require('@babel/polyfill');
// Load environment variables
require('dotenv-extended').load({
  defaults: path.join(__dirname,'.env.defaults'),
  errorOnMissing: true
});

module.exports = require('./nightwatch.conf');
