var path = require("path");

var gulp = require("gulp");
var webpack = require("webpack-stream");

var webpackConfig = require("./webpack.config.js");

var jsSrcGlob = "src/**/*.*(js|jsx)";

gulp.task("js", () => {
    
    return gulp.src(path.resolve(__dirname, "src", "index.js"))
        .pipe(webpack(webpackConfig, require("webpack")))
        .pipe(gulp.dest("build/app"));
});

gulp.task("js-update", [ "js" ], () => {
    
    return gulp.src("build/app/*")
        .pipe(gulp.dest("public/app"));
});

gulp.task("js-dev", [ "js-update" ], () => {
    
    return gulp.watch(jsSrcGlob, { interval: 500 }, [ "js-update" ]);
});