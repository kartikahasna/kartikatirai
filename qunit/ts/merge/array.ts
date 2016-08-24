/// <reference path="../../../typings/qunit/qunit.d.ts"/>

import { merge } from "../../../src/tarai";
import { State } from "../../../test/utils/merge/state";

export default () => {
    QUnit.test("utils/merge array primitives", (assert: QUnitAssert) => {
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


    QUnit.test("utils/merge array objects", (assert: QUnitAssert) => {
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
};
