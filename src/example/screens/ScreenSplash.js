var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var ScreenEx = require("../../npfw/ScreenEx")
var Task = require("../../npfw/tasks/Task")
var FadeOutTask = require("../../npfw/tasks/transitions/FadeOutTask")
var SetScreenTask = require("../../npfw/tasks/actions/SetScreenTask")
var ScreenSplash = (function (_super) {
    __extends(ScreenSplash, _super);
    function ScreenSplash(game) {
        _super.call(this, game);
        this.bg = new Image();
        this.bg.src = "example/assets/splash.png";
        this.screensLoaded = false;
        this.painted = false;
    }
    ScreenSplash.prototype.onStart = function () {
        console.log("ScreenSplash.onStart");
        this.addTask(new ShowGameTask(this));
        this.addTask(new BgTask(this));
        this.addTask(new CreateExTask(this));
    };
    return ScreenSplash;
})(ScreenEx.ScreenEx);
exports.ScreenSplash = ScreenSplash;
var ShowGameTask = (function (_super) {
    __extends(ShowGameTask, _super);
    function ShowGameTask(screen) {
        _super.call(this, screen);
        this.timer = 5;
    }
    ShowGameTask.prototype.update = function (delta) {
        console.log("ScreenSplash.ShowGameTask.update");
        this.timer -= delta;
        if(this.timer <= 0 && this.screen.screensLoaded) {
            this.game.setScreenEx(1);
        }
    };
    return ShowGameTask;
})(Task.Task);
var BgTask = (function (_super) {
    __extends(BgTask, _super);
    function BgTask(screen) {
        _super.call(this, screen);
    }
    BgTask.prototype.handleInput = function (delta) {
        if(this.game.input.justTouched()) {
            var posX = this.game.input.getX();
            var posY = this.game.input.getY();
            if(posX >= 15 && posY >= 10 && posX < 170 && posY < 60) {
                this.screen.addTask(new FadeOutTask.FadeOutTask(this.screen, 400, new SetScreenTask.SetScreenTask(this.screen, 0, 0)));
            }
        }
    };
    BgTask.prototype.paint = function (delta) {
        console.log("ScreenSplash.BgTask.paint");
        this.game.graphics.drawImage((this.screen).bg, 0, 0);
        (this.screen).painted = true;
    };
    return BgTask;
})(Task.Task);
var CreateExTask = (function (_super) {
    __extends(CreateExTask, _super);
    function CreateExTask(screen) {
        _super.call(this, screen);
    }
    CreateExTask.prototype.update = function (delta) {
        if((this.screen).painted && !(this.screen).screensLoaded) {
            this.game.createEx();
            (this.screen).screensLoaded = true;
        }
    };
    CreateExTask.prototype.isDone = function () {
        return (this.screen).screensLoaded;
    };
    return CreateExTask;
})(Task.Task);
//@ sourceMappingURL=ScreenSplash.js.map
