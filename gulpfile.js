var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


// Sass
gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./static/css'));
});

// Watcher
gulp.task('watch', function() {
  watch('./sass/*.scss', function () {  
    gulp.start('sass'); 
  });
});


gulp.task('default', ['sass']);
gulp.task('start', ['sass', 'watch']);