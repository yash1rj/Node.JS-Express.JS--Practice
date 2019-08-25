var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// declaring Product class
var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProduct = function () {
        console.log('Product id is : ' + this.productId);
    };
    return Product;
}());
// declaring Gadget class which extends properties from Product class
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget(productName, productId) {
        var _this = _super.call(this, productId) || this;
        _this.productName = productName;
        return _this;
    }
    Gadget.prototype.getProduct = function () {
        _super.prototype.getProduct.call(this);
        console.log('Product id is : ' + this.productId + ' Product name is : ' + this.productName);
    };
    return Gadget;
}(Product));
// Gadget class object creation
var g = new Gadget('Tablet', 1234);
// line to invoke getProduct method with the help of Gadget object
g.getProduct();
