require('babel-core/register');

var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();
var webpackConfig = require('./config/webpack.js');

var src = 'src/**/*.js';
var tests = 'test/**/*.js';

gulp.task('test', function() {
  return gulp.src(tests, { read: false })
              .pipe(plugins.mocha({report: 'spec'}))
});

gulp.task('testDev', function() {
  gulp.watch([src, tests], ['test']);
});

gulp.task('lint', function() {
  gulp.src([src, tests])
      .pipe(plugins.eslint({ configFile: 'config/eslint.json' }))
      .pipe(plugins.eslint.format());
});

gulp.task('build', [], function() {
  return gulp.src(src)
             .pipe(plugins.webpack(webpackConfig))
             .pipe(gulp.dest('dist'));
});
