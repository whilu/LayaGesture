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

	export class FlingEventInjector extends EventInjector{

		private _mouseDownX: number;
		private _mouseDownY: number;
		private _mouseDownTimeMills: number;

		/**
		 * Invoke when receive mouse fling event.
		 * @param speedX The speed in x-axis direction.
		 * @param speedY The speed in y-axis direction.
		 * @param mouseDownPoint The point when mouse down.
		 * @param mouseUpPoint The point when mouse up.
		 */
		private invokeMouseFling(speedX: number, speedY: number, mouseDownPoint: Laya.Point, mouseUpPoint: Laya.Point): void{
			this._listener.call(this._caller, speedX, speedY, mouseDownPoint, mouseUpPoint);
		}

		onMouseDown(e: Laya.Event): void{
			this._mouseDownX = Laya.stage.mouseX;
			this._mouseDownY = Laya.stage.mouseY;
			this._mouseDownTimeMills = new Date().getTime();
		}

		onMouseMove(e: Laya.Event): void{}

		onMouseUp(e: Laya.Event): void{
			let deltaTimeMills: number = new Date().getTime() - this._mouseDownTimeMills;
			this.invokeMouseFling((Laya.stage.mouseX - this._mouseDownX) / deltaTimeMills, (Laya.stage.mouseY - this._mouseDownY) / deltaTimeMills, 
				new Laya.Point(this._mouseDownX, this._mouseDownY), new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
		}

		onMouseOut(e: Laya.Event): void{}

		onMouseOver(e: Laya.Event): void{}

		onMouseWheel(e: Laya.Event): void{}

		onRightMouseDown(e: Laya.Event): void{}

		onRightMouseUp(e: Laya.Event): void{}
		
		
	}
}