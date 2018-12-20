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
var co;
(function (co) {
    var lujun;
    (function (lujun) {
        var laya;
        (function (laya) {
            var gesture;
            (function (gesture_1) {
                var EventInjector = /** @class */ (function () {
                    function EventInjector(gesture, sprite, caller, listener) {
                        this._gesture = gesture;
                        this._sprite = sprite;
                        this._caller = caller;
                        this._listener = listener;
                        this.registerEvent();
                    }
                    EventInjector.prototype.registerEvent = function () {
                        this._sprite.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                        this._sprite.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                        this._sprite.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                        this._sprite.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                        this._sprite.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
                        this._sprite.on(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel);
                        this._sprite.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.onRightMouseDown);
                        this._sprite.on(Laya.Event.RIGHT_MOUSE_UP, this, this.onRightMouseUp);
                    };
                    EventInjector.prototype.unRegisterEvent = function () {
                        this._sprite.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                        this._sprite.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                        this._sprite.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                        this._sprite.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                        this._sprite.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
                        this._sprite.off(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel);
                        this._sprite.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.onRightMouseDown);
                        this._sprite.off(Laya.Event.RIGHT_MOUSE_UP, this, this.onRightMouseUp);
                    };
                    return EventInjector;
                }());
                gesture_1.EventInjector = EventInjector;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=EventInjector.js.map