"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var tarai_1 = require("../../src/tarai");
var spin_1 = require("./spin");
var SpinDispatcher = (function (_super) {
    __extends(SpinDispatcher, _super);
    function SpinDispatcher(pipe) {
        _super.call(this, pipe);
        this.onStartSpin = new tarai_1.ActionEvent(this.pipe);
        this.onStopSpin = new tarai_1.ActionEvent(this.pipe);
    }
    SpinDispatcher.prototype.startSpin = function () {
        this.onStartSpin.fire({});
    };
    SpinDispatcher.prototype.stopSpin = function () {
        this.onStopSpin.fire({});
    };
    return SpinDispatcher;
}(tarai_1.Dispatcher));
exports.SpinDispatcher = SpinDispatcher;
var SpinStore = (function (_super) {
    __extends(SpinStore, _super);
    function SpinStore(isSpin) {
        _super.call(this);
        var state = {
            isSpin: isSpin,
        };
        var dispatcher = new SpinDispatcher(this.getStatePipe());
        this.setCondition(state, dispatcher);
        dispatcher.onStartSpin.bind(this, this.onStartSpin);
        dispatcher.onStopSpin.bind(this, this.onStopSpin);
    }
    SpinStore.prototype.toProps = function (state, dispatcher) {
        return {
            isSpin: state.isSpin,
            dispatcher: dispatcher,
        };
    };
    SpinStore.prototype.onStopSpin = function (action, current, update) {
        update({
            isSpin: false,
        });
    };
    SpinStore.prototype.onStartSpin = function (action, current, update) {
        update({
            isSpin: true,
        });
    };
    return SpinStore;
}(tarai_1.Store));
exports.SpinStore = SpinStore;
console.log("start");
tarai_1.bind(document.getElementById("target"), new SpinStore(true), function (next) {
    return React.createElement(spin_1.Spin, next);
});
//# sourceMappingURL=sample.js.map