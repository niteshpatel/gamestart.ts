define(["require", "exports"], function(require, exports) {
    var Input = (function () {
        function Input() {
        }
        Input.prototype.justTouched = function () {
            return true;
        };

        Input.prototype.getX = function () {
            return 0;
        };

        Input.prototype.getY = function () {
            return 0;
        };
        return Input;
    })();
    exports.Input = Input;
});
//# sourceMappingURL=Input.js.map
