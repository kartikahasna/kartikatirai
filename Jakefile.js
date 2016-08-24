desc("build ts to js");
task("build", function() {
    jake.exec("tsc");
    jake.exec("browserify sample/01_spin/ts/sample.js > sample/01_spin/dist/index.js");
    jake.exec("browserify sample/02_sub_store/ts/page.js > sample/02_sub_store/dist/index.js");
    jake.exec("browserify sample/03_react_test/ts/index.js > sample/03_react_test/dist/index.js");
});


desc("install tools");
task("install", function() {
    jake.exec("npm install -g browserify");
});


desc("test");
task("test", function() {
    jake.exec("tsc");
    jake.exec("browserify qunit/ts/test.js > qunit/test.js");
});
