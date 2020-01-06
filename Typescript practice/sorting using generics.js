// declaring a Generic Array named orderDetails
function sortData(arg) {
    // console.log(arg.length);
    return arg.sort();
}
// creating a variable to hold a number array
var orderid = [105, 102, 106, 104];
// creating a variable to hold a string array
var ordername = ['footwear', 'dress', 'cds', 'toys'];
console.log("Sorted number: " + sortData(orderid));
console.log("Sorted string: " + sortData(ordername));
