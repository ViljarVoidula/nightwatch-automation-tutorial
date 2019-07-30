const path = require('path');

export default {
  tests: path.join(__dirname, 'tests'),
  screenshots: path.join(__dirname, 'screenshots'),
  reports: path.join(__dirname, 'reports'),
  globals: path.join(__dirname, 'globals', 'globals.js'),
  environement: path.join(__dirname, '.env', '.tests.env')
};
