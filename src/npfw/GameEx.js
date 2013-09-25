var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../nplib/Graphics", "../nplib/Input"], function(require, exports, __Graphics__, __Input__) {
    
    var Graphics = __Graphics__;
    var Input = __Input__;

    var Game = (function () {
        function Game() {
        }
        Game.prototype.run = function () {
            var self = this;
            var interval = 1000;
            window.setInterval(function () {
                self.screen.render(interval / 1000);
            }, interval);
        };

        Game.prototype.setScreen = function (screen) {
            if (this.screen) {
                this.screen.hide();
            }
            this.screen = screen;
            this.screen.show();
        };
        return Game;
    })();
    exports.Game = Game;

    var GameEx = (function (_super) {
        __extends(GameEx, _super);
        function GameEx() {
            _super.call(this);
            this.graphics = new Graphics.Graphics();
            this.input = new Input.Input();
        }
        GameEx.prototype.create = function () {
        };

        GameEx.prototype.createEx = function () {
        };

        GameEx.prototype.getScreenEx = function (screenId) {
            return this.screens[screenId];
        };

        GameEx.prototype.setScreenEx = function (screenId) {
            this.setScreen(this.getScreenEx(screenId));
        };
        return GameEx;
    })(Game);
    exports.GameEx = GameEx;
});
//# sourceMappingURL=GameEx.js.map
