/// <reference path="../../../typings/qunit/qunit.d.ts"/>

import { merge } from "../../../src/tarai";
import { State } from "../../../test/utils/merge/state";

export default () => {
    QUnit.test("utils/merge primitives null", (assert: QUnitAssert) => {
        assert.ok(null === merge(null, null));
        assert.ok(null === merge(undefined, null));
        assert.ok(null === merge(null, undefined));
    });


    QUnit.test("utils/merge primitives number", (assert: QUnitAssert) => {
        assert.ok(0 === merge<number>(null, 0));
        assert.ok(0 === merge<number>(undefined, 0));
        assert.ok(0 === merge<number>(1, 0));
        assert.ok(0 === merge<number>(0, 0));
        assert.ok(0 === merge<number>(0, undefined));
        assert.ok(null === merge<number>(0, null));
    });


    QUnit.test("utils/merge primitives string", (assert: QUnitAssert) => {
        assert.ok("a" === merge<string>(null, "a"));
        assert.ok("a" === merge<string>(undefined, "a"));
        assert.ok("" === merge<string>("", ""));
        assert.ok("a" === merge<string>("", "a"));
        assert.ok("a" === merge<string>("b", "a"));
        assert.ok("" === merge<string>("b", ""));
    });
};
