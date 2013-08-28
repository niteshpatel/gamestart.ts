import ScreenEx = module("../../../npfw/ScreenEx");
import Task = module("../../../npfw/tasks/Task");
import Graphics = module("../../../nplib/Graphics");
import Input = module("../../../nplib/Input");

export class FadeOutTask extends Task.Task {

    paintIndex: number;
    task: any;
    done: bool;
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

    public isDone(): bool {
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