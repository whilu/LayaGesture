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
                var DownEventInjector = /** @class */ (function (_super) {
                    __extends(DownEventInjector, _super);
                    function DownEventInjector() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    /**
                     * Invoke when receive mouse down event.
                     * @param x Mouse down x coordinate.
                     * @param y Mouse down y coordinate.
                     */
                    DownEventInjector.prototype.invokeMouseDown = function (x, y) {
                        this._listener.call(this._caller, x, y);
                    };
                    DownEventInjector.prototype.onMouseDown = function (e) {
                        this.invokeMouseDown(this._sprite.mouseX, this._sprite.mouseY);
                    };
                    DownEventInjector.prototype.onMouseMove = function (e) { };
                    DownEventInjector.prototype.onMouseUp = function (e) { };
                    DownEventInjector.prototype.onMouseOut = function (e) { };
                    DownEventInjector.prototype.onMouseOver = function (e) { };
                    DownEventInjector.prototype.onMouseWheel = function (e) { };
                    DownEventInjector.prototype.onRightMouseDown = function (e) { };
                    DownEventInjector.prototype.onRightMouseUp = function (e) { };
                    return DownEventInjector;
                }(gesture.EventInjector));
                gesture.DownEventInjector = DownEventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=DownEventInjector.js.map