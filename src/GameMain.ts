import WebGL = Laya.WebGL;
import LayaGestureManager = co.lujun.laya.gesture.LayaGestureManager;
import Gesture = co.lujun.laya.gesture.Gesture;

class GameMain{
    constructor()
    {
        let w = 750;
        let h = 1334;
        let baseRatio = w / h;
        let realRatio = Laya.Browser.height / Laya.Browser.width;

        if(realRatio >= baseRatio){
            h = w * realRatio;
        }else{
            w = h / realRatio;
        }
        Laya.init(w, h, WebGL);
        Laya.stage.scaleMode = laya.display.Stage.SCALE_FIXED_AUTO;

        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, function(){
            Laya.stage.addChild(new view.GestureView());
        }));
    }
}
new GameMain();