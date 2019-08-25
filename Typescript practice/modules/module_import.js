"use strict";
exports.__esModule = true;
var module_demo_1 = require("./module_demo");
var util = new module_demo_1.Utility();
var price = util.CalculateAmount(1350, 4);
var discount = module_demo_1.MaxDiscountAllowed(2);
console.log("Maximum discount allowed is: " + discount);
console.log("Amount to be paid: " + price);
console.log("ProductName is: " + module_demo_1.productName);
