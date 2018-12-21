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
        GestureViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 682, "x": 348, "width": 500, "var": "testImg", "skin": "comp/image.png", "pivotY": 250, "pivotX": 250, "height": 500 } }, { "type": "Button", "props": { "y": 1218, "x": 235, "width": 291, "var": "restoreBtn", "skin": "comp/button.png", "label": "Restore", "height": 97 } }, { "type": "Text", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 748, "var": "logText", "overflow": "scroll", "height": 543, "fontSize": 30, "color": "#ff0400" } }] };
        return GestureViewUI;
    }(View));
    ui.GestureViewUI = GestureViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map