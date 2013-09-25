import ScreenEx = require("../../../npfw/ScreenEx");
import Task = require("../../../npfw/tasks/Task");
import Graphics = require("../../../nplib/Graphics");
import Input = require("../../../nplib/Input");

export class FadeOutTask extends Task.Task {

    paintIndex: number;
    task: any;
    done: boolean;
    alpha: number;

    constructor(screen: ScreenEx.ScreenEx, paintIndex: number, task: Task.Task) {
        super(screen);
        this.paintIndex = paintIndex;
        this.task = task;
        this.done = false;
        this.alpha = 0;
    }

    public update(delta: number): void {
        if (this.alpha < 1) {
            this.alpha += 0.2;
            this.alpha = Math.min(this.alpha, 1);
        }
        if (this.alpha == 1 && !this.done) {
            this.screen.addTask(this.task);
            this.done = true;
        }
    }

    public isDone(): boolean {
        return this.task.isDone();
    }

    public paint(delta: number): void {
        // Colour screen
        this.game.graphics.drawRect(0, 0, this.game.graphics.getWidth(), this.game.graphics.getHeight(), this.alpha);
    }

    public getPaintIndex(): number {
        return this.paintIndex;
    }
}