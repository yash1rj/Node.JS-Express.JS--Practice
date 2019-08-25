var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 9;
    }
    Demo.prototype.check = function () {
        if (this.n == 9) {
            var n = 10;
            console.log(this.n);
        }
    };
    return Demo;
}());
var demoObject = new Demo();
demoObject.check();
