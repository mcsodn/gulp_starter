module.exports = function () {
	$.gulp.task('img:dev', function () {
	return $.gulp.src('src/static/img/**/*.{png,jpg,jpeg,gif}')		
        .pipe($.gulp.dest('build/static/img/'));
	});	

	$.gulp.task('img:build', function () {
	return $.gulp.src('src/static/img/**/*.{png,jpg,jpeg,gif}')
		.pipe($.gp.tinypng('v1ehPsZ-RHfMWp-99T2fDqP9gjP-1rNB'))
        .pipe($.gulp.dest('build/static/img/'));
	});	
}