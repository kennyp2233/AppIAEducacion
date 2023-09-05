const gulp = require('gulp');
const cachebust = require('gulp-cache-bust'); // Asegúrate de que el módulo correcto esté instalado

// Agrega la tarea Gulp para la actualización de caché
gulp.task('cachebust', () => {
  return gulp.src('./*.html')
    .pipe(cachebust({
      type: 'timestamp'
    }))
    .pipe(gulp.dest('./'));
});