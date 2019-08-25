var passcode = "secret passcode";
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._productName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var product = new Product();
product.productName = "Fridge";
if (product.productName) {
    console.log(product.productName);
}
