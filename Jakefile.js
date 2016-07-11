desc("build ts to js");
task("build", function() {
    jake.exec("tsc");
    jake.exec("browserify test/next2/sample.js > sample/dist/index.js");
});
