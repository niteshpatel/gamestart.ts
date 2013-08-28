import GameEx = module("../../npfw/GameEx");
import ScreenEx = module("../../npfw/ScreenEx");
import Task = module("../../npfw/tasks/Task");
import FadeOutTask = module("../../npfw/tasks/transitions/FadeOutTask");
import SetScreenTask = module("../../npfw/tasks/actions/SetScreenTask");

export class ScreenSplash extends ScreenEx.ScreenEx {

    bg: any;
    screensLoaded: bool;
    painted: bool;

    constructor(game: GameEx.GameEx) {
        super(game);

        this.bg = new Image();
        this.bg.src = "example/assets/splash.png";
        this.screensLoaded = false;
        this.painted = false;
    }

    public onStart(): void {
        console.log("ScreenSplash.onStart");
        // Start timer
        this.addTask(new ShowGameTask(this));

        // Main screen task
        this.addTask(new BgTask(this));

        // Load remaining screens
        this.addTask(new CreateExTask(this));
    }
}

class ShowGameTask extends Task.Task {

    timer: number;

    constructor(screen: any) {
        super(screen);
        this.timer = 5;
    }

    public update(delta: number): void {
        console.log("ScreenSplash.ShowGameTask.update");
        this.timer -= delta;
        if (this.timer <= 0 && this.screen.screensLoaded) {
            this.game.setScreenEx(1);
        }
    }
}

class BgTask extends Task.Task {

    constructor(screen: ScreenEx.ScreenEx) {
        super(screen);
    }

    public handleInput(delta: number): void {
        if (this.game.input.justTouched()) {
            var posX = this.game.input.getX();
            var posY = this.game.input.getY();

            // Check for settings button
            if (posX >= 15 && posY >= 10 && posX < 170 && posY < 60) {
                this.screen.addTask(new FadeOutTask.FadeOutTask(this.screen, 400, new SetScreenTask.SetScreenTask(this.screen, 0, 0)));
            }
        }
    }

    public paint(delta: number): void {
        console.log("ScreenSplash.BgTask.paint");
        this.game.graphics.drawImage((<ScreenSplash>this.screen).bg, 0, 0);
        (<ScreenSplash>this.screen).painted = true;
    }
}

class CreateExTask extends Task.Task {

    constructor(screen: any) {
        super(screen);
    }

    public update(delta: number): void {
        // Only start this once the screen has been painted once
        if ((<ScreenSplash>this.screen).painted && !(<ScreenSplash>this.screen).screensLoaded) {
            this.game.createEx();
            (<ScreenSplash>this.screen).screensLoaded = true;
        }
    }

    public isDone(): bool {
        return (<ScreenSplash>this.screen).screensLoaded;
    }
}
