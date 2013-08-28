export class Graphics {

    canvas: any;
    canvasContext: any;

    constructor() {
        // Create the canvas
        this.canvas = document.getElementById("main");
        this.canvas.width = 360;
        this.canvas.height = 640;
        this.canvas.style.position = "absolute";
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvasContext = this.canvas.getContext("2d");
    }

    public drawImage(image: any, x: number, y: number) {
        // Draw image at x, y
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.save();
        this.canvasContext.scale(0.5, 0.5);
        this.canvasContext.drawImage(image, x, y);
        this.canvasContext.restore();
    }

    public drawRect(x: number, y: number, width: number, height: number, alpha: number) {
        // Draw rect at x, y with size width, height, with the given alpha
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.save();
        this.canvasContext.globalAlpha = alpha;
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.fillRect(x, y, width, height);
        this.canvasContext.restore();
    }

    public getWidth(): number {
        return this.canvas.width;
    }

    public getHeight(): number {
        return this.canvas.height;
    }
}
