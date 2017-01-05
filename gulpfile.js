"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");
var path = require("path");


const APP_DIR = path.resolve(__dirname,"azdev/");
const paths = {
    "css":path.join(APP_DIR,"css"),
    "scss":path.join(APP_DIR,"scss/**/*.scss"),
    "routes":path.join(APP_DIR,"public/**/*.*"),
    "app":path.join(APP_DIR,"app.js")
}

const net = {
    "hostname":"http://localhost",
    "port":"1337",
    "proxyPort":"1338",
    "browser":"firefox"
}


/* sass file compilation into one file from nested directories */
gulp.task("sass", function() {
	return gulp.src(paths["scss"])
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(paths["css"]));
});

gulp.task("browser-sync", ["nodemon"], function() {
    browserSync.init(null, {
        proxy: net["hostname"] + ":" + net["proxyPort"],
        files: [paths["routes"]],
        browser: net["browser"],
        port: net["port"],
    });
});
gulp.task("nodemon", function (cb) {
    return nodemon({
      script: paths["app"]
    }).once('start', cb);
});


gulp.task("default", ["browser-sync"], function () {});

