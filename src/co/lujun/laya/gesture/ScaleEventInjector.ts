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

	export class ScaleEventInjector extends EventInjector{

		private _mouseDownPointL: Laya.Point;
		private _mouseDownPointR: Laya.Point;

		private _scaleFactor: number = 0.01;

		/**
		 * Invoke when receive mouse scale event.
		 * @param scaleX The x-axis scale ratio.
		 * @param scaleY The y-axis scale ratio.
		 * @param rotation The rotaion between to touches.
		 */
		private invokeMouseScale(scaleX: number, scaleY: number, rotation: number): void{
			this._listener.call(this._caller, scaleX, scaleY, rotation);
		}

		onMouseDown(e: Laya.Event): void{
			if(e.touches && e.touches.length == 2){
				this._mouseDownPointL = new Laya.Point(e.touches[0].stageX, e.touches[0].stageY)
				this._mouseDownPointR = new Laya.Point(e.touches[1].stageX, e.touches[1].stageY)
			}
		}

		onMouseMove(e: Laya.Event): void{
			if(e.touches && e.touches.length == 2){
				let lastXDistance: number = Math.abs(this._mouseDownPointL.x - this._mouseDownPointR.x);
				let lastYDistance: number = Math.abs(this._mouseDownPointL.y - this._mouseDownPointR.y);
				let curXDistance: number = Math.abs(e.touches[0].stageX - e.touches[1].stageX);
				let curYDistance: number = Math.abs(e.touches[0].stageY - e.touches[1].stageY);

				let tmpDistance1: number = Math.sqrt(Math.pow((this._mouseDownPointL.x - e.touches[0].stageX), 2) 
					+ Math.pow((this._mouseDownPointL.y - e.touches[0].stageY), 2));
				let tmpDistance2: number = Math.sqrt(Math.pow((this._mouseDownPointR.x - e.touches[1].stageX), 2) 
					+ Math.pow((this._mouseDownPointR.y - e.touches[1].stageY), 2));

				let tmpAngel: number, tmpAngel1: number, tmpAngel2: number;
				if(tmpDistance1 > tmpDistance2){
					tmpAngel1 = Math.atan(Math.abs(e.touches[0].stageY - e.touches[1].stageY) / Math.abs(e.touches[0].stageX - e.touches[1].stageX)) * 180 / Math.PI;
					tmpAngel2 = Math.atan(Math.abs(this._mouseDownPointL.y - e.touches[1].stageY) / Math.abs(this._mouseDownPointL.x - e.touches[1].stageX)) * 180 / Math.PI;
					tmpAngel = (e.touches[0].stageX > e.touches[1].stageX && e.touches[0].stageY < e.touches[1].stageY)
						|| (e.touches[0].stageX < e.touches[1].stageX && e.touches[0].stageY > e.touches[1].stageY) 
						? tmpAngel2 - tmpAngel1 : tmpAngel1 - tmpAngel2;
				}else{
					tmpAngel1 = Math.atan(Math.abs(e.touches[1].stageY - e.touches[0].stageY) / Math.abs(e.touches[1].stageX - e.touches[0].stageX)) * 180 / Math.PI;
					tmpAngel2 = Math.atan(Math.abs(this._mouseDownPointR.y - e.touches[0].stageY) / Math.abs(this._mouseDownPointR.x - e.touches[0].stageX)) * 180 / Math.PI;
					tmpAngel = (e.touches[1].stageX > e.touches[0].stageX && e.touches[1].stageY < e.touches[0].stageY)
						|| (e.touches[1].stageX < e.touches[0].stageX && e.touches[1].stageY > e.touches[0].stageY) 
						? tmpAngel2 - tmpAngel1 : tmpAngel1 - tmpAngel2;
				}

				this._mouseDownPointL.x = e.touches[0].stageX;
				this._mouseDownPointL.y = e.touches[0].stageY;
				this._mouseDownPointR.x = e.touches[1].stageX;
				this._mouseDownPointR.y = e.touches[1].stageY;

				this.invokeMouseScale((curXDistance - lastXDistance) * this._scaleFactor, (curYDistance - lastYDistance) * this._scaleFactor, tmpAngel);
			}
		}

		onMouseUp(e: Laya.Event): void{}

		onMouseOut(e: Laya.Event): void{}

		onMouseOver(e: Laya.Event): void{}

		onMouseWheel(e: Laya.Event): void{}

		onRightMouseDown(e: Laya.Event): void{}

		onRightMouseUp(e: Laya.Event): void{}
	}
}