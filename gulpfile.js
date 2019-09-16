const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass")

function server() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
}

function styles() {
    return gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(srcPatch.styles.dist));
}

gulp.task("styles", () => {
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    //.pipe(px2rem())
    .pipe(gulpif(env === 'prod', autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

gulp.task('default', gulp.series(
    gulp.parallel(server)
));