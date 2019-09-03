// declaring a Generic Array named orderDetails
function orderDetails<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// creating a variable to hold a number array
const orderid: Array<number> = [101, 102, 103, 104];

// creating a variable to hold a string array
const ordername: Array<string> = ['footwear', 'dress', 'cds', 'toys'];

// creating a variable to hold result of orderDetails function with a number array as parameter
const idList = orderDetails(orderid);

// line to populate the result of line no 14
console.log(idList);

// creating a variable to hold result of orderDetails function with a string array as parameter
const nameList = orderDetails(ordername);

// line to populate the result of line no 20
console.log(nameList);