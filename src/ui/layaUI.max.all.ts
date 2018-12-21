
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GestureViewUI extends View {
		public testImg:Laya.Image;
		public restoreBtn:Laya.Button;
		public logText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":682,"x":348,"width":500,"var":"testImg","skin":"comp/image.png","pivotY":250,"pivotX":250,"height":500}},{"type":"Button","props":{"y":1218,"x":235,"width":291,"var":"restoreBtn","skin":"comp/button.png","label":"Restore","height":97}},{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":748,"var":"logText","overflow":"scroll","height":543,"fontSize":30,"color":"#ff0400"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GestureViewUI.uiView);

        }

    }
}
