var gulp = require('gulp');
var babel = require('gulp-babel');

//For running Generator Examples
var regenerator = require('gulp-regenerator');

// For Running ES6 Modules
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task("other", function () {
    return gulp.src("scripts/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

// For Running ES6 Modules
gulp.task('babelify', function() {
    browserify({ entries: './scripts/modules/test_module_example_2.js', debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/modules/'));
});

//For running Generator Examples
gulp.task("generator", function () {
    return gulp.src("scripts/iterators_generators/*.js")
        .pipe(regenerator({includeRuntime: true}))
        .pipe(gulp.dest('dist/iterators_generators/'))
});