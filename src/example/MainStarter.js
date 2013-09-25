var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../npfw/GameEx", "screens/ScreenSplash", "screens/ScreenMenu"], function(require, exports, __GameEx__, __ScreenSplash__, __ScreenMenu__) {
    var GameEx = __GameEx__;
    var ScreenSplash = __ScreenSplash__;
    var ScreenMenu = __ScreenMenu__;

    var MainStarter = (function (_super) {
        __extends(MainStarter, _super);
        function MainStarter() {
            _super.apply(this, arguments);
        }
        MainStarter.prototype.create = function () {
            this.screens = {};
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
});
//# sourceMappingURL=MainStarter.js.map
