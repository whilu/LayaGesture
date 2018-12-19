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