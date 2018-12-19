var co;
(function (co) {
    var lujun;
    (function (lujun) {
        var laya;
        (function (laya) {
            var gesture;
            (function (gesture_1) {
                var Gesture = /** @class */ (function () {
                    function Gesture() {
                    }
                    Gesture.LONG_CLICK = "co.lujun.laya.gesture.Gesture.long_click";
                    return Gesture;
                }());
                gesture_1.Gesture = Gesture;
                var LayaGestureManager = /** @class */ (function () {
                    function LayaGestureManager() {
                        this.mSpriteSubscriber = {};
                        this.registerEvent();
                    }
                    LayaGestureManager.getInstance = function () {
                        if (LayaGestureManager.sInstance == null) {
                            LayaGestureManager.sInstance = new LayaGestureManager();
                        }
                        return LayaGestureManager.sInstance;
                    };
                    LayaGestureManager.prototype.onGestureEvent = function (gesture, sprite) {
                        this.mSpriteSubscriber[gesture].push(sprite);
                    };
                    LayaGestureManager.prototype.offGestureEvent = function (gesture, sprite) {
                        var idx = this.mSpriteSubscriber[gesture].indexOf(sprite);
                        if (idx > -1) {
                            this.mSpriteSubscriber[gesture].splice(idx, 1);
                        }
                    };
                    LayaGestureManager.prototype.registerEvent = function () {
                        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                        Laya.stage.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
                        Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel);
                        Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.onRightMouseDown);
                        Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.onRightMouseUp);
                    };
                    LayaGestureManager.prototype.onMouseDown = function (e) {
                        // Laya.stage.event()
                    };
                    LayaGestureManager.prototype.onMouseMove = function (e) {
                    };
                    LayaGestureManager.prototype.onMouseUp = function (e) {
                    };
                    LayaGestureManager.prototype.onMouseOut = function (e) {
                    };
                    LayaGestureManager.prototype.onMouseOver = function (e) {
                    };
                    LayaGestureManager.prototype.onMouseWheel = function (e) {
                    };
                    LayaGestureManager.prototype.onRightMouseDown = function (e) {
                    };
                    LayaGestureManager.prototype.onRightMouseUp = function (e) {
                    };
                    return LayaGestureManager;
                }());
                gesture_1.LayaGestureManager = LayaGestureManager;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=LayaGestureManager.js.map