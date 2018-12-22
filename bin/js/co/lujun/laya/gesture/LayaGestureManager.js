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
                var LayaGestureManager = /** @class */ (function () {
                    function LayaGestureManager() {
                        this.mEventInjector = {};
                        this.mSpriteCache = {};
                    }
                    LayaGestureManager.getInstance = function () {
                        if (LayaGestureManager.sInstance == null) {
                            LayaGestureManager.sInstance = new LayaGestureManager();
                        }
                        return LayaGestureManager.sInstance;
                    };
                    LayaGestureManager.prototype.init = function (gesture) {
                        if (this.mEventInjector[gesture] == undefined || this.mEventInjector[gesture] == null) {
                            this.mEventInjector[gesture] = [];
                        }
                        if (this.mSpriteCache[gesture] == undefined || this.mSpriteCache[gesture] == null) {
                            this.mSpriteCache[gesture] = [];
                        }
                    };
                    /**
                     * Register gesture event.
                     * @param sprite The sprite for receive gesture event.
                     * @param gesture Gesture, see co.lujun.laya.gesture.Gesture.
                     * @param caller The caller for the gesture event.
                     * @param listener The callback for the gesture event.
                     */
                    LayaGestureManager.prototype.onGestureEvent = function (sprite, gesture, caller, listener) {
                        this.init(gesture);
                        var eventInjector;
                        switch (gesture) {
                            case gesture_1.Gesture.LONG_CLICK:
                                eventInjector = new gesture_1.LongClickEventInjector(gesture, sprite, caller, listener);
                                break;
                            case gesture_1.Gesture.DRAG:
                                eventInjector = new gesture_1.DragEventInjector(gesture, sprite, caller, listener);
                                break;
                            case gesture_1.Gesture.SCALE:
                                eventInjector = new gesture_1.ScaleEventInjector(gesture, sprite, caller, listener);
                                break;
                            case gesture_1.Gesture.FLING:
                                eventInjector = new gesture_1.FlingEventInjector(gesture, sprite, caller, listener);
                                break;
                            case gesture_1.Gesture.DOWN:
                                eventInjector = new gesture_1.DownEventInjector(gesture, sprite, caller, listener);
                                break;
                        }
                        if (eventInjector == undefined || eventInjector == null) {
                            throw "Can not find correct EventInjector!";
                        }
                        var idx = this.mSpriteCache[gesture].indexOf(sprite);
                        if (idx > -1) {
                            this.mEventInjector[gesture][idx] = eventInjector;
                            this.mSpriteCache[gesture][idx] = sprite;
                        }
                        else {
                            this.mEventInjector[gesture].push(eventInjector);
                            this.mSpriteCache[gesture].push(sprite);
                        }
                    };
                    /**
                     * Unregister the sprite's gesture event.
                     * @param sprite The sprite that need to unregister gesture event.
                     * @param gesture The gesture, see co.lujun.laya.gesture.Gesture.
                     */
                    LayaGestureManager.prototype.offGestureEvent = function (sprite, gesture) {
                        this.init(gesture);
                        var idx = this.mSpriteCache[gesture].indexOf(sprite);
                        if (idx > -1) {
                            var eventInjector = this.mEventInjector[gesture].splice(idx, 1);
                            for (var i = 0; i < eventInjector.length; ++i) {
                                eventInjector[i].unRegisterEvent();
                                eventInjector[i] = null;
                            }
                            this.mSpriteCache[gesture].splice(idx, 1);
                        }
                    };
                    /**
                     * Unregister all the sprite's gesture event.
                     * @param sprite The sprite that need to unregister all gesture event.
                     */
                    LayaGestureManager.prototype.offAllGestureEvent = function (sprite) {
                        this.offGestureEvent(sprite, gesture_1.Gesture.DOWN);
                        this.offGestureEvent(sprite, gesture_1.Gesture.DRAG);
                        this.offGestureEvent(sprite, gesture_1.Gesture.LONG_CLICK);
                        this.offGestureEvent(sprite, gesture_1.Gesture.SCALE);
                        this.offGestureEvent(sprite, gesture_1.Gesture.FLING);
                    };
                    return LayaGestureManager;
                }());
                gesture_1.LayaGestureManager = LayaGestureManager;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=LayaGestureManager.js.map