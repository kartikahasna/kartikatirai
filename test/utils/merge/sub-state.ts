import * as assert from "power-assert";
import { merge } from "../../../src/utils/merge";

import { State, createState, createSubState, createSubSubState } from "./state";


describe("utils/merge sub-state", () => {
    it("state", () => {
        const state = createState();

        const result = merge<State>(state, {
            state1: "change",
            subState: {
                subState1: "subState1",
            },
        });

        assert.ok("change" === result.state1);
        assert.ok("state2" === result.state2);
        assert.ok("subState1" === result.subState.subState1);
        assert.ok(undefined === result.subState.subState2);
    });


    it("sub-state", () => {
        const state = createSubState();

        const result = merge<State>(state, {
            subState: {
                subState1: "change",
            },
        });

        assert.ok("state1" === result.state1);
        assert.ok("state2" === result.state2);
        assert.ok("change" === result.subState.subState1);
        assert.ok("subState2" === result.subState.subState2);
    });


    it("sub-sub-state", () => {
        const state = createSubSubState();

        const result = merge<State>(state, {
            subState: {
                subSubState: {
                    subSubState1: "change",
                },
            },
        });

        assert.ok("state1" === result.state1);
        assert.ok("state2" === result.state2);
        assert.ok("subState1" === result.subState.subState1);
        assert.ok("subState2" === result.subState.subState2);
        assert.ok("change" === result.subState.subSubState.subSubState1);
        assert.ok("subSubState2" === result.subState.subSubState.subSubState2);
    });
});
