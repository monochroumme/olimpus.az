var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass',function(){
  gulp.src('./scss/*.scss')
     .pipe(autoprefixer({
            cascade: false
        }))
    .pipe(sass())
	  .pipe(concat('styles.css'))
 
    .pipe(gulp.dest('./css/'))
});

gulp.task('livereload', function (){
  gulp.src('')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['sass' , 'livereload']);
  gulp.watch('', ['livereload']);
});

// gulp.task('default', ['connect', 'watch', 'sass']);