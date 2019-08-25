"use strict";
exports.__esModule = true;
var default_exports_1 = require("./default exports");
var product = new default_exports_1["default"]();
var details = product.getProductDetails(1001);
console.log(details);
var util = new default_exports_1.Utility();
var price = util.CalculateAmount(1300, 4);
console.log("The price is " + price);
