"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var nodemon = require("gulp-nodemon")

var APP_DIR = "azdev/"
var server = APP_DIR + "app.js"

/* sass file compilation into one file from nested directories */
gulp.task("sass", function() {
	return gulp.src(APP_DIR + "scss/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(APP_DIR + "css"));
});

gulp.task("server", function() {
    nodemon({
        script: APP_DIR + "app.js",
        /* Need to break these up later so we don't compile sass when we update js files. */
        watch: [server,"scss/**/*.scss"],
        tasks: ["sass"],
        ext: "js"
    }).on("restart", function(){
    	console.log("Restarting")
  });
});

gulp.task("default", ["server"]);







