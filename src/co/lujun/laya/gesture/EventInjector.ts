
module co.lujun.laya.gesture{

	export abstract class EventInjector{
		
		private _sprite: Laya.Sprite;

		protected _gesture: string;
		protected _caller: any;
		protected _listener: (p1?: any, p2?: any, p3?: any, p4?: any) => void;

		constructor(gesture: string, sprite: Laya.Sprite, caller: any, listener: (p1?: any, p2?: any, p3?: any, p4?: any) => void){
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

		public unRegisterEvent(){
			this._sprite.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
			this._sprite.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
			this._sprite.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
			this._sprite.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
			this._sprite.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
			this._sprite.off(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel);
			this._sprite.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.onRightMouseDown);
			this._sprite.off(Laya.Event.RIGHT_MOUSE_UP, this, this.onRightMouseUp);
		}

		abstract onMouseDown(e: Event): any;

		abstract onMouseMove(e: Event): any;

		abstract onMouseUp(e: Event): any;

		abstract onMouseOut(e: Event): any;

		abstract onMouseOver(e: Event): any;

		abstract onMouseWheel(e: Event): any;

		abstract onRightMouseDown(e: Event): any;

		abstract onRightMouseUp(e: Event): any;
	}
}