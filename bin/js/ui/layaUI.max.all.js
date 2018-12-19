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
            _super.prototype.createChildren.call(this);
            this.createView(ui.GestureViewUI.uiView);
        };
        GestureViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "var": "testImg", "skin": "comp/image.png" } }] };
        return GestureViewUI;
    }(View));
    ui.GestureViewUI = GestureViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map