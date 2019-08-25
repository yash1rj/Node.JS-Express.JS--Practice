// abstract class Product declaration
abstract class Product {
    getFeatures(): string {
        return;
    }
    abstract getProductName(): string;
    }

// declaring Gadget class extending abstract class Product
class Gadget extends Product {
    getProductName(): string {
        return 'Product name is Mobile';
    }

    getFeatures(): string {
        return 'This product has camera feature';
    }
}

// declaring Clothing class extending abstract class Product
class Clothing extends Product {
    getProductName(): string {
        return 'Product name is Shirt';
    }
}

// Gadget class object creation
const g = new Gadget();

// line to invoke getProductName() through Gadget object
console.log(g.getProductName());
console.log(g.getFeatures());
// Clothing class object creation
const c = new Clothing();

// line to invoke getProductName() through Clothing object
console.log(c.getProductName());