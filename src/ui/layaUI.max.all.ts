
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GestureViewUI extends View {
		public testImg:Laya.Image;
		public restoreBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":500,"x":310,"var":"testImg","skin":"comp/image.png"}},{"type":"Button","props":{"y":1218,"x":235,"width":291,"var":"restoreBtn","skin":"comp/button.png","label":"Restore","height":97}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GestureViewUI.uiView);

        }

    }
}
