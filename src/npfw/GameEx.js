var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Graphics = require("../nplib/Graphics")
var Input = require("../nplib/Input")
var Game = (function () {
    function Game() { }
    Game.prototype.run = function () {
        var self = this;
        var interval = 1000;
        window.setInterval(function () {
            self.screen.render(interval / 1000);
        }, interval);
    };
    Game.prototype.setScreen = function (screen) {
        if(this.screen) {
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
//@ sourceMappingURL=GameEx.js.map
