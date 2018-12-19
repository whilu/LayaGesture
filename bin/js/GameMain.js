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