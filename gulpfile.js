const {series, parallel, src, dest, watch} = require("gulp");
const sourceMaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const autoPrefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

function styles() {
  return src("src/scss/main.scss")
    .pipe(sourceMaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer('last 2 version', 'safari 5'))
    .pipe(rename('main.min.css'))
    .pipe(cleanCSS())
    .pipe(sourceMaps.write('.'))
    .pipe(dest("dist/css"))    
}

function defaultTasck() {
  series(parallel(styles));
  watch("src/scss/**/*.scss", styles);
}

exports.default = defaultTasck;