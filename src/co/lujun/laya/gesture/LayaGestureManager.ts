
module co.lujun.laya.gesture{

	export class LayaGestureManager{

		private static sInstance: LayaGestureManager;

		private mEventInjector: {[gesture: string]: Array<EventInjector>}

		constructor(){
			this.mEventInjector = {};
		}

		public static getInstance(): LayaGestureManager{
			if(LayaGestureManager.sInstance == null){
				LayaGestureManager.sInstance = new LayaGestureManager();
			}
			return LayaGestureManager.sInstance;
		}

		public onGestureEvent(gesture: string, sprite: Laya.Sprite, caller: any, listener: (p1?: any, p2?: any, p3?: any, p4?: any) => {}){
			this.mEventInjector[gesture].push(new EventInjector(gesture, sprite, caller, listener));
		}

		public offGestureEvent(gesture: string, sprite: Laya.Sprite){
			// let gestureObj: any = this.mEventInjector[gesture][];
			// let idx: number = this.mEventInjector[gesture].indexOf(sprite);
			// if(idx > -1){
			// 	this.mEventInjector[gesture].splice(idx, 1);
			// }
		}
	}
}