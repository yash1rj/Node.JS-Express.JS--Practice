// declaring an interface
interface Product {
    productId: number ;
    productName: string ;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'The product name is : ' + productobj.productName;
}

// declaring a variable having interface properties
const prodObject = {productId: 1001, productName: 'Mobile'};

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(prodObject);

// line to populate the created product on console
console.log(productDetails);