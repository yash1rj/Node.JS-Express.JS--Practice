// declaring an interface with optional parameter
interface Product {
    productId?: number;
    productName: string;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'The product name is ' + productobj.productName;
}

// declaring a variable along with interface properties
const prodObject = {productName: 'Mobile', productCategory: 'Gadget'};

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(prodObject);

// line to populate the created product variable on console
console.log(productDetails);