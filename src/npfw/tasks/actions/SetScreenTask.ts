import ScreenEx = require("../../../npfw/ScreenEx");
import Task = require("../../../npfw/tasks/Task");

export class SetScreenTask extends Task.Task {

    screenId: number;
    delay: number;
    done: boolean;

    constructor(screen: ScreenEx.ScreenEx, screenId: number, delay: number) {
        super(screen);
        this.screenId = screenId;
        this.delay = delay;
        this.done = false;
    }

    public update(delta: number): void {
        this.delay -= delta;
        if (this.delay <= 0) {
            this.game.setScreenEx(this.screenId);
            this.done = true;
        }
    }

    public isDone(): boolean {
        return this.done;
    }
}
