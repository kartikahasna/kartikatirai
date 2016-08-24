/// <reference path="../../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../../typings/mocha/mocha.d.ts" />
import * as assert from "power-assert";
import { merge } from "../../../src/utils/merge";

import { State, createState, createSubState, createSubSubState } from "./state";


interface StatePack {
    states?: State[];
    currentState?: State;
}

describe("utils/merge ref", () => {
    it("state2", () => {
        const state1: State = {
            state1: "state1-1",
            state2: "state1-2",
        };

        const state2: State = {
            state1: "state2-1",
            state2: "state2-2",
        };

        const state3: State = {
            state1: "state3-1",
            state2: "state3-2",
        };

        const state: StatePack = {
            states: [state1, state2],
            currentState: state1,
        };

        const result = merge<StatePack>(state, {
            currentState: state3,
        });

        assert.equal(result.currentState.state1, "state3-1");
        assert.equal(result.currentState.state2, "state3-2");

        assert.equal(result.states[0].state1, "state1-1");
        assert.equal(result.states[0].state2, "state1-2");

        assert.equal(result.states[1].state1, "state2-1");
        assert.equal(result.states[1].state2, "state2-2");
    });


    it("state3", () => {
        const state1: State = {
            state1: "state1-1",
            state2: "state1-2",
        };

        const state2: State = {
            state1: "state2-1",
            state2: "state2-2",
        };

        const state3: State = {
            state1: "state3-1",
            state2: "state3-2",
        };

        const state: StatePack = {
            states: [state1, state2],
            currentState: state1,
        };

        const result = merge<StatePack>(state, {
            currentState: state2,
        });

        assert.equal(result.currentState.state1, "state2-1");
        assert.equal(result.currentState.state2, "state2-2");

        assert.equal(result.states[0].state1, "state1-1");
        assert.equal(result.states[0].state2, "state1-2");

        assert.equal(result.states[1].state1, "state2-1");
        assert.equal(result.states[1].state2, "state2-2");

    });
});
