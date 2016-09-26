/// <reference path="../../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../../typings/mocha/mocha.d.ts" />
import * as assert from "power-assert";
import { merge } from "../../../src/utils/merge";


describe("utils/merge primitives", () => {
    it("null", () => {
        assert.ok(null === merge(null, null));
        assert.ok(null === merge(undefined, null));
        assert.ok(null === merge(null, undefined));
    });


    it("number", () => {
        assert.ok(0 === merge<number>(null, 0));
        assert.ok(0 === merge<number>(undefined, 0));
        assert.ok(0 === merge<number>(1, 0));
        assert.ok(0 === merge<number>(0, 0));
        assert.ok(0 === merge<number>(0, undefined));
        assert.ok(null === merge<number>(0, null));
    });


    it("string", () => {
        assert.ok("a" === merge<string>(null, "a"));
        assert.ok("a" === merge<string>(undefined, "a"));
        assert.ok("" === merge<string>("", ""));
        assert.ok("a" === merge<string>("", "a"));
        assert.ok("a" === merge<string>("b", "a"));
        assert.ok("" === merge<string>("b", ""));
    });


    it("Date", () => {
        const d = new Date(2016, 1, 1, 1, 1, 1);

        assert.ok(d.getTime() === merge<Date>(null, d).getTime());
    });
});
