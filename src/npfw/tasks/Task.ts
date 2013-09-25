import GameEx = require("../GameEx");
import ScreenEx = require("../ScreenEx");

export class Task {

    screen: any;
    game: any;

    constructor(screen: ScreenEx.ScreenEx) {
        this.screen = screen;
        this.game = this.screen.game;
    }

    public handleInput(delta: number): void {
    }

    public update(delta: number): void {
    }

    public getUpdateIndex(): number {
        return 0;
    }

    public paint(delta: number): void {
    }

    public getPaintIndex(): number {
        return 0;
    }

    public isDone(): boolean {
        return false;
    }
}