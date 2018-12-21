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

module view{

	export class GestureView extends ui.GestureViewUI{
		
		constructor(){
			super();
			
			this.restoreBtn.on(Laya.Event.CLICK, this, this.restore);
			// LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.LONG_CLICK, this, this.longClick);
			// LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DRAG, this, this.mouseDrag);
			// LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DOWN, this, this.mouseDown);
			LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.SCALE, this, this.mouseScale);
		}

		private longClick(): void{
			this.log("mouse long click");
			LayaGestureManager.getInstance().offGestureEvent(this.testImg, Gesture.LONG_CLICK);
		}

		private mouseDrag(mouseSpriteX: number, mouseSpriteY: number): void{
			this.testImg.pos(Laya.stage.mouseX - mouseSpriteX, Laya.stage.mouseY  - mouseSpriteY);
		}

		private mouseDown(x: number, y: number): void{
			this.log("mouse down x = " + x + ", y = " + y);
		}

		private mouseScale(scaleX: number, scaleY: number, rotation: number): void{
			let scale: number = (Math.max(0, this.testImg.scaleX + scaleX) + Math.max(0, this.testImg.scaleY + scaleY)) / 2;
			// this.testImg.pivot()
			this.testImg.scaleX = scale;
			this.testImg.scaleY = scale;
			this.testImg.rotation += rotation;
			this.log("mouse scale scaleX = " + scaleX + ", scaleY = " + scaleX + ", rotation = " + rotation);
		}
		
		private restore(){
			this.testImg.pos(385, 625);
			this.testImg.scale(1, 1);
			this.testImg.rotation = 0;
		}

		private log(msg: string): void{
			this.logText.text = msg;
		}
	}
}