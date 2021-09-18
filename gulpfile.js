const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

gulp.task("imagemin", function () {
  return gulp
    .src('./imgs/src/**')
    .pipe(changed('./images/dist'))
    .pipe(
      imagemin([
        pngquant({                // png
          quality: [.60, .70],
          speed: 1
        }),
        mozjpeg({ quality: 65 }), // jpg
        imagemin.svgo(),          // svg
        imagemin.optipng(),
        imagemin.gifsicle({ optimizationLevel: 3 }) // gif 
      ])
    )
    .pipe(gulp.dest('./images/dist'));
});

// watch
gulp.task('default', function() {
  gulp.watch('./imgs/src/**', gulp.task('imagemin'));
});