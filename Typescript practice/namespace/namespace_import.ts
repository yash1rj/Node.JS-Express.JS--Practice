/// <reference path="./namespace_demo.ts" />
import util = Utility.Payment;
let paymentAmount = util.CalculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);
let discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);

// run cmd :
// tsc --outFile Final.js namespace_demo.ts namespace_import.ts