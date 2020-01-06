// declaring a Generic Array named orderDetails
function sortData<T>(arg: Array<T>): Array<T> {
    // console.log(arg.length);
    return arg.sort();
}

// creating a variable to hold a number array
const orderid: Array<number> = [105, 102, 106, 104];

// creating a variable to hold a string array
const ordername: Array<string> = ['footwear', 'dress', 'cds', 'toys'];

console.log("Sorted number: "+ sortData(orderid));

console.log("Sorted string: "+ sortData(ordername));