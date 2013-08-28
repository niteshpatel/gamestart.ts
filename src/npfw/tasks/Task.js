

var Task = (function () {
    function Task(screen) {
        this.screen = screen;
        this.game = this.screen.game;
    }
    Task.prototype.handleInput = function (delta) {
    };
    Task.prototype.update = function (delta) {
    };
    Task.prototype.getUpdateIndex = function () {
        return 0;
    };
    Task.prototype.paint = function (delta) {
    };
    Task.prototype.getPaintIndex = function () {
        return 0;
    };
    Task.prototype.isDone = function () {
        return false;
    };
    return Task;
})();
exports.Task = Task;
//@ sourceMappingURL=Task.js.map
