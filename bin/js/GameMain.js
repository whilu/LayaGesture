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
var WebGL = Laya.WebGL;
var LayaGestureManager = co.lujun.laya.gesture.LayaGestureManager;
var Gesture = co.lujun.laya.gesture.Gesture;
var GameMain = /** @class */ (function () {
    function GameMain() {
        var w = 750;
        var h = 1334;
        var baseRatio = w / h;
        var realRatio = Laya.Browser.height / Laya.Browser.width;
        if (realRatio >= baseRatio) {
            h = w * realRatio;
        }
        else {
            w = h / realRatio;
        }
        Laya.init(w, h, WebGL);
        Laya.stage.scaleMode = laya.display.Stage.SCALE_FIXED_AUTO;
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, function () {
            Laya.stage.addChild(new view.GestureView());
        }));
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map