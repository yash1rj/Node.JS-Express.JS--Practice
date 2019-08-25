// declaring Product class
class Product {
    protected productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
    getProduct(): void {
        console.log('Product id is : ' + this.productId);
}}

// declaring Gadget class which extends properties from Product class
class Gadget extends Product {
    constructor(public productName: string , productId: number ) {
        super(productId);
    }
    getProduct(): void {
        super.getProduct();
        console.log('Product id is : ' + this.productId + ' Product name is : ' + this.productName);
    }
}

// Gadget class object creation
const g = new Gadget('Tablet', 1234);

// line to invoke getProduct method with the help of Gadget object
g.getProduct();