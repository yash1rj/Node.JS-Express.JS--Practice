"use strict";
exports.__esModule = true;
var default_1 = /** @class */ (function () {
    function default_1() {
        this.productName = 'Tablet';
    }
    default_1.prototype.getProductDetails = function (productId) {
        return 'ProductId is ' + productId + 'ProductName is ' + this.productName;
    };
    return default_1;
}());
exports["default"] = default_1;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.CalculateAmount = function (price, quantity) {
        return price * quantity;
    };
    return Utility;
}());
exports.Utility = Utility;
