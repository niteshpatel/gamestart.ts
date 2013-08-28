var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameEx = require("../npfw/GameEx")
var ScreenSplash = require("./screens/ScreenSplash")
var ScreenMenu = require("./screens/ScreenMenu")
var MainStarter = (function (_super) {
    __extends(MainStarter, _super);
    function MainStarter() {
        _super.apply(this, arguments);

    }
    MainStarter.prototype.create = function () {
        this.screens = {
        };
        this.screens[0] = new ScreenSplash.ScreenSplash(this);
        this.setScreenEx(0);
    };
    MainStarter.prototype.createEx = function () {
        this.screens[1] = new ScreenMenu.ScreenMenu(this);
    };
    return MainStarter;
})(GameEx.GameEx);
exports.MainStarter = MainStarter;
var starter = new MainStarter();
starter.create();
starter.run();
//@ sourceMappingURL=MainStarter.js.map
