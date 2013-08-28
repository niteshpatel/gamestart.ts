var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Task = require("../../../npfw/tasks/Task")


var FadeOutTask = (function (_super) {
    __extends(FadeOutTask, _super);
    function FadeOutTask(screen, paintIndex, task) {
        _super.call(this, screen);
        this.paintIndex = paintIndex;
        this.task = task;
        this.done = false;
        this.alpha = 0;
    }
    FadeOutTask.prototype.update = function (delta) {
        if(this.alpha < 1) {
            this.alpha += 0.2;
            this.alpha = Math.min(this.alpha, 1);
        }
        if(this.alpha == 1 && !this.done) {
            this.screen.addTask(this.task);
            this.done = true;
        }
    };
    FadeOutTask.prototype.isDone = function () {
        return this.task.isDone();
    };
    FadeOutTask.prototype.paint = function (delta) {
        this.game.graphics.drawRect(0, 0, this.game.graphics.getWidth(), this.game.graphics.getHeight(), this.alpha);
    };
    FadeOutTask.prototype.getPaintIndex = function () {
        return this.paintIndex;
    };
    return FadeOutTask;
})(Task.Task);
exports.FadeOutTask = FadeOutTask;
//@ sourceMappingURL=FadeOutTask.js.map
