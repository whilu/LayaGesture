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
                var ScaleEventInjector = /** @class */ (function (_super) {
                    __extends(ScaleEventInjector, _super);
                    function ScaleEventInjector() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this._scaleFactor = 0.01;
                        return _this;
                    }
                    ScaleEventInjector.prototype.invokeMouseScale = function (scaleX, scaleY, rotation) {
                        this._listener.call(this._caller, scaleX, scaleY, rotation);
                    };
                    ScaleEventInjector.prototype.onMouseDown = function (e) {
                        if (e.touches && e.touches.length == 2) {
                            this._mouseDownPointL = new Laya.Point(e.touches[0].stageX, e.touches[0].stageY);
                            this._mouseDownPointR = new Laya.Point(e.touches[1].stageX, e.touches[1].stageY);
                        }
                    };
                    ScaleEventInjector.prototype.onMouseMove = function (e) {
                        if (e.touches && e.touches.length == 2) {
                            var lastXDistance = Math.abs(this._mouseDownPointL.x - this._mouseDownPointR.x);
                            var lastYDistance = Math.abs(this._mouseDownPointL.y - this._mouseDownPointR.y);
                            var curXDistance = Math.abs(e.touches[0].stageX - e.touches[1].stageX);
                            var curYDistance = Math.abs(e.touches[0].stageY - e.touches[1].stageY);
                            var rotateCenterX = e.touches[0].stageX;
                            var rotateCenterY = e.touches[0].stageY;
                            var tmpAngel1 = void 0, tmpAngel2 = void 0;
                            tmpAngel1 = Math.atan((e.touches[1].stageY - rotateCenterY) / (e.touches[1].stageX - rotateCenterX)) * 180 / Math.PI
                                - Math.atan((this._mouseDownPointR.y - rotateCenterY) / (this._mouseDownPointR.x - rotateCenterX)) * 180 / Math.PI;
                            this._mouseDownPointL.x = e.touches[0].stageX;
                            this._mouseDownPointL.y = e.touches[0].stageY;
                            this._mouseDownPointR.x = e.touches[1].stageX;
                            this._mouseDownPointR.y = e.touches[1].stageY;
                            this.invokeMouseScale((curXDistance - lastXDistance) * this._scaleFactor, (curYDistance - lastYDistance) * this._scaleFactor, tmpAngel1);
                        }
                    };
                    ScaleEventInjector.prototype.onMouseUp = function (e) { };
                    ScaleEventInjector.prototype.onMouseOut = function (e) { };
                    ScaleEventInjector.prototype.onMouseOver = function (e) { };
                    ScaleEventInjector.prototype.onMouseWheel = function (e) { };
                    ScaleEventInjector.prototype.onRightMouseDown = function (e) { };
                    ScaleEventInjector.prototype.onRightMouseUp = function (e) { };
                    return ScaleEventInjector;
                }(gesture.EventInjector));
                gesture.ScaleEventInjector = ScaleEventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=ScaleEventInjector.js.map