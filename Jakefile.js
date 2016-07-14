desc("build ts to js");
task("build", function() {
    jake.exec("tsc");
    jake.exec("browserify sample/01_spin/ts/sample.js > sample/01_spin/dist/index.js");
});
