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
import svgo from 'gulp-svgo';
import svgstack from 'gulp-svg-sprite';

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
export const copy = () => {
  return gulp.src([
    'source/*.html',
    'source/img/**/*',
    'source/fonts/*',
    'source/root/*',
    'source/js/*.js'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'))
  done();
}

// export const copyHtml = () => {
//   return gulp.src('source/*.html')
//   .pipe(gulp.dest('build'))
// }

export const copyImg = () => {
  return gulp.src('source/img/**/*')
  .pipe(gulp.dest('build/img'))
}

// export const copyFonts = () => {
//   return gulp.src('source/fonts/*')
//   .pipe(gulp.dest('build/fonts'))
// }

// export const copyFavicon = () => {
//   return gulp.src('source/root/*')
//   .pipe(gulp.dest('build/root'))
// }

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
 export const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(terser())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build/js'))
}

// Images
export const images = async () => {
  return gulp.src('build/img/**/*.{jpg,png,webp}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
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
export const svg = () => {
  return gulp.src(['source/img/*.svg', '!source/img/icons/*.svg'])
  .pipe(svgo())
  .pipe(gulp.dest('build/img'))
}

// Sprite
const config = {
  mode: {
      stack: {
          sprite: '../sprite.svg',
          example: false
      }
  }
}

export const sprite = () => {
  return gulp.src('source/img/icons/*.svg')
  .pipe(svgo())
  .pipe(svgstack(config))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'))
}

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
  del,
  copy,
  gulp.parallel(
    styles,
    sprite,
  ),
  server,
  watcher
);

export const build = gulp.series (
  del,
  copy,
  gulp.parallel(
    styles,
    sprite,
    html,
    images
  )
)


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

