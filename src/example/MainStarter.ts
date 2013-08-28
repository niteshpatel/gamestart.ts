import GameEx = module("../npfw/GameEx");
import ScreenSplash = module("screens/ScreenSplash");
import ScreenMenu = module("screens/ScreenMenu");

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
