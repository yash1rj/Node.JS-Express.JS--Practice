// declaring AddLength interface
interface AddLength {
    length: number;
}

// declaring orderLength method with Generic constraints
function orderLength<T extends AddLength>(arg: T): T {
    const lengthValue = arg.length;
    console.log('Length is ' + lengthValue);
    return arg;
}

// declaring a class Product implementing AddLength interface
class Product implements AddLength {
    length = 10;
}

// variable of Product class
const product: Product = new Product();
const prod2: Array<String> = ["chair", "table", "lamp"];

// creation of variable which holds the return value of orderLength method
const product1 = orderLength(product);
const p2 = orderLength(prod2);

// line to populate the length of Product class on console
console.log('Product Length ' + product1.length);
console.log('Product Length ' + p2.length);