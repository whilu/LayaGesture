/*
 * MIT License
 *
 * Copyright (c) 2018 lujun. https://github.com/whilu
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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
                        _this._mouseDown = false;
                        return _this;
                    }
                    /**
                     * Invoke when receive mouse long click event.
                     */
                    LongClickEventInjector.prototype.invokeMouseLongClick = function () {
                        if (!this._mouseDown || new Date().getTime() - this._lastMouseDownTime < this._longClickDurationTime) {
                            return;
                        }
                        this._mouseDown = false;
                        this._listener.call(this._caller, []);
                    };
                    LongClickEventInjector.prototype.onMouseDown = function (e) {
                        this._mouseDown = true;
                        this._lastMouseDownTime = new Date().getTime();
                        Laya.timer.clear(this, this.invokeMouseLongClick);
                        Laya.timer.loop(100, this, this.invokeMouseLongClick);
                    };
                    LongClickEventInjector.prototype.onMouseMove = function (e) { };
                    LongClickEventInjector.prototype.onMouseUp = function (e) {
                        this._mouseDown = false;
                    };
                    LongClickEventInjector.prototype.onMouseOut = function (e) {
                        this._mouseDown = false;
                    };
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