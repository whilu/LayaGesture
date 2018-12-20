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
var view;
(function (view) {
    var GestureView = /** @class */ (function (_super) {
        __extends(GestureView, _super);
        function GestureView() {
            var _this = _super.call(this) || this;
            _this.restoreBtn.on(Laya.Event.CLICK, _this, _this.restore);
            LayaGestureManager.getInstance().onGestureEvent(_this.testImg, Gesture.LONG_CLICK, _this, _this.longClick);
            LayaGestureManager.getInstance().onGestureEvent(_this.testImg, Gesture.DRAG, _this, _this.mouseDrag);
            LayaGestureManager.getInstance().onGestureEvent(_this.testImg, Gesture.DOWN, _this, _this.mouseDown);
            return _this;
        }
        GestureView.prototype.longClick = function () {
            console.log("mouse long click");
            LayaGestureManager.getInstance().offGestureEvent(this.testImg, Gesture.LONG_CLICK);
        };
        GestureView.prototype.mouseDrag = function (mouseSpriteX, mouseSpriteY) {
            this.testImg.pos(Laya.stage.mouseX - mouseSpriteX, Laya.stage.mouseY - mouseSpriteY);
        };
        GestureView.prototype.mouseDown = function (x, y) {
            console.log("mouse down x = " + x + ", y = " + y);
        };
        GestureView.prototype.restore = function () {
            this.testImg.pos(310, 500);
        };
        return GestureView;
    }(ui.GestureViewUI));
    view.GestureView = GestureView;
})(view || (view = {}));
//# sourceMappingURL=GestureView.js.map