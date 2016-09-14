const gulp = require('gulp');
const browserSync = require('browser-sync');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * dev server
 */
browserSync.init({
  server: {
    baseDir: `${baseUrl}/`
  }
});
/**
 * Watch for changes and reload when detect them.
 * Here is proper place for postprocessing meta languages such as less
 */
gulp.watch(
  `${baseUrl}/src/**/*`
).on(
  'change',
  () => {
    browserSync.reload();
  }
);