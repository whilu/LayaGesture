
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GestureViewUI extends View {
		public testImg:Laya.Image;
		public logText:laya.display.Text;
		public DownBtn:Laya.Button;
		public LongClickBtn:Laya.Button;
		public DragBtn:Laya.Button;
		public ScaleBtn:Laya.Button;
		public FlingBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":600,"x":375,"width":310,"var":"testImg","skin":"comp/image.png","pivotY":256.5,"pivotX":155,"height":517}},{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":748,"var":"logText","overflow":"scroll","height":245,"fontSize":30,"color":"#ff0400"}},{"type":"Button","props":{"y":1099,"x":53,"width":96,"var":"DownBtn","skin":"comp/button.png","label":"Down","height":71}},{"type":"Button","props":{"y":1099,"x":184,"width":96,"var":"LongClickBtn","skin":"comp/button.png","label":"LongClick","height":71}},{"type":"Button","props":{"y":1099,"x":315,"width":96,"var":"DragBtn","skin":"comp/button.png","label":"Drag","height":71}},{"type":"Button","props":{"y":1099,"x":449,"width":96,"var":"ScaleBtn","skin":"comp/button.png","label":"Scale","height":71}},{"type":"Button","props":{"y":1099,"x":582,"width":96,"var":"FlingBtn","skin":"comp/button.png","label":"Fling","height":71}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GestureViewUI.uiView);

        }

    }
}
