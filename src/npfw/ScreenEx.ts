import GameEx = require("GameEx");
import Task = require("tasks/Task");

export class Screen {
}

export class ScreenEx extends Screen {

    game: GameEx.GameEx;
    tasks: any;
    tasksQ: any;
    suspended: boolean;

    constructor(game: GameEx.GameEx) {
        console.log("constructor");
        super();

        this.game = game;
        this.tasks = new Array();
        this.tasksQ = new Array();
        this.suspended = false;
    }

    private updateTasks(delta: number) {
        console.log("updateTasks");
        console.log("updateTasks" + this.tasksQ.length)
        for (var i = 0; i < this.tasks.length; i++) {
            console.log("updateTasks:" + i.toString());
            this.tasks[i].handleInput(delta);
            this.tasks[i].update(delta);
        }
    }

    private paintTasks(delta: number): void {
        console.log("paintTasks");
        console.log("paintTasks" + this.tasksQ.length)
        for (var i = 0; i < this.tasks.length; i++) {
            this.tasks[i].paint(delta);
        }
    }

    private purgeTasks(): void {
        console.log("purgeTasks");
        console.log("purgeTasks" + this.tasksQ.length)
        var filtered = new Array();
        for (var i = 0; i < this.tasks.length; i++) {
            if (!this.tasks[i].isDone()) {
                filtered.push(this.tasks[i]);
            }
        }
        this.tasks = filtered;
    }

    private clearTasks(): void {
        console.log("clearTasks");
        this.tasks = new Array();
    }

    public queueTasks(): void {
        console.log("queueTasks");
        // Add list of queued tasks to tasks for next update
        console.log("queueTasks" + this.tasksQ.length)
        for (var i = 0; i < this.tasksQ.length; i++) {
            console.log("queueTasks:" + i.toString());
            this.tasks.push(this.tasksQ[i]);
        }
        this.tasksQ = new Array();
    }

    public addTask(t: Task.Task): void {
        console.log("addTask");
        this.tasksQ.push(t);
        console.log("addTask" + this.tasksQ.length)
    }

    public render(delta: number): void {
        console.log("render");
        this.updateTasks(delta);
        
        // Frame skip at 20fps
        if (delta > 10)
            return;
        
        this.paintTasks(delta);
        this.purgeTasks();
        this.queueTasks();
    }

    public show(): void {
        console.log("show");
        if (!this.suspended) {
            this.onStart();
        }
        this.onThaw();
        this.suspended = false;
    }

    public hide(): void {
        console.log("hide");
        this.onFreeze();
        if (!this.suspended) {
            this.onStop();
            this.clearTasks();
        }
    }

    public suspend(): void {
        console.log("suspend");
        this.suspended = true;
    }

    public onStart(): void {
        console.log("onStart");
    }

    public onStop(): void {
        console.log("onStop");
    }

    public onFreeze(): void {
        console.log("onFreeze");
    }

    public onThaw(): void {
        console.log("onThaw");
        console.log("onThaw" + this.tasksQ.length)
    }

    public stop(): void {
        console.log("stop");
        this.suspended = false;
        this.onStop();
        this.clearTasks();
    }

    public pause(): void {
        console.log("pause");
    }

    public resume(): void {
        console.log("resume");
    }

    public dispose(): void {
        console.log("dispose");
    }

    public resize(width: number, height: number): void {
        console.log("resize");
    }
}
