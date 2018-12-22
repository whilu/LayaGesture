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
            _this.DownBtn.on(Laya.Event.CLICK, _this, function () {
                this.restore();
                LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
                LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DOWN, this, this.mouseDown);
            });
            _this.LongClickBtn.on(Laya.Event.CLICK, _this, function () {
                this.restore();
                LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
                LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.LONG_CLICK, this, this.longClick);
            });
            _this.DragBtn.on(Laya.Event.CLICK, _this, function () {
                this.restore();
                LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
                LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DRAG, this, this.mouseDrag);
            });
            _this.ScaleBtn.on(Laya.Event.CLICK, _this, function () {
                this.restore();
                LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
                LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.SCALE, this, this.mouseScale);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseScaleUp);
            });
            _this.FlingBtn.on(Laya.Event.CLICK, _this, function () {
                this.restore();
                LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
                LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.FLING, this, this.mouseFling);
            });
            return _this;
        }
        GestureView.prototype.longClick = function () {
            this.log("mouse long click");
            LayaGestureManager.getInstance().offGestureEvent(this.testImg, Gesture.LONG_CLICK);
        };
        GestureView.prototype.mouseDrag = function (mouseSpriteX, mouseSpriteY) {
            this.testImg.pos(Laya.stage.mouseX - mouseSpriteX, Laya.stage.mouseY - mouseSpriteY);
        };
        GestureView.prototype.mouseDown = function (x, y) {
            this.log("mouse down x = " + x + ", y = " + y);
        };
        GestureView.prototype.mouseScale = function (scaleX, scaleY, rotation) {
            var scale = (Math.max(0, this.testImg.scaleX + scaleX) + Math.max(0, this.testImg.scaleY + scaleY)) / 2;
            this.testImg.scaleX = scale;
            this.testImg.scaleY = scale;
            this.testImg.rotation += rotation;
            this.log("mouse scale scaleX = " + this.testImg.scaleX + ", scaleY = " + scaleY + ", rotation = " + rotation);
        };
        GestureView.prototype.mouseScaleUp = function () {
            this.log("mouse scale up scaleX = " + this.testImg.scaleX);
            var maxScale = 2.3;
            var minScale = 0.7;
            if (this.testImg.scaleX > maxScale) {
                Laya.Tween.to(this.testImg, { scaleX: maxScale, scaleY: maxScale }, 200);
            }
            else if (this.testImg.scaleX < minScale) {
                Laya.Tween.to(this.testImg, { scaleX: 1, scaleY: 1 }, 200);
            }
        };
        GestureView.prototype.mouseFling = function (speedX, speedY, mouseDownPoint, mouseUpPoint) {
            this.log("mouse fling speedX = " + speedX + ", speedY = " + speedY + ", mouseDownPoint = " + mouseDownPoint + ", mouseUpPoint = " + mouseUpPoint);
        };
        GestureView.prototype.restore = function () {
            this.testImg.pos(375, 600);
            this.testImg.scale(1, 1);
            this.testImg.rotation = 0;
            Laya.stage.offAll();
        };
        GestureView.prototype.log = function (msg) {
            this.logText.text = msg;
        };
        return GestureView;
    }(ui.GestureViewUI));
    view.GestureView = GestureView;
})(view || (view = {}));
//# sourceMappingURL=GestureView.js.map