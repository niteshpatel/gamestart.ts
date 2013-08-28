import GameEx = module("../GameEx");
import ScreenEx = module("../ScreenEx");

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

    public isDone(): bool {
        return false;
    }
}