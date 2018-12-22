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
                var FlingEventInjector = /** @class */ (function (_super) {
                    __extends(FlingEventInjector, _super);
                    function FlingEventInjector() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    /**
                     * Invoke when receive mouse fling event.
                     * @param speedX The speed in x-axis direction.
                     * @param speedY The speed in y-axis direction.
                     * @param mouseDownPoint The point when mouse down.
                     * @param mouseUpPoint The point when mouse up.
                     */
                    FlingEventInjector.prototype.invokeMouseFling = function (speedX, speedY, mouseDownPoint, mouseUpPoint) {
                        this._listener.call(this._caller, speedX, speedY, mouseDownPoint, mouseUpPoint);
                    };
                    FlingEventInjector.prototype.onMouseDown = function (e) {
                        this._mouseDownX = Laya.stage.mouseX;
                        this._mouseDownY = Laya.stage.mouseY;
                        this._mouseDownTimeMills = new Date().getTime();
                    };
                    FlingEventInjector.prototype.onMouseMove = function (e) { };
                    FlingEventInjector.prototype.onMouseUp = function (e) {
                        var deltaTimeMills = new Date().getTime() - this._mouseDownTimeMills;
                        this.invokeMouseFling((Laya.stage.mouseX - this._mouseDownX) / deltaTimeMills, (Laya.stage.mouseY - this._mouseDownY) / deltaTimeMills, new Laya.Point(this._mouseDownX, this._mouseDownY), new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
                    };
                    FlingEventInjector.prototype.onMouseOut = function (e) { };
                    FlingEventInjector.prototype.onMouseOver = function (e) { };
                    FlingEventInjector.prototype.onMouseWheel = function (e) { };
                    FlingEventInjector.prototype.onRightMouseDown = function (e) { };
                    FlingEventInjector.prototype.onRightMouseUp = function (e) { };
                    return FlingEventInjector;
                }(gesture.EventInjector));
                gesture.FlingEventInjector = FlingEventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=FlingEventInjector.js.map