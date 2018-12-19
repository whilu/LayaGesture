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
            LayaGestureManager.getInstance().onGestureEvent(_this.testImg, Gesture.LONG_CLICK, _this, _this.longClick);
            return _this;
        }
        GestureView.prototype.longClick = function () {
            console.log("long click");
            LayaGestureManager.getInstance().offGestureEvent(this.testImg, Gesture.LONG_CLICK);
        };
        return GestureView;
    }(ui.GestureViewUI));
    view.GestureView = GestureView;
})(view || (view = {}));
//# sourceMappingURL=GestureView.js.map