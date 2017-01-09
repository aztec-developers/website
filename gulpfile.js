"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");
var path = require("path");
var browserify = require('gulp-browserify');

const APP_DIR = path.resolve(__dirname, "azdev/");
const file_match = "**/*.*";
const paths = {
	"static":path.join(APP_DIR,"static/"),
	"static":path.join(APP_DIR,"static/js/",file_match),
	"css": path.join(APP_DIR, "static/css/"),
	"scss": path.join(APP_DIR, "scss/",file_match),
	"routes": path.join(APP_DIR, "public/",file_match),
	"app": path.join(APP_DIR, "app.js")
}

const net = {
	"hostname": "http://localhost",
	"port": "1337",
	"proxyPort": "1338",
	"browser": "firefox"
}


/* sass file compilation into one file from nested directories */
gulp.task("sass", function() {
	return gulp.src(paths["scss"])
		.pipe(concat("main.scss"))
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(paths["css"]))
		.pipe(browserSync.stream());
});

gulp.task("browser-sync", ["nodemon"], function() {
	browserSync.init(null, {
		proxy: net["hostname"] + ":" + net["proxyPort"],
		files: [paths["routes"],paths["js"]],
		browser: net["browser"],
		port: net["port"],
		notify:false
	});
});

gulp.task("nodemon", function(cb) {
	return nodemon({
		script: paths["app"]
	}).once("start", cb);
});


gulp.task("default", ["sass","browser-sync"], function() {
	gulp.watch(paths["scss"],["sass"]);
});