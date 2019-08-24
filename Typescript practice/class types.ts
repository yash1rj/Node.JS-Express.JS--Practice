// declaring a Product interface
interface Product {
    displayProductName: (prouctId: number) => string;
    getProductDetails(): string[];
}

// declaring Gadget class which implements Product interface
class Gadget implements Product {
    getProductDetails(): string[] {
        return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId: number): string {
        if (productId === 101) {
            return 'Product Name is Mobile';
        } else if ( productId === 201) {
            return 'Product Name is Tablet';
        }
    }

    getGadget(): string[] {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}

// creating instance of class of interface type
const gadget: Product = new Gadget();

// creating variable to hold return value of displayProductName function
const productName: string = gadget.displayProductName(101);

// line to populate Product name on console
console.log(productName);