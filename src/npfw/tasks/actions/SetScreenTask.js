var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Task = require("../../../npfw/tasks/Task")
var SetScreenTask = (function (_super) {
    __extends(SetScreenTask, _super);
    function SetScreenTask(screen, screenId, delay) {
        _super.call(this, screen);
        this.screenId = screenId;
        this.delay = delay;
        this.done = false;
    }
    SetScreenTask.prototype.update = function (delta) {
        this.delay -= delta;
        if(this.delay <= 0) {
            this.game.setScreenEx(this.screenId);
            this.done = true;
        }
    };
    SetScreenTask.prototype.isDone = function () {
        return this.done;
    };
    return SetScreenTask;
})(Task.Task);
exports.SetScreenTask = SetScreenTask;
//@ sourceMappingURL=SetScreenTask.js.map
