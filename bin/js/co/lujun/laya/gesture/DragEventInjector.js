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
                var DragEventInjector = /** @class */ (function (_super) {
                    __extends(DragEventInjector, _super);
                    function DragEventInjector() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    /**
                     * Invoke when receive mouse drag event.
                     * @param mouseSpriteX The mouse x coordinate in the sprite.
                     * @param mouseSpriteY The mouse y coordinate in the sprite.
                     */
                    DragEventInjector.prototype.invokeMouseDrag = function (mouseSpriteX, mouseSpriteY) {
                        this._listener.call(this._caller, mouseSpriteX, mouseSpriteY);
                    };
                    DragEventInjector.prototype.onMouseDown = function (e) {
                        this._mouseDown = true;
                        this._mouseDownX = this._sprite.mouseX;
                        this._mouseDownY = this._sprite.mouseY;
                    };
                    DragEventInjector.prototype.onMouseMove = function (e) {
                        if (this._mouseDown) {
                            this.invokeMouseDrag(this._mouseDownX - this._sprite.pivotX, this._mouseDownY - this._sprite.pivotY);
                        }
                    };
                    DragEventInjector.prototype.onMouseUp = function (e) {
                        this._mouseDown = false;
                    };
                    DragEventInjector.prototype.onMouseOut = function (e) {
                        this._mouseDown = false;
                    };
                    DragEventInjector.prototype.onMouseOver = function (e) { };
                    DragEventInjector.prototype.onMouseWheel = function (e) { };
                    DragEventInjector.prototype.onRightMouseDown = function (e) { };
                    DragEventInjector.prototype.onRightMouseUp = function (e) { };
                    return DragEventInjector;
                }(gesture.EventInjector));
                gesture.DragEventInjector = DragEventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=DragEventInjector.js.map