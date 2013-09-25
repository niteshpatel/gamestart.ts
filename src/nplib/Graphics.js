define(["require", "exports"], function(require, exports) {
    var Graphics = (function () {
        function Graphics() {
            // Create the canvas
            this.canvas = document.getElementById("main");
            this.canvas.width = 360;
            this.canvas.height = 640;
            this.canvas.style.position = "absolute";
            this.canvas.style.top = 0;
            this.canvas.style.left = 0;
            this.canvasContext = this.canvas.getContext("2d");
        }
        Graphics.prototype.drawImage = function (image, x, y) {
            // Draw image at x, y
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasContext.save();
            this.canvasContext.scale(0.5, 0.5);
            this.canvasContext.drawImage(image, x, y);
            this.canvasContext.restore();
        };

        Graphics.prototype.drawRect = function (x, y, width, height, alpha) {
            // Draw rect at x, y with size width, height, with the given alpha
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasContext.save();
            this.canvasContext.globalAlpha = alpha;
            this.canvasContext.fillStyle = "#000000";
            this.canvasContext.fillRect(x, y, width, height);
            this.canvasContext.restore();
        };

        Graphics.prototype.getWidth = function () {
            return this.canvas.width;
        };

        Graphics.prototype.getHeight = function () {
            return this.canvas.height;
        };
        return Graphics;
    })();
    exports.Graphics = Graphics;
});
//# sourceMappingURL=Graphics.js.map
