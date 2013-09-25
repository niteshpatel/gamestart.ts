var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    
    

    var Screen = (function () {
        function Screen() {
        }
        return Screen;
    })();
    exports.Screen = Screen;

    var ScreenEx = (function (_super) {
        __extends(ScreenEx, _super);
        function ScreenEx(game) {
            console.log("constructor");
            _super.call(this);

            this.game = game;
            this.tasks = new Array();
            this.tasksQ = new Array();
            this.suspended = false;
        }
        ScreenEx.prototype.updateTasks = function (delta) {
            console.log("updateTasks");
            console.log("updateTasks" + this.tasksQ.length);
            for (var i = 0; i < this.tasks.length; i++) {
                console.log("updateTasks:" + i.toString());
                this.tasks[i].handleInput(delta);
                this.tasks[i].update(delta);
            }
        };

        ScreenEx.prototype.paintTasks = function (delta) {
            console.log("paintTasks");
            console.log("paintTasks" + this.tasksQ.length);
            for (var i = 0; i < this.tasks.length; i++) {
                this.tasks[i].paint(delta);
            }
        };

        ScreenEx.prototype.purgeTasks = function () {
            console.log("purgeTasks");
            console.log("purgeTasks" + this.tasksQ.length);
            var filtered = new Array();
            for (var i = 0; i < this.tasks.length; i++) {
                if (!this.tasks[i].isDone()) {
                    filtered.push(this.tasks[i]);
                }
            }
            this.tasks = filtered;
        };

        ScreenEx.prototype.clearTasks = function () {
            console.log("clearTasks");
            this.tasks = new Array();
        };

        ScreenEx.prototype.queueTasks = function () {
            console.log("queueTasks");

            // Add list of queued tasks to tasks for next update
            console.log("queueTasks" + this.tasksQ.length);
            for (var i = 0; i < this.tasksQ.length; i++) {
                console.log("queueTasks:" + i.toString());
                this.tasks.push(this.tasksQ[i]);
            }
            this.tasksQ = new Array();
        };

        ScreenEx.prototype.addTask = function (t) {
            console.log("addTask");
            this.tasksQ.push(t);
            console.log("addTask" + this.tasksQ.length);
        };

        ScreenEx.prototype.render = function (delta) {
            console.log("render");
            this.updateTasks(delta);

            if (delta > 10)
                return;

            this.paintTasks(delta);
            this.purgeTasks();
            this.queueTasks();
        };

        ScreenEx.prototype.show = function () {
            console.log("show");
            if (!this.suspended) {
                this.onStart();
            }
            this.onThaw();
            this.suspended = false;
        };

        ScreenEx.prototype.hide = function () {
            console.log("hide");
            this.onFreeze();
            if (!this.suspended) {
                this.onStop();
                this.clearTasks();
            }
        };

        ScreenEx.prototype.suspend = function () {
            console.log("suspend");
            this.suspended = true;
        };

        ScreenEx.prototype.onStart = function () {
            console.log("onStart");
        };

        ScreenEx.prototype.onStop = function () {
            console.log("onStop");
        };

        ScreenEx.prototype.onFreeze = function () {
            console.log("onFreeze");
        };

        ScreenEx.prototype.onThaw = function () {
            console.log("onThaw");
            console.log("onThaw" + this.tasksQ.length);
        };

        ScreenEx.prototype.stop = function () {
            console.log("stop");
            this.suspended = false;
            this.onStop();
            this.clearTasks();
        };

        ScreenEx.prototype.pause = function () {
            console.log("pause");
        };

        ScreenEx.prototype.resume = function () {
            console.log("resume");
        };

        ScreenEx.prototype.dispose = function () {
            console.log("dispose");
        };

        ScreenEx.prototype.resize = function (width, height) {
            console.log("resize");
        };
        return ScreenEx;
    })(Screen);
    exports.ScreenEx = ScreenEx;
});
//# sourceMappingURL=ScreenEx.js.map
