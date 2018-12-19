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
                    LayaGestureManager.prototype.onGestureEvent = function (sprite, gesture, caller, listener) {
                        if (this.mEventInjector[gesture] == undefined || this.mEventInjector[gesture] == null) {
                            this.mEventInjector[gesture] = [];
                        }
                        if (this.mSpriteCache[gesture] == undefined || this.mSpriteCache[gesture] == null) {
                            this.mSpriteCache[gesture] = [];
                        }
                        var eventInjector;
                        switch (gesture) {
                            case gesture_1.Gesture.LONG_CLICK:
                                eventInjector = new gesture_1.LongClickEventInjector(gesture, sprite, caller, listener);
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
                    LayaGestureManager.prototype.offGestureEvent = function (sprite, gesture) {
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
                    return LayaGestureManager;
                }());
                gesture_1.LayaGestureManager = LayaGestureManager;
            })(gesture = laya.gesture || (laya.gesture = {}));
        })(laya = lujun.laya || (lujun.laya = {}));
    })(lujun = co.lujun || (co.lujun = {}));
})(co || (co = {}));
//# sourceMappingURL=LayaGestureManager.js.map