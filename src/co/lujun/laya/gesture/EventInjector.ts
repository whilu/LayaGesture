
module co.lujun.laya.gesture{

	export class EventInjector{
		
		private _sprite: Laya.Sprite;
		private _gesture: string;

		private _mouseDown: boolean = false;

		private _lastMouseDownTime: number;
		private _longClickDurationTime: number = 2000;

		private _caller: any;
		private _listener: (p1?: any, p2?: any, p3?: any, p4?: any) => {};

		constructor(gesture: string, sprite: Laya.Sprite, caller: any, listener: (p1?: any, p2?: any, p3?: any, p4?: any) => {}){
			this._gesture = gesture;
			this._sprite = sprite;
			this._caller = caller;
			this._listener = listener;
			this.registerEvent();
		}

		private registerEvent(){
			this._sprite.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
			this._sprite.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
			this._sprite.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
			this._sprite.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
			this._sprite.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
			this._sprite.on(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel);
			this._sprite.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.onRightMouseDown);
			this._sprite.on(Laya.Event.RIGHT_MOUSE_UP, this, this.onRightMouseUp);
		}

		private invokeMouseLongClick(){
			if(new Date().getTime() - this._lastMouseDownTime < this._longClickDurationTime){
				return;
			}
			
			this._listener.call(this._caller, []);
		}

		private onMouseDown(e: Event){
			this._mouseDown = true;
			this._lastMouseDownTime = new Date().getTime();
		}

		private onMouseMove(e: Event){

		}

		private onMouseUp(e: Event){
			this._mouseDown = false;

			this.invokeMouseLongClick();
		}

		private onMouseOut(e: Event){
			this._mouseDown = false;
		}

		private onMouseOver(e: Event){

		}

		private onMouseWheel(e: Event){

		}

		private onRightMouseDown(e: Event){

		}

		private onRightMouseUp(e: Event){

		}
	}
}