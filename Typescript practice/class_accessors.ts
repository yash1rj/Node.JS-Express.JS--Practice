let passcode = "secret passcode";
class Product {
    private _productName: string;
    get productName(): string {
        return this._productName;
    }
    set productName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._productName= newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let product:Product = new Product();
product.productName = "Fridge";
if (product.productName) {
    console.log(product.productName);
}