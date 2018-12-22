var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GestureViewUI = /** @class */ (function (_super) {
        __extends(GestureViewUI, _super);
        function GestureViewUI() {
            return _super.call(this) || this;
        }
        GestureViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GestureViewUI.uiView);
        };
        GestureViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 600, "x": 375, "width": 310, "var": "testImg", "skin": "comp/image.png", "pivotY": 256.5, "pivotX": 155, "height": 517 } }, { "type": "Text", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 748, "var": "logText", "overflow": "scroll", "height": 245, "fontSize": 30, "color": "#ff0400" } }, { "type": "Button", "props": { "y": 1099, "x": 53, "width": 96, "var": "DownBtn", "skin": "comp/button.png", "label": "Down", "height": 71 } }, { "type": "Button", "props": { "y": 1099, "x": 184, "width": 96, "var": "LongClickBtn", "skin": "comp/button.png", "label": "LongClick", "height": 71 } }, { "type": "Button", "props": { "y": 1099, "x": 315, "width": 96, "var": "DragBtn", "skin": "comp/button.png", "label": "Drag", "height": 71 } }, { "type": "Button", "props": { "y": 1099, "x": 449, "width": 96, "var": "ScaleBtn", "skin": "comp/button.png", "label": "Scale", "height": 71 } }, { "type": "Button", "props": { "y": 1099, "x": 582, "width": 96, "var": "FlingBtn", "skin": "comp/button.png", "label": "Fling", "height": 71 } }] };
        return GestureViewUI;
    }(View));
    ui.GestureViewUI = GestureViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map