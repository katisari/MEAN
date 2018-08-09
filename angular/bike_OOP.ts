var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        var _this = this;
        this.price = price;
        this.max_speed = max_speed;
        this.displayInfo = function () {
            console.log("price is " + _this.price + ", maximum speed is " + _this.max_speed + ", miles is " + _this.miles);
            return _this;
        };
        this.ride = function () { _this.miles += 10; return _this; };
        this.reverse = function () {
            if (_this.miles >= 5) {
                _this.miles -= 5;
            }
            return _this;
        };
        this.miles = 0;
    }
    return Bike;
}());
var bike1 = new Bike(32, 150);
bike1.ride().ride().ride().reverse().displayInfo();
var bike2 = new Bike(40, 140);
bike2.ride().ride().reverse().reverse().displayInfo();
var bike3 = new Bike(10, 50);
bike3.reverse().reverse().reverse().displayInfo();
