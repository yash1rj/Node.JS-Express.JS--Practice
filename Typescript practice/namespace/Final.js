var Utility;
(function (Utility) {
    var Payment;
    (function (Payment) {
        function CalculateAmount(price, quantity) {
            return price * quantity;
        }
        Payment.CalculateAmount = CalculateAmount;
    })(Payment = Utility.Payment || (Utility.Payment = {}));
    function MaxDiscountAllowed(noOfProduct) {
        if (noOfProduct > 5) {
            return 40;
        }
        else {
            return 10;
        }
    }
    Utility.MaxDiscountAllowed = MaxDiscountAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
/// <reference path="./namespace_demo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(1255, 6);
console.log("Amount to be paid: " + paymentAmount);
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: " + discount);
// run cmd :
// tsc --outFile Final.js namespace_demo.ts namespace_import.ts
