var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var ScreenEx = require("../../npfw/ScreenEx")
var Task = require("../../npfw/tasks/Task")
var ScreenMenu = (function (_super) {
    __extends(ScreenMenu, _super);
    function ScreenMenu(game) {
        _super.call(this, game);
        this.bg = new Image();
        this.bg.src = "example/assets/main_menu.png";
        this.screensLoaded = false;
        this.painted = false;
    }
    ScreenMenu.prototype.onStart = function () {
        console.log("ScreenMenu.onStart");
        this.addTask(new BgTask(this));
    };
    return ScreenMenu;
})(ScreenEx.ScreenEx);
exports.ScreenMenu = ScreenMenu;
var BgTask = (function (_super) {
    __extends(BgTask, _super);
    function BgTask(screen) {
        console.log("ScreenMenu.BgTask.constructor");
        _super.call(this, screen);
    }
    BgTask.prototype.paint = function (delta) {
        console.log("ScreenMenu.BgTask.paint");
        this.game.graphics.drawImage((this.screen).bg, 0, 0);
        (this.screen).painted = true;
    };
    return BgTask;
})(Task.Task);
//@ sourceMappingURL=ScreenMenu.js.map
