var gulp        = require('gulp');
	  sass        = require('gulp-sass'),
	  browserSynk = require('browser-sync');

	gulp.task('sass', function(){
		return gulp.src('app/sass/**/*.sass')
			.pipe(sass())
			.pipe(gulp.dest('app/css/'))
			.pipe(browserSynk.reload({stream:true}))
	});
	
	gulp.task('browser-sync', function(){
		browserSynk({
			server: {
				baseDir: 'app'
			},
			notify: false
		});
	});	

	gulp.task('watch',['browser-sync','sass'], function() {
		gulp.watch('app/sass/**/*.sass', ['sass']);
		gulp.watch('app/*.html', browserSynk.reload);//по аналогии можно делать со всеми файлами
	});
