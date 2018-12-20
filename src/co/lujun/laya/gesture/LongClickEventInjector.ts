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
			this.invokeMouseLongClick();
		}

		onMouseOut(e: Event): void{}

		onMouseOver(e: Event): void{}

		onMouseWheel(e: Event): void{}

		onRightMouseDown(e: Event): void{}

		onRightMouseUp(e: Event): void{}
	}
}