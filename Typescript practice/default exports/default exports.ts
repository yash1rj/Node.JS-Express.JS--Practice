export default class {
    productName = 'Tablet';
    getProductDetails(productId: number): string {
        return 'ProductId is ' + productId + ' ProductName is ' + this.productName;
    }
}
export class Utility {
    CalculateAmount( price: number, quantity: number): number {
        return price * quantity;
    }
}