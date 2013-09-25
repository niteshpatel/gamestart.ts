var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../npfw/tasks/Task"], function(require, exports, __Task__) {
    
    var Task = __Task__;

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
            if (this.delay <= 0) {
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
});
//# sourceMappingURL=SetScreenTask.js.map
