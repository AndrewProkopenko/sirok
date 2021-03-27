
var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок 
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
var order = require("gulp-order"); 


const  babel = require('gulp-babel');
  
gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/assets/scss/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/assets/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
 
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
 
gulp.task('scripts', function() {
    return gulp.src([ 'app/assets/libs/*.js'])// Берем все необходимые библиотеки  
        .pipe(order([ 
            "selectr.min.js",
            "swiper.min.js",  
        ]))
        .pipe(concat('vendor.min.js')) // Собираем их в кучу в новом файле libs.min.js
        // .pipe(babel())
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/assets/js')); // Выгружаем в папку app/js
});
gulp.task('userjs', function() {
    return gulp.src([ 'app/assets/js_src/*.js'])// Берем все необходимые библиотеки  
         
        .pipe(concat('script.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(babel())
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/assets/js')); // Выгружаем в папку app/js
});
 
gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});
 
gulp.task('css-libs', function() {
    return gulp.src('app/assets/css/*.css') // Выбираем файл для минификации
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano()) // Сжимаем
        // .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});
 
gulp.task('clean', async function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

 
gulp.task('img', function() {
    return gulp.src('app/assets/img/**/*') // Берем все изображения из app 
        .pipe(gulp.dest('dist/assets/img')); // Выгружаем на продакшен
});
 
gulp.task('prebuild', async function() {
 
    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/assets/css/style.css',
        'app/assets/css/vendor.css'
        ])
    .pipe(gulp.dest('dist/assets/css'))
  
 
    var buildJs = gulp.src('app/assets/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/assets/js'))
 
    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

    var buildFavicon = gulp.src('app/assets/favicon.ico')
    .pipe(gulp.dest('dist/assets'));

    var buildSprite = gulp.src('app/assets/sprite.svg')
    .pipe(gulp.dest('dist/assets'));
 
});
  
gulp.task('clear', function (callback) {
    return cache.clearAll();
})
 
gulp.task('watch', function() {
    gulp.watch('app/assets/scss/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/assets/js/*.js']); // Наблюдение за главным JS файлом и за библиотеками
});
 

gulp.task('cleanBuild', async function() {
    return del.sync('build/*'); // Удаляем папку dist перед сборкой
});
gulp.task('copyBuild', function() {
    return gulp.src('dist/**/*') // Выбираем файл 
        .pipe(gulp.dest('build')); // Выгружаем в папку  
});

gulp.task('default', gulp.parallel('sass', 'scripts', "userjs", 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass'));
gulp.task('git', gulp.parallel('cleanBuild', 'copyBuild' ));