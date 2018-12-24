# LayaGesture

Gesture support for LayaAir engine.

## Screenshots

<img src="/screenshots/LayaGesture_screen_record_1.0.0.gif" alt="LayaGesture_screen_record_1.0.0.gif" title="LayaGesture_screen_record_1.0.0.gif" width="221" height="378.5" />

## Usage

### Step 1

Import library.

### Step 2

#### Register gesture event.

- ```onGestureEvent(sprite: Laya.Sprite, gesture: string, caller: any, listener: (p1?: any, p2?: any, p3?: any, p4?: any) => void)```, see support [Gesture](#gesture):

```typescript
LayaGestureManager.getInstance().onGestureEvent(this.img, Gesture.DOWN, this, this.mouseDown);

// mouse down callback
private mouseDown(x: number, y: number): void{
    // ...
}
```

#### Unregister gesture event for sprite.

- ```offGestureEvent(sprite: Laya.Sprite, gesture: string)```:

```typescript
LayaGestureManager.getInstance().offGestureEvent(this.img, Gesture.DOWN);
```

#### Unregister all gesture event for sprite.

- ```offAllGestureEvent(sprite: Laya.Sprite)```:

```typescript
LayaGestureManager.getInstance().offAllGestureEvent(this.img);
```

## <span id="gesture">Gesture</span>

The support gesture, located in ```co.lujun.laya.gesture```.

|Gesture|value(string)|callback|description
|:---:|:---:|:---:|:---:|
| LONG_CLICK | co.lujun.laya.gesture.Gesture.long_click | ```() => void``` | mouse long click
| DRAG | co.lujun.laya.gesture.Gesture.drag | ```(mouseSpriteX: number, mouseSpriteY: number) => void``` | mouse drag
| SCALE | co.lujun.laya.gesture.Gesture.scale | ```(scaleX: number, scaleY: number, rotation: number) => void``` | touch and scale
| FLING | co.lujun.laya.gesture.Gesture.fling | ```(speedX: number, speedY: number, mouseDownPoint: Laya.Point, mouseUpPoint: Laya.Point) => void``` | mouse fling
| DOWN | co.lujun.laya.gesture.Gesture.down | ```(x: number, y: number) => void``` | mouse down

Enjoy it😄!

## Change logs

### 0.9.0(2018-12-24)

- First release.

## About
If you have any questions, contact me: [lujun.byte#gmail.com](mailto:lujun.byte@gmail.com).

## License

[MIT](LICENSE)
