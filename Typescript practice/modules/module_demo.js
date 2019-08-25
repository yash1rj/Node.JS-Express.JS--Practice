"use strict";
exports.__esModule = true;
function MaxDiscountAllowed(noOfProduct) {
    if (noOfProduct > 5) {
        return 30;
    }
    else {
        return 10;
    }
}
exports.MaxDiscountAllowed = MaxDiscountAllowed;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.CalculateAmount = function (price, quantity) {
        return price * quantity;
    };
    return Utility;
}());
exports.Utility = Utility;
exports.productName = 'Mobile';
