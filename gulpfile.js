var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');  // Require separate installation

var DO_DECLARATIONS = true;

function doGulp(declaration) {
	var options = {
        declaration: declaration,
        allowJs: true,
        noExternalResolve: true,
    };

    var tsResult = gulp.src('src/**/*.{ts,js}')
        .pipe(ts(options));

    return merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
}

gulp.task('with-declarations', function() {
	return doGulp(true);
});

gulp.task('without-declarations', function() {
	return doGulp(false);
});
