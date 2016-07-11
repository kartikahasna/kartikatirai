"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Spin = (function (_super) {
    __extends(Spin, _super);
    function Spin(prop) {
        _super.call(this, prop);
    }
    Spin.prototype.render = function () {
        var that = this;
        return (React.createElement("div", null, 
            (function () {
                if (that.props.isSpin) {
                    return (React.createElement("i", {className: "fa fa-refresh fa-spin fa-3x fa-fw"}));
                }
                else {
                    return (React.createElement("i", {className: "fa fa-refresh fa-3x fa-fw"}));
                }
            })(), 
            React.createElement("button", {onClick: function (e) {
                e.preventDefault();
                that.props.dispatcher.stopSpin();
            }}, "Stop"), 
            React.createElement("button", {onClick: function (e) {
                e.preventDefault();
                that.props.dispatcher.startSpin();
            }}, "Start")));
    };
    return Spin;
}(React.Component));
exports.Spin = Spin;
//# sourceMappingURL=spin.js.map