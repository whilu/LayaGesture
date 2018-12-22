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
			
			this.DownBtn.on(Laya.Event.CLICK, this, function(){
				this.restore();
				LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
				LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DOWN, this, this.mouseDown);
			});
			this.LongClickBtn.on(Laya.Event.CLICK, this, function(){
				this.restore();
				LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
				LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.LONG_CLICK, this, this.longClick);
			});
			this.DragBtn.on(Laya.Event.CLICK, this, function(){
				this.restore();
				LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
				LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.DRAG, this, this.mouseDrag);
			});
			this.ScaleBtn.on(Laya.Event.CLICK, this, function(){
				this.restore();
				LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
				LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.SCALE, this, this.mouseScale);
				Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseScaleUp);
			});
			this.FlingBtn.on(Laya.Event.CLICK, this, function(){
				this.restore();
				LayaGestureManager.getInstance().offAllGestureEvent(this.testImg);
				LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.FLING, this, this.mouseFling);
			});
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
			this.testImg.scaleX = scale;
			this.testImg.scaleY = scale;
			this.testImg.rotation += rotation;
			this.log("mouse scale scaleX = " + this.testImg.scaleX + ", scaleY = " + scaleY + ", rotation = " + rotation);
		}

		private mouseScaleUp(){
			this.log("mouse scale up scaleX = " + this.testImg.scaleX);
			let maxScale: number = 2.3;
			let minScale: number = 0.7;
			if(this.testImg.scaleX > maxScale){
				Laya.Tween.to(this.testImg, {scaleX: maxScale, scaleY: maxScale}, 200);
			}else if(this.testImg.scaleX < minScale){
				Laya.Tween.to(this.testImg, {scaleX: 1, scaleY: 1}, 200);
			}
		}

		private mouseFling(speedX: number, speedY: number, mouseDownPoint: number, mouseUpPoint: number): void{

			this.log("mouse fling speedX = " + speedX + ", speedY = " + speedY + ", mouseDownPoint = " + mouseDownPoint + ", mouseUpPoint = " + mouseUpPoint);
		}
		
		private restore(){
			this.testImg.pos(375, 600);
			this.testImg.scale(1, 1);
			this.testImg.rotation = 0;
			Laya.stage.offAll();
		}

		private log(msg: string): void{
			this.logText.text = msg;
		}
	}
}