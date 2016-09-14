const fs = require('fs');
const Builder = require('systemjs-builder');
const gulp = require('gulp');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);

builder.config({
  meta: {
    'angular': {
      build: false
    },
    'angular-ui/ui-router': {
      build: false
    },
    'angular-sanitize': {
      build: false
    },
    'angular-material': {
      build: false
    },
    'text': {
      build: false
    },
    'css': {
      build: false
    }
  }
});

builder
  .buildStatic(
    `${baseUrl}/index.js`,
    `${baseUrl}/dist/core.dist.js`,
    {
      minify: true,
      sourceMaps: true,
      format: 'cjs', // cjs // es6 without bundle
      runtime: false
    }
  ).then(function() {
  console.log('Build complete\n');
})
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
