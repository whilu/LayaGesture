
module co.lujun.laya.gesture{

	export class LayaGestureManager{

		private static sInstance: LayaGestureManager;

		private mEventInjector: {[gesture: string]: Array<EventInjector>};
		private mSpriteCache: {[gesture: string]: Array<Laya.Sprite>};

		constructor(){
			this.mEventInjector = {};
			this.mSpriteCache = {};
		}

		public static getInstance(): LayaGestureManager{
			if(LayaGestureManager.sInstance == null){
				LayaGestureManager.sInstance = new LayaGestureManager();
			}
			return LayaGestureManager.sInstance;
		}

		public onGestureEvent(sprite: Laya.Sprite, gesture: string, caller: any, listener: (p1?: any, p2?: any, p3?: any, p4?: any) => void){
			if(this.mEventInjector[gesture] == undefined || this.mEventInjector[gesture] == null){
				this.mEventInjector[gesture] = [];
			}
			if(this.mSpriteCache[gesture] == undefined || this.mSpriteCache[gesture] == null){
				this.mSpriteCache[gesture] = [];
			}

			let eventInjector: EventInjector;
			switch(gesture){
				case Gesture.LONG_CLICK:
					eventInjector = new LongClickEventInjector(gesture, sprite, caller, listener);
					break;
			}
			if(eventInjector == undefined || eventInjector == null){
				throw "Can not find correct EventInjector!";
			}

			let idx: number = this.mSpriteCache[gesture].indexOf(sprite);
			if(idx > -1){
				this.mEventInjector[gesture][idx] = eventInjector;
				this.mSpriteCache[gesture][idx] = sprite;
			}else{
				this.mEventInjector[gesture].push(eventInjector);
				this.mSpriteCache[gesture].push(sprite);
			}
		}

		public offGestureEvent(sprite: Laya.Sprite, gesture: string){
			let idx: number = this.mSpriteCache[gesture].indexOf(sprite);
			if(idx > -1){
				let eventInjector: EventInjector[] = this.mEventInjector[gesture].splice(idx, 1);
				for(let i = 0; i < eventInjector.length; ++i){
					eventInjector[i].unRegisterEvent();
					eventInjector[i] = null;
				}
				this.mSpriteCache[gesture].splice(idx, 1);
			}
		}
	}
}