var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

require('babel-core/register')
var src = 'src/**/*.js';
var tests = 'test/**/*.js';

var lint = function() {
  return gulp.src([src, tests])
             .pipe(plugins.eslint({ configFile: 'config/eslint.json' }))
             .pipe(plugins.eslint.format())
};

gulp.task('test', ['build'], function() {
  return gulp.src(tests, { read: false })
             .pipe(plugins.mocha({report: 'spec' }))
});

gulp.task('test-dev', function() {
  gulp.watch([src, tests], ['test']);
});

gulp.task('lint', function() {
  return lint();
});

gulp.task('lint-with-failure', function() {
  return lint().pipe(plugins.eslint.failOnError());
});

gulp.task('build', [], function() {
  return gulp.src(src)
             .pipe(plugins.babel())
             .pipe(gulp.dest('dist'));
});
