desc("build ts to js");
task("build", function() {
    jake.exec("tsc");
    jake.exec("browserify sample/ts/sample.js > sample/dist/index.js");
});