/*
 * MIT License
 * 
 * Copyright (c) 2018 lujun. https://github.com/whilu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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

				case Gesture.DRAG:
					eventInjector = new DragEventInjector(gesture, sprite, caller, listener);
					break;
					
				case Gesture.SCALE:
					eventInjector = new ScaleEventInjector(gesture, sprite, caller, listener);
					break;
					
				case Gesture.FLING:
					eventInjector = new FlingEventInjector(gesture, sprite, caller, listener);
					break;
					
				case Gesture.DOWN:
					eventInjector = new DownEventInjector(gesture, sprite, caller, listener);
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