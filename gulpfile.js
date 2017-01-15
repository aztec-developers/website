"use strict";

var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");
var path = require("path");
var sass = require("gulp-sass");

const APP_DIR = path.resolve(__dirname, "azdev/");
const STATIC_DIR = path.join(APP_DIR,"static/")
const file_match = "**/*.*";
const paths = {
	"static":STATIC_DIR,
	"js":path.join(STATIC_DIR,"js/",file_match),
	"css": path.join(STATIC_DIR, "css/"),
	"images":path.join(STATIC_DIR, "images/"),
	"scss": path.join(APP_DIR, "scss/",file_match),
	"routes": path.join(APP_DIR, "public/",file_match),
	"app": path.join(APP_DIR, "app.js")
}

const net = {
	"hostname": "http://localhost",
	"port": "1337",
	"proxyPort": "1338",
	"browser": "google chrome"
}

/* sass/compass file compilation into one file from nested directories */
gulp.task("styles", function() {
	return gulp.src(paths["scss"])
		.pipe(sass({
		    outputStyle: "compressed",
		    includePaths: ["node_modules/susy/sass","node_modules/normalize-scss/sass"]
		})
		.on("error", sass.logError))
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


gulp.task("default", ["styles","browser-sync"], function() {
	gulp.watch(paths["scss"],["styles"]);
});