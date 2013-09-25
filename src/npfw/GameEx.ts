import ScreenEx = require("ScreenEx");
import Graphics = require("../nplib/Graphics");
import Input = require("../nplib/Input");

export class Game {

    screen:any;

    public run():void {
        var self = this;
        var interval = 1000;
        window.setInterval(function () {
            self.screen.render(interval / 1000);
        }, interval);
    }

    public setScreen(screen:ScreenEx.ScreenEx):void {
        if (this.screen) {
            this.screen.hide();
        }
        this.screen = screen;
        this.screen.show();
    }
}

export class GameEx extends Game {

    screens:any;
    graphics:any;
    input:any;

    constructor() {
        super();
        this.graphics = new Graphics.Graphics();
        this.input = new Input.Input();
    }

    public create():void {
    }

    public createEx():void {
    }

    public getScreenEx(screenId:number):ScreenEx.ScreenEx {
        return this.screens[screenId];
    }

    public setScreenEx(screenId:number):void {
        this.setScreen(this.getScreenEx(screenId));
    }
}