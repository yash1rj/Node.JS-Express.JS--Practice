// declaring a Product class with access modifiers
class Product {

    static productPrice = 15000;
    private productId: number;
    public productName: string;
    protected productCategory: string;

    // declaration of constructor with 3 parameters
    constructor(productId: number, productName , productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }

    // method ot display product id details
    getProductId() {
        console.log('The Product id is : ' + this.productId);
    }

}

// declaring a Gadget class extending the properties from Product class
class Gadget extends Product {

    // method to display productCategory property
    getProduct(): void {
        console.log('Product category is : ' + this.productCategory);
    }
}

// Gadget Class object creation
const g: Gadget = new Gadget(1234, 'Mobile', 'SmartPhone');

// invoking getProduct method with the help of Gadget object
g.getProduct();

// invoking getProductId method with the help of Gadget object
g.getProductId();

// line to populate product name property with Gadget object
console.log('Product name is : ' + g.productName);

// line to populate static property product price directly with Product class name
console.log('Product price is : ' + Product.productPrice);