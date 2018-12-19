
module co.lujun.laya.gesture{

	export class LongClickEventInjector extends EventInjector{

		private _lastMouseDownTime: number;
		private _longClickDurationTime: number = 1000;

		private invokeMouseLongClick(): void{
			if(new Date().getTime() - this._lastMouseDownTime < this._longClickDurationTime){
				return;
			}
			
			this._listener.call(this._caller, []);
		}

		onMouseDown(e: Event): void{
			this._lastMouseDownTime = new Date().getTime();
		}

		onMouseMove(e: Event): void{}

		onMouseUp(e: Event): void{
			if(this._gesture == Gesture.LONG_CLICK){
				this.invokeMouseLongClick();
			}
		}

		onMouseOut(e: Event): void{}

		onMouseOver(e: Event): void{}

		onMouseWheel(e: Event): void{}

		onRightMouseDown(e: Event): void{}

		onRightMouseUp(e: Event): void{}
	}
}