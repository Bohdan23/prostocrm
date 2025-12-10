
'use strict';

process.env.TAILWIND_MODE = 'watch';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const paths = {
    styles: {
        src: [
            'src/styles/*.scss'
        ],
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images/'
    },
    pug: {
        src: 'src/templates/*.pug',
        dest: 'dist/'
    },
    tailwindConfig: 'tailwind.config.js',
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                sassOptions: {
                    silenceDeprecations: ['legacy-js-api'],
                    silent: true,
                },
                api: 'modern-compiler'
            })
            .on('error', sass.logError)
        )
        .pipe(postcss([
            tailwindcss(paths.tailwindConfig),
            require('autoprefixer'),
        ]))
        .pipe(cleanCSS())
        .pipe(concat('index.css'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function pug() {
    return gulp.src(paths.pug.src)
        .pipe(require('gulp-pug')({ pretty: true }))
        .pipe(gulp.dest(paths.pug.dest))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.tailwindConfig, styles);
    gulp.watch(['src/**/*.{pug,html,js,ts}'], styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.pug.src, pug);
    gulp.watch('src/**/*.pug', pug).on('change', browserSync.reload);
}

const build = gulp.series(gulp.parallel(styles, scripts, images, pug));
gulp.task('build', build);
gulp.task('default', gulp.series(build, watch));