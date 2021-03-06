const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
  watch('app/**/*.html', () => gulp.start('app.html'))
  watch('app/**/*.css', () => gulp.start('app.css'))
  watch('app/**/*.js', () => gulp.start('app.js'))
  watch('asset/**/*.*', () => gulp.start('app.asset'))
})

gulp.task('server', ['watch'], () => {
  return gulp.src('public').pipe(webserver({
    livereload: true,
    port: 4001,
    open: true
  }))
})