"use strict";

var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");
var path = require("path");
var sass = require("gulp-sass");
var polymerScss = require('gulp-polymer-sass');

/* Base app directory and uncompiled and compiled app direcotries. */
const APP_DIR = path.resolve(__dirname, "app/");
const PATHS = {
	"build":path.join(APP_DIR,"build"),
	"dist":path.join(APP_DIR,"dist")
};


const net = {
	"hostname": "http://localhost",
	"port": "1337",
	"proxyPort": "1338",
	"browser": "google chrome"
}

gulp.task("version-info",function(){
	console.log("Powered by the wisdom of Athena");
	console.log("Athena Version 0.1");
	console.log("Created by Michael Green and Matthew Yamout");
})

gulp.task("browser-sync", ["nodemon"], function() {
	browserSync.init(null, {
		proxy: net["hostname"] + ":" + net["proxyPort"],
		files: [PATHS["build"]],
		browser: net["browser"],
		port: net["port"],
		notify:false
	});
});

gulp.task("nodemon", function(cb) {
	return nodemon({
		script: path.join(PATHS["build"],"app.js")
	}).once("start", cb);
});


// gulp.task("default", ["styles","browser-sync"], function() {
// 	gulp.watch(paths["scss"],["styles"]);
// });

gulp.task("default",["version-info","browser-sync"],function(){
});

