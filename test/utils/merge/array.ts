/// <reference path="../../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../../typings/mocha/mocha.d.ts" />
import * as assert from "power-assert";
import { merge } from "../../../src/utils/merge";

import { State, createState } from "./state";



describe("utils/merge array", () => {
    it("primitives", () => {
        assert.ok(null === merge<number[]>([], null));
        assert.ok(0 === merge<number[]>(null, []).length);

        assert.ok(1 === merge<number[]>(null, [0]).length);
        assert.ok(0 === merge<number[]>(null, [0])[0]);

        assert.ok(2 === merge<number[]>(null, [0, 1]).length);
        assert.ok(0 === merge<number[]>(null, [0, 1])[0]);
        assert.ok(1 === merge<number[]>(null, [0, 1])[1]);


        assert.ok(0 === merge<number[]>([], []).length);
        assert.ok(1 === merge<number[]>([], [0]).length);
        assert.ok(0 === merge<number[]>([0], []).length);
    });


    it("objects", () => {
        const source1: State[] = [
            {
                state1: "state1 source1 at 0",
                state2: "state2 source1 at 0"
            }
        ];

        const source2: State[] = [
            {
                state1: "state1 source2 at 0",
                state2: "state2 source2 at 0"
            },
            {
                state1: "state1 source2 at 1",
                state2: "state2 source2 at 1"
            }
        ];

        const result = merge<State[]>(source1, source2);

        assert.ok(2 === result.length);
        assert.ok("state1 source2 at 0" === result[0].state1);
        assert.ok("state2 source2 at 0" === result[0].state2);

        assert.ok("state1 source2 at 1" === result[1].state1);
        assert.ok("state2 source2 at 1" === result[1].state2);
    });
});
