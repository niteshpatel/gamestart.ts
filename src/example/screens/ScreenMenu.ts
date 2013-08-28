import GameEx = module("../../npfw/GameEx");
import ScreenEx = module("../../npfw/ScreenEx");
import Task = module("../../npfw/tasks/Task");

export class ScreenMenu extends ScreenEx.ScreenEx {

    bg: any;
    screensLoaded: bool;
    painted: bool;

    constructor(game: GameEx.GameEx) {
        super(game);
        this.bg = new Image();
        this.bg.src = "example/assets/main_menu.png";
        this.screensLoaded = false;
        this.painted = false;
    }

    public onStart(): void {
        console.log("ScreenMenu.onStart");
        // Main screen task
        this.addTask(new BgTask(this));
    }
}

class BgTask extends Task.Task {

    constructor(screen: ScreenEx.ScreenEx) {
        console.log("ScreenMenu.BgTask.constructor");
        super(screen);
    }

    public paint(delta: number): void {
        console.log("ScreenMenu.BgTask.paint");
        this.game.graphics.drawImage((<ScreenMenu>this.screen).bg, 0, 0);
        (<ScreenMenu>this.screen).painted = true;
    }
}