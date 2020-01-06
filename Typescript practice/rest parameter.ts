// declaring a empty string array
const cart: string[] = [];

// arrow function logic to push values into cart array
const pushtoCart = (item: string) => { cart.push(item); };

// logic to add items into cart
function addtoCart(...productName: string[]): string[] {

    for (const item of productName) {
        pushtoCart(item);
    }
    return cart;

}

// to populate value on console
console.log('Cart Items are:' + addtoCart(' Moto G Play, 4th Gen', ' Apple iPhone 5s'));