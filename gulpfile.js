import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import {deleteAsync} from 'del';

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/css'))
    .pipe(postcss([csso()]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Удаляет build
export const del =() =>
  deleteAsync(['build']);


// Copy
export const copyHtml = () => {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'))
}

export const copyImg = () => {
  return gulp.src('source/img/**/*')
  .pipe(gulp.dest('build/img'))
}

export const copyFonts = () => {
  return gulp.src('source/fonts/*')
  .pipe(gulp.dest('build/fonts'))
}

export const copyFavicon = () => {
  return gulp.src('source/root/*')
  .pipe(gulp.dest('build/root'))
}

export const copyScript = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
}

// HTML minify
 export const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
}

// Scripts
 export const script = () => {
  return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'))
}

// Images
export const images = async () => {
  return gulp.src('source/img/**/*.{jpg,png,webp}')
    .pipe(squoosh())
}

// WebP
export const webp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh({
    webp: {}
  }))
  .pipe(gulp.dest('build/img/'))
}
// SVG


// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/img/**/*'), gulp.series(copyImg);
  gulp.watch('source/js/*.js'), gulp.series(copyScript);
}


export default gulp.series(
 styles, server, watcher
);


// отдельно
// WebP

// to do Общее для build и start
// удалять папку build
// перенести html в build
// запускаю styles
// запускаю js
// переношу картинки
// переношу шрифты
// переношу favicons (именно .ico)
// собрать спрайт(стек)

//команда move перенести в одной команде

// start
// запуск server, watcher

// build весь to do
// минификация html
// оптимизация картинок squoosh

