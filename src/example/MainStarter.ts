import GameEx = require("../npfw/GameEx");
import ScreenSplash = require("screens/ScreenSplash");
import ScreenMenu = require("screens/ScreenMenu");

export class MainStarter extends GameEx.GameEx {

    public create(): void {
        this.screens = {};
        this.screens[0] = new ScreenSplash.ScreenSplash(this);
        this.setScreenEx(0);
    }

    public createEx(): void {
        this.screens[1] = new ScreenMenu.ScreenMenu(this);
    }
}

var starter = new MainStarter();
starter.create();
starter.run();
