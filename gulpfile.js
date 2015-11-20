var gulp = require('gulp');

var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');

/*
gulp.task('less', function () {
    return gulp.src('*.less')
        .pipe(less({
            paths: [path.join(__dirname)]
        }))
        .pipe(gulp.dest('.'));
});
*/

gulp.task('default', function () {
   return gulp.src('*.less')
       .pipe(watch('*.less'))
       .pipe(less({
           paths: [path.join(__dirname)]
       }))
       .pipe(gulp.dest('.'));
});
