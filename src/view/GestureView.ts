
module view{

	export class GestureView extends ui.GestureViewUI{
		
		constructor(){
			super();
			
			LayaGestureManager.getInstance().onGestureEvent(this.testImg, Gesture.LONG_CLICK, this, this.longClick);
		}

		private longClick(){
			console.log("long click");
			LayaGestureManager.getInstance().offGestureEvent(this.testImg, Gesture.LONG_CLICK);
		}
	}
}