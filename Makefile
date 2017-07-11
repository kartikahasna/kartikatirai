.PHONY: build


build:
	yarn run tsc
	yarn run webpack -- ./sample/01_spin/ts/sample.js ./sample/01_spin/dist/index.js
	yarn run webpack -- ./sample/02_sub_store/ts/page.js ./sample/02_sub_store/dist/index.js
	yarn run webpack -- ./sample/03_react_test/ts/index.js ./sample/03_react_test/dist/index.js
