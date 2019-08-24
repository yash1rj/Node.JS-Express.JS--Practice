// declaring a Product class
class Product {

    static productPrice: string;
    productId: number;
// constructor declaration
    constructor(productId: number) {
        this.productId = productId;
    }
    getProductId(): string {
        return 'Product id is : ' + this.productId;
    }
}

// creation of Product class object
const product: Product = new Product(1234);

// line to populate the product id details
console.log(product.getProductId());