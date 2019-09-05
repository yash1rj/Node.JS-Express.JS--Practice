// declaring Generic interface named Inventory
interface Inventory<T> {
    addItem: (newItem: T) => void;
    getProductList: () => Array<T>;
    }

// declaring Gadget class implementing Generic interface Inventory of string type
class Gadget implements Inventory<string> {

    // assigning string array value to variable
    productList: Array<string> = ['Mobile', 'Tablet', 'Ipod'];

    addItem(newItem: string): void {
        console.log('Item added');
    }

    // method to populate the product list
    getProductList(): Array<string> {
    return this.productList;
    }

}

// creating the reference variable of string type Inventory interface holding Gadget class object
const productInventory: Inventory<string> = new Gadget();

// logic to store the product list information into a variable
const allProducts: Array<string> = productInventory.getProductList();

// line to populate the products details on console
console.log('The available products are : ' + allProducts);