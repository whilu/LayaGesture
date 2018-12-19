var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var co;
(function (co) {
    var lujun;
    (function (lujun) {
        var laya;
        (function (laya) {
            var gesture;
            (function (gesture) {
                var LongClickEventInjector = /** @class */ (function (_super) {
                    __extends(LongClickEventInjector, _super);
                    function LongClickEventInjector() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this._longClickDurationTime = 1000;
                        return _this;
                    }
                    LongClickEventInjector.prototype.invokeMouseLongClick = function () {
                        if (new Date().getTime() - this._lastMouseDownTime < this._longClickDurationTime) {
                            return;
                        }
                        this._listener.call(this._caller, []);
                    };
                    LongClickEventInjector.prototype.onMouseDown = function (e) {
                        this._lastMouseDownTime = new Date().getTime();
                    };
                    LongClickEventInjector.prototype.onMouseMove = function (e) { };
                    LongClickEventInjector.prototype.onMouseUp = function (e) {
                        if (this._gesture == gesture.Gesture.LONG_CLICK) {
                            this.invokeMouseLongClick();
                        }
                    };
                    LongClickEventInjector.prototype.onMouseOut = function (e) { };
                    LongClickEventInjector.prototype.onMouseOver = function (e) { };
                    LongClickEventInjector.prototype.onMouseWheel = function (e) { };
                    LongClickEventInjector.prototype.onRightMouseDown = function (e) { };
                    LongClickEventInjector.prototype.onRightMouseUp = function (e) { };
                    return LongClickEventInjector;
                }(gesture.EventInjector));
                gesture.LongClickEventInjector = LongClickEventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=LongClickEventInjector.js.map